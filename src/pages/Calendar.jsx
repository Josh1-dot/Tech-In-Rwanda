import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Calendar = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
            📅 {t.contact.calendar.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
            {t.contact.calendar.subtitle}
          </p>
        </div>
      </section>

      {/* Calendrier Disponibilité */}
      <section className="section-container -mt-12 sm:-mt-16 md:-mt-20 relative z-20 px-3 sm:px-4">
        <ScrollReveal direction="up">
          <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/10 shadow-2xl max-w-7xl mx-auto overflow-x-auto mb-8 sm:mb-12 md:mb-20">
            
            {/* Légende */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-green-500"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-300">{t.contact.calendar.legend.open}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-yellow-500"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-300">{t.contact.calendar.legend.lastPlaces}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-gray-600"></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-300">{t.contact.calendar.legend.full}</span>
              </div>
            </div>

            {/* Tableau calendrier */}
            <div className="overflow-x-auto -mx-3 sm:-mx-4 md:mx-0">
              <div className="inline-block min-w-full align-middle px-3 sm:px-4 md:px-0">
                <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-3 text-white font-bold sticky left-0 bg-gray-900/90 backdrop-blur-sm">{t.contact.calendar.formation}</th>
                    {t.contact.calendar.months.map((month, idx) => (
                      <th key={idx} className="p-2 text-gray-300 font-semibold">{month}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { formation: 'CCNA', icon: '🌐', dispos: ['gray', 'green', 'green', 'gray', 'green', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'gray'] },
                    { formation: 'CCNP', icon: '🔧', dispos: ['gray', 'gray', 'green', 'green', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'Admin Linux', icon: '🐧', dispos: ['gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Sécurité Réseau', icon: '🔒', dispos: ['gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Ethical Hacking', icon: '💻', dispos: ['green', 'yellow', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'Cybersécurité Avancée', icon: '🛡️', dispos: ['gray', 'gray', 'green', 'green', 'gray', 'gray', 'gray', 'green', 'green', 'gray', 'gray', 'gray'] },
                    { formation: 'SOC Analyst', icon: '📊', dispos: ['gray', 'green', 'gray', 'green', 'green', 'gray', 'gray', 'gray', 'green', 'green', 'gray', 'gray'] },
                    { formation: 'Azure Fundamentals', icon: '☁️', dispos: ['green', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Azure Administrator', icon: '⚙️', dispos: ['gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'AWS Cloud', icon: '🌩️', dispos: ['gray', 'green', 'green', 'gray', 'green', 'gray', 'gray', 'gray', 'green', 'green', 'gray', 'gray'] },
                    { formation: 'IA Fundamentals', icon: '🤖', dispos: ['green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray', 'green', 'gray', 'gray'] },
                    { formation: 'Machine Learning', icon: '🧠', dispos: ['gray', 'green', 'gray', 'green', 'green', 'gray', 'gray', 'green', 'gray', 'gray', 'green', 'gray'] },
                    { formation: 'Deep Learning', icon: '🔬', dispos: ['gray', 'gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'gray', 'green', 'gray'] },
                    { formation: 'Data Science', icon: '📈', dispos: ['gray', 'gray', 'green', 'gray', 'green', 'gray', 'gray', 'green', 'green', 'gray', 'gray', 'gray'] }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-3 text-white font-semibold sticky left-0 bg-gray-900/90 backdrop-blur-sm">
                        <span className="mr-2">{row.icon}</span>
                        {row.formation}
                      </td>
                      {row.dispos.map((dispo, moisIndex) => {
                        const bgColor = 
                          dispo === 'green' ? 'bg-green-500/80 hover:bg-green-500' :
                          dispo === 'yellow' ? 'bg-yellow-500/80 hover:bg-yellow-500' :
                          'bg-gray-600/50';
                        
                        return (
                          <td key={moisIndex} className="p-1 sm:p-2 text-center">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded mx-auto ${bgColor} transition-all cursor-pointer`}
                                 title={dispo === 'green' ? 'Session ouverte' : dispo === 'yellow' ? 'Dernières places' : 'Fermé'}>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3 px-2">
              <p className="text-sm sm:text-base text-gray-300 text-center">
                💡 <strong className="text-white">{t.contact.calendar.notes.registration}</strong>
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                📞 {t.contact.calendar.notes.contact}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                🌍 {t.contact.calendar.notes.location}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default Calendar
