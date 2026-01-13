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
        {/* Spinning Circle */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mb-8 md:mb-12">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="220"
              strokeDashoffset="50"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider animate-pulse text-center">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
            TECH IN RWANDA
          </span>
        </h1>
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
