// Système de tracking simple pour analyser les visites du site

export const trackPageView = (pageName) => {
  // Ne pas tracker la page admin
  if (pageName === '/admin/appointments') {
    return
  }
  
  const visits = JSON.parse(localStorage.getItem('siteVisits') || '[]')
  const now = new Date()
  
  // Générer un ID de visiteur unique (ou récupérer l'existant)
  let visitorId = localStorage.getItem('visitorId')
  if (!visitorId) {
    visitorId = 'visitor-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('visitorId', visitorId)
  }
  
  const visit = {
    id: Date.now() + Math.random(),
    visitorId,
    page: pageName,
    timestamp: now.toISOString(),
    date: now.toLocaleDateString('fr-FR'),
    time: now.toLocaleTimeString('fr-FR'),
    dayOfWeek: now.toLocaleDateString('fr-FR', { weekday: 'long' }),
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    referrer: document.referrer || 'Direct'
  }
  
  visits.push(visit)
  
  // Limiter à 1000 visites pour ne pas surcharger le localStorage
  if (visits.length > 1000) {
    visits.shift()
  }
  
  localStorage.setItem('siteVisits', JSON.stringify(visits))
}

export const getAnalytics = () => {
  const visits = JSON.parse(localStorage.getItem('siteVisits') || '[]')
  const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
  
  if (visits.length === 0) {
    return {
      totalVisits: 0,
      uniqueVisitors: 0,
      visits: [],
      appointments: [],
      pageViews: {},
      visitsByDay: {},
      visitsByHour: {},
      averageSessionDuration: 0,
      topPages: [],
      deviceTypes: {},
      browsers: {}
    }
  }
  
  // Visiteurs uniques
  const uniqueVisitors = new Set(visits.map(v => v.visitorId)).size
  
  // Pages vues par page
  const pageViews = visits.reduce((acc, visit) => {
    acc[visit.page] = (acc[visit.page] || 0) + 1
    return acc
  }, {})
  
  // Visites par jour
  const visitsByDay = visits.reduce((acc, visit) => {
    acc[visit.date] = (acc[visit.date] || 0) + 1
    return acc
  }, {})
  
  // Visites par heure
  const visitsByHour = visits.reduce((acc, visit) => {
    const hour = new Date(visit.timestamp).getHours()
    acc[hour] = (acc[hour] || 0) + 1
    return acc
  }, {})
  
  // Top pages
  const topPages = Object.entries(pageViews)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([page, count]) => ({ page, count }))
  
  // Type d'appareil
  const deviceTypes = visits.reduce((acc, visit) => {
    const ua = visit.userAgent.toLowerCase()
    let device = 'Desktop'
    if (/mobile|android|iphone|ipad|tablet/.test(ua)) {
      device = 'Mobile'
    }
    acc[device] = (acc[device] || 0) + 1
    return acc
  }, {})
  
  // Navigateurs
  const browsers = visits.reduce((acc, visit) => {
    const ua = visit.userAgent
    let browser = 'Other'
    if (ua.includes('Chrome')) browser = 'Chrome'
    else if (ua.includes('Firefox')) browser = 'Firefox'
    else if (ua.includes('Safari')) browser = 'Safari'
    else if (ua.includes('Edge')) browser = 'Edge'
    acc[browser] = (acc[browser] || 0) + 1
    return acc
  }, {})
  
  return {
    totalVisits: visits.length,
    uniqueVisitors,
    visits: visits.reverse(), // Les plus récents d'abord
    appointments,
    pageViews,
    visitsByDay,
    visitsByHour,
    topPages,
    deviceTypes,
    browsers
  }
}

export const clearAnalytics = () => {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les statistiques ?')) {
    localStorage.removeItem('siteVisits')
    window.location.reload()
  }
}
