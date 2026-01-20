import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { getAnalytics, clearAnalytics } from '../utils/analytics'

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [analytics, setAnalytics] = useState(null)
  const [activeTab, setActiveTab] = useState('appointments') // 'appointments' ou 'analytics'
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Mot de passe simple (à changer en production avec une vraie authentification)
  const ADMIN_PASSWORD = 'techinrwanda2026'

  useEffect(() => {
    if (isAuthenticated) {
      loadAppointments()
      loadAnalytics()
    }
  }, [isAuthenticated])

  const loadAppointments = () => {
    const stored = localStorage.getItem('appointments')
    if (stored) {
      const parsed = JSON.parse(stored)
      // Trier par date la plus récente
      const sorted = parsed.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      setAppointments(sorted)
    }
  }

  const loadAnalytics = () => {
    const data = getAnalytics()
    setAnalytics(data)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Mot de passe incorrect')
    }
  }

  const handleDelete = (index) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce rendez-vous?')) {
      const updated = appointments.filter((_, i) => i !== index)
      setAppointments(updated)
      localStorage.setItem('appointments', JSON.stringify(updated))
    }
  }

  const handleExport = () => {
    const csv = [
      ['Date', 'Heure', 'Nom', 'Email', 'Téléphone', 'Sujet', 'Confirmé le'],
      ...appointments.map(apt => [
        apt.date,
        apt.time,
        apt.name,
        apt.email,
        apt.phone,
        apt.subject,
        new Date(apt.timestamp).toLocaleString('fr-FR')
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rendez-vous-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const sendEmailReminder = (appointment) => {
    const subject = `Rappel: Rendez-vous avec ${appointment.name}`
    const body = `
Rappel de rendez-vous

Date: ${appointment.date}
Heure: ${appointment.time}

Client:
- Nom: ${appointment.name}
- Email: ${appointment.email}
- Téléphone: ${appointment.phone}
- Sujet: ${appointment.subject}
    `.trim()

    const mailtoLink = `mailto:${appointment.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 flex items-center justify-center">
        <NetworkBackground className="opacity-20" />
        
        <div className="relative z-10 max-w-md w-full mx-4">
          <ScrollReveal direction="up">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h1 className="text-3xl font-bold text-white mb-6 text-center">
                🔐 Admin - Rendez-vous
              </h1>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                    placeholder="Entrez le mot de passe admin"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-3 px-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Se connecter
                </button>
              </form>
              <div className="mt-6 text-center">
                <Link to="/" className="text-tir-blue hover:text-tir-green">
                  ← Retour à l'accueil
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900">
      <NetworkBackground className="opacity-20" />
      
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  � Administration
                </h1>
                <p className="text-gray-400">
                  Gestion des rendez-vous et statistiques du site
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleExport}
                  className="bg-tir-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Exporter CSV
                </button>
                <button
                  onClick={loadAppointments}
                  className="bg-tir-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Actualiser
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Tabs Navigation */}
          <ScrollReveal direction="up">
            <div className="flex gap-2 mb-8 bg-white/5 backdrop-blur-md rounded-xl p-2 border border-white/10">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                  activeTab === 'appointments'
                    ? 'bg-tir-blue text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                📅 Rendez-vous ({appointments.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-tir-blue text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                📊 Statistiques
              </button>
            </div>
          </ScrollReveal>

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <>
              {/* Actions */}
              <ScrollReveal direction="up">
                <div className="flex gap-3 mb-6 justify-end">
                  <button
                    onClick={handleExport}
                    className="bg-tir-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Exporter CSV
                  </button>
                  <button
                    onClick={loadAppointments}
                    className="bg-tir-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Actualiser
                  </button>
                </div>
              </ScrollReveal>

          {/* Liste des rendez-vous */}
          <div className="space-y-4">
            {appointments.length === 0 ? (
              <ScrollReveal direction="up">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 text-center">
                  <p className="text-gray-400 text-xl">Aucun rendez-vous enregistré pour le moment</p>
                </div>
              </ScrollReveal>
            ) : (
              appointments.map((apt, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Informations du rendez-vous */}
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{apt.name}</h3>
                            <p className="text-gray-400 text-sm">
                              Confirmé le {new Date(apt.timestamp).toLocaleString('fr-FR')}
                            </p>
                          </div>
                          <span className="bg-tir-blue/20 text-tir-blue px-3 py-1 rounded-full text-sm">
                            {apt.subject}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 mr-3 text-tir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href={`mailto:${apt.email}`} className="hover:text-tir-blue">
                              {apt.email}
                            </a>
                          </div>
                          
                          <div className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 mr-3 text-tir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href={`tel:${apt.phone}`} className="hover:text-tir-blue">
                              {apt.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Date et actions */}
                      <div className="flex flex-col justify-between">
                        <div className="bg-tir-blue/10 rounded-lg p-4 mb-4">
                          <div className="flex items-center text-white mb-2">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-semibold">{apt.date}</span>
                          </div>
                          <div className="flex items-center text-tir-blue">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-bold text-xl">{apt.time}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => sendEmailReminder(apt)}
                            className="flex-1 bg-tir-blue/20 text-tir-blue px-4 py-2 rounded-lg hover:bg-tir-blue/30 transition-all text-sm"
                            title="Envoyer un rappel"
                          >
                            📧 Rappel
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all text-sm"
                            title="Supprimer"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
          </>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && analytics && (
            <>
              {/* Stats Overview */}
              <ScrollReveal direction="up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Total Visits */}
                  <div className="bg-gradient-to-br from-tir-blue/20 to-tir-blue/5 backdrop-blur-md rounded-2xl p-6 border border-tir-blue/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-400 text-sm font-semibold uppercase">Visites Totales</h3>
                      <div className="bg-tir-blue/30 rounded-full p-3">
                        <svg className="w-6 h-6 text-tir-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">{analytics.totalVisits.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Pages vues au total</p>
                  </div>

                  {/* Unique Visitors */}
                  <div className="bg-gradient-to-br from-tir-green/20 to-tir-green/5 backdrop-blur-md rounded-2xl p-6 border border-tir-green/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-400 text-sm font-semibold uppercase">Visiteurs Uniques</h3>
                      <div className="bg-tir-green/30 rounded-full p-3">
                        <svg className="w-6 h-6 text-tir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">{analytics.uniqueVisitors.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Visiteurs différents</p>
                  </div>

                  {/* Appointments */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-400 text-sm font-semibold uppercase">Rendez-vous</h3>
                      <div className="bg-purple-500/30 rounded-full p-3">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">{analytics.appointments.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Pris au total</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Top Pages & Device Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Top Pages */}
                <ScrollReveal direction="left">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-tir-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Pages les plus visitées
                    </h3>
                    <div className="space-y-3">
                      {analytics.topPages.slice(0, 5).map((page, index) => {
                        const maxViews = analytics.topPages[0].views
                        const percentage = (page.views / maxViews) * 100
                        return (
                          <div key={index} className="relative">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-300 text-sm font-medium">{page.page}</span>
                              <span className="text-tir-blue font-bold">{page.views}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-tir-blue to-tir-green transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Device & Browser Stats */}
                <ScrollReveal direction="right">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-tir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Appareils & Navigateurs
                    </h3>
                    
                    {/* Device Types */}
                    <div className="mb-6">
                      <p className="text-gray-400 text-sm mb-2 uppercase">Types d'appareils</p>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(analytics.deviceTypes).map(([device, count]) => (
                          <div key={device} className="bg-tir-blue/10 rounded-lg p-3 border border-tir-blue/20">
                            <p className="text-tir-blue text-2xl font-bold">{count}</p>
                            <p className="text-gray-400 text-sm">{device}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Browsers */}
                    <div>
                      <p className="text-gray-400 text-sm mb-2 uppercase">Navigateurs</p>
                      <div className="space-y-2">
                        {Object.entries(analytics.browsers).slice(0, 4).map(([browser, count]) => (
                          <div key={browser} className="flex items-center justify-between bg-gray-700/30 rounded px-3 py-2">
                            <span className="text-gray-300 text-sm">{browser}</span>
                            <span className="text-tir-green font-bold">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Recent Visits Table */}
              <ScrollReveal direction="up">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <svg className="w-6 h-6 mr-2 text-tir-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Visites Récentes
                    </h3>
                    <button
                      onClick={() => {
                        if (window.confirm('Êtes-vous sûr de vouloir effacer toutes les statistiques ?')) {
                          clearAnalytics()
                          loadAnalytics()
                        }
                      }}
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Effacer
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left text-gray-400 text-sm font-semibold py-3 px-2">Date</th>
                          <th className="text-left text-gray-400 text-sm font-semibold py-3 px-2">Heure</th>
                          <th className="text-left text-gray-400 text-sm font-semibold py-3 px-2">Page</th>
                          <th className="text-left text-gray-400 text-sm font-semibold py-3 px-2 hidden md:table-cell">Appareil</th>
                          <th className="text-left text-gray-400 text-sm font-semibold py-3 px-2 hidden lg:table-cell">Navigateur</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analytics.visits.slice(-20).reverse().map((visit, index) => (
                          <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-2 text-gray-300 text-sm">{visit.date}</td>
                            <td className="py-3 px-2 text-gray-300 text-sm">{visit.time}</td>
                            <td className="py-3 px-2 text-tir-blue text-sm font-medium">{visit.page}</td>
                            <td className="py-3 px-2 text-gray-400 text-sm hidden md:table-cell">{visit.device}</td>
                            <td className="py-3 px-2 text-gray-400 text-sm hidden lg:table-cell">{visit.browser}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            </>
          )}

          {/* Lien retour */}
          <div className="mt-8 text-center">
            <Link 
              to="/"
              className="inline-flex items-center text-tir-blue hover:text-tir-green transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAppointments
