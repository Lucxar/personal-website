import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DetailLiketik from './pages/DetailLiketik'
import DetailWega from './pages/DetailWega'
import DetailSentrix from './pages/DetailSentrix'
import DetailTerrafix from './pages/DetailTerrafix'
import DetailInternship from './pages/DetailInternship'
import DetailKontakt from './pages/DetailKontakt'
import Visitenkarte from './pages/Visitenkarte'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  const { pathname } = useLocation()
  const isVisitenkarte = pathname === '/visitenkarte'

  return (
    <>
      <ScrollToTop />
      {!isVisitenkarte && <AnimatedBackground />}
      {!isVisitenkarte && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/liketik" element={<DetailLiketik />} />
        <Route path="/detail/wega" element={<DetailWega />} />
        <Route path="/detail/sentrix" element={<DetailSentrix />} />
        <Route path="/detail/terrafix" element={<DetailTerrafix />} />
        <Route path="/detail/internship" element={<DetailInternship />} />
        <Route path="/kontakt" element={<DetailKontakt />} />
        <Route path="/visitenkarte" element={<Visitenkarte />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
