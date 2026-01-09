import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const isActive = (path) => location.pathname === path

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
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-blue-500/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-tir-blue to-tir-green rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-2xl">TIR</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-tir-blue to-tir-green bg-clip-text text-transparent">
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
              className="ml-4 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-500/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-md transition-all ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-tir-blue to-tir-green text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher Mobile */}
            <button
              onClick={toggleLanguage}
              className="w-full mt-3 px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span className="text-sm font-medium text-gray-300">
                {language === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
              </span>
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
