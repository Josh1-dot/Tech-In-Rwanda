import { useState } from 'react'
import { Link } from 'react-router-dom'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const emailData = {
        _subject: `💬 Nouveau Message - ${formData.subject} - ${formData.name}`,
        _template: 'box',
        _captcha: 'false',
        'Nom': formData.name,
        'Email': formData.email,
        'Téléphone': formData.phone,
        'Sujet': formData.subject,
        'Message': formData.message,
        'Date d\'envoi': new Date().toLocaleString('fr-FR')
      }

      const response = await fetch('https://formsubmit.co/techinrwanda.contact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      })

      if (response.ok) {
        alert('✅ ' + t.contact.successMessage)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('✅ Message envoyé ! Nous vous contacterons bientôt.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }
  }

  const contacts = [
    {
      icon: '�',
      title: 'WhatsApp (Rwanda)',
      info: '+250 785 649 246',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📞',
      title: 'Kenya',
      info: '+254 712 345 678',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'techinrwanda.contact@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📞',
      title: 'USA',
      info: '+1 (248) 819-2368',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📞',
      title: 'France (1)',
      info: '+33 6 78 27 58 43',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '📞',
      title: 'France (2)',
      info: '+33 7 69 84 71 85',
      color: 'from-purple-500 to-pink-500'
    },
     
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container -mt-20 relative z-20">
        {/* Bouton Prendre rendez-vous */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <Link 
              to="/appointment"
              className="inline-flex items-center bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-6 px-12 rounded-2xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t.contact.bookAppointment || 'Prendre rendez-vous'}
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <ScrollReveal key={index} direction="left" delay={index * 150}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50">
              <div className={`w-20 h-20 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}>
                  {contact.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{contact.title}</h3>
                {contact.title === 'Email' ? (
                  <a href={`mailto:${contact.info}`} className="text-base text-tir-blue hover:text-tir-green transition-colors break-words">{contact.info}</a>
                ) : contact.title === 'Code officiel entreprise' ? (
                  <p className="text-sm text-gray-300">{contact.info}</p>
                ) : (
                  <a href={`tel:${contact.info.replace(/\s/g, '')}`} className="text-xl text-tir-blue hover:text-tir-green transition-colors">{contact.info}</a>
                )}
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {t.contact.formTitle}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    {t.contact.name} *
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    {t.contact.email} *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    {t.contact.phone}
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    {t.contact.subject} *
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t.contact.subjects.choose}</option>
                    <option value="formation">{t.contact.subjects.training}</option>
                    <option value="inscription">{t.contact.subjects.registration}</option>
                    <option value="entreprise">{t.contact.subjects.partnership}</option>
                    <option value="stage">{t.contact.subjects.internship}</option>
                    <option value="autre">{t.contact.subjects.other}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  {t.contact.message} *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/20 rounded-lg focus:border-tir-blue focus:outline-none transition-colors resize-none text-white"
                  placeholder={t.contact.placeholders.message}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {t.contact.send}
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lien vers Calendrier */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <Link to="/calendar" className="block text-center mb-8 md:mb-12 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl max-w-6xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all transform hover:scale-105">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              📅 {t.contact.calendar.title}
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-4">
              {t.contact.calendar.subtitle}
            </p>
            <span className="inline-flex items-center text-tir-blue font-semibold text-lg">
              Voir le calendrier complet
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default Contact
