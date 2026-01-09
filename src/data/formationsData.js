export const getFormationsData = (language) => {
  const formations = {
    fr: [
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
        certification: 'Cisco CCNP',
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
        description: 'Protection avancée des infrastructures réseau',
        objectives: [
          'Configuration firewalls (Cisco, Fortinet)',
          'IDS/IPS et détection intrusions',
          'VPN sécurisés',
          'Segmentation réseau'
        ],
        duration: '4 mois',
        level: 'Expert',
        certification: 'Cisco CCNP Security',
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
        slug: 'azure-administrator',
        category: 'cloud',
        icon: '⚙️',
        title: 'Azure Administrator',
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
        slug: 'aws-cloud-practitioner',
        category: 'cloud',
        icon: '🌩️',
        title: 'AWS Cloud Practitioner',
        description: 'Fondamentaux du cloud computing Amazon',
        objectives: [
          'Concepts AWS',
          'Services EC2, S3, RDS',
          'Gestion des coûts',
          'Sécurité AWS'
        ],
        duration: '2 mois',
        level: 'Débutant',
        certification: 'AWS Cloud Practitioner',
        gradient: 'from-orange-500 to-yellow-500'
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
        description: 'Réseaux de neurones profonds et CNN',
        objectives: [
          'Réseaux de neurones profonds',
          'CNN pour vision par ordinateur',
          'RNN et LSTM',
          'Transfer learning'
        ],
        duration: '3 mois',
        level: 'Avancé',
        certification: 'Certificat TIR',
        gradient: 'from-indigo-500 to-purple-500'
      },
      {
        slug: 'data-science',
        category: 'ai',
        icon: '📊',
        title: 'Data Science & Analytics',
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
        gradient: 'from-pink-500 to-purple-500'
      }
    ],
    en: [
      {
        slug: 'ccna',
        category: 'reseaux',
        icon: '🌐',
        title: 'CCNA - Cisco Certified Network Associate',
        badge: 'Popular',
        badgeColor: 'bg-green-500',
        description: 'Foundational training in computer networks recognized worldwide',
        objectives: [
          'Fundamental network concepts',
          'Cisco equipment configuration',
          'Master TCP/IP, VLAN, routing',
          'Network security'
        ],
        duration: '3 months',
        level: 'Beginner',
        certification: 'Cisco CCNA',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        slug: 'ccnp',
        category: 'reseaux',
        icon: '🌐',
        title: 'CCNP - Cisco Certified Network Professional',
        description: 'Advanced Cisco network skills development',
        objectives: [
          'Advanced routing (OSPF, EIGRP, BGP)',
          'Multilayer switching',
          'VPN and tunneling',
          'Quality of Service (QoS)'
        ],
        duration: '2 months',
        level: 'Intermediate',
        certification: 'Cisco CCNP',
        gradient: 'from-blue-600 to-indigo-600'
      },
      {
        slug: 'admin-linux',
        category: 'reseaux',
        icon: '🐧',
        title: 'Linux Administration',
        badge: 'Essential',
        badgeColor: 'bg-teal-500',
        description: 'Complete mastery of Linux system administration',
        objectives: [
          'Linux installation and configuration',
          'User and permission management',
          'Network services (Apache, DNS, DHCP)',
          'Security and monitoring'
        ],
        duration: '2.5 months',
        level: 'Intermediate',
        certification: 'TIR Linux Admin Certificate',
        gradient: 'from-teal-500 to-green-600'
      },
      {
        slug: 'securite-reseau',
        category: 'cybersecurite',
        icon: '🛡️',
        title: 'Network Security & Firewall',
        badge: 'Expert',
        badgeColor: 'bg-purple-500',
        description: 'Advanced network infrastructure protection',
        objectives: [
          'Firewall configuration (Cisco, Fortinet)',
          'IDS/IPS and intrusion detection',
          'Secure VPNs',
          'Network segmentation'
        ],
        duration: '4 months',
        level: 'Expert',
        certification: 'Cisco CCNP Security',
        gradient: 'from-indigo-600 to-purple-600'
      },
      {
        slug: 'ethical-hacking',
        category: 'cybersecurite',
        icon: '🎭',
        title: 'Ethical Hacking (CEH)',
        badge: 'Recommended',
        badgeColor: 'bg-yellow-500',
        description: 'International foundation cybersecurity certification',
        objectives: [
          'IT security concepts',
          'Risk management',
          'Applied cryptography',
          'Incident response'
        ],
        duration: '2 months',
        level: 'Beginner to Intermediate',
        certification: 'CompTIA Security+',
        gradient: 'from-red-500 to-pink-500'
      },
      {
        slug: 'cybersecurite-avancee',
        category: 'cybersecurite',
        icon: '🔒',
        title: 'Advanced Cybersecurity',
        description: 'Advanced security analysis',
        objectives: [
          'Behavioral analysis',
          'Threat hunting',
          'Security analytics',
          'SIEM and SOC operations'
        ],
        duration: '3 months',
        level: 'Intermediate to Advanced',
        certification: 'CompTIA CySA+',
        gradient: 'from-red-600 to-orange-600'
      },
      {
        slug: 'soc-analyst',
        category: 'cybersecurite',
        icon: '👁️',
        title: 'SOC Analyst',
        badge: 'Advanced',
        badgeColor: 'bg-red-600',
        description: 'Offensive techniques to secure systems',
        objectives: [
          'Pentest methodologies',
          'Vulnerability exploitation',
          'Social engineering',
          'Red team operations'
        ],
        duration: '3 months',
        level: 'Advanced',
        certification: 'CEH',
        gradient: 'from-pink-600 to-red-600'
      },
      {
        slug: 'azure-fundamentals',
        category: 'cloud',
        icon: '☁️',
        title: 'Microsoft Azure Fundamentals',
        badge: 'Beginner',
        badgeColor: 'bg-cyan-500',
        description: 'Complete introduction to Azure cloud infrastructure',
        objectives: [
          'Cloud computing concepts',
          'Core Azure services',
          'Resource management',
          'Azure security'
        ],
        duration: '2 months',
        level: 'Beginner',
        certification: 'Azure AZ-900',
        gradient: 'from-cyan-500 to-blue-500'
      },
      {
        slug: 'azure-administrator',
        category: 'cloud',
        icon: '⚙️',
        title: 'Azure Administrator',
        description: 'Azure infrastructure administration',
        objectives: [
          'Azure AD and identities',
          'VM deployment',
          'Virtual network configuration',
          'Monitoring and backup'
        ],
        duration: '3 months',
        level: 'Intermediate',
        certification: 'Azure AZ-104',
        gradient: 'from-blue-500 to-indigo-500'
      },
      {
        slug: 'aws-cloud-practitioner',
        category: 'cloud',
        icon: '🌩️',
        title: 'AWS Cloud Practitioner',
        description: 'Amazon cloud computing fundamentals',
        objectives: [
          'AWS concepts',
          'EC2, S3, RDS services',
          'Cost management',
          'AWS security'
        ],
        duration: '2 months',
        level: 'Beginner',
        certification: 'AWS Cloud Practitioner',
        gradient: 'from-orange-500 to-yellow-500'
      },
      {
        slug: 'ai-fundamentals',
        category: 'ai',
        icon: '🤖',
        title: 'Artificial Intelligence - Fundamentals',
        badge: 'New',
        badgeColor: 'bg-purple-500',
        description: 'Introduction to AI and practical applications',
        objectives: [
          'Basic AI concepts',
          'Types of learning',
          'Neural networks',
          'Concrete applications'
        ],
        duration: '2 months',
        level: 'Beginner',
        certification: 'TIR Certificate',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        slug: 'machine-learning',
        category: 'ai',
        icon: '🐍',
        title: 'Machine Learning with Python',
        description: 'ML model development with Python',
        objectives: [
          'Classic ML algorithms',
          'TensorFlow and scikit-learn',
          'Data preparation',
          'Model evaluation'
        ],
        duration: '3 months',
        level: 'Intermediate',
        certification: 'TIR Certificate',
        gradient: 'from-purple-600 to-indigo-600'
      },
      {
        slug: 'deep-learning',
        category: 'ai',
        icon: '🧠',
        title: 'Deep Learning & Neural Networks',
        description: 'Deep neural networks and CNN',
        objectives: [
          'Deep neural networks',
          'CNN for computer vision',
          'RNN and LSTM',
          'Transfer learning'
        ],
        duration: '3 months',
        level: 'Advanced',
        certification: 'TIR Certificate',
        gradient: 'from-indigo-500 to-purple-500'
      },
      {
        slug: 'data-science',
        category: 'ai',
        icon: '📊',
        title: 'Data Science & Analytics',
        description: 'Data analysis and visualization',
        objectives: [
          'Python for data science',
          'Pandas, NumPy, Matplotlib',
          'Statistical analysis',
          'Data visualization'
        ],
        duration: '3 months',
        level: 'Intermediate',
        certification: 'TIR Certificate',
        gradient: 'from-pink-500 to-purple-500'
      }
    ]
  }

  return formations[language] || formations.fr
}
