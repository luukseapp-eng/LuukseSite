import Hero from '../components/sections/Hero'
import Diferenciais from '../components/sections/Diferenciais'
import PorQue from '../components/sections/PorQue'
import Experiencia from '../components/sections/Experiencia'
import ComoUsar from '../components/sections/ComoUsar'
import Planos from '../components/sections/Planos'
import Padrao from '../components/sections/Padrao'
import Academia from '../components/sections/Academia'
import Excelencia from '../components/sections/Excelencia'
import Motoristas from '../components/sections/Motoristas'
import Partner from '../components/sections/Partner'
import Cidades from '../components/sections/Cidades'
import CtaFinal from '../components/sections/CtaFinal'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [hash])

  return (
    <>
      <Hero />
      <Diferenciais />
      <Experiencia />
      <PorQue />
      <ComoUsar />
      <Planos />
      <Padrao />
      <Academia />
      <Excelencia />
      <Motoristas />
      <Partner />
      <Cidades />
      <CtaFinal />
    </>
  )
}
