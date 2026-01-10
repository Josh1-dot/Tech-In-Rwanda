import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Entreprises = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const services = t.entreprises.services.map((service, idx) => ({
    icon: ['🎓', '🔒', '📈', '🛡️'][idx],
    ...service
  }))

  const advantages = t.entreprises.advantages.map((adv, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    ...adv
  }))

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.entreprises.title}
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              {t.entreprises.subtitle}
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-tir-blue hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
            >
              {t.entreprises.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          {t.entreprises.servicesTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20 hover:border-blue-500/50">
              <div className="text-6xl mb-4 text-center md:text-left">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-center md:text-left">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-tir-green rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>            </ScrollReveal>          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <NetworkBackground />
        </div>
        <div className="section-container relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            {t.entreprises.advantagesTitle}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="text-center bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                  <div className="text-5xl font-bold text-tir-blue mb-4">{adv.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-gray-300">{adv.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.entreprises.ctaSection.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.entreprises.ctaSection.description}
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-tir-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
          >
            {t.entreprises.ctaSection.button}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Entreprises
