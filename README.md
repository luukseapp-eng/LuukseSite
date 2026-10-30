# LUUKSE — Site institucional V2

Site marketing premium da LUUKSE (mobilidade privada no Brasil).  
SPA em português (pt-BR). Visual preto / grafite com acentos champagne — extensão da experiência do app.

## Stack

- Vite + React + TypeScript
- React Router (páginas institucionais)
- CSS Modules + CSS global (design tokens)
- Sem backend

## Como rodar

```bash
cd luukse-site
npm install
npm run dev
```

Abra a URL do Vite (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm install
npm run build
npm run preview
```

Artefatos em `dist/`.

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Typecheck + build estático |
| `npm run preview` | Preview do build |
| `npm run lint` | Lint (oxlint) |

## Rotas

| Rota | Conteúdo |
|------|----------|
| `/` | Home V2 (hero → CTA final) |
| `/sobre` | Sobre a LUUKSE |
| `/termos` | Termos de uso |
| `/privacidade` | Política de privacidade |
| `/cookies` | Cookies |
| `/contato` | Contato / solicitar |
| `/seja-motorista` | Cadastro de interesse — motoristas |
| `/seja-parceiro` | Parcerias |

Âncoras na home: `#experiencia`, `#como-usar`, `#planos`, `#padrao`, `#academia`, `#excelencia`, `#motoristas`, `#parceiros`, `#cidades`, `#solicitar`.

## Assets V2

Imagens de referência em `public/images/v2/` (hero branded, cenas noturnas, interior, moodboard).

## Notas

- CTAs levam a `/contato` ou âncoras reais — sem `href="#"`.
- Sem métricas inventadas nem disclaimers de “mock” na UI.
- Ver `STATUS-V2.md` para checklist de seções.

## Formulários (contato, motorista, parceria, frota)

Todos usam `src/lib/leads.ts`. Com `VITE_LEADS_ENDPOINT` (URL pública da API que grava o lead) o site envia um POST JSON
`{kind, source, page, fields}`. Sem a variável, abre o e-mail do visitante preenchido para `contato@luukseapp.com`.
Redes sociais do rodapé: preencher `src/config/social.ts` (vazio = ícone "em breve").
