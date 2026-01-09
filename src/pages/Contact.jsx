import { useState } from 'react'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t.contact.successMessage)
  }

  const contacts = [
    {
      icon: '📞',
      title: 'Rwanda',
      info: '+250 785 649 246',
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
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-tir-blue via-blue-800 to-indigo-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <ScrollReveal key={index} direction="left" delay={index * 150}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50">
              <div className={`w-20 h-20 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}>
                  {contact.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{contact.title}</h3>
                <a href={`tel:${contact.info.replace(/\s/g, '')}`} className="text-xl text-tir-blue hover:text-tir-green transition-colors">{contact.info}</a>
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
                    <option value="">Choisissez un sujet</option>
                    <option value="formation">Information sur les formations</option>
                    <option value="inscription">Inscription</option>
                    <option value="entreprise">Partenariat entreprise</option>
                    <option value="stage">Opportunité de stage</option>
                    <option value="autre">Autre</option>
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
                  placeholder="Décrivez votre besoin..."
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

      {/* Calendrier Disponibilité */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="text-center mb-8 md:mb-12 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              📅 Calendrier de Disponibilité 2026
            </h2>
            <p className="text-base md:text-xl text-gray-300">
              Planifiez votre formation selon nos sessions programmées
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl max-w-7xl mx-auto overflow-x-auto mb-12 md:mb-20">
            
            {/* Légende */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-green-500"></div>
                <span className="text-gray-300">Session Ouverte</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-yellow-500"></div>
                <span className="text-gray-300">Dernières Places</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-600"></div>
                <span className="text-gray-300">Complet / Fermé</span>
              </div>
            </div>

            {/* Tableau calendrier */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-3 text-white font-bold sticky left-0 bg-gray-900/90 backdrop-blur-sm">Formation</th>
                    <th className="p-2 text-gray-300 font-semibold">Jan</th>
                    <th className="p-2 text-gray-300 font-semibold">Fév</th>
                    <th className="p-2 text-gray-300 font-semibold">Mar</th>
                    <th className="p-2 text-gray-300 font-semibold">Avr</th>
                    <th className="p-2 text-gray-300 font-semibold">Mai</th>
                    <th className="p-2 text-gray-300 font-semibold">Jun</th>
                    <th className="p-2 text-gray-300 font-semibold">Jul</th>
                    <th className="p-2 text-gray-300 font-semibold">Aoû</th>
                    <th className="p-2 text-gray-300 font-semibold">Sep</th>
                    <th className="p-2 text-gray-300 font-semibold">Oct</th>
                    <th className="p-2 text-gray-300 font-semibold">Nov</th>
                    <th className="p-2 text-gray-300 font-semibold">Déc</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { formation: 'CCNA', icon: '🌐', dispos: ['gray', 'green', 'green', 'gray', 'green', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'gray'] },
                    { formation: 'CCNP', icon: '🔧', dispos: ['gray', 'gray', 'green', 'green', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'Admin Linux', icon: '🐧', dispos: ['gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Sécurité Réseau', icon: '🔒', dispos: ['gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Ethical Hacking', icon: '💻', dispos: ['green', 'yellow', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'Cybersécurité Avancée', icon: '🛡️', dispos: ['gray', 'gray', 'green', 'green', 'gray', 'gray', 'gray', 'green', 'green', 'gray', 'gray', 'gray'] },
                    { formation: 'SOC Analyst', icon: '📊', dispos: ['gray', 'green', 'gray', 'green', 'green', 'gray', 'gray', 'gray', 'green', 'green', 'gray', 'gray'] },
                    { formation: 'Azure Fundamentals', icon: '☁️', dispos: ['green', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Azure Administrator', icon: '⚙️', dispos: ['gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'AWS Cloud', icon: '🌩️', dispos: ['gray', 'green', 'green', 'gray', 'green', 'gray', 'gray', 'gray', 'green', 'green', 'gray', 'gray'] },
                    { formation: 'IA Fundamentals', icon: '🤖', dispos: ['green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Machine Learning', icon: '🧠', dispos: ['gray', 'green', 'gray', 'green', 'green', 'gray', 'gray', 'green', 'gray', 'gray', 'green', 'gray'] },
                    { formation: 'Deep Learning', icon: '🔬', dispos: ['gray', 'gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'Data Science', icon: '📈', dispos: ['gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'gray', 'gray'] }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-3 text-white font-semibold sticky left-0 bg-gray-900/90 backdrop-blur-sm">
                        <span className="mr-2">{row.icon}</span>
                        {row.formation}
                      </td>
                      {row.dispos.map((dispo, moisIndex) => {
                        const bgColor = 
                          dispo === 'green' ? 'bg-green-500/80 hover:bg-green-500' :
                          dispo === 'yellow' ? 'bg-yellow-500/80 hover:bg-yellow-500' :
                          'bg-gray-600/50';
                        
                        return (
                          <td key={moisIndex} className="p-1 sm:p-2 text-center">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded mx-auto ${bgColor} transition-all cursor-pointer`}
                                 title={dispo === 'green' ? 'Session ouverte' : dispo === 'yellow' ? 'Dernières places' : 'Fermé'}>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-gray-300 text-center">
                💡 <strong className="text-white">Les inscriptions ouvrent 2 mois avant le début de chaque session</strong>
              </p>
              <p className="text-sm text-gray-400 text-center">
                📞 Pour une date personnalisée ou un groupe privé : +250 785 649 246
              </p>
              <p className="text-sm text-gray-400 text-center">
                🌍 Sessions disponibles au Rwanda (Kigali) et en ligne pour l'international
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default Contact
