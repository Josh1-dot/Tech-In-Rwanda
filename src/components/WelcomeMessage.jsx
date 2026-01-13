import { useState, useEffect } from 'react'

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('fr')
  const [isMounted, setIsMounted] = useState(false)

  const messages = {
    fr: {
      welcome: 'Bienvenue chez',
      company: 'Tech In Rwanda',
      subtitle: 'Votre partenaire pour l\'excellence technologique'
    },
    en: {
      welcome: 'Welcome to',
      company: 'Tech In Rwanda',
      subtitle: 'Your partner for technological excellence'
    }
  }

  const t = messages[currentLanguage]

  // S'assurer que le composant est bien monté
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Apparition après 3 secondes
    const showTimer = setTimeout(() => {
      setShouldRender(true)
      setTimeout(() => setIsVisible(true), 100)
    }, 3000)

    // Masquer après 13 secondes au total (3s d'attente + 10s d'affichage)
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => setShouldRender(false), 1000)
    }, 13000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [isMounted])

  useEffect(() => {
    if (!isVisible) return

    let timeoutId
    const switchLanguage = () => {
      setCurrentLanguage(prev => {
        const nextLang = prev === 'fr' ? 'en' : 'fr'
        // 5 secondes pour chaque langue
        const duration = 5000
        timeoutId = setTimeout(switchLanguage, duration)
        return nextLang
      })
    }

    // Premier changement après 5 secondes (français vers anglais)
    timeoutId = setTimeout(switchLanguage, 5000)

    return () => clearTimeout(timeoutId)
  }, [isVisible])

  if (!shouldRender) return null

  return (
    <div className={`fixed top-24 sm:top-28 md:top-32 left-0 right-0 z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="section-container px-4">
        <div className={`max-w-4xl bg-black/30 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/10 transform transition-all duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-slide-in-words">
              <span className="inline-block" style={{ animationDelay: '0.2s' }}>{t.welcome}</span>{' '}
              <span className="inline-block" style={{ animationDelay: '0.4s' }}>
                {t.company}
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-slide-in-words" style={{ animationDelay: '0.6s' }}>
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-words {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-words {
          animation: slide-in-words 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default WelcomeMessage
