import { useState, useEffect, useMemo } from 'react'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Appointment = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [selectedWeek, setSelectedWeek] = useState('week-0')
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: ''
  })
  const [step, setStep] = useState(1) // 1: time selection, 2: form
  const [currentTime, setCurrentTime] = useState(new Date())
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const [showTimezoneModal, setShowTimezoneModal] = useState(false)

  // Mettre à jour l'heure chaque minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  // Formater l'heure actuelle
  const getCurrentTime = () => {
    if (language === 'fr') {
      // Format français: 14h30
      const hours = currentTime.getHours()
      const minutes = currentTime.getMinutes()
      return `${hours}h${minutes.toString().padStart(2, '0')}`
    } else {
      // Format anglais: 2:30 pm
      return currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: timezone
      })
    }
  }

  // Liste des fuseaux horaires communs
  const commonTimezones = [
    { value: 'Africa/Kigali', label: 'Africa/Kigali (Rwanda)' },
    { value: 'Africa/Nairobi', label: 'Africa/Nairobi (Kenya)' },
    { value: 'America/New_York', label: 'America/New_York (USA - EST)' },
    { value: 'America/Chicago', label: 'America/Chicago (USA - CST)' },
    { value: 'America/Los_Angeles', label: 'America/Los_Angeles (USA - PST)' },
    { value: 'Europe/Paris', label: 'Europe/Paris (France)' },
    { value: 'Europe/London', label: 'Europe/London (UK)' },
    { value: 'Asia/Dubai', label: 'Asia/Dubai (UAE)' }
  ]

  // Configuration des horaires de travail
  const workingHours = {
    // Jours de travail (0 = Dimanche, 1 = Lundi, ... 6 = Samedi)
    workingDays: [1, 2, 3, 4, 5], // Lundi à Vendredi
    
    // Horaires disponibles par jour (format 24h)
    defaultSlots: [
      '09:00', '09:45', '10:30', '11:15',
      '12:00', '12:45', '13:30', '14:15',
      '15:00', '15:45', '16:30'
    ],
    
    // Jours fériés ou fermés (format: 'YYYY-MM-DD')
    closedDates: [
      '2026-01-26', // Exemple: jour de congé
    ],
    
    // Horaires spéciaux pour certains jours
    specialHours: {
      // Format: 'YYYY-MM-DD': ['horaires']
      '2026-01-23': ['12:30', '13:15', '14:00', '14:45', '15:30', '16:15'],
    }
  }

  // Fonction pour formater l'heure selon la langue
  const formatTime = (time24h) => {
    const [hours, minutes] = time24h.split(':').map(Number)
    
    if (language === 'fr') {
      // Format français: 14h30
      return `${hours}h${minutes.toString().padStart(2, '0')}`
    } else {
      // Format anglais: 2:30 pm
      const period = hours >= 12 ? 'pm' : 'am'
      const hours12 = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours)
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`
    }
  }

  // Fonction pour générer les dates des prochaines semaines
  const generateWeeks = () => {
    const weeks = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    // Déterminer la locale selon la langue
    const locale = language === 'fr' ? 'fr-FR' : 'en-US'
    
    // Générer 4 semaines à partir d'aujourd'hui
    for (let weekIndex = 0; weekIndex < 4; weekIndex++) {
      const weekDays = []
      const startDate = new Date(today)
      startDate.setDate(today.getDate() + (weekIndex * 7))
      
      // Pour chaque jour de la semaine
      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const currentDate = new Date(startDate)
        currentDate.setDate(startDate.getDate() + dayOffset)
        
        // Vérifier si c'est un jour de travail
        const dayOfWeek = currentDate.getDay()
        if (!workingHours.workingDays.includes(dayOfWeek)) continue
        
        // Vérifier si ce n'est pas dans le passé
        if (currentDate < today) continue
        
        // Format de la date pour vérification
        const dateStr = currentDate.toISOString().split('T')[0]
        
        // Vérifier si c'est un jour fermé
        if (workingHours.closedDates.includes(dateStr)) continue
        
        // Obtenir les horaires (spéciaux ou par défaut)
        let slots = workingHours.specialHours[dateStr] || workingHours.defaultSlots
        
        // Filtrer les horaires passés si c'est aujourd'hui
        if (currentDate.toDateString() === today.toDateString()) {
          const now = new Date()
          slots = slots.filter(slot => {
            const [hours, minutes] = slot.split(':').map(Number)
            const slotTime = new Date(currentDate)
            slotTime.setHours(hours, minutes, 0, 0)
            return slotTime > now
          })
        }
        
        // Ajouter seulement si des créneaux sont disponibles
        if (slots.length > 0) {
          weekDays.push({
            date: currentDate.toLocaleDateString(locale, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            slots: slots.map(slot => formatTime(slot))
          })
        }
      }
      
      if (weekDays.length > 0) {
        const weekStart = new Date(startDate)
        const weekEnd = new Date(startDate)
        weekEnd.setDate(startDate.getDate() + 6)
        
        let label
        if (weekIndex === 0) {
          label = t.appointment?.weeks?.thisWeek || 'THIS WEEK'
        } else if (weekIndex === 1) {
          label = t.appointment?.weeks?.nextWeek || 'NEXT WEEK'
        } else {
          label = `${weekStart.toLocaleDateString(locale, { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString(locale, { month: 'short', day: 'numeric' })}`
        }
        
        weeks.push({
          id: `week-${weekIndex}`,
          label: label,
          days: weekDays
        })
      }
    }
    
    return weeks
  }

  // Générer les créneaux dynamiquement (recalculer quand la langue change)
  const timeSlots = useMemo(() => {
    return generateWeeks().reduce((acc, week) => {
      acc[week.id] = {
        label: week.label,
        days: week.days
      }
      return acc
    }, {})
  }, [language])

  // Mettre à jour la semaine sélectionnée si elle n'existe plus
  useEffect(() => {
    const availableWeeks = Object.keys(timeSlots)
    if (availableWeeks.length > 0 && !availableWeeks.includes(selectedWeek)) {
      setSelectedWeek(availableWeeks[0])
    }
  }, [timeSlots, selectedWeek])

  const handleSlotSelection = (date, time) => {
    setSelectedSlot({ date, time })
    setStep(2)
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Préparer les données pour l'email
      const emailData = {
        _subject: `🗓️ Nouveau Rendez-vous - ${formData.name}`,
        _template: 'box',
        _captcha: 'false',
        'Date du rendez-vous': selectedSlot.date,
        'Heure': selectedSlot.time,
        'Nom du client': formData.name,
        'Email': formData.email,
        'Téléphone': formData.phone,
        'Sujet': formData.subject,
        'Confirmé le': new Date().toLocaleString('fr-FR')
      }

      // Envoyer l'email via FormSubmit (service gratuit, aucune config requise)
      const response = await fetch('https://formsubmit.co/techinrwanda.contact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      })

      if (response.ok) {
        // Sauvegarder localement aussi
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
        appointments.push({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          date: selectedSlot.date,
          time: selectedSlot.time,
          timestamp: new Date().toISOString()
        })
        localStorage.setItem('appointments', JSON.stringify(appointments))

        alert('✅ Rendez-vous confirmé ! Un email a été envoyé à techinrwanda.contact@gmail.com')
        
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', phone: '', subject: '' })
        setSelectedSlot(null)
        setStep(1)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      
      // Sauvegarder quand même localement
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      appointments.push({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        date: selectedSlot.date,
        time: selectedSlot.time,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('appointments', JSON.stringify(appointments))
      
      alert('⚠️ Rendez-vous sauvegardé localement. Vérifiez votre connexion internet pour l\'envoi d\'email.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900">
      <NetworkBackground className="opacity-20" />
      
      <div className="relative z-10 py-6 sm:py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-2 px-2">
                {t.appointment?.meetWith || 'Meet with'} <span className="text-white">TECH IN RWANDA</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
                {t.appointment?.chooseTime || 'Choose a time'}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Sidebar - Meeting Info */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 lg:sticky lg:top-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    {t.appointment?.personalMeeting || 'Entretien Personnalisé'}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center text-sm sm:text-base text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-tir-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>45 minutes</span>
                    </div>
                    
                    <div className="flex items-start text-sm sm:text-base text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-tir-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="leading-tight">{t.appointment?.webConference || "We'll meet on a web conference"}</span>
                    </div>

                    <div className="border-t border-white/10 pt-4 mt-4">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 mr-3 text-tir-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white font-semibold">{getCurrentTime()}</span>
                      </div>
                      <p className="text-gray-400 ml-8 text-sm">{timezone}</p>
                      <button 
                        onClick={() => setShowTimezoneModal(true)}
                        className="text-tir-blue hover:text-tir-green ml-8 text-sm mt-1 transition-colors"
                      >
                        {t.appointment?.change || 'Change'}
                      </button>
                    </div>
                  </div>

                  {/* Selected slot display */}
                  {selectedSlot && (
                    <div className="mt-6 p-4 bg-tir-blue/20 rounded-lg border border-tir-blue/30">
                      <p className="text-sm text-gray-400 mb-1">{t.appointment?.selected || 'Selected'}</p>
                      <p className="text-white font-semibold">{selectedSlot.date}</p>
                      <p className="text-tir-blue text-xl font-bold">{selectedSlot.time}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Main Content - Time Slots or Form */}
            <div className="lg:col-span-2">
              
              {step === 1 && (
                <ScrollReveal direction="right">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                    
                    {/* Week Selector */}
                    <div className="mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                      <div className="flex flex-col space-y-2">
                        {Object.keys(timeSlots).map((week) => (
                          <button
                            key={week}
                            onClick={() => setSelectedWeek(week)}
                            className={`text-left px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base ${
                              selectedWeek === week
                                ? 'bg-tir-blue/20 text-white border-l-4 border-tir-blue'
                                : 'text-gray-400 hover:bg-white/5'
                            }`}
                          >
                            {timeSlots[week].label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-4 sm:space-y-6">
                      {timeSlots[selectedWeek].days.map((day, dayIndex) => (
                        <div key={dayIndex}>
                          <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{day.date}</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                            {day.slots.map((slot, slotIndex) => (
                              <button
                                key={slotIndex}
                                onClick={() => handleSlotSelection(day.date, slot)}
                                className="bg-white/10 hover:bg-tir-blue/30 border border-white/20 hover:border-tir-blue text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all transform hover:scale-105 font-medium text-sm sm:text-base"
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {step === 2 && (
                <ScrollReveal direction="up">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center text-tir-blue hover:text-tir-green mb-4 sm:mb-6 text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      {t.appointment?.back || 'Back to time selection'}
                    </button>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                      {t.appointment?.enterDetails || 'Enter your details'}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          {t.contact?.name || 'Name'} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          {t.contact?.email || 'Email'} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          {t.contact?.phone || 'Phone'}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                          placeholder="+250 xxx xxx xxx"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          {t.contact?.subject || 'Subject'} *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                        >
                          <option value="">{t.contact?.subjects?.choose || 'Choose a subject'}</option>
                          <option value="formation">{t.contact?.subjects?.training || 'Training information'}</option>
                          <option value="inscription">{t.contact?.subjects?.registration || 'Registration'}</option>
                          <option value="entreprise">{t.contact?.subjects?.partnership || 'Enterprise partnership'}</option>
                          <option value="stage">{t.contact?.subjects?.internship || 'Internship opportunity'}</option>
                          <option value="autre">{t.contact?.subjects?.other || 'Other'}</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      >
                        {t.appointment?.confirm || 'Confirm appointment'}
                      </button>
                    </form>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de sélection du fuseau horaire */}
      {showTimezoneModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-md w-full border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {t.appointment?.selectTimezone || 'Select timezone'}
              </h3>
              <button 
                onClick={() => setShowTimezoneModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {commonTimezones.map((tz) => (
                <button
                  key={tz.value}
                  onClick={() => {
                    setTimezone(tz.value)
                    setShowTimezoneModal(false)
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                    timezone === tz.value
                      ? 'bg-tir-blue/20 text-white border border-tir-blue'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {tz.label}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 text-center">
                {t.appointment?.currentTime || 'Current time'}: {getCurrentTime()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Appointment
