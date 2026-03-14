# Ingrid Melo — Gerenciamento de Pele

Site institucional da farmacêutica especialista **Ingrid Melo**, desenvolvido com **React + Vite + Tailwind CSS** e hospedado no **Cloudflare Pages**.

## 🌐 Site

> [ingridmelo.com.br](https://ingridmelo.com.br)

## 🛠 Stack

| Camada       | Tecnologia                                      |
|--------------|-------------------------------------------------|
| Frontend     | React 18 + Vite                                 |
| Estilo       | Tailwind CSS v3                                 |
| Hospedagem   | Cloudflare Pages (gratuito)                     |
| Domínio      | registro.br — `ingridmelo.com.br`               |
| SSL          | Cloudflare (automático)                         |
| CI/CD        | GitHub → Cloudflare Pages (automático)          |
| Pagamentos   | SumUp (taxa de reserva de consulta)             |
| Agendamento  | Google Calendar (link público)                  |

## 📄 Estrutura de componentes

```
src/
├── components/
│   ├── Header.jsx            → Navegação fixa
│   ├── Hero.jsx              → Banner principal
│   ├── TrustBar.jsx          → Números de confiança
│   ├── Services.jsx          → Cards de tratamentos
│   ├── InstagramGallery.jsx  → Portfólio com embeds
│   ├── Testimonial.jsx       → Depoimentos de pacientes
│   ├── FAQ.jsx               → Perguntas frequentes
│   ├── BookingForm.jsx       → Formulário de agendamento
│   ├── Location.jsx          → Mapa e endereço
│   ├── CallToAction.jsx      → Seção de conversão final
│   ├── Footer.jsx            → Rodapé
│   ├── WhatsAppButton.jsx    → Botão flutuante
│   └── StickyBookingBar.jsx  → Barra sticky no mobile
├── constants/
│   └── index.js              → Todas as configurações
└── styles/
    └── index.css             → Tailwind + componentes globais
```

## ⚙️ Configuração principal

Todas as configurações do site ficam em `src/constants/index.js`:

```js
// Ativar agendamento online (formulário + SumUp + Google Calendar)
export const ENABLE_ONLINE_BOOKING = true   // false = apenas WhatsApp

// Taxa de reserva (desconta do procedimento se fechar na consulta)
export const BOOKING_FEE_BRL = 100

// SumUp — preencher com dados reais da conta
export const SUMUP_CHECKOUT_ID   = 'SEU_CHECKOUT_ID_AQUI'
export const SUMUP_MERCHANT_CODE = 'SEU_MERCHANT_CODE_AQUI'

// Google Agenda — link do calendário público de agendamento
export const GOOGLE_CALENDAR_APPOINTMENT_URL = 'https://calendar.google.com/...'

// Posts do portfólio por procedimento
export const PORTFOLIO_BY_PROCEDURE = { ... }
```

## 💳 Configuração do SumUp

1. Acesse [developer.sumup.com](https://developer.sumup.com)
2. Crie uma aplicação OAuth e obtenha seu `merchant_code`
3. Para produção dinâmica, crie um endpoint no backend que chama:

   ```http
   POST https://api.sumup.com/v0.1/checkouts
   Authorization: Bearer <ACCESS_TOKEN>
   Content-Type: application/json

   {
     "checkout_reference": "RESERVA-{timestamp}",
     "amount": 100,
     "currency": "BRL",
     "merchant_code": "SEU_MERCHANT_CODE",
     "description": "Reserva de consulta — Ingrid Melo",
     "return_url": "https://ingridmelo.com.br/#agendamento"
   }
   ```

4. O endpoint retorna o `checkout_id` para o frontend inicializar o widget SumUp.
5. Preencha `SUMUP_MERCHANT_CODE` em `src/constants/index.js`.

> Para uma implementação rápida sem backend, use a página de pagamento direta:
> `https://pay.sumup.com/b2c/SEU_MERCHANT_CODE`

## 📅 Portfólio — adicionar posts

Edite `PORTFOLIO_BY_PROCEDURE` em `src/constants/index.js`:

```js
export const PORTFOLIO_BY_PROCEDURE = {
  'Toxina botulínica': [
    'https://www.instagram.com/p/XXXXXXX/',
    'https://www.instagram.com/p/YYYYYYY/',
  ],
  'Bioestimulador': [ ... ],
  'Skincare & Peeling': [ ... ],
}
```

## 🚀 Rodar localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gerar dist/
npm run preview   # pré-visualizar build
```

## ☁️ Deploy no Cloudflare Pages

1. Conecte este repositório ao [Cloudflare Pages](https://pages.cloudflare.com/)
2. Configure:
   - **Framework preset**: React (Vite)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Adicione o domínio `ingridmelo.com.br`
4. Aponte os nameservers do [registro.br](https://registro.br) para a Cloudflare
5. SSL emitido automaticamente

> Todo push na branch `main` aciona um novo deploy automático.

## 📋 Roadmap

### ✅ Fase 1 — Landing Page + Design
- [x] Paleta Gold & Burnt Orange (sem roxo)
- [x] Todos os componentes com identidade visual coesa
- [x] SEO completo (Schema.org, Open Graph, canonical)
- [x] Hero persuasivo com social proof
- [x] 6 cards de serviços incluindo Protocolo Anti-olheiras
- [x] Portfólio com carrossel de posts do Instagram
- [x] FAQ com perguntas sobre anti-olheiras e ANVISA
- [x] Responsividade mobile aprimorada

### ✅ Fase 2 — Agendamento Online
- [x] Formulário de agendamento online
- [x] Integração SumUp (taxa de reserva R$100)
- [x] Integração Google Calendar
- [x] Flag `ENABLE_ONLINE_BOOKING` para ligar/desligar
- [ ] Backend para gerar `checkout_id` SumUp dinamicamente
- [ ] Confirmação por e-mail/WhatsApp após pagamento

### 🔜 Fase 3 — Feed Dinâmico
- [ ] Integração Instagram Graph API via Cloudflare Workers
- [ ] Feed automático sincronizado com @farmaingridmelo
- [ ] Cache de posts para reduzir chamadas à API

### 🔜 Fase 4 — Painel Administrativo
- [ ] Login seguro para a profissional
- [ ] Gerenciamento de serviços, preços e portfólio
- [ ] Dashboard de agendamentos

## 📞 Contato

- Instagram: [@farmaingridmelo](https://www.instagram.com/farmaingridmelo/)
- WhatsApp: [+55 47 99224-5604](https://wa.me/5547992245604)
