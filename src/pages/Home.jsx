import HeroSlider from '../components/HeroSlider'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { number: '500+', label: 'Étudiants formés', icon: '👨‍🎓' },
    { number: '15+', label: 'Certifications', icon: '🏅' },
    { number: '95%', label: 'Satisfaction', icon: '⭐' },
    { number: '20+', label: 'Partenaires', icon: '🤝' }
  ]

  const services = [
    {
      icon: '🌐',
      title: 'Réseaux & Infrastructure',
      items: ['CCNA Débutant & Avancé', 'CCNP Expert', 'Architecture Réseau'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🔐',
      title: 'Cybersécurité',
      items: ['Security+', 'CySA+', 'Ethical Hacking', 'SOC Analyst'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      items: ['Microsoft Azure', 'Architecture Cloud', 'DevOps'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🤖',
      title: 'Intelligence Artificielle',
      items: ['Machine Learning', 'Data Science', 'Big Data'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="relative">
      {/* Image de fond globale pour la page d'accueil */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://www.shutterstock.com/image-illustration/3d-rendering-conceptual-image-internet-600nw-1563960451.jpg" 
          alt="Network Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Contenu par-dessus */}
      <div className="relative z-10">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 100}>
                <div className="text-center group cursor-pointer bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all shadow-2xl">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tir-blue to-tir-green bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <NetworkBackground />
        </div>
        <div className="section-container relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 md:mb-16 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Nos Domaines d'Excellence
              </h2>
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
                Formations certifiantes reconnues internationalement pour propulser votre carrière
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 150}>
                <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-white/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <span className="w-2 h-2 bg-tir-green rounded-full mr-2"></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/formations"
                      className="inline-flex items-center text-tir-blue font-semibold group-hover:text-tir-green transition-colors"
                    >
                      En savoir plus
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
                Pourquoi Tech In Rwanda ?
              </h2>
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
                Excellence, innovation et accompagnement personnalisé
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '🎓', title: 'Certifications Reconnues', text: 'Cisco, CompTIA, Microsoft Azure - Des certifications qui boostent votre CV' },
              { icon: '👨‍🏫', title: 'Experts Passionnés', text: 'Formateurs certifiés avec expérience pratique du terrain' },
              { icon: '💼', title: 'Approche Pratique', text: '80% de pratique avec labs, projets réels et mises en situation' }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 200}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-2xl">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Partners */}
      <section className="relative py-20 overflow-hidden">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                  Entreprises, transformez vos équipes
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                  Formations sur mesure, audits de sécurité et accompagnement pour votre transformation digitale
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-tir-green text-2xl mr-3">✓</span>
                    <span className="text-gray-300">Programmes personnalisés selon vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tir-green text-2xl mr-3">✓</span>
                    <span className="text-gray-300">Audits réseau et cybersécurité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tir-green text-2xl mr-3">✓</span>
                    <span className="text-gray-300">Certification de vos employés</span>
                  </li>
                </ul>
                <Link 
                  to="/entreprises"
                  className="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl text-sm md:text-base"
                >
                  Devenir partenaire
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-500/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-6 text-center shadow-lg border border-blue-500/10">
                      <div className="text-3xl mb-2">🏢</div>
                      <div className="font-bold text-gray-300">Entreprises</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-6 text-center shadow-lg border border-blue-500/10">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="font-bold text-gray-300">Sur mesure</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-6 text-center shadow-lg border border-blue-500/10">
                      <div className="text-3xl mb-2">🔒</div>
                      <div className="font-bold text-gray-300">Sécurité</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-6 text-center shadow-lg border border-blue-500/10">
                      <div className="text-3xl mb-2">📊</div>
                      <div className="font-bold text-gray-300">Audits</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 text-white overflow-hidden">
        <NetworkBackground className="opacity-10" />
        <div className="section-container text-center relative z-10">
          <ScrollReveal direction="up">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à transformer votre avenir ?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez Tech In Rwanda et devenez un expert recherché dans le domaine technologique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/formations"
                  className="bg-gradient-to-r from-tir-blue to-blue-600 hover:from-tir-blue hover:to-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
                >
                  Voir les formations
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Home
