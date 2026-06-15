# Portfólio | Theo Fischer

Portfólio pessoal construído do zero com HTML, CSS e JavaScript puro. A ideia é apresentar minha base em desenvolvimento web, dados e sistemas sem depender de framework para um site pequeno.

## O que tem na página

- Hero com resumo profissional, currículo, GitHub, LinkedIn, e-mail e indicadores rápidos.
- Projetos selecionados: Lagoa dos Patos, Radar de Candidaturas, ProjetoQuadrasIFRS e Assistente Financeiro Educacional.
- Seção de habilidades com contexto de uso, não apenas uma lista de tecnologias.
- Linha do tempo com IFRS, estágio na FURG, cursos e projetos.
- Seletor de idioma em PT, EN e ES.
- Alternância entre tema escuro e claro, com estado salvo no navegador.
- Lightbox nas imagens dos projetos.
- Animação em Canvas com suporte a `prefers-reduced-motion`.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Canvas API
- IntersectionObserver
- LocalStorage para idioma e tema

## Estrutura

```txt
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── utils.js
│   ├── i18n.js
│   ├── main.js
│   └── projects.js
└── assets/
    ├── docs/
    ├── icons/
    └── images/
```

## Como editar

- Textos gerais e traduções: `js/i18n.js`
- Projetos, tecnologias e descrições: `js/projects.js`
- Visual, responsividade e temas: `css/style.css`
- Estrutura principal da página: `index.html`

## Como rodar localmente

Como é um site estático, dá para abrir o `index.html` direto no navegador. Para testar de forma mais próxima do deploy:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Deploy no GitHub Pages

1. Suba a pasta do projeto em um repositório público.
2. No GitHub, abra `Settings` → `Pages`.
3. Em `Build and deployment`, escolha `Deploy from a branch`.
4. Selecione a branch principal e a pasta `/root`.
5. Salve e aguarde o link do Pages ser gerado.

## Observações

O Radar de Candidaturas aparece como projeto em desenvolvimento e mostra o estado "Repositório em organização" para não parecer card quebrado. Os outros projetos têm link direto para o GitHub.

A foto de perfil usa WebP no carregamento principal e mantém o JPG como fallback.
