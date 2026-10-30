import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Termos from './pages/Termos'
import Privacidade from './pages/Privacidade'
import Cookies from './pages/Cookies'
import Contato from './pages/Contato'
import SejaMotorista from './pages/SejaMotorista'
import SejaParceiro from './pages/SejaParceiro'
import Excelencia from './pages/Excelencia'
import Frotas from './pages/Frotas'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    return () => window.clearTimeout(t)
  }, [pathname, hash])
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
        <Route path="/excelencia" element={<Excelencia />} />
        <Route path="/frotas" element={<Frotas />} />
      </Routes>
      <Footer />
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
