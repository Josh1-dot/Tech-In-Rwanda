import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const values = [
    {
      icon: t.about.mission.icon,
      title: t.about.mission.title,
      description: t.about.mission.description,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: t.about.vision.icon,
      title: t.about.vision.title,
      description: t.about.vision.description,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: t.about.values.icon,
      title: t.about.values.title,
      description: t.about.values.description,
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const advantages = t.about.advantages.map((adv, idx) => ({
    icon: ['🎓', '👨‍🏫', '💼', '🌍', '📚', '🚀'][idx],
    title: adv.title,
    text: adv.text
  }))

  const partners = [
    { name: 'Cisco Academy', icon: '🏅' },
    { name: 'CompTIA Partner', icon: '🏅' },
    { name: 'Microsoft Learn', icon: '🏅' },
    { name: 'EC-Council', icon: '🏅' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t.about.title}
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="section-container -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} direction="left" delay={index * 150}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:scale-105 transform transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50">
              <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <span className="text-5xl">{value.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{value.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Histoire */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <NetworkBackground />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
              {t.about.historyTitle}
            </h2>
            <ScrollReveal direction="up">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-xl p-10 relative overflow-hidden border border-blue-500/20">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-tir-blue to-tir-green"></div>
                <div className="pl-6">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <span className="text-4xl text-tir-blue font-bold float-left mr-3 mt-1">T</span>
                  {t.about.history.paragraph1}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t.about.history.paragraph2}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t.about.history.paragraph3}
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pourquoi TIR */}
      <section className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          {t.about.whyChooseTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <ScrollReveal key={index} direction="left" delay={index * 100}>
              <div className="group bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-tir-blue">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
              <p className="text-gray-300">{adv.text}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-10" />
        <div className="section-container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t.about.certificationsTitle}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-6xl mb-4">{partner.icon}</div>
                <div className="font-bold text-lg">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
