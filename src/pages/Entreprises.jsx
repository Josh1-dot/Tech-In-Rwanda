import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const Entreprises = () => {
  const services = [
    {
      icon: '🎓',
      title: 'Formations sur mesure',
      description: 'Programmes adaptés aux besoins spécifiques de votre organisation',
      features: ['Analyse des besoins', 'Curriculum personnalisé', 'Flexible en horaires', 'Certification incluse']
    },
    {
      icon: '🔒',
      title: 'Audits de Sécurité',
      description: 'Évaluation complète de votre infrastructure IT',
      features: ['Audit réseau', 'Tests d\'intrusion', 'Analyse vulnérabilités', 'Rapport détaillé']
    },
    {
      icon: '📈',
      title: 'Montée en compétences',
      description: 'Transformation digitale de vos équipes IT',
      features: ['Formation continue', 'Certifications pro', 'Coaching individuel', 'Suivi post-formation']
    },
    {
      icon: '🛡️',
      title: 'Sécurisation Infrastructure',
      description: 'Mise en conformité et renforcement de sécurité',
      features: ['Hardening systèmes', 'Mise en conformité', 'SOC setup', 'Monitoring continu']
    }
  ]

  const advantages = [
    { number: '01', title: 'Expertise reconnue', text: 'Formateurs certifiés avec expérience terrain' },
    { number: '02', title: 'Sur mesure', text: 'Programmes adaptés à vos besoins' },
    { number: '03', title: 'ROI mesurable', text: 'Résultats concrets et quantifiables' },
    { number: '04', title: 'Support continu', text: 'Accompagnement après formation' }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-tir-blue via-blue-800 to-indigo-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transformez votre entreprise
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              Formations professionnelles, audits de sécurité et accompagnement digital
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-tir-blue hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Nos Services Entreprises
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="left" delay={index * 150}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20 hover:border-blue-500/50">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
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
            Pourquoi nous choisir ?
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
      <section className="relative py-20 bg-gradient-to-r from-tir-green to-green-600 text-white overflow-hidden">
        <NetworkBackground className="opacity-10" />
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à devenir partenaire ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir une proposition personnalisée
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-tir-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Entreprises
