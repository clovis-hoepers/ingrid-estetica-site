# Ingrid Melo — Estética Facial Avançada

Site institucional da profissional especializada em estética facial **Ingrid Melo**, desenvolvido com **React + Vite + Tailwind CSS** e hospedado gratuitamente no **Cloudflare Pages**.

## 🌐 Site

> [ingridesteticaavancada.com.br](https://ingridesteticaavancada.com.br) _(em breve)_

## 📋 Roadmap

### ✅ Fase 1 — Landing Page (entrega atual)
- [x] Hero com CTA para WhatsApp
- [x] Seção de serviços (Botox, Bioestimulador, Limpeza de Pele, Peeling Químico)
- [x] Portfólio com posts do Instagram via embed (links hardcoded)
- [x] Botão flutuante de WhatsApp
- [x] Deploy no Cloudflare Pages com domínio customizado e SSL

### 🔜 Fase 2 — Feed dinâmico do Instagram
- [ ] Integração com Instagram Graph API via Cloudflare Workers
- [ ] Feed automático sincronizado com a conta @farmaingridmelo
- [ ] Cache de posts para reduzir chamadas à API

### 🔜 Fase 3 — Agendamento Online
- [ ] Calendário de disponibilidade gerenciado pela Ingrid
- [ ] Formulário de agendamento com confirmação por e-mail/WhatsApp
- [ ] Substituição gradual do link direto para o WhatsApp

### 🔜 Fase 4 — Painel Administrativo
- [ ] Login seguro para a profissional
- [ ] Gerenciamento de serviços, preços e portfólio
- [ ] Dashboard de agendamentos e clientes

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 18 + Vite |
| Estilo | Tailwind CSS v3 |
| Hospedagem | Cloudflare Pages (gratuito) |
| Domínio | registro.br |
| SSL | Cloudflare (automático) |
| CI/CD | GitHub → Cloudflare Pages (automático) |

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
npm run build
npm run preview
```

## ☁️ Deploy no Cloudflare Pages

1. Conecte este repositório ao [Cloudflare Pages](https://pages.cloudflare.com/)
2. Configure:
   - **Framework preset**: React
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Adicione o domínio customizado `ingridesteticaavancada.com.br`
4. Aponte os nameservers do [registro.br](https://registro.br) para a Cloudflare
5. SSL será emitido automaticamente

## 📱 Instagram

Para adicionar ou remover posts do portfólio, edite o array `PORTFOLIO_POSTS` em:

```
src/constants/index.js
```

## 📞 Contato

- Instagram: [@farmaingridmelo](https://www.instagram.com/farmaingridmelo/)
- WhatsApp: [+55 47 99224-5604](https://wa.me/5547992245604)
