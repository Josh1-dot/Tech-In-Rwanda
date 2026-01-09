import { useState } from 'react'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
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
    alert('Merci ! Nous vous contacterons bientôt.')
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
            Contactez-nous
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Une question ? Besoin d'informations ? Nous sommes là pour vous aider
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Nom complet *
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
                    Email *
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
                    Téléphone
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
                    Sujet *
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
                  Message *
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
                Envoyer le message
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Contact
