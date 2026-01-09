import { useState } from 'react'
import { Link } from 'react-router-dom'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { getFormationsData } from '../data/formationsData'

const Formations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { language } = useLanguage()
  const t = translations[language]

  const formations = getFormationsData(language)

  const categories = [
    { id: 'all', name: t.formations.categories.all, icon: '📚' },
    { id: 'reseaux', name: t.formations.categories.networks, icon: '🌐' },
    { id: 'cybersecurite', name: t.formations.categories.cybersecurity, icon: '🔐' },
    { id: 'cloud', name: t.formations.categories.cloud, icon: '☁️' },
    { id: 'ai', name: t.formations.categories.ai, icon: '🤖' }
  ]

  const filteredFormations = selectedCategory === 'all' 
    ? formations 
    : formations.filter(f => f.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden">
        {/* Image de fond - étudiants en classe moderne */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt="Students with Laptops"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <NetworkBackground className="opacity-20 relative z-0" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.formations.title}
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            {t.formations.subtitle}
          </p>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredFormations.map((formation, index) => (
            <ScrollReveal key={index} direction="left" delay={(index % 3) * 150}>
              <Link to={`/formations/${formation.slug}`} className="block">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-blue-500/20 hover:border-blue-500/50 cursor-pointer">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${formation.gradient}`}></div>
                  
                  {/* Badge */}
                  {formation.badge && (
                    <div className={`absolute top-4 right-4 ${formation.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {formation.badge}
                    </div>
                  )}

                  <div className="p-6">
                {/* Icon */}
                <div className="text-5xl mb-4">{formation.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-tir-blue transition-colors">
                  {formation.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">{formation.description}</p>

                {/* Objectives */}
                <div className="mb-4">
                  <h4 className="font-bold text-white mb-2 text-sm">{t.formations.objectives} :</h4>
                  <ul className="space-y-1">
                    {formation.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="text-tir-green mr-2 flex-shrink-0">✓</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-blue-500/10">
                    <div className="font-semibold text-white">{t.formations.duration}</div>
                    <div className="text-gray-300">{formation.duration}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-blue-500/10">
                    <div className="font-semibold text-white">{t.formations.level}</div>
                    <div className="text-gray-300">{formation.level}</div>
                  </div>
                </div>

                {/* Certification */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-tir-dark mb-1">{t.formations.certification}</div>
                  <div className="text-sm font-bold text-tir-blue">{formation.certification}</div>
                </div>

                {/* CTA Button */}
                <div className={`w-full bg-gradient-to-r ${formation.gradient} text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center`}>
                  {t.formations.viewDetails} →
                </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.formations.cta.title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t.formations.cta.description}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-tir-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
          >
            {t.formations.cta.button}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Formations
