import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'

const Stages = () => {
  const opportunities = [
    {
      icon: '🌐',
      title: 'Stage CCNA - Réseau Débutant',
      company: 'Entreprises partenaires',
      duration: '3-6 mois',
      description: 'Configuration et maintenance d\'équipements Cisco, troubleshooting réseau niveau 1-2',
      requirements: ['Certification CCNA', 'Bases routing/switching', 'Motivation et rigueur']
    },
    {
      icon: '🔧',
      title: 'Stage CCNP - Expert Réseau',
      company: 'Grandes entreprises IT',
      duration: '3-6 mois',
      description: 'Architecture réseau avancée, déploiement solutions enterprise, optimisation performance',
      requirements: ['Certification CCNP', 'Expérience CCNA', 'Anglais technique']
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stages & Opportunités
          </h1>
          <p className="text-2xl text-purple-100 max-w-3xl mx-auto">
            Accélérez votre carrière avec une expérience pratique en entreprise
          </p>
        </div>
      </section>

      {/* Programme de stage */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
            Programme de Stages Tech In Rwanda
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nos étudiants bénéficient d'opportunités de stages dans des entreprises partenaires au Rwanda et à l'international. 
            Ces expériences permettent d'appliquer concrètement les compétences acquises en formation.
          </p>
        </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {opportunities.map((opp, index) => (
            <ScrollReveal key={index} direction="left" delay={index * 150}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50">
              <div className="text-5xl mb-4">{opp.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{opp.title}</h3>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="mr-2">🏢</span>
                  {opp.company}
                </span>
                <span className="flex items-center">
                  <span className="mr-2">⏱️</span>
                  {opp.duration}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{opp.description}</p>
              <div>
                <h4 className="font-bold text-white mb-2">Prérequis :</h4>
                <ul className="space-y-1">
                  {opp.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-tir-green mr-2">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-3 rounded-lg hover:shadow-xl transition-all">
                Postuler
              </button>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Avantages des Stages */}
      <section className="relative py-20 overflow-hidden">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 md:mb-16 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                💡 Pourquoi Nos Stages ?
              </h2>
              <p className="text-xl text-gray-300">
                Une expérience professionnelle complète avec du matériel Cisco réel
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <ScrollReveal direction="left" delay={0}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-tir-blue/50 transition-all">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-3">Matériel Cisco Réel</h3>
                <p className="text-gray-300">
                  Pratiquez sur des routeurs et switches Cisco professionnels (séries 2960, 3560, ISR 4000) 
                  utilisés dans les entreprises du monde entier
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-tir-blue/50 transition-all">
                <div className="text-5xl mb-4">👨‍💼</div>
                <h3 className="text-2xl font-bold text-white mb-3">Environnement Professionnel</h3>
                <p className="text-gray-300">
                  Intégrez une vraie équipe réseau, participez à des projets réels et développez 
                  vos compétences techniques et relationnelles
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-tir-blue/50 transition-all">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-white mb-3">Évolution de Carrière</h3>
                <p className="text-gray-300">
                  Augmentez vos chances d'embauche : 85% de nos stagiaires reçoivent une offre 
                  d'emploi après leur stage
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-tir-green/50 transition-all">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-3">Projets Concrets CCNA/CCNP</h3>
                <p className="text-gray-300">
                  Configuration VLANs, routing avancé (OSPF, EIGRP, BGP), VPN, QoS, 
                  haute disponibilité - comme en production
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-tir-green/50 transition-all">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-3">Certification Reconnue</h3>
                <p className="text-gray-300">
                  Attestation de stage valorisant votre CV avec mention des technologies 
                  maîtrisées et projets réalisés
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-tir-green/50 transition-all">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-white mb-3">Mentorat Expert</h3>
                <p className="text-gray-300">
                  Accompagnement par des ingénieurs certifiés CCNP/CCIE avec 10+ ans d'expérience 
                  en infrastructure réseau
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Équipements disponibles */}
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-br from-tir-blue/20 to-tir-green/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
                🖥️ Équipements Cisco Disponibles pour la Pratique
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-tir-yellow mb-4">📡 Pour Stage CCNA</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Routeurs Cisco 2911, 4331 ISR (Integrated Services Router)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Switches Catalyst 2960-X, 3560-CX (24/48 ports)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Câbles console, série, Ethernet (RJ45, fibre optique)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Accès Internet pour simulations WAN et VPN</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-tir-yellow mb-4">🚀 Pour Stage CCNP</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Routeurs Cisco ISR 4000 Series (haute performance)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Switches Catalyst 3850, 9300 (Layer 3, StackWise)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Firewall ASA 5500-X, Wireless Controllers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tir-green mr-2">✓</span>
                      <span>Lab topology complète pour BGP, MPLS, SD-WAN</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-200 mb-4">
                  💪 <strong className="text-white">Chaque stagiaire a son propre poste de travail</strong> 
                  avec accès exclusif au matériel pendant toute la durée du stage
                </p>
                <p className="text-gray-300">
                  🔒 Pratique intensive de 6h/jour minimum sur équipements réels + 2h théorie et troubleshooting
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <NetworkBackground />
        </div>
        <div className="section-container relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Comment postuler ?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-tir-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">1</div>
              <h3 className="font-bold text-white mb-2">Complétez votre formation</h3>
              <p className="text-gray-300">Obtenez votre certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tir-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">2</div>
              <h3 className="font-bold text-white mb-2">Soumettez votre CV</h3>
              <p className="text-gray-300">Candidatez en ligne</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tir-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">3</div>
              <h3 className="font-bold text-white mb-2">Entretien</h3>
              <p className="text-gray-300">Rencontrez nos partenaires</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tir-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">4</div>
              <h3 className="font-bold text-white mb-2">Commencez</h3>
              <p className="text-gray-300">Lancez votre carrière</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions à Venir */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📅 Sessions à Venir
            </h2>
            <p className="text-xl text-gray-300">
              Inscrivez-vous dès maintenant aux prochaines sessions de stages
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              title: 'Stage CCNA - Réseau Débutant',
              startDate: '15 Février 2026',
              endDate: '15 Mai 2026',
              placesTotal: 10,
              placesRestantes: 3,
              status: 'Dernières places'
            },
            {
              title: 'Stage CCNP - Expert Réseau',
              startDate: '1 Mars 2026',
              endDate: '1 Août 2026',
              placesTotal: 6,
              placesRestantes: 4,
              status: 'Inscription ouverte'
            }
          ].map((session, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex-1">{session.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    session.placesRestantes <= 3 
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                    {session.status}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">📆</span>
                    <span className="text-sm">Début: {session.startDate}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">🏁</span>
                    <span className="text-sm">Fin: {session.endDate}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">👥</span>
                    <span className="text-sm">
                      Places restantes: <span className={`font-bold ${
                        session.placesRestantes <= 3 ? 'text-red-400' : 'text-green-400'
                      }`}>{session.placesRestantes}</span>/{session.placesTotal}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div 
                    className={`h-2 rounded-full ${
                      session.placesRestantes <= 3 ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${((session.placesTotal - session.placesRestantes) / session.placesTotal) * 100}%` }}
                  ></div>
                </div>

                <button className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-all">
                  S'inscrire
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Formulaire d'inscription */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
              📝 Formulaire d'Inscription
            </h3>
            <form className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Nom complet *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Téléphone *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                    placeholder="+250 xxx xxx xxx"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Session choisie *</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50"
                    required
                  >
                    <option value="" className="bg-gray-900">Sélectionnez une session</option>
                    <option value="ccna" className="bg-gray-900">Stage CCNA - Réseau Débutant</option>
                    <option value="ccnp" className="bg-gray-900">Stage CCNP - Expert Réseau</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Formation suivie *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                  placeholder="Ex: CCNA, Security+, Azure Fundamentals..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">CV (lien Google Drive ou Dropbox) *</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                  placeholder="https://..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Lettre de motivation</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                  placeholder="Pourquoi souhaitez-vous ce stage ? Quelles sont vos motivations ?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-4 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Envoyer ma candidature
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default Stages
