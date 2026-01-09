import { useState } from 'react'
import { Link } from 'react-router-dom'
import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'

const Formations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const formations = [
    {
      slug: 'ccna',
      category: 'reseaux',
      icon: '🌐',
      title: 'CCNA - Cisco Certified Network Associate',
      badge: 'Populaire',
      badgeColor: 'bg-green-500',
      description: 'Formation fondamentale en réseaux informatiques reconnue mondialement',
      objectives: [
        'Concepts fondamentaux des réseaux',
        'Configuration équipements Cisco',
        'Maîtriser TCP/IP, VLAN, routage',
        'Sécurisation des réseaux'
      ],
      duration: '3 mois',
      level: 'Débutant',
      certification: 'Cisco CCNA',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      slug: 'ccnp',
      category: 'reseaux',
      icon: '🌐',
      title: 'CCNP - Cisco Certified Network Professional',
      description: 'Approfondissement des compétences réseau Cisco',
      objectives: [
        'Routage avancé (OSPF, EIGRP, BGP)',
        'Switching multicouche',
        'VPN et tunneling',
        'Qualité de service (QoS)'
      ],
      duration: '2 mois',
      level: 'Intermédiaire',
      certification: 'Cisco CCNA',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      slug: 'admin-linux',
      category: 'reseaux',
      icon: '🐧',
      title: 'Administration Linux',
      badge: 'Essentiel',
      badgeColor: 'bg-teal-500',
      description: 'Maîtrise complète de l\'administration des systèmes Linux',
      objectives: [
        'Installation et configuration Linux',
        'Gestion utilisateurs et permissions',
        'Services réseau (Apache, DNS, DHCP)',
        'Sécurisation et monitoring'
      ],
      duration: '2.5 mois',
      level: 'Intermédiaire',
      certification: 'Certificat TIR Admin Linux',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      slug: 'securite-reseau',
      category: 'cybersecurite',
      icon: '🛡️',
      title: 'Sécurité Réseau & Firewall',
      badge: 'Expert',
      badgeColor: 'bg-purple-500',
      description: 'Certification expert pour professionnels confirmés',
      objectives: [
        'Architecture réseau d\'entreprise',
        'Routage et switching avancés',
        'Automatisation réseau',
        'Dépannage complexe'
      ],
      duration: '4 mois',
      level: 'Expert',
      certification: 'Cisco CCNP Enterprise',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      slug: 'ethical-hacking',
      category: 'cybersecurite',
      icon: '🎭',
      title: 'Ethical Hacking (CEH)',
      badge: 'Recommandé',
      badgeColor: 'bg-yellow-500',
      description: 'Certification internationale de base en cybersécurité',
      objectives: [
        'Concepts de sécurité IT',
        'Gestion des risques',
        'Cryptographie appliquée',
        'Réponse aux incidents'
      ],
      duration: '2 mois',
      level: 'Débutant à Intermédiaire',
      certification: 'CompTIA Security+',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      slug: 'cybersecurite-avancee',
      category: 'cybersecurite',
      icon: '🔒',
      title: 'Cybersécurité Avancée',
      description: 'Analyse avancée de la sécurité',
      objectives: [
        'Analyse comportementale',
        'Threat hunting',
        'Security analytics',
        'SIEM et SOC operations'
      ],
      duration: '3 mois',
      level: 'Intermédiaire à Avancé',
      certification: 'CompTIA CySA+',
      gradient: 'from-red-600 to-orange-600'
    },
    {
      slug: 'soc-analyst',
      category: 'cybersecurite',
      icon: '👁️',
      title: 'SOC Analyst',
      badge: 'Avancé',
      badgeColor: 'bg-red-600',
      description: 'Techniques offensives pour sécuriser les systèmes',
      objectives: [
        'Méthodologies de pentest',
        'Exploitation de vulnérabilités',
        'Social engineering',
        'Red team operations'
      ],
      duration: '3 mois',
      level: 'Avancé',
      certification: 'CEH',
      gradient: 'from-pink-600 to-red-600'
    },
    {
      slug: 'azure-fundamentals',
      category: 'cloud',
      icon: '☁️',
      title: 'Microsoft Azure Fundamentals',
      description: 'Sécurisation Windows & Linux',
      objectives: [
        'Windows Server hardening',
        'Linux security (Ubuntu, CentOS)',
        'Gestion des privilèges',
        'Audit et compliance'
      ],
      duration: '2 mois',
      level: 'Intermédiaire',
      certification: 'Certificat TIR',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      slug: 'azure-administrator',
      category: 'cloud',
      icon: '⚙️',
      title: 'Azure Administrator',
      badge: 'Débutant',
      badgeColor: 'bg-cyan-500',
      description: 'Introduction complète à l\'infrastructure cloud Azure',
      objectives: [
        'Concepts cloud computing',
        'Services Azure principaux',
        'Gestion des ressources',
        'Sécurité Azure'
      ],
      duration: '2 mois',
      level: 'Débutant',
      certification: 'Azure AZ-900',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      slug: 'aws-cloud-practitioner',
      category: 'cloud',
      icon: '🌩️',
      title: 'AWS Cloud Practitioner',
      description: 'Administration infrastructure Azure',
      objectives: [
        'Azure AD et identités',
        'Déploiement de VMs',
        'Configuration réseau virtuel',
        'Monitoring et backup'
      ],
      duration: '3 mois',
      level: 'Intermédiaire',
      certification: 'Azure AZ-104',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      slug: 'ai-fundamentals',
      category: 'ai',
      icon: '🤖',
      title: 'Intelligence Artificielle - Fondamentaux',
      badge: 'Nouveau',
      badgeColor: 'bg-purple-500',
      description: 'Introduction à l\'IA et applications pratiques',
      objectives: [
        'Concepts de base de l\'IA',
        'Types d\'apprentissage',
        'Réseaux de neurones',
        'Applications concrètes'
      ],
      duration: '2 mois',
      level: 'Débutant',
      certification: 'Certificat TIR',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      slug: 'machine-learning',
      category: 'ai',
      icon: '🐍',
      title: 'Machine Learning avec Python',
      description: 'Développement de modèles ML avec Python',
      objectives: [
        'Algorithmes ML classiques',
        'TensorFlow et scikit-learn',
        'Préparation des données',
        'Évaluation des modèles'
      ],
      duration: '3 mois',
      level: 'Intermédiaire',
      certification: 'Certificat TIR',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      slug: 'deep-learning',
      category: 'ai',
      icon: '🧠',
      title: 'Deep Learning & Neural Networks',
      description: 'Analyse de données et visualisation',
      objectives: [
        'Python pour data science',
        'Pandas, NumPy, Matplotlib',
        'Analyse statistique',
        'Visualisation de données'
      ],
      duration: '3 mois',
      level: 'Intermédiaire',
      certification: 'Certificat TIR',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      slug: 'data-science',
      category: 'ai',
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Traitement de données massives',
      objectives: [
        'Architecture Big Data',
        'Hadoop ecosystem',
        'Spark distribué',
        'NoSQL databases'
      ],
      duration: '3 mois',
      level: 'Avancé',
      certification: 'Certificat TIR',
      gradient: 'from-pink-500 to-purple-500'
    }
  ]

  const categories = [
    { id: 'all', name: 'Toutes', icon: '📚' },
    { id: 'reseaux', name: 'Réseaux', icon: '🌐' },
    { id: 'cybersecurite', name: 'Cybersécurité', icon: '🔐' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' },
    { id: 'ai', name: 'IA & Data', icon: '🤖' }
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
            Nos Formations
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Des programmes certifiants reconnus internationalement
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
                  <h4 className="font-bold text-white mb-2 text-sm">Objectifs :</h4>
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
                    <div className="font-semibold text-white">Durée</div>
                    <div className="text-gray-300">{formation.duration}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-blue-500/10">
                    <div className="font-semibold text-white">Niveau</div>
                    <div className="text-gray-300">{formation.level}</div>
                  </div>
                </div>

                {/* Certification */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-tir-dark mb-1">Certification</div>
                  <div className="text-sm font-bold text-tir-blue">{formation.certification}</div>
                </div>

                {/* CTA Button */}
                <div className={`w-full bg-gradient-to-r ${formation.gradient} text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center`}>
                  En savoir plus →
                </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-tir-green to-green-600 text-white overflow-hidden">
        <NetworkBackground className="opacity-10" />
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Formation sur mesure ?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Nous créons des programmes personnalisés pour vos besoins spécifiques
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-tir-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  )
}

export default Formations
