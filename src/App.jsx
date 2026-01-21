import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NetworkBackground from './components/NetworkBackground'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import About from './pages/About'
import Formations from './pages/Formations'
import FormationDetail from './pages/formations/FormationDetail'
import Entreprises from './pages/Entreprises'
import Stages from './pages/Stages'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'
import Appointment from './pages/Appointment'
import { trackPageView } from './utils/analytics'

function App() {
  const location = useLocation()

  // Tracker chaque changement de page
  useEffect(() => {
    trackPageView(location.pathname)
  }, [location])

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Page Loader */}
      <PageLoader />
      
      {/* Background globale avec circuits */}
      <div className="fixed inset-0 z-0">
        <NetworkBackground className="opacity-30" />
      </div>
      
      {/* Contenu par-dessus */}
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/formations/:slug" element={<FormationDetail />} />
            <Route path="/entreprises" element={<Entreprises />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
