import { useParams, Link } from 'react-router-dom'
import NetworkBackground from '../../components/NetworkBackground'
import ScrollReveal from '../../components/ScrollReveal'
import { useLanguage } from '../../contexts/LanguageContext'
import { getFormationDetailData } from '../../data/formationDetailData'

const formationsData = {
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
  'deep-learning': {
    title: 'Deep Learning & Neural Networks',
    category: 'Intelligence Artificielle',
    image: '🧠',
    gradient: 'from-indigo-500 to-purple-600',
    duration: '3.5 mois',
    level: 'Avancé',
    certification: 'Certificat Deep Learning Specialist',
    description: 'Formation avancée en deep learning avec TensorFlow et PyTorch, couvrant les CNN, RNN, transformers et les applications de pointe.',
    objectives: [
      'Maîtriser TensorFlow et PyTorch',
      'Construire des réseaux de neurones profonds',
      'Implémenter des CNN pour la computer vision',
      'Créer des modèles NLP avec transformers',
      'Utiliser le transfer learning efficacement',
      'Entraîner des modèles sur GPU/TPU'
    ],
    benefits: [
      'Expertise en technologies IA de pointe',
      'Salaires premium (top tier en IA)',
      'Travail sur des projets cutting-edge',
      'Opportunités dans la recherche et l\'industrie',
      'Reconnaissance comme expert deep learning',
      'Possibilité de publications scientifiques'
    ],
    certificateBenefits: [
      'Certification de spécialisation deep learning',
      'Portfolio de projets DL avancés',
      'Expertise reconnue en neural networks',
      'Qualification pour postes senior DL/AI',
      'Accès à notre lab de recherche',
      'Mentorat par des experts du domaine'
    ],
    program: [
      {
        module: 'Module 1: Fondations Deep Learning',
        topics: ['Neural networks theory', 'Backpropagation et optimization', 'TensorFlow et PyTorch']
      },
      {
        module: 'Module 2: Computer Vision',
        topics: ['CNN architectures (ResNet, VGG)', 'Object detection (YOLO, R-CNN)', 'Image segmentation']
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
  }
}

const FormationDetail = () => {
  const { slug } = useParams()
  const { language } = useLanguage()
  const t = {
    fr: {
      notFound: 'Formation non trouvée',
      backToFormations: 'Retour aux formations',
      objectives: 'Objectifs de la formation',
      practicalExamples: '💻 Exemples Pratiques & Projets',
      program: '📚 Programme détaillé',
      whyTrain: '💡 Pourquoi se former ?',
      certificateBenefits: '🏆 Avantages du certificat',
      careerPaths: '🚀 Débouchés professionnels',
      readyToStart: 'Prêt à commencer ?',
      joinStudents: 'Rejoignez des centaines d\'étudiants qui ont transformé leur carrière avec cette formation',
      enrollmentInfo: 'Inscription & Renseignements',
      callNow: '📞 Appeler maintenant',
      prerequisites: 'Prérequis'
    },
    en: {
      notFound: 'Training not found',
      backToFormations: 'Back to training programs',
      objectives: 'Training objectives',
      practicalExamples: '💻 Practical Examples & Projects',
      program: '📚 Detailed program',
      whyTrain: '💡 Why get trained?',
      certificateBenefits: '🏆 Certificate benefits',
      careerPaths: '🚀 Career opportunities',
      readyToStart: 'Ready to start?',
      joinStudents: 'Join hundreds of students who have transformed their careers with this training',
      enrollmentInfo: 'Enrollment & Information',
      callNow: '📞 Call now',
      prerequisites: 'Prerequisites'
    }
  }[language]
  
  // Charger les données traduites si disponibles, sinon utiliser les données en dur
  const translatedData = getFormationDetailData(language)
  const formation = translatedData[slug] || formationsData[slug]

  if (!formation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.notFound}</h1>
          <Link to="/formations" className="text-tir-blue hover:text-tir-green">
            {t.backToFormations}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className={`relative py-32 text-white overflow-hidden`}>
        {/* Image de fond pour formations réseau */}
        {slug === 'ccna' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="/ccna-background.jpg" 
              alt="CCNA Network"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}
        {slug === 'ccnp' && (
          <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-2 w-full h-full">
              <img 
                src="/ccnp-background.webp" 
                alt="CCNP Network"
                className="w-full h-full object-cover object-center"
              />
              <img 
                src="/data-center-maintenance1.webp" 
                alt="CCNP Datacenter"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}
        {slug === 'admin-linux' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1920&q=80" 
              alt="Linux Terminal"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'securite-reseau' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1920&q=80" 
              alt="Network Security"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'ethical-hacking' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80" 
              alt="Ethical Hacking"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'cybersecurite-avancee' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1920&q=80" 
              alt="Advanced Cybersecurity"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'soc-analyst' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" 
              alt="SOC Monitoring"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'azure-fundamentals' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1920&q=80" 
              alt="Azure Cloud"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'azure-administrator' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
              alt="Azure Administration"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'aws-cloud-practitioner' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80" 
              alt="AWS Cloud"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'ai-fundamentals' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80" 
              alt="Artificial Intelligence"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'machine-learning' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1920&q=80" 
              alt="Machine Learning"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'deep-learning' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80" 
              alt="Deep Learning"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {slug === 'data-science' && (
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80" 
              alt="Data Science"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        {!(slug === 'ccna' || slug === 'ccnp' || slug === 'admin-linux' || slug === 'securite-reseau' || slug === 'ethical-hacking' || slug === 'cybersecurite-avancee' || slug === 'soc-analyst' || slug === 'azure-fundamentals' || slug === 'azure-administrator' || slug === 'aws-cloud-practitioner' || slug === 'ai-fundamentals' || slug === 'machine-learning' || slug === 'deep-learning' || slug === 'data-science') && (
          <div className={`absolute inset-0 bg-gradient-to-br ${formation.gradient} z-0`}></div>
        )}
        <div className="section-container relative z-10">
          <Link to="/formations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            ← Retour aux formations
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-6xl md:text-8xl drop-shadow-2xl mx-auto md:mx-0">{formation.image}</div>
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-2xl border border-white/20 w-full">
              <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {formation.category}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words">
                {formation.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-4xl">
                {formation.description}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base lg:text-lg">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg">
                  <span className="text-xl md:text-3xl">⏱️</span>
                  <span className="text-xs sm:text-sm md:text-base">{formation.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg">
                  <span className="text-xl md:text-3xl">📈</span>
                  <span className="text-xs sm:text-sm md:text-base">{formation.level}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg">
                  <span className="text-xl md:text-3xl">🎓</span>
                  <span className="text-xs sm:text-sm md:text-base">{formation.certification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">🎯 Objectifs de la formation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {formation.objectives.map((obj, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-tir-green text-2xl mt-1">✓</span>
                  <p className="text-gray-300 text-lg">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Exemples Pratiques (si disponibles) */}
      {formation.practicalExamples && (
        <section className="section-container">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.practicalExamples}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {formation.practicalExamples.map((example, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <img 
                      src={example.imageUrl} 
                      alt={example.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 text-center">{example.title}</h3>
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 text-center">{example.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {example.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 md:px-3 md:py-1 bg-blue-500/20 text-tir-blue text-xs md:text-sm rounded-full border border-blue-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Programme */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t.program}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {formation.program.map((module, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{module.module}</h3>
                <ul className="space-y-3">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-tir-blue text-xl mt-1">▸</span>
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bénéfices */}
      <section className="relative py-20 overflow-hidden">
        <NetworkBackground className="opacity-10" />
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="up">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">{t.whyTrain}</h2>
                <ul className="space-y-4">
                  {formation.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-tir-yellow text-2xl mt-1">★</span>
                      <p className="text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">{t.certificateBenefits}</h2>
                <ul className="space-y-4">
                  {formation.certificateBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-tir-green text-2xl mt-1">✓</span>
                      <p className="text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Carrières */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">{t.careerPaths}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {formation.careerPaths.map((career, index) => (
                <div key={index} className="bg-gradient-to-br from-tir-blue/20 to-tir-green/20 rounded-xl p-6 border border-blue-500/30">
                  <p className="text-xl font-semibold text-white">{career}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className={`bg-gradient-to-br ${formation.gradient} rounded-2xl p-12 text-center text-white relative overflow-hidden`}>
            <NetworkBackground className="opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">{t.readyToStart}</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                {t.joinStudents}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact"
                  className="bg-white text-tir-dark font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {t.enrollmentInfo}
                </Link>
                <a 
                  href="tel:+250785649246"
                  className="bg-tir-dark/50 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg hover:bg-tir-dark transition-all duration-300"
                >
                  {t.callNow}
                </a>
              </div>
              <p className="mt-6 text-white/80">
                <strong>{t.prerequisites}:</strong> {formation.prerequisites}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default FormationDetail
