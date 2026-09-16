# Nardo Planejados — Novo Site

Site institucional moderno para a **Nardo Móveis Planejados** (Maringá/PR), inspirado no layout
de referência enviado pelo cliente (estilo claro/clean, tons bege e amadeirados).

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide](https://lucide.dev/) icons

## Desenvolvimento

```bash
npm install
npm run dev      # servidor local em http://localhost:5173
```

## Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build
```

## Estrutura

- `index.html` — HTML base, fontes e metadados (pt-BR)
- `src/data.js` — todo o conteúdo do site (contato, ambientes, projetos, depoimentos)
- `src/Header.jsx` — barra superior + navegação
- `src/Hero.jsx` — hero com slider + barra de diferenciais
- `src/Sections.jsx` — ambientes, banner, projetos, empresa, processo, depoimentos
- `src/Contact.jsx` — contato (form → WhatsApp), mapa e rodapé
- `src/ui.jsx` — reveal on scroll, ícones sociais, botão flutuante de WhatsApp

## Pendências do cliente

- [x] Logo oficial aplicada (recriada em SVG vetorial; aguardar arquivo original p/ conferência)
- [ ] Fotos reais dos projetos para substituir as imagens de banco de imagens
- [ ] Depoimentos reais de clientes
- [ ] Confirmação do horário de atendimento
