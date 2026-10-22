import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Termos from './pages/Termos'
import Privacidade from './pages/Privacidade'
import Cookies from './pages/Cookies'
import Contato from './pages/Contato'
import SejaMotorista from './pages/SejaMotorista'
import SejaParceiro from './pages/SejaParceiro'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/seja-motorista" element={<SejaMotorista />} />
        <Route path="/seja-parceiro" element={<SejaParceiro />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <AppRoutes />
    </BrowserRouter>
  )
}
