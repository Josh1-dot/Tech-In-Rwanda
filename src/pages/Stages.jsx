import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Stages = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const opportunities = t.stages.opportunities.map((opp, idx) => ({
    icon: ['🌐', '🔧'][idx],
    ...opp
  }))

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4">
            {t.stages.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
            {t.stages.subtitle}
          </p>
        </div>
      </section>

      {/* Programme de stage */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
            {t.stages.programTitle}
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            {t.stages.programDescription}
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
                <h4 className="font-bold text-white mb-2">{t.stages.prerequisites}</h4>
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
                💡 {t.stages.whyTitle}
              </h2>
              <p className="text-xl text-gray-300">
                {t.stages.whySubtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {t.stages.benefitsList.map((benefit, index) => (
              <ScrollReveal key={index} direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'} delay={(index % 3) * 100}>
                <div className={`h-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:border-${index < 3 ? 'tir-blue' : 'tir-green'}/50 transition-all flex flex-col`}>
                  <div className="text-5xl mb-4">{['🔧', '👨‍💼', '📈', '🎯', '🏆', '🤝'][index]}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 flex-grow">
                    {benefit.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Équipements disponibles */}
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-br from-tir-blue/20 to-tir-green/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
                🖥️ {t.stages.equipmentTitle}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-tir-yellow mb-4">📡 {t.stages.ccnaEquipment}</h4>
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
                  <h4 className="text-xl font-bold text-tir-yellow mb-4">🚀 {t.stages.ccnpEquipment}</h4>
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
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 flex items-start">
                  <span className="text-3xl mr-4 flex-shrink-0">💪</span>
                  <div>
                    <p className="text-base text-gray-200 leading-relaxed">
                      <strong className="text-white">Chaque stagiaire a son propre poste de travail</strong> avec accès exclusif au matériel pendant toute la durée du stage
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 flex items-start">
                  <span className="text-3xl mr-4 flex-shrink-0">🔒</span>
                  <div>
                    <p className="text-base text-gray-200 leading-relaxed">
                      Pratique intensive de <strong className="text-white">6h/jour minimum</strong> sur équipements réels + <strong className="text-white">2h théorie</strong> et troubleshooting
                    </p>
                  </div>
                </div>
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
            {t.stages.howToApply}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.stages.applySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tir-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">{index + 1}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions à Venir */}
      <section className="section-container">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📅 {t.stages.upcomingSessions.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.stages.upcomingSessions.subtitle}
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
                    {session.placesRestantes <= 3 ? t.stages.upcomingSessions.status.lastPlaces : t.stages.upcomingSessions.status.open}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">📆</span>
                    <span className="text-sm">{t.stages.upcomingSessions.start}: {session.startDate}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">🏁</span>
                    <span className="text-sm">{t.stages.upcomingSessions.end}: {session.endDate}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">👥</span>
                    <span className="text-sm">
                      {t.stages.upcomingSessions.remainingPlaces}: <span className={`font-bold ${
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
                  {t.stages.upcomingSessions.registerButton}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Formulaire d'inscription */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
              📝 {t.stages.registrationForm.title}
            </h3>
            <form className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.fullName} *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                    placeholder={t.stages.registrationForm.placeholders.name}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.email} *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                    placeholder={t.stages.registrationForm.placeholders.email}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.phone} *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                    placeholder={t.stages.registrationForm.placeholders.phone}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.sessionChoice} *</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50"
                    required
                  >
                    <option value="" className="bg-gray-900">{t.stages.registrationForm.selectSession}</option>
                    <option value="ccna" className="bg-gray-900">Stage CCNA - Réseau Débutant</option>
                    <option value="ccnp" className="bg-gray-900">Stage CCNP - Expert Réseau</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.trainingCompleted} *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                  placeholder={t.stages.registrationForm.placeholders.training}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.cvLink} *</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                  placeholder={t.stages.registrationForm.placeholders.cvLink}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">{t.stages.registrationForm.motivationLetter}</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tir-blue focus:ring-2 focus:ring-tir-blue/50" 
                  placeholder={t.stages.registrationForm.motivationPlaceholder}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-tir-blue to-tir-green text-white font-bold py-4 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {t.stages.registrationForm.submit}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default Stages
