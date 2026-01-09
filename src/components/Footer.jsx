import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-tir-blue to-tir-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TIR</span>
              </div>
              <h3 className="text-white font-bold text-lg">Tech In Rwanda</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Former. Sécuriser. Innover.<br />
              Votre partenaire de confiance pour les formations professionnelles en technologie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/formations" className="hover:text-tir-green transition-colors">Formations</Link></li>
              <li><Link to="/entreprises" className="hover:text-tir-green transition-colors">Entreprises</Link></li>
              <li><Link to="/stages" className="hover:text-tir-green transition-colors">Stages</Link></li>
              <li><Link to="/blog" className="hover:text-tir-green transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nos domaines</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-tir-blue">▪</span>
                <span>Réseaux (CCNA, CCNP)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-tir-blue">▪</span>
                <span>Cybersécurité</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-tir-blue">▪</span>
                <span>Cloud Azure</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-tir-blue">▪</span>
                <span>Intelligence Artificielle</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="text-tir-green mt-1">📞</span>
                <span>Rwanda: +250 785 649 246</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-tir-green mt-1">📞</span>
                <span>France: +33 6 78 27 58 43</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-tir-green mt-1">📞</span>
                <span>France: +33 7 69 84 71 85</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Tech In Rwanda. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
