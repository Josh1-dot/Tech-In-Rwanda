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
      'admin-linux': {
        title: 'Administration Linux',
        category: 'Réseaux & Infrastructure',
        image: '🐧',
        gradient: 'from-teal-500 to-green-600',
        duration: '2.5 mois',
        level: 'Intermédiaire',
        certification: 'Certificat TIR Administration Linux',
        description: 'Formation complète à l\'administration des systèmes Linux (Ubuntu, CentOS, RedHat), couvrant l\'installation, la configuration, la sécurisation et la maintenance des serveurs Linux.',
        objectives: [
          'Installer et configurer des distributions Linux (Ubuntu, CentOS, RedHat)',
          'Gérer les utilisateurs, groupes et permissions (chmod, chown, ACL)',
          'Administrer les services réseau (Apache, Nginx, DNS, DHCP, FTP)',
          'Automatiser les tâches avec scripts bash et cron',
          'Configurer et sécuriser SSH, firewall (iptables, firewalld)',
          'Gérer les packages et mises à jour système'
        ],
        benefits: [
          'Linux domine 90% des serveurs web et cloud',
          'Compétence fondamentale pour DevOps et Cloud',
          'Salaire attractif pour administrateurs Linux',
          'Prérequis pour de nombreux postes IT',
          'Applicable à tous secteurs (banques, télécoms, startups)',
          'Base solide pour certifications RHCSA/LPIC'
        ],
        certificateBenefits: [
          'Validation de compétences en administration Linux',
          'Qualification pour postes System Administrator',
          'Atout majeur pour carrières DevOps et Cloud',
          'Reconnaissance de maîtrise des systèmes Unix/Linux',
          'Préparation aux certifications RHCSA et LPIC',
          'Accès à notre communauté d\'admins Linux'
        ],
        program: [
          {
            module: 'Module 1: Fondamentaux Linux',
            topics: ['Installation Ubuntu/CentOS', 'Ligne de commande et shell bash', 'Système de fichiers et partitionnement']
          },
          {
            module: 'Module 2: Administration Système',
            topics: ['Gestion utilisateurs et groupes', 'Permissions et ACL avancées', 'Processus et gestion de la mémoire']
          },
          {
            module: 'Module 3: Services et Réseau',
            topics: ['Apache/Nginx web server', 'DNS (BIND) et DHCP', 'FTP, NFS et Samba']
          },
          {
            module: 'Module 4: Sécurité et Automatisation',
            topics: ['SSH et authentification par clés', 'Firewall (iptables, firewalld)', 'Scripts bash et tâches cron']
          }
        ],
        prerequisites: 'Connaissances de base en informatique',
        price: '550,000 RWF',
        careerPaths: [
          'Administrateur Système Linux',
          'DevOps Engineer',
          'Infrastructure Engineer',
          'Cloud System Administrator'
        ]
      },
      'securite-reseau': {
        title: 'Sécurité Réseau & Firewall',
        category: 'Cybersécurité',
        image: '🛡️',
        gradient: 'from-red-600 to-orange-500',
        duration: '2.5 mois',
        level: 'Intermédiaire',
        certification: 'Certificat TIR Sécurité Réseau',
        description: 'Formation spécialisée en sécurisation des infrastructures réseau, configuration de firewalls, détection d\'intrusions et protection contre les cybermenaces.',
        objectives: [
          'Comprendre les menaces et vulnérabilités réseau',
          'Configurer et gérer des firewalls nouvelle génération',
          'Implémenter des systèmes de détection/prévention d\'intrusion (IDS/IPS)',
          'Sécuriser les connexions VPN et le trafic chiffré',
          'Mettre en place des politiques de sécurité réseau',
          'Analyser et répondre aux incidents de sécurité'
        ],
        benefits: [
          'Compétences critiques en forte demande',
          'Protection des entreprises contre les cyberattaques',
          'Salaire attractif dans le domaine de la cybersécurité',
          'Évolution vers des postes de Security Architect',
          'Expertise applicable à tous secteurs d\'activité',
          'Travail sur des technologies de pointe'
        ],
        certificateBenefits: [
          'Validation de compétences en sécurité réseau',
          'Atout majeur pour les postes en cybersécurité',
          'Reconnaissance de votre expertise en protection réseau',
          'Complément idéal aux certifications CCNA/CCNP',
          'Augmentation de valeur sur le marché de l\'emploi',
          'Accès à notre réseau d\'experts en sécurité'
        ],
        program: [
          {
            module: 'Module 1: Fondamentaux de la Sécurité Réseau',
            topics: ['Threat landscape actuel', 'Principes de défense en profondeur', 'Cryptographie et PKI']
          },
          {
            module: 'Module 2: Firewalls et Filtrage',
            topics: ['Firewalls stateful/stateless', 'Palo Alto / Fortinet / Cisco ASA', 'ACL avancées et zones de sécurité']
          },
          {
            module: 'Module 3: IDS/IPS et Monitoring',
            topics: ['Snort et Suricata', 'Détection d\'anomalies', 'SIEM et correlation d\'événements']
          },
          {
            module: 'Module 4: VPN et Sécurité Applicative',
            topics: ['IPsec et SSL VPN', 'Web Application Firewall', 'Incident response']
          }
        ],
        prerequisites: 'Connaissances réseau (CCNA recommandé)',
        price: '600,000 RWF',
        careerPaths: [
          'Spécialiste Sécurité Réseau',
          'Firewall Administrator',
          'Security Operations Engineer',
          'Network Security Analyst'
        ]
      },
      'ethical-hacking': {
        title: 'Ethical Hacking (CEH)',
        category: 'Cybersécurité',
        image: '🎭',
        gradient: 'from-purple-600 to-red-500',
        duration: '3 mois',
        level: 'Intermédiaire à Avancé',
        certification: 'Certified Ethical Hacker (EC-Council)',
        description: 'Formation complète aux techniques de hacking éthique pour identifier et corriger les vulnérabilités avant que les attaquants malveillants ne les exploitent.',
        objectives: [
          'Maîtriser les méthodologies de penetration testing',
          'Utiliser les outils professionnels (Metasploit, Nmap, Burp Suite)',
          'Identifier et exploiter les vulnérabilités système et réseau',
          'Tester la sécurité des applications web',
          'Réaliser des audits de sécurité complets',
          'Rédiger des rapports professionnels de pentesting'
        ],
        benefits: [
          'Certification CEH reconnue mondialement',
          'Compétences offensives très recherchées',
          'Salaires parmi les plus élevés en IT',
          'Travail stimulant et intellectuellement challengeant',
          'Possibilité de freelancing et consulting',
          'Protection proactive des organisations'
        ],
        certificateBenefits: [
          'Certification EC-Council reconnue internationalement',
          'Crédibilité professionnelle en tant que pentester',
          'Accès à la communauté mondiale des ethical hackers',
          'Augmentation salariale significative (30-50%)',
          'Qualification pour les audits de sécurité officiels',
          'Badge numérique et listing dans l\'annuaire EC-Council'
        ],
        program: [
          {
            module: 'Module 1: Introduction et Reconnaissance',
            topics: ['Méthodologie de pentesting', 'Footprinting et OSINT', 'Scanning et enumeration']
          },
          {
            module: 'Module 2: Exploitation Système',
            topics: ['Exploitation de vulnérabilités', 'Metasploit Framework', 'Post-exploitation et pivoting']
          },
          {
            module: 'Module 3: Sécurité Web et Applicative',
            topics: ['OWASP Top 10', 'Injection SQL et XSS', 'Burp Suite et fuzzing']
          },
          {
            module: 'Module 4: Wireless, Social Engineering et Reporting',
            topics: ['Attaques WiFi (WPA/WPA2)', 'Social engineering techniques', 'Rédaction de rapports professionnels']
          }
        ],
        prerequisites: 'Connaissances en réseaux et systèmes (Linux/Windows)',
        price: '750,000 RWF',
        careerPaths: [
          'Penetration Tester',
          'Security Consultant',
          'Vulnerability Assessor',
          'Red Team Specialist'
        ]
      },
      'cybersecurite-avancee': {
        title: 'Cybersécurité Avancée',
        category: 'Cybersécurité',
        image: '🔒',
        gradient: 'from-red-700 to-purple-600',
        duration: '4 mois',
        level: 'Avancé',
        certification: 'Certificat TIR Cybersécurité Expert',
        description: 'Formation de niveau expert couvrant la sécurité offensive et défensive, l\'analyse de malwares, la forensique numérique et la gestion des incidents de sécurité majeurs.',
        objectives: [
          'Maîtriser les techniques avancées de détection de menaces',
          'Analyser et reverse-engineer des malwares',
          'Conduire des investigations forensiques complètes',
          'Gérer des incidents de sécurité complexes',
          'Implémenter des stratégies de threat hunting',
          'Diriger des équipes de réponse aux incidents'
        ],
        benefits: [
          'Expertise de niveau expert en cybersécurité',
          'Salaires premium (top 10% du secteur IT)',
          'Postes de leadership en sécurité',
          'Travail sur des cas réels et complexes',
          'Reconnaissance comme expert du domaine',
          'Opportunités internationales'
        ],
        certificateBenefits: [
          'Certification d\'expertise avancée',
          'Différenciation majeure sur le marché',
          'Accès aux postes de CISO et Security Architect',
          'Crédibilité pour le consulting haut niveau',
          'Réseau d\'experts en cybersécurité',
          'Formation continue et veille technologique'
        ],
        program: [
          {
            module: 'Module 1: Threat Intelligence et Hunting',
            topics: ['Cyber threat intelligence', 'Threat hunting methodologies', 'IOC et MITRE ATT&CK']
          },
          {
            module: 'Module 2: Malware Analysis et Forensics',
            topics: ['Reverse engineering', 'Analyse statique et dynamique', 'Memory forensics']
          },
          {
            module: 'Module 3: Incident Response Avancé',
            topics: ['IR frameworks (NIST, SANS)', 'Containment et remediation', 'Crisis management']
          },
          {
            module: 'Module 4: Architecture Sécurité Entreprise',
            topics: ['Zero Trust Architecture', 'Security by design', 'Compliance et governance (ISO 27001)']
          }
        ],
        prerequisites: 'CEH ou expérience significative en cybersécurité (3+ ans)',
        price: '900,000 RWF',
        careerPaths: [
          'Security Architect',
          'Incident Response Manager',
          'Malware Analyst',
          'Chief Information Security Officer (CISO)'
        ]
      },
      'soc-analyst': {
        title: 'SOC Analyst',
        category: 'Cybersécurité',
        image: '👁️',
        gradient: 'from-cyan-600 to-blue-700',
        duration: '3 mois',
        level: 'Intermédiaire',
        certification: 'Certificat SOC Analyst Professional',
        description: 'Formation pratique pour devenir analyste en centre opérationnel de sécurité (SOC), incluant la surveillance, la détection et la réponse aux menaces en temps réel.',
        objectives: [
          'Surveiller et analyser les événements de sécurité 24/7',
          'Utiliser les outils SIEM (Splunk, QRadar, ELK)',
          'Détecter et qualifier les incidents de sécurité',
          'Répondre aux alertes et escalader les incidents',
          'Analyser les logs et identifier les anomalies',
          'Collaborer avec les équipes incident response'
        ],
        benefits: [
          'Métier en forte croissance avec pénurie de talents',
          'Travail opérationnel et dynamique',
          'Point d\'entrée idéal en cybersécurité',
          'Opportunités dans toutes les grandes organisations',
          'Évolution rapide vers des rôles seniors',
          'Horaires souvent flexibles (shifts)'
        ],
        certificateBenefits: [
          'Qualification pour les postes SOC Tier 1/2',
          'Compétences opérationnelles validées',
          'Maîtrise des outils SIEM reconnus',
          'Avantage compétitif sur le marché',
          'Progression de carrière accélérée',
          'Réseau professionnel dans les SOC'
        ],
        program: [
          {
            module: 'Module 1: Fondamentaux SOC',
            topics: ['Architecture et rôles d\'un SOC', 'Processus opérationnels', 'Triage et escalation']
          },
          {
            module: 'Module 2: SIEM et Log Analysis',
            topics: ['Splunk administration', 'Création de dashboards', 'Correlation rules et alertes']
          },
          {
            module: 'Module 3: Détection et Investigation',
            topics: ['Analyse de trafic réseau', 'Endpoint Detection & Response', 'Investigation de compromission']
          },
          {
            module: 'Module 4: Threat Intelligence et Reporting',
            topics: ['Feeds de threat intelligence', 'Playbooks et runbooks', 'Reporting et métriques SOC']
          }
        ],
        prerequisites: 'Connaissances en réseaux et systèmes d\'exploitation',
        price: '650,000 RWF',
        careerPaths: [
          'SOC Analyst Tier 1/2',
          'Security Monitoring Specialist',
          'Threat Detection Engineer',
          'SOC Team Lead'
        ]
      },
      'azure-fundamentals': {
        title: 'Microsoft Azure Fundamentals',
        category: 'Cloud Computing',
        image: '☁️',
        gradient: 'from-blue-500 to-sky-400',
        duration: '1.5 mois',
        level: 'Débutant',
        certification: 'Microsoft Azure Fundamentals (AZ-900)',
        description: 'Formation d\'introduction au cloud computing avec Microsoft Azure, couvrant les concepts de base, les services principaux et les modèles de tarification.',
        objectives: [
          'Comprendre les concepts du cloud computing',
          'Naviguer et utiliser le portail Azure',
          'Découvrir les services Azure (compute, storage, networking)',
          'Comprendre la sécurité et la gouvernance Azure',
          'Maîtriser les modèles de tarification et SLA',
          'Préparer et réussir la certification AZ-900'
        ],
        benefits: [
          'Certification officielle Microsoft reconnue',
          'Première étape vers les certifications Azure avancées',
          'Compétences cloud recherchées par toutes les entreprises',
          'Salaire de base élevé pour les certifiés cloud',
          'Opportunités de travail à distance',
          'Secteur en croissance exponentielle'
        ],
        certificateBenefits: [
          'Certification Microsoft officielle',
          'Badge numérique Microsoft à partager',
          'Crédibilité immédiate sur le marché cloud',
          'Fondation pour AZ-104, AZ-305 et autres',
          'Accès à la communauté Microsoft Learn',
          'Certification à vie (pas d\'expiration)'
        ],
        program: [
          {
            module: 'Module 1: Concepts Cloud',
            topics: ['IaaS, PaaS, SaaS', 'Public, Private, Hybrid cloud', 'Avantages du cloud']
          },
          {
            module: 'Module 2: Services Azure Core',
            topics: ['Virtual Machines et App Services', 'Storage accounts et bases de données', 'Virtual Networks et Load Balancers']
          },
          {
            module: 'Module 3: Sécurité et Gouvernance',
            topics: ['Azure Active Directory', 'RBAC et policies', 'Azure Security Center']
          },
          {
            module: 'Module 4: Tarification et Support',
            topics: ['Modèles de pricing', 'Cost Management', 'SLA et lifecycle']
          }
        ],
        prerequisites: 'Aucun - Accessible à tous',
        price: '300,000 RWF',
        careerPaths: [
          'Cloud Support Specialist',
          'Junior Cloud Engineer',
          'IT Administrator (Cloud)',
          'Cloud Sales Specialist'
        ]
      },
      'azure-administrator': {
        title: 'Azure Administrator',
        category: 'Cloud Computing',
        image: '⚙️',
        gradient: 'from-blue-600 to-indigo-500',
        duration: '3 mois',
        level: 'Intermédiaire',
        certification: 'Microsoft Azure Administrator (AZ-104)',
        description: 'Formation complète pour administrer les infrastructures Azure, gérer les identités, le stockage, les réseaux virtuels et les ressources de calcul.',
        objectives: [
          'Gérer les identités et la gouvernance Azure AD',
          'Déployer et gérer des machines virtuelles',
          'Configurer et gérer le stockage Azure',
          'Implémenter et gérer les réseaux virtuels',
          'Surveiller et maintenir les ressources Azure',
          'Implémenter la sauvegarde et la disaster recovery'
        ],
        benefits: [
          'Certification Azure la plus demandée',
          'Salaire moyen 30-40% supérieur aux non-certifiés',
          'Compétences applicables immédiatement',
          'Rôle central dans la transformation cloud',
          'Nombreuses opportunités d\'emploi',
          'Évolution vers Cloud Architect'
        ],
        certificateBenefits: [
          'Certification Microsoft AZ-104 officielle',
          'Reconnaissance comme administrateur Azure qualifié',
          'Badge Microsoft et transcript officiel',
          'Qualification pour les rôles cloud enterprise',
          'Accès aux ressources Microsoft exclusives',
          'Renouvellement annuel pour rester à jour'
        ],
        program: [
          {
            module: 'Module 1: Identité et Gouvernance',
            topics: ['Azure AD et users/groups', 'RBAC et policies', 'Subscriptions et resource groups']
          },
          {
            module: 'Module 2: Storage et Compute',
            topics: ['Storage accounts et blob storage', 'VMs, scale sets, containers', 'App Services et Azure Functions']
          },
          {
            module: 'Module 3: Networking',
            topics: ['Virtual Networks et subnets', 'NSG et Azure Firewall', 'VPN Gateway et ExpressRoute']
          },
          {
            module: 'Module 4: Monitoring et Backup',
            topics: ['Azure Monitor et Log Analytics', 'Backup et Site Recovery', 'Cost optimization']
          }
        ],
        prerequisites: 'AZ-900 ou connaissances équivalentes',
        price: '700,000 RWF',
        careerPaths: [
          'Azure Administrator',
          'Cloud Infrastructure Engineer',
          'DevOps Engineer',
          'Cloud Solutions Architect'
        ]
      },
      'aws-cloud-practitioner': {
        title: 'AWS Cloud Practitioner',
        category: 'Cloud Computing',
        image: '🌩️',
        gradient: 'from-orange-500 to-yellow-500',
        duration: '1.5 mois',
        level: 'Débutant',
        certification: 'AWS Certified Cloud Practitioner',
        description: 'Formation d\'introduction à Amazon Web Services, la plateforme cloud leader mondial, couvrant les services essentiels et les meilleures pratiques AWS.',
        objectives: [
          'Comprendre le cloud AWS et ses avantages',
          'Découvrir les services AWS principaux (EC2, S3, RDS)',
          'Maîtriser les concepts de sécurité AWS',
          'Comprendre l\'architecture et la résilience AWS',
          'Connaître les modèles de tarification AWS',
          'Réussir la certification AWS Cloud Practitioner'
        ],
        benefits: [
          'Certification AWS officielle (leader du marché cloud)',
          'Porte d\'entrée vers les certifications AWS avancées',
          'Compétences AWS très valorisées',
          'Opportunités dans les startups et grandes entreprises',
          'Salaire attractif dès le niveau débutant',
          'Écosystème AWS en expansion constante'
        ],
        certificateBenefits: [
          'Certification AWS officielle',
          'Badge numérique AWS à partager professionnellement',
          'Crédibilité sur le plus grand cloud provider',
          'Fondation pour Solutions Architect et autres',
          'Réductions sur les formations AWS suivantes',
          'Accès à la communauté AWS Certified'
        ],
        program: [
          {
            module: 'Module 1: Introduction AWS',
            topics: ['Global infrastructure AWS', 'Régions et zones de disponibilité', 'Shared responsibility model']
          },
          {
            module: 'Module 2: Services Core',
            topics: ['EC2 et auto scaling', 'S3 et storage options', 'RDS et DynamoDB']
          },
          {
            module: 'Module 3: Sécurité et Architecture',
            topics: ['IAM et security best practices', 'VPC et networking', 'Well-Architected Framework']
          },
          {
            module: 'Module 4: Tarification et Support',
            topics: ['Pricing models', 'Cost optimization', 'Support plans et services']
          }
        ],
        prerequisites: 'Aucun - Accessible à tous',
        price: '350,000 RWF',
        careerPaths: [
          'AWS Cloud Support',
          'Junior Cloud Engineer',
          'Cloud Sales Engineer',
          'Technical Account Manager'
        ]
      },
      'ai-fundamentals': {
        title: 'Intelligence Artificielle - Fondamentaux',
        category: 'Intelligence Artificielle',
        image: '🤖',
        gradient: 'from-purple-500 to-pink-500',
        duration: '2 mois',
        level: 'Débutant',
        certification: 'Certificat IA Fondamentaux',
        description: 'Introduction complète à l\'intelligence artificielle, au machine learning et aux applications pratiques de l\'IA dans les entreprises modernes.',
        objectives: [
          'Comprendre les concepts de base de l\'IA et du ML',
          'Découvrir les différents types d\'apprentissage automatique',
          'Utiliser des outils IA populaires (ChatGPT, Midjourney)',
          'Comprendre les réseaux de neurones',
          'Explorer les applications pratiques de l\'IA',
          'Évaluer les implications éthiques de l\'IA'
        ],
        benefits: [
          'Compétences dans le secteur technologique le plus en vogue',
          'Applications dans tous les domaines professionnels',
          'Préparation pour les métiers du futur',
          'Avantage compétitif sur le marché du travail',
          'Compréhension des outils IA pour la productivité',
          'Fondation pour se spécialiser en IA/ML'
        ],
        certificateBenefits: [
          'Validation de vos connaissances en IA',
          'Atout différenciant sur votre CV',
          'Compréhension pour piloter des projets IA',
          'Base solide pour formations avancées',
          'Crédibilité dans les discussions techniques IA',
          'Accès à notre communauté IA'
        ],
        program: [
          {
            module: 'Module 1: Introduction à l\'IA',
            topics: ['Histoire et évolution de l\'IA', 'Types d\'IA: faible vs forte', 'Applications actuelles']
          },
          {
            module: 'Module 2: Machine Learning Basics',
            topics: ['Apprentissage supervisé vs non supervisé', 'Algorithmes classiques', 'Préparation des données']
          },
          {
            module: 'Module 3: Deep Learning Introduction',
            topics: ['Réseaux de neurones', 'CNN pour la vision', 'NLP et traitement du langage']
          },
          {
            module: 'Module 4: IA Pratique et Éthique',
            topics: ['Utilisation de ChatGPT et outils IA', 'Cas d\'usage business', 'Éthique et biais en IA']
          }
        ],
        prerequisites: 'Connaissances de base en mathématiques',
        price: '450,000 RWF',
        careerPaths: [
          'AI Product Manager',
          'Business Analyst IA',
          'AI Implementation Specialist',
          'Data Analyst'
        ]
      },
      'machine-learning': {
        title: 'Machine Learning avec Python',
        category: 'Intelligence Artificielle',
        image: '🐍',
        gradient: 'from-green-500 to-teal-500',
        duration: '3 mois',
        level: 'Intermédiaire',
        certification: 'Certificat Machine Learning Engineer',
        description: 'Formation pratique au machine learning avec Python, scikit-learn, et les frameworks modernes pour créer des modèles prédictifs performants.',
        objectives: [
          'Maîtriser Python pour le machine learning',
          'Utiliser scikit-learn, pandas, numpy',
          'Créer des modèles de classification et régression',
          'Implémenter des algorithmes de clustering',
          'Optimiser et évaluer les performances des modèles',
          'Déployer des modèles en production'
        ],
        benefits: [
          'Compétences ML très recherchées',
          'Salaires élevés pour les ML engineers',
          'Applications dans tous les secteurs',
          'Possibilité de freelancing',
          'Travail sur des projets innovants',
          'Évolution vers Data Scientist'
        ],
        certificateBenefits: [
          'Validation de compétences ML pratiques',
          'Portfolio de projets ML concrets',
          'Reconnaissance comme ML practitioner',
          'Qualification pour postes ML Engineer',
          'Accès au réseau d\'experts ML',
          'Recommandations LinkedIn de nos formateurs'
        ],
        program: [
          {
            module: 'Module 1: Python et Data Science Stack',
            topics: ['Python avancé', 'NumPy et Pandas', 'Visualisation avec Matplotlib/Seaborn']
          },
          {
            module: 'Module 2: Algorithmes ML Classiques',
            topics: ['Regression linéaire et logistique', 'Decision trees et Random Forest', 'SVM et KNN']
          },
          {
            module: 'Module 3: Advanced ML',
            topics: ['Ensemble methods (Boosting)', 'Dimensionality reduction', 'Feature engineering']
          },
          {
            module: 'Module 4: MLOps et Déploiement',
            topics: ['Pipelines ML', 'Model deployment (Flask, FastAPI)', 'Monitoring et maintenance']
          }
        ],
        prerequisites: 'Programmation Python de base',
        price: '700,000 RWF',
        careerPaths: [
          'Machine Learning Engineer',
          'Data Scientist',
          'AI/ML Consultant',
          'Research Engineer'
        ]
      },
      'data-science': {
        title: 'Data Science & Analytics',
        category: 'Intelligence Artificielle',
        image: '📊',
        gradient: 'from-blue-500 to-cyan-500',
        duration: '3 mois',
        level: 'Intermédiaire',
        certification: 'Certificat Data Scientist',
        description: 'Formation complète en data science, de l\'analyse exploratoire à la visualisation, en passant par la modélisation statistique et le machine learning appliqué.',
        objectives: [
          'Analyser et visualiser des données complexes',
          'Maîtriser SQL et Python pour la data',
          'Appliquer des techniques statistiques avancées',
          'Créer des dashboards interactifs',
          'Construire des modèles prédictifs',
          'Communiquer les insights data efficacement'
        ],
        benefits: [
          'Métier le plus sexy du 21e siècle',
          'Salaires élevés et en croissance',
          'Impact direct sur les décisions business',
          'Travail varié et intellectuellement stimulant',
          'Demande exponentielle sur le marché',
          'Opportunités dans tous les secteurs'
        ],
        certificateBenefits: [
          'Certification Data Scientist reconnue',
          'Portfolio de projets data concrets',
          'Compétences validées en analyse de données',
          'Qualification pour postes Data Scientist/Analyst',
          'Accès à notre réseau de professionnels data',
          'Support pour votre recherche d\'emploi'
        ],
        program: [
          {
            module: 'Module 1: Fondamentaux Data',
            topics: ['SQL avancé', 'Python pour la data', 'Statistiques et probabilités']
          },
          {
            module: 'Module 2: Analyse et Visualisation',
            topics: ['EDA (Exploratory Data Analysis)', 'Tableau et Power BI', 'Storytelling avec les données']
          },
          {
            module: 'Module 3: Machine Learning Appliqué',
            topics: ['Modèles prédictifs', 'A/B testing', 'Time series analysis']
          },
          {
            module: 'Module 4: Big Data et Production',
            topics: ['Introduction à Spark', 'Data pipelines', 'Projets capstone réels']
          }
        ],
        prerequisites: 'Connaissances de base en programmation et mathématiques',
        price: '750,000 RWF',
        careerPaths: [
          'Data Scientist',
          'Data Analyst',
          'Business Intelligence Analyst',
          'Analytics Manager'
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
      'admin-linux': {
        title: 'Linux Administration',
        category: 'Networks & Infrastructure',
        image: '🐧',
        gradient: 'from-teal-500 to-green-600',
        duration: '2.5 months',
        level: 'Intermediate',
        certification: 'TIR Linux Administration Certificate',
        description: 'Complete training in Linux system administration (Ubuntu, CentOS, RedHat), covering installation, configuration, security and maintenance of Linux servers.',
        objectives: [
          'Install and configure Linux distributions (Ubuntu, CentOS, RedHat)',
          'Manage users, groups and permissions (chmod, chown, ACL)',
          'Administer network services (Apache, Nginx, DNS, DHCP, FTP)',
          'Automate tasks with bash scripts and cron',
          'Configure and secure SSH, firewall (iptables, firewalld)',
          'Manage packages and system updates'
        ],
        benefits: [
          'Linux dominates 90% of web and cloud servers',
          'Fundamental skill for DevOps and Cloud',
          'Attractive salary for Linux administrators',
          'Prerequisite for many IT positions',
          'Applicable to all sectors (banks, telecoms, startups)',
          'Solid foundation for RHCSA/LPIC certifications'
        ],
        certificateBenefits: [
          'Validation of Linux administration skills',
          'Qualification for System Administrator positions',
          'Major asset for DevOps and Cloud careers',
          'Recognition of Unix/Linux systems mastery',
          'Preparation for RHCSA and LPIC certifications',
          'Access to our Linux admins community'
        ],
        program: [
          {
            module: 'Module 1: Linux Fundamentals',
            topics: ['Ubuntu/CentOS installation', 'Command line and bash shell', 'File system and partitioning']
          },
          {
            module: 'Module 2: System Administration',
            topics: ['User and group management', 'Advanced permissions and ACL', 'Process and memory management']
          },
          {
            module: 'Module 3: Services and Networking',
            topics: ['Apache/Nginx web server', 'DNS (BIND) and DHCP', 'FTP, NFS and Samba']
          },
          {
            module: 'Module 4: Security and Automation',
            topics: ['SSH and key authentication', 'Firewall (iptables, firewalld)', 'Bash scripts and cron tasks']
          }
        ],
        prerequisites: 'Basic computer knowledge',
        price: '550,000 RWF',
        careerPaths: [
          'Linux System Administrator',
          'DevOps Engineer',
          'Infrastructure Engineer',
          'Cloud System Administrator'
        ]
      },
      'securite-reseau': {
        title: 'Network Security & Firewall',
        category: 'Cybersecurity',
        image: '🛡️',
        gradient: 'from-red-600 to-orange-500',
        duration: '2.5 months',
        level: 'Intermediate',
        certification: 'TIR Network Security Certificate',
        description: 'Specialized training in securing network infrastructures, firewall configuration, intrusion detection and protection against cyber threats.',
        objectives: [
          'Understand network threats and vulnerabilities',
          'Configure and manage next-generation firewalls',
          'Implement intrusion detection/prevention systems (IDS/IPS)',
          'Secure VPN connections and encrypted traffic',
          'Establish network security policies',
          'Analyze and respond to security incidents'
        ],
        benefits: [
          'Critical skills in high demand',
          'Protect companies against cyberattacks',
          'Attractive salary in cybersecurity field',
          'Evolution to Security Architect positions',
          'Expertise applicable to all business sectors',
          'Work on cutting-edge technologies'
        ],
        certificateBenefits: [
          'Validation of network security skills',
          'Major asset for cybersecurity positions',
          'Recognition of your network protection expertise',
          'Ideal complement to CCNA/CCNP certifications',
          'Increased value in the job market',
          'Access to our network of security experts'
        ],
        program: [
          {
            module: 'Module 1: Network Security Fundamentals',
            topics: ['Current threat landscape', 'Defense-in-depth principles', 'Cryptography and PKI']
          },
          {
            module: 'Module 2: Firewalls and Filtering',
            topics: ['Stateful/stateless firewalls', 'Palo Alto / Fortinet / Cisco ASA', 'Advanced ACLs and security zones']
          },
          {
            module: 'Module 3: IDS/IPS and Monitoring',
            topics: ['Snort and Suricata', 'Anomaly detection', 'SIEM and event correlation']
          },
          {
            module: 'Module 4: VPN and Application Security',
            topics: ['IPsec and SSL VPN', 'Web Application Firewall', 'Incident response']
          }
        ],
        prerequisites: 'Network knowledge (CCNA recommended)',
        price: '600,000 RWF',
        careerPaths: [
          'Network Security Specialist',
          'Firewall Administrator',
          'Security Operations Engineer',
          'Network Security Analyst'
        ]
      },
      'ethical-hacking': {
        title: 'Ethical Hacking (CEH)',
        category: 'Cybersecurity',
        image: '🎭',
        gradient: 'from-purple-600 to-red-500',
        duration: '3 months',
        level: 'Intermediate to Advanced',
        certification: 'Certified Ethical Hacker (EC-Council)',
        description: 'Complete training in ethical hacking techniques to identify and fix vulnerabilities before malicious attackers exploit them.',
        objectives: [
          'Master penetration testing methodologies',
          'Use professional tools (Metasploit, Nmap, Burp Suite)',
          'Identify and exploit system and network vulnerabilities',
          'Test web application security',
          'Conduct comprehensive security audits',
          'Write professional pentesting reports'
        ],
        benefits: [
          'Globally recognized CEH certification',
          'Highly sought-after offensive skills',
          'Among the highest salaries in IT',
          'Stimulating and intellectually challenging work',
          'Freelancing and consulting opportunities',
          'Proactive protection of organizations'
        ],
        certificateBenefits: [
          'Internationally recognized EC-Council certification',
          'Professional credibility as a pentester',
          'Access to global ethical hackers community',
          'Significant salary increase (30-50%)',
          'Qualification for official security audits',
          'Digital badge and EC-Council directory listing'
        ],
        program: [
          {
            module: 'Module 1: Introduction and Reconnaissance',
            topics: ['Pentesting methodology', 'Footprinting and OSINT', 'Scanning and enumeration']
          },
          {
            module: 'Module 2: System Exploitation',
            topics: ['Vulnerability exploitation', 'Metasploit Framework', 'Post-exploitation and pivoting']
          },
          {
            module: 'Module 3: Web and Application Security',
            topics: ['OWASP Top 10', 'SQL Injection and XSS', 'Burp Suite and fuzzing']
          },
          {
            module: 'Module 4: Wireless, Social Engineering and Reporting',
            topics: ['WiFi attacks (WPA/WPA2)', 'Social engineering techniques', 'Professional report writing']
          }
        ],
        prerequisites: 'Knowledge in networks and systems (Linux/Windows)',
        price: '750,000 RWF',
        careerPaths: [
          'Penetration Tester',
          'Security Consultant',
          'Vulnerability Assessor',
          'Red Team Specialist'
        ]
      },
      'cybersecurite-avancee': {
        title: 'Advanced Cybersecurity',
        category: 'Cybersecurity',
        image: '🔒',
        gradient: 'from-red-700 to-purple-600',
        duration: '4 months',
        level: 'Advanced',
        certification: 'TIR Expert Cybersecurity Certificate',
        description: 'Expert-level training covering offensive and defensive security, malware analysis, digital forensics and management of major security incidents.',
        objectives: [
          'Master advanced threat detection techniques',
          'Analyze and reverse-engineer malware',
          'Conduct comprehensive forensic investigations',
          'Manage complex security incidents',
          'Implement threat hunting strategies',
          'Lead incident response teams'
        ],
        benefits: [
          'Expert-level cybersecurity expertise',
          'Premium salaries (top 10% of IT sector)',
          'Security leadership positions',
          'Work on real and complex cases',
          'Recognition as a domain expert',
          'International opportunities'
        ],
        certificateBenefits: [
          'Advanced expertise certification',
          'Major differentiation in the market',
          'Access to CISO and Security Architect positions',
          'Credibility for high-level consulting',
          'Cybersecurity experts network',
          'Continuous training and technology watch'
        ],
        program: [
          {
            module: 'Module 1: Threat Intelligence and Hunting',
            topics: ['Cyber threat intelligence', 'Threat hunting methodologies', 'IOC and MITRE ATT&CK']
          },
          {
            module: 'Module 2: Malware Analysis and Forensics',
            topics: ['Reverse engineering', 'Static and dynamic analysis', 'Memory forensics']
          },
          {
            module: 'Module 3: Advanced Incident Response',
            topics: ['IR frameworks (NIST, SANS)', 'Containment and remediation', 'Crisis management']
          },
          {
            module: 'Module 4: Enterprise Security Architecture',
            topics: ['Zero Trust Architecture', 'Security by design', 'Compliance and governance (ISO 27001)']
          }
        ],
        prerequisites: 'CEH or significant cybersecurity experience (3+ years)',
        price: '900,000 RWF',
        careerPaths: [
          'Security Architect',
          'Incident Response Manager',
          'Malware Analyst',
          'Chief Information Security Officer (CISO)'
        ]
      },
      'soc-analyst': {
        title: 'SOC Analyst',
        category: 'Cybersecurity',
        image: '👁️',
        gradient: 'from-cyan-600 to-blue-700',
        duration: '3 months',
        level: 'Intermediate',
        certification: 'SOC Analyst Professional Certificate',
        description: 'Practical training to become an analyst in a security operations center (SOC), including monitoring, detection and real-time threat response.',
        objectives: [
          'Monitor and analyze security events 24/7',
          'Use SIEM tools (Splunk, QRadar, ELK)',
          'Detect and qualify security incidents',
          'Respond to alerts and escalate incidents',
          'Analyze logs and identify anomalies',
          'Collaborate with incident response teams'
        ],
        benefits: [
          'Fast-growing profession with talent shortage',
          'Operational and dynamic work',
          'Ideal entry point into cybersecurity',
          'Opportunities in all major organizations',
          'Fast progression to senior roles',
          'Often flexible hours (shifts)'
        ],
        certificateBenefits: [
          'Qualification for SOC Tier 1/2 positions',
          'Validated operational skills',
          'Recognized SIEM tools mastery',
          'Competitive advantage in the market',
          'Accelerated career progression',
          'Professional network in SOCs'
        ],
        program: [
          {
            module: 'Module 1: SOC Fundamentals',
            topics: ['SOC architecture and roles', 'Operational processes', 'Triage and escalation']
          },
          {
            module: 'Module 2: SIEM and Log Analysis',
            topics: ['Splunk administration', 'Dashboard creation', 'Correlation rules and alerts']
          },
          {
            module: 'Module 3: Detection and Investigation',
            topics: ['Network traffic analysis', 'Endpoint Detection & Response', 'Compromise investigation']
          },
          {
            module: 'Module 4: Threat Intelligence and Reporting',
            topics: ['Threat intelligence feeds', 'Playbooks and runbooks', 'SOC reporting and metrics']
          }
        ],
        prerequisites: 'Knowledge in networks and operating systems',
        price: '650,000 RWF',
        careerPaths: [
          'SOC Analyst Tier 1/2',
          'Security Monitoring Specialist',
          'Threat Detection Engineer',
          'SOC Team Lead'
        ]
      },
      'azure-fundamentals': {
        title: 'Microsoft Azure Fundamentals',
        category: 'Cloud Computing',
        image: '☁️',
        gradient: 'from-blue-500 to-sky-400',
        duration: '1.5 months',
        level: 'Beginner',
        certification: 'Microsoft Azure Fundamentals (AZ-900)',
        description: 'Introduction to cloud computing with Microsoft Azure, covering basic concepts, main services and pricing models.',
        objectives: [
          'Understand cloud computing concepts',
          'Navigate and use the Azure portal',
          'Discover Azure services (compute, storage, networking)',
          'Understand Azure security and governance',
          'Master pricing models and SLA',
          'Prepare and pass the AZ-900 certification'
        ],
        benefits: [
          'Official Microsoft recognized certification',
          'First step towards advanced Azure certifications',
          'Cloud skills sought by all companies',
          'High base salary for cloud certified professionals',
          'Remote work opportunities',
          'Exponentially growing sector'
        ],
        certificateBenefits: [
          'Official Microsoft certification',
          'Microsoft digital badge to share',
          'Immediate credibility in cloud market',
          'Foundation for AZ-104, AZ-305 and others',
          'Access to Microsoft Learn community',
          'Lifetime certification (no expiration)'
        ],
        program: [
          {
            module: 'Module 1: Cloud Concepts',
            topics: ['IaaS, PaaS, SaaS', 'Public, Private, Hybrid cloud', 'Cloud benefits']
          },
          {
            module: 'Module 2: Azure Core Services',
            topics: ['Virtual Machines and App Services', 'Storage accounts and databases', 'Virtual Networks and Load Balancers']
          },
          {
            module: 'Module 3: Security and Governance',
            topics: ['Azure Active Directory', 'RBAC and policies', 'Azure Security Center']
          },
          {
            module: 'Module 4: Pricing and Support',
            topics: ['Pricing models', 'Cost Management', 'SLA and lifecycle']
          }
        ],
        prerequisites: 'None - Accessible to all',
        price: '300,000 RWF',
        careerPaths: [
          'Cloud Support Specialist',
          'Junior Cloud Engineer',
          'IT Administrator (Cloud)',
          'Cloud Sales Specialist'
        ]
      },
      'azure-administrator': {
        title: 'Azure Administrator',
        category: 'Cloud Computing',
        image: '⚙️',
        gradient: 'from-blue-600 to-indigo-500',
        duration: '3 months',
        level: 'Intermediate',
        certification: 'Microsoft Azure Administrator (AZ-104)',
        description: 'Complete training to administer Azure infrastructures, manage identities, storage, virtual networks and compute resources.',
        objectives: [
          'Manage identities and Azure AD governance',
          'Deploy and manage virtual machines',
          'Configure and manage Azure storage',
          'Implement and manage virtual networks',
          'Monitor and maintain Azure resources',
          'Implement backup and disaster recovery'
        ],
        benefits: [
          'Most in-demand Azure certification',
          'Average salary 30-40% higher than non-certified',
          'Immediately applicable skills',
          'Central role in cloud transformation',
          'Numerous job opportunities',
          'Evolution to Cloud Architect'
        ],
        certificateBenefits: [
          'Official Microsoft AZ-104 certification',
          'Recognition as qualified Azure administrator',
          'Microsoft badge and official transcript',
          'Qualification for enterprise cloud roles',
          'Access to exclusive Microsoft resources',
          'Annual renewal to stay current'
        ],
        program: [
          {
            module: 'Module 1: Identity and Governance',
            topics: ['Azure AD and users/groups', 'RBAC and policies', 'Subscriptions and resource groups']
          },
          {
            module: 'Module 2: Storage and Compute',
            topics: ['Storage accounts and blob storage', 'VMs, scale sets, containers', 'App Services and Azure Functions']
          },
          {
            module: 'Module 3: Networking',
            topics: ['Virtual Networks and subnets', 'NSG and Azure Firewall', 'VPN Gateway and ExpressRoute']
          },
          {
            module: 'Module 4: Monitoring and Backup',
            topics: ['Azure Monitor and Log Analytics', 'Backup and Site Recovery', 'Cost optimization']
          }
        ],
        prerequisites: 'AZ-900 or equivalent knowledge',
        price: '700,000 RWF',
        careerPaths: [
          'Azure Administrator',
          'Cloud Infrastructure Engineer',
          'DevOps Engineer',
          'Cloud Solutions Architect'
        ]
      },
      'aws-cloud-practitioner': {
        title: 'AWS Cloud Practitioner',
        category: 'Cloud Computing',
        image: '🌩️',
        gradient: 'from-orange-500 to-yellow-500',
        duration: '1.5 months',
        level: 'Beginner',
        certification: 'AWS Certified Cloud Practitioner',
        description: 'Introduction to Amazon Web Services, the world\'s leading cloud platform, covering essential services and AWS best practices.',
        objectives: [
          'Understand AWS cloud and its benefits',
          'Discover main AWS services (EC2, S3, RDS)',
          'Master AWS security concepts',
          'Understand AWS architecture and resilience',
          'Know AWS pricing models',
          'Pass the AWS Cloud Practitioner certification'
        ],
        benefits: [
          'Official AWS certification (cloud market leader)',
          'Gateway to advanced AWS certifications',
          'Highly valued AWS skills',
          'Opportunities in startups and large companies',
          'Attractive salary from beginner level',
          'Constantly expanding AWS ecosystem'
        ],
        certificateBenefits: [
          'Official AWS certification',
          'AWS digital badge to share professionally',
          'Credibility on the largest cloud provider',
          'Foundation for Solutions Architect and others',
          'Discounts on next AWS trainings',
          'Access to AWS Certified community'
        ],
        program: [
          {
            module: 'Module 1: AWS Introduction',
            topics: ['AWS global infrastructure', 'Regions and availability zones', 'Shared responsibility model']
          },
          {
            module: 'Module 2: Core Services',
            topics: ['EC2 and auto scaling', 'S3 and storage options', 'RDS and DynamoDB']
          },
          {
            module: 'Module 3: Security and Architecture',
            topics: ['IAM and security best practices', 'VPC and networking', 'Well-Architected Framework']
          },
          {
            module: 'Module 4: Pricing and Support',
            topics: ['Pricing models', 'Cost optimization', 'Support plans and services']
          }
        ],
        prerequisites: 'None - Accessible to all',
        price: '350,000 RWF',
        careerPaths: [
          'AWS Cloud Support',
          'Junior Cloud Engineer',
          'Cloud Sales Engineer',
          'Technical Account Manager'
        ]
      },
      'ai-fundamentals': {
        title: 'Artificial Intelligence - Fundamentals',
        category: 'Artificial Intelligence',
        image: '🤖',
        gradient: 'from-purple-500 to-pink-500',
        duration: '2 months',
        level: 'Beginner',
        certification: 'AI Fundamentals Certificate',
        description: 'Complete introduction to artificial intelligence, machine learning and practical AI applications in modern businesses.',
        objectives: [
          'Understand basic concepts of AI and ML',
          'Discover different types of machine learning',
          'Use popular AI tools (ChatGPT, Midjourney)',
          'Understand neural networks',
          'Explore practical AI applications',
          'Evaluate ethical implications of AI'
        ],
        benefits: [
          'Skills in the hottest technology sector',
          'Applications in all professional domains',
          'Preparation for future careers',
          'Competitive advantage in job market',
          'Understanding AI tools for productivity',
          'Foundation to specialize in AI/ML'
        ],
        certificateBenefits: [
          'Validation of your AI knowledge',
          'Differentiating asset on your resume',
          'Understanding to lead AI projects',
          'Solid foundation for advanced training',
          'Credibility in technical AI discussions',
          'Access to our AI community'
        ],
        program: [
          {
            module: 'Module 1: Introduction to AI',
            topics: ['History and evolution of AI', 'Types of AI: weak vs strong', 'Current applications']
          },
          {
            module: 'Module 2: Machine Learning Basics',
            topics: ['Supervised vs unsupervised learning', 'Classic algorithms', 'Data preparation']
          },
          {
            module: 'Module 3: Deep Learning Introduction',
            topics: ['Neural networks', 'CNN for vision', 'NLP and language processing']
          },
          {
            module: 'Module 4: Practical AI and Ethics',
            topics: ['Using ChatGPT and AI tools', 'Business use cases', 'Ethics and bias in AI']
          }
        ],
        prerequisites: 'Basic mathematics knowledge',
        price: '450,000 RWF',
        careerPaths: [
          'AI Product Manager',
          'Business Analyst AI',
          'AI Implementation Specialist',
          'Data Analyst'
        ]
      },
      'machine-learning': {
        title: 'Machine Learning with Python',
        category: 'Artificial Intelligence',
        image: '🐍',
        gradient: 'from-green-500 to-teal-500',
        duration: '3 months',
        level: 'Intermediate',
        certification: 'Machine Learning Engineer Certificate',
        description: 'Practical machine learning training with Python, scikit-learn, and modern frameworks to create high-performance predictive models.',
        objectives: [
          'Master Python for machine learning',
          'Use scikit-learn, pandas, numpy',
          'Create classification and regression models',
          'Implement clustering algorithms',
          'Optimize and evaluate model performance',
          'Deploy models to production'
        ],
        benefits: [
          'Highly sought-after ML skills',
          'High salaries for ML engineers',
          'Applications in all sectors',
          'Freelancing opportunities',
          'Work on innovative projects',
          'Evolution to Data Scientist'
        ],
        certificateBenefits: [
          'Validation of practical ML skills',
          'Portfolio of concrete ML projects',
          'Recognition as ML practitioner',
          'Qualification for ML Engineer positions',
          'Access to ML experts network',
          'LinkedIn recommendations from our trainers'
        ],
        program: [
          {
            module: 'Module 1: Python and Data Science Stack',
            topics: ['Advanced Python', 'NumPy and Pandas', 'Visualization with Matplotlib/Seaborn']
          },
          {
            module: 'Module 2: Classic ML Algorithms',
            topics: ['Linear and logistic regression', 'Decision trees and Random Forest', 'SVM and KNN']
          },
          {
            module: 'Module 3: Advanced ML',
            topics: ['Ensemble methods (Boosting)', 'Dimensionality reduction', 'Feature engineering']
          },
          {
            module: 'Module 4: MLOps and Deployment',
            topics: ['ML pipelines', 'Model deployment (Flask, FastAPI)', 'Monitoring and maintenance']
          }
        ],
        prerequisites: 'Basic Python programming',
        price: '700,000 RWF',
        careerPaths: [
          'Machine Learning Engineer',
          'Data Scientist',
          'AI/ML Consultant',
          'Research Engineer'
        ]
      },
      'data-science': {
        title: 'Data Science & Analytics',
        category: 'Artificial Intelligence',
        image: '📊',
        gradient: 'from-blue-500 to-cyan-500',
        duration: '3 months',
        level: 'Intermediate',
        certification: 'Data Scientist Certificate',
        description: 'Complete data science training, from exploratory analysis to visualization, through statistical modeling and applied machine learning.',
        objectives: [
          'Analyze and visualize complex data',
          'Master SQL and Python for data',
          'Apply advanced statistical techniques',
          'Create interactive dashboards',
          'Build predictive models',
          'Communicate data insights effectively'
        ],
        benefits: [
          'Sexiest job of the 21st century',
          'High and growing salaries',
          'Direct impact on business decisions',
          'Varied and intellectually stimulating work',
          'Exponential demand in the market',
          'Opportunities in all sectors'
        ],
        certificateBenefits: [
          'Recognized Data Scientist certification',
          'Portfolio of concrete data projects',
          'Validated data analysis skills',
          'Qualification for Data Scientist/Analyst positions',
          'Access to our data professionals network',
          'Job search support'
        ],
        program: [
          {
            module: 'Module 1: Data Fundamentals',
            topics: ['Advanced SQL', 'Python for data', 'Statistics and probabilities']
          },
          {
            module: 'Module 2: Analysis and Visualization',
            topics: ['EDA (Exploratory Data Analysis)', 'Tableau and Power BI', 'Data storytelling']
          },
          {
            module: 'Module 3: Applied Machine Learning',
            topics: ['Predictive models', 'A/B testing', 'Time series analysis']
          },
          {
            module: 'Module 4: Big Data and Production',
            topics: ['Introduction to Spark', 'Data pipelines', 'Real capstone projects']
          }
        ],
        prerequisites: 'Basic programming and mathematics knowledge',
        price: '750,000 RWF',
        careerPaths: [
          'Data Scientist',
          'Data Analyst',
          'Business Intelligence Analyst',
          'Analytics Manager'
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
