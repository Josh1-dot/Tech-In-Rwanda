import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const isActive = (path) => location.pathname === path

  const handleToggleMenu = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen)
      setIsAnimating(false)
    }, 600)
  }

  const handleLanguageChange = () => {
    toggleLanguage()
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { path: '/', label: t.header.home },
    { path: '/about', label: t.header.about },
    { path: '/formations', label: t.header.formations },
    { path: '/entreprises', label: t.header.entreprises },
    { path: '/stages', label: t.header.stages },
    { path: '/blog', label: t.header.blog },
    { path: '/contact', label: t.header.contact },
  ]

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-blue-500/20 sticky top-0 z-[100]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div>
              <span className="text-white font-extrabold text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">TIR</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Tech In Rwanda
              </h1>
              <p className="text-sm text-gray-400">{t.footer.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold transition-all duration-300 relative ${
                  isActive(link.path)
                    ? 'text-tir-blue'
                    : 'text-gray-300 hover:text-tir-blue'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-tir-blue to-tir-green"></span>
                )}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500/20 to-blue-500/20 backdrop-blur-md border border-sky-400/30 hover:from-sky-500/30 hover:to-blue-500/30 hover:border-sky-400/50 transition-all duration-300 flex items-center space-x-2 group shadow-lg shadow-sky-500/10"
            >
              <span className="text-sm font-medium text-white group-hover:text-white">
                {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors text-gray-300 relative ${
              isAnimating ? 'animate-spin-bounce' : ''
            }`}
            onClick={handleToggleMenu}
          >
            {isAnimating && (
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-tir-blue to-tir-green opacity-30 animate-ping"></span>
            )}
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 border-t border-blue-500/20 transform transition-all duration-700 ease-in-out ${
            isMenuOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
          }`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-md transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-tir-blue to-tir-green text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInFromTop 0.4s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher Mobile */}
            <button
              onClick={handleLanguageChange}
              className="w-full mt-3 px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              style={{
                animationDelay: `${navLinks.length * 50}ms`,
                animation: isMenuOpen ? 'slideInFromTop 0.4s ease-out forwards' : 'none'
              }}
            >
              <span className="text-sm font-medium text-gray-300">
                {language === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
              </span>
            </button>
          </div>
        </div>
      </nav>
      
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes spin-bounce {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            transform: rotate(180deg) scale(1);
          }
          75% {
            transform: rotate(270deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        
        .animate-spin-bounce {
          animation: spin-bounce 0.6s ease-in-out;
        }
      `}</style>
    </header>
  )
}

export default Header
