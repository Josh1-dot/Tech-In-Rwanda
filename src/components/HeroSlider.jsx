import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NetworkBackground from './NetworkBackground'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Former. Sécuriser. Innover.',
      subtitle: 'Devenez expert en technologies de pointe',
      description: 'Formations certifiantes en réseaux, cybersécurité, cloud et intelligence artificielle',
      cta: 'Découvrir nos formations',
      ctaLink: '/formations',
      gradient: 'from-blue-900 via-blue-800 to-indigo-900'
    },
    {
      title: 'Certifications Internationales',
      subtitle: 'CCNA • CCNP • CompTIA • Azure',
      description: 'Des certifications reconnues mondialement qui boostent votre carrière',
      cta: 'Voir les certifications',
      ctaLink: '/formations',
      gradient: 'from-indigo-900 via-purple-900 to-blue-900'
    },
    {
      title: 'Partenaire de votre Entreprise',
      subtitle: 'Formations sur mesure et audits sécurité',
      description: 'Accompagnement professionnel pour la transformation digitale de votre organisation',
      cta: 'Solutions entreprises',
      ctaLink: '/entreprises',
      gradient: 'from-teal-900 via-blue-900 to-indigo-900'
    },
    {
      title: 'Intelligence Artificielle & Data',
      subtitle: 'Machine Learning • Big Data • Data Science',
      description: 'Maîtrisez les technologies qui façonnent le futur',
      cta: 'Explorer l\'IA',
      ctaLink: '/formations',
      gradient: 'from-purple-900 via-pink-900 to-blue-900'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm">
            <NetworkBackground className="opacity-40" />
          </div>
          
          <div className="relative z-20 h-full flex items-center">
            <div className="section-container text-white w-full">
              <div className="max-w-4xl bg-black/30 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
                <div className="mb-4 md:mb-6 overflow-hidden">
                  <h1 
                    className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4 transition-all duration-700 delay-200 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h1>
                </div>
                
                <div className="mb-4 md:mb-6 overflow-hidden">
                  <h2 
                    className={`text-lg sm:text-2xl md:text-4xl font-semibold text-blue-200 mb-4 md:mb-6 transition-all duration-700 delay-300 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.subtitle}
                  </h2>
                </div>
                
                <div className="mb-6 md:mb-8 overflow-hidden">
                  <p 
                    className={`text-base sm:text-xl md:text-2xl text-blue-100 max-w-2xl transition-all duration-700 delay-400 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
                
                <div className="overflow-hidden">
                  <div 
                    className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <Link 
                      to={slide.ctaLink}
                      className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 shadow-2xl hover:scale-105 text-center text-sm md:text-base"
                    >
                      {slide.cta}
                    </Link>
                    <Link 
                      to="/contact"
                      className="border-2 border-white/30 hover:bg-white/10 backdrop-blur-md text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 text-center text-sm md:text-base"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-10 right-10 z-30 animate-bounce">
        <div className="text-white text-center">
          <div className="text-sm mb-2">Scroll</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
