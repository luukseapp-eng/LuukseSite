# STATUS — LUUKSE Site V2

Rebuild completo em `/workspace/luukse-site` (Vite + React + TypeScript + React Router).

## Visual system

- [x] Paleta: `#0B0B0D`, grafite, warm white, champagne `#C9A227` esparso
- [x] Tipografia: Playfair Display (display) + Inter (UI)
- [x] Seções full-bleed, tipografia grande, espaço negativo
- [x] Header sticky mínimo + menu mobile
- [x] Micro-animações (reveal) + parallax sutil no hero/padrão
- [x] Assets via `/images/v2/...`

## Seções da home

| # | Seção | Status | Notas |
|---|--------|--------|-------|
| 01 | Hero | Done | “Seu tempo merece mais.” + hero-branded.png |
| 02 | Experiência | Done | Interior + pilares conforto/discrição/atendimento/veículo |
| 03 | Como usar | Done | NOW / Dedicado / Preferido / Experiência LUUKSE |
| 04 | Planos | Done | PASS, Individual, Família, Corporativo — preços exclusivos |
| 05 | Padrão | Done | “Discrição não é um detalhe. É um padrão.” |
| 06 | Academia | Done | CTA Conhecer a Academia → `/seja-motorista` |
| 07 | Excelência | Done | 4 reconhecimentos (não ranking) |
| 08 | Motoristas | Done | Sem métricas %; CTA para `/seja-motorista` |
| 09 | Partner | Done | “Sua operação. Uma nova experiência.” |
| 10 | Cidades | Done | Apenas “construindo sua presença” — sem cidades inventadas |
| 11 | CTA final | Done | “Bem-vindo à LUUKSE.” |

## Páginas / footer

- [x] `/sobre`
- [x] `/termos`
- [x] `/privacidade`
- [x] `/cookies`
- [x] `/contato`
- [x] `/seja-motorista`
- [x] `/seja-parceiro`

## Hard bans respeitados

- [x] Sem métricas fake (4.9, &lt;6 min, +32%, etc.)
- [x] Sem “mock” / “ilustrativo” / “sem API” na UI
- [x] Sem `href="#"` mortos
- [x] TrustStrip e seções antigas removidas

## Build

- [x] `npm run build` — OK (tsc -b + vite build, 2026-09-20)
