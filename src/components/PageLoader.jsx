import { useState, useEffect } from 'react'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Timer principal de 4 secondes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    // SÉCURITÉ : Timer de secours après 6 secondes (au cas où le premier échoue)
    const emergencyTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Emergency loader timeout triggered')
        setIsLoading(false)
      }
    }, 6000)

    // SÉCURITÉ : Forcer la fermeture après 8 secondes maximum (délai absolu)
    const absoluteMaxTimer = setTimeout(() => {
      setIsLoading(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(emergencyTimer)
      clearTimeout(absoluteMaxTimer)
    }
  }, [isLoading])

  // SÉCURITÉ : Cacher immédiatement si l'utilisateur clique n'importe où
  useEffect(() => {
    const handleClick = () => {
      setIsLoading(false)
    }

    if (isLoading) {
      document.addEventListener('click', handleClick)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Circular Loader */}
      <div className="relative flex flex-col items-center px-4">
        {/* Logo Tech avec animation */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mb-8 md:mb-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Bouclier de cybersécurité */}
            <path
              d="M50 10 L70 20 L70 45 Q70 70 50 85 Q30 70 30 45 L30 20 Z"
              fill="none"
              stroke="white"
              strokeWidth="3"
              opacity="0.95"
            />
            
            {/* Nœuds de réseau - animation rapide et synchronisée */}
            <circle cx="50" cy="35" r="5" fill="white" opacity="0.9">
              <animate attributeName="r" values="3;7;3" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="42" cy="50" r="5" fill="white" opacity="0.9">
              <animate attributeName="r" values="3;7;3" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="58" cy="50" r="5" fill="white" opacity="0.9">
              <animate attributeName="r" values="3;7;3" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="65" r="5" fill="white" opacity="0.9">
              <animate attributeName="r" values="3;7;3" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            
            {/* Lignes - simulation de flux de données intelligent */}
            <line x1="50" y1="35" x2="42" y2="50" stroke="white" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="1.5;3.5;1.5" dur="0.8s" repeatCount="indefinite" />
            </line>
            <line x1="50" y1="35" x2="58" y2="50" stroke="white" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="1.5;3.5;1.5" dur="0.8s" repeatCount="indefinite" />
            </line>
            <line x1="42" y1="50" x2="50" y2="65" stroke="white" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="1.5;3.5;1.5" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
            </line>
            <line x1="58" y1="50" x2="50" y2="65" stroke="white" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="1.5;3.5;1.5" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
            </line>
            <line x1="42" y1="50" x2="58" y2="50" stroke="white" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="1.5;3.5;1.5" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>

        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider animate-pulse text-center text-white">
          TECH IN RWANDA
        </h1>
        
        {/* Slogan */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white font-light tracking-widest animate-pulse text-center">
          Train. Secure. Innovate.
        </p>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default PageLoader
