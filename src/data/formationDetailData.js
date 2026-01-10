export const getFormationDetailData = (language) => {
  const data = {
    fr: {
      'ccna': {
        title: 'CCNA - Cisco Certified Network Associate',
        category: 'Réseaux & Infrastructure',
        image: '🌐',
        gradient: 'from-blue-600 to-cyan-500',
        duration: '3 mois',
        level: 'Débutant à Intermédiaire',
        certification: 'Cisco CCNA',
        description: 'Formation complète aux fondamentaux des réseaux Cisco, couvrant la configuration, le dépannage et la sécurisation des infrastructures réseau d\'entreprise.',
        practicalExamples: [
          {
            title: 'Configuration Routeur Multi-Sites',
            description: 'Topologie réseau interconnectant 3 sites avec routage OSPF',
            imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
            skills: ['Configuration OSPF', 'VLANs inter-sites', 'Routage statique et dynamique']
          },
          {
            title: 'Architecture Switching Enterprise',
            description: 'Réseau d\'entreprise avec switchs multicouches et redondance',
            imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
            skills: ['STP et RSTP', 'EtherChannel', 'Port Security']
          },
          {
            title: 'Sécurisation Réseau',
            description: 'Implémentation ACL et pare-feu sur infrastructure Cisco',
            imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop',
            skills: ['ACL standard et étendue', 'NAT/PAT', 'VPN site-to-site']
          },
          {
            title: 'Simulation Packet Tracer',
            description: 'Projets pratiques sur Cisco Packet Tracer avec topologies complexes',
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
            skills: ['Packet Tracer Labs', 'Troubleshooting réseau', 'Configuration complète']
          }
        ],
        objectives: [
          'Comprendre les concepts fondamentaux des réseaux (TCP/IP, OSI)',
          'Configurer et gérer des routeurs et commutateurs Cisco',
          'Implémenter et dépanner les VLANs et le routage inter-VLAN',
          'Configurer et vérifier les protocoles de routage (OSPF, EIGRP)',
          'Mettre en œuvre la sécurité de base des réseaux',
          'Comprendre et configurer les technologies WAN'
        ],
        benefits: [
          'Certification reconnue mondialement par les employeurs',
          'Compétences recherchées dans toutes les entreprises',
          'Salaire moyen élevé pour les professionnels certifiés',
          'Base solide pour progresser vers CCNP et CCIE',
          'Opportunités dans les entreprises internationales',
          'Expertise applicable à tous types d\'infrastructures'
        ],
        certificateBenefits: [
          'Validation officielle de vos compétences par Cisco',
          'Reconnaissance internationale sur votre CV',
          'Accès à la communauté mondiale des professionnels Cisco',
          'Augmentation salariale moyenne de 20-30%',
          'Prérequis pour de nombreux postes d\'ingénieur réseau',
          'Validité de 3 ans avec possibilité de renouvellement'
        ],
        program: [
          {
            module: 'Module 1: Fondamentaux des Réseaux',
            topics: ['Modèle OSI et TCP/IP', 'Adressage IP et sous-réseaux', 'Ethernet et switching de base']
          },
          {
            module: 'Module 2: Routage et Commutation',
            topics: ['Configuration des routeurs Cisco', 'VLANs et trunk', 'Protocoles de routage dynamique']
          },
          {
            module: 'Module 3: Sécurité et Services',
            topics: ['ACL et sécurité des ports', 'NAT et PAT', 'DHCP et DNS']
          },
          {
            module: 'Module 4: Technologies WAN',
            topics: ['PPP et Frame Relay', 'VPN de base', 'QoS fondamentaux']
          }
        ],
        prerequisites: 'Connaissances de base en informatique',
        price: '500,000 RWF',
        careerPaths: [
          'Administrateur Réseau',
          'Technicien Support Réseau',
          'Ingénieur Réseau Junior',
          'Spécialiste Infrastructure IT'
        ]
      },
      'ccnp': {
        title: 'CCNP - Cisco Certified Network Professional',
        category: 'Réseaux & Infrastructure',
        image: '🚀',
        gradient: 'from-indigo-600 to-blue-500',
        duration: '4 mois',
        level: 'Avancé',
        certification: 'Cisco CCNP Enterprise',
        description: 'Formation avancée pour les professionnels réseau visant à maîtriser la conception, l\'implémentation et le dépannage de réseaux d\'entreprise complexes.',
        objectives: [
          'Concevoir et implémenter des architectures réseau évolutives',
          'Maîtriser les protocoles de routage avancés (BGP, OSPF multi-area)',
          'Configurer les technologies SD-WAN et SD-Access',
          'Implémenter l\'automatisation réseau avec Python et APIs',
          'Gérer la sécurité avancée et la segmentation réseau',
          'Optimiser les performances et la résilience du réseau'
        ],
        benefits: [
          'Certification premium pour les experts réseau',
          'Salaire supérieur de 40-60% aux certifiés CCNA',
          'Expertise en technologies de pointe (SD-WAN, automatisation)',
          'Postes de leadership et d\'architecture réseau',
          'Reconnaissance en tant qu\'expert Cisco',
          'Opportunités dans les grandes entreprises et multinationales'
        ],
        certificateBenefits: [
          'Certification professionnelle de niveau expert',
          'Crédibilité maximale auprès des employeurs',
          'Accès aux ressources avancées Cisco',
          'Badge numérique à partager sur LinkedIn',
          'Priorité pour les postes d\'architecte réseau',
          'Validité de 3 ans avec formation continue'
        ],
        program: [
          {
            module: 'Module 1: Architecture Réseau Entreprise',
            topics: ['Design hiérarchique', 'High availability et redondance', 'Virtualisation réseau']
          },
          {
            module: 'Module 2: Routage Avancé',
            topics: ['BGP configuration avancée', 'Redistribution de routes', 'Policy-based routing']
          },
          {
            module: 'Module 3: SD-WAN et Automatisation',
            topics: ['Cisco SD-WAN', 'Python pour l\'automatisation', 'APIs REST et NETCONF']
          },
          {
            module: 'Module 4: Sécurité et Optimisation',
            topics: ['Segmentation avec TrustSec', 'QoS avancée', 'Troubleshooting complexe']
          }
        ],
        prerequisites: 'CCNA ou expérience équivalente (2+ ans)',
        price: '800,000 RWF',
        careerPaths: [
          'Ingénieur Réseau Senior',
          'Architecte Réseau',
          'Consultant en Infrastructure',
          'Network Team Lead'
        ]
      },
      'deep-learning': {
        title: 'Deep Learning & Neural Networks',
        category: 'Intelligence Artificielle',
        image: '🧠',
        gradient: 'from-purple-600 to-pink-600',
        duration: '3.5 mois',
        level: 'Avancé',
        certification: 'Certificat Deep Learning Specialist',
        description: 'Formation avancée en deep learning avec TensorFlow et PyTorch, couvrant les CNN, RNN, transformers et les applications de pointe.',
        objectives: [
          'Maîtriser TensorFlow et PyTorch',
          'Implémenter des CNN pour la computer vision',
          'Utiliser le transfer learning efficacement',
          'Construire des réseaux de neurones profonds',
          'Créer des modèles NLP avec transformers',
          'Entraîner des modèles sur GPU/TPU'
        ],
        benefits: [
          'Expertise en IA de pointe très recherchée',
          'Salaires parmi les plus élevés du secteur IT',
          'Travail sur des problèmes stimulants et innovants',
          'Opportunités dans la recherche et l\'industrie',
          'Impact sur des applications réelles (santé, auto, etc.)',
          'Secteur en croissance explosive'
        ],
        certificateBenefits: [
          'Certification en Deep Learning avancé',
          'Portfolio de projets IA impressionnants',
          'Compétences validées en neural networks',
          'Qualification pour postes ML/DL Engineer',
          'Accès à notre réseau de professionnels IA',
          'Support pour votre recherche d\'emploi'
        ],
        program: [
          {
            module: 'Module 1: Fondations Deep Learning',
            topics: ['Réseaux de neurones profonds', 'Backpropagation et optimization', 'TensorFlow et PyTorch']
          },
          {
            module: 'Module 2: Computer Vision',
            topics: ['CNN architectures (ResNet, VGG, Inception)', 'Object detection (YOLO, R-CNN)', 'Segmentation et transfer learning']
          },
          {
            module: 'Module 3: NLP et Transformers',
            topics: ['RNN et LSTM', 'Attention mechanism', 'BERT, GPT et transformers']
          },
          {
            module: 'Module 4: Advanced Topics',
            topics: ['GANs et génération d\'images', 'Reinforcement learning', 'Model optimization et deployment']
          }
        ],
        prerequisites: 'Machine Learning avec Python ou expérience équivalente',
        price: '850,000 RWF',
        careerPaths: [
          'Deep Learning Engineer',
          'Computer Vision Engineer',
          'NLP Specialist',
          'AI Research Scientist'
        ]
      }
    },
    en: {
      'ccna': {
        title: 'CCNA - Cisco Certified Network Associate',
        category: 'Networks & Infrastructure',
        image: '🌐',
        gradient: 'from-blue-600 to-cyan-500',
        duration: '3 months',
        level: 'Beginner to Intermediate',
        certification: 'Cisco CCNA',
        description: 'Complete training in Cisco networking fundamentals, covering configuration, troubleshooting and securing enterprise network infrastructures.',
        practicalExamples: [
          {
            title: 'Multi-Site Router Configuration',
            description: 'Network topology interconnecting 3 sites with OSPF routing',
            imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
            skills: ['OSPF Configuration', 'Inter-site VLANs', 'Static and dynamic routing']
          },
          {
            title: 'Enterprise Switching Architecture',
            description: 'Enterprise network with multilayer switches and redundancy',
            imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
            skills: ['STP and RSTP', 'EtherChannel', 'Port Security']
          },
          {
            title: 'Network Security',
            description: 'ACL and firewall implementation on Cisco infrastructure',
            imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop',
            skills: ['Standard and extended ACL', 'NAT/PAT', 'Site-to-site VPN']
          },
          {
            title: 'Packet Tracer Simulation',
            description: 'Practical projects on Cisco Packet Tracer with complex topologies',
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
            skills: ['Packet Tracer Labs', 'Network troubleshooting', 'Complete configuration']
          }
        ],
        objectives: [
          'Understand fundamental network concepts (TCP/IP, OSI)',
          'Configure and manage Cisco routers and switches',
          'Implement and troubleshoot VLANs and inter-VLAN routing',
          'Configure and verify routing protocols (OSPF, EIGRP)',
          'Implement basic network security',
          'Understand and configure WAN technologies'
        ],
        benefits: [
          'Globally recognized certification by employers',
          'Skills sought after in all companies',
          'High average salary for certified professionals',
          'Solid foundation to progress to CCNP and CCIE',
          'Opportunities in international companies',
          'Expertise applicable to all types of infrastructures'
        ],
        certificateBenefits: [
          'Official validation of your skills by Cisco',
          'International recognition on your resume',
          'Access to the global Cisco professionals community',
          'Average salary increase of 20-30%',
          'Prerequisite for many network engineer positions',
          '3-year validity with renewal option'
        ],
        program: [
          {
            module: 'Module 1: Networking Fundamentals',
            topics: ['OSI and TCP/IP model', 'IP addressing and subnetting', 'Ethernet and basic switching']
          },
          {
            module: 'Module 2: Routing and Switching',
            topics: ['Cisco router configuration', 'VLANs and trunking', 'Dynamic routing protocols']
          },
          {
            module: 'Module 3: Security and Services',
            topics: ['ACLs and port security', 'NAT and PAT', 'DHCP and DNS']
          },
          {
            module: 'Module 4: WAN Technologies',
            topics: ['PPP and Frame Relay', 'Basic VPN', 'QoS fundamentals']
          }
        ],
        prerequisites: 'Basic computer knowledge',
        price: '500,000 RWF',
        careerPaths: [
          'Network Administrator',
          'Network Support Technician',
          'Junior Network Engineer',
          'IT Infrastructure Specialist'
        ]
      },
      'ccnp': {
        title: 'CCNP - Cisco Certified Network Professional',
        category: 'Networks & Infrastructure',
        image: '🚀',
        gradient: 'from-indigo-600 to-blue-500',
        duration: '4 months',
        level: 'Advanced',
        certification: 'Cisco CCNP Enterprise',
        description: 'Advanced training for network professionals aiming to master the design, implementation and troubleshooting of complex enterprise networks.',
        objectives: [
          'Design and implement scalable network architectures',
          'Master advanced routing protocols (BGP, multi-area OSPF)',
          'Configure SD-WAN and SD-Access technologies',
          'Implement network automation with Python and APIs',
          'Manage advanced security and network segmentation',
          'Optimize network performance and resilience'
        ],
        benefits: [
          'Premium certification for network experts',
          '40-60% higher salary than CCNA certified professionals',
          'Expertise in cutting-edge technologies (SD-WAN, automation)',
          'Leadership and network architecture positions',
          'Recognition as a Cisco expert',
          'Opportunities in large companies and multinationals'
        ],
        certificateBenefits: [
          'Expert-level professional certification',
          'Maximum credibility with employers',
          'Access to advanced Cisco resources',
          'Digital badge to share on LinkedIn',
          'Priority for network architect positions',
          '3-year validity with continuing education'
        ],
        program: [
          {
            module: 'Module 1: Enterprise Network Architecture',
            topics: ['Hierarchical design', 'High availability and redundancy', 'Network virtualization']
          },
          {
            module: 'Module 2: Advanced Routing',
            topics: ['Advanced BGP configuration', 'Route redistribution', 'Policy-based routing']
          },
          {
            module: 'Module 3: SD-WAN and Automation',
            topics: ['Cisco SD-WAN', 'Python for automation', 'REST APIs and NETCONF']
          },
          {
            module: 'Module 4: Security and Optimization',
            topics: ['TrustSec segmentation', 'Advanced QoS', 'Complex troubleshooting']
          }
        ],
        prerequisites: 'CCNA or equivalent experience (2+ years)',
        price: '800,000 RWF',
        careerPaths: [
          'Senior Network Engineer',
          'Network Architect',
          'Infrastructure Consultant',
          'Network Team Lead'
        ]
      },
      'deep-learning': {
        title: 'Deep Learning & Neural Networks',
        category: 'Artificial Intelligence',
        image: '🧠',
        gradient: 'from-purple-600 to-pink-600',
        duration: '3.5 months',
        level: 'Advanced',
        certification: 'Deep Learning Specialist Certificate',
        description: 'Advanced deep learning training with TensorFlow and PyTorch, covering CNNs, RNNs, transformers and cutting-edge applications.',
        objectives: [
          'Master TensorFlow and PyTorch',
          'Implement CNNs for computer vision',
          'Use transfer learning effectively',
          'Build deep neural networks',
          'Create NLP models with transformers',
          'Train models on GPU/TPU'
        ],
        benefits: [
          'Highly sought-after cutting-edge AI expertise',
          'Among the highest salaries in the IT sector',
          'Work on stimulating and innovative problems',
          'Opportunities in research and industry',
          'Impact on real applications (health, automotive, etc.)',
          'Explosive growth sector'
        ],
        certificateBenefits: [
          'Advanced Deep Learning certification',
          'Portfolio of impressive AI projects',
          'Validated neural networks skills',
          'Qualification for ML/DL Engineer positions',
          'Access to our AI professionals network',
          'Job search support'
        ],
        program: [
          {
            module: 'Module 1: Deep Learning Foundations',
            topics: ['Deep neural networks', 'Backpropagation and optimization', 'TensorFlow and PyTorch']
          },
          {
            module: 'Module 2: Computer Vision',
            topics: ['CNN architectures (ResNet, VGG, Inception)', 'Object detection (YOLO, R-CNN)', 'Segmentation and transfer learning']
          },
          {
            module: 'Module 3: NLP and Transformers',
            topics: ['RNN and LSTM', 'Attention mechanism', 'BERT, GPT and transformers']
          },
          {
            module: 'Module 4: Advanced Topics',
            topics: ['GANs and image generation', 'Reinforcement learning', 'Model optimization and deployment']
          }
        ],
        prerequisites: 'Machine Learning with Python or equivalent experience',
        price: '850,000 RWF',
        careerPaths: [
          'Deep Learning Engineer',
          'Computer Vision Engineer',
          'NLP Specialist',
          'AI Research Scientist'
        ]
      }
    }
  }
  
  return data[language] || data.fr
}
