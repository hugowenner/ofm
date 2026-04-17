# Ordem dos Frades Menores - Projeto Institucional

---
Task ID: 1
Agent: Main Agent
Task: Criar conceito, posicionamento e design system

Work Log:
- Análise do site atual (ofm.org.br) para contexto
- Definição do conceito central: "Presença Franciscana Viva"
- Criação de design system com paleta terrosa e tipografia editorial

## Conceito e Posicionamento

### Direção Central
Traduzir fraternidade, minoridade, missão, simplicidade, acolhida e cuidado com a criação em experiência digital. O site deve parecer uma presença franciscana viva, não um portal de notícias.

### Valores Visuais
- **Fraternidade**: Conexão humana, acolhimento, comunidade
- **Minoridade**: Humildade visual, simplicidade, não ostentação
- **Missão**: Propósito claro, direção, movimento
- **Simplicidade**: Menos é mais, respiro, legibilidade
- **Acolhida**: Linguagem calorosa, acessível, convidativa
- **Criação**: Natureza, terra, vida, cores orgânicas

### Estética
- Visual sóbrio, contemplativo, humano, editorial e contemporâneo
- Não usar cara de template religioso genérico
- Não fazer portal de notícias como identidade principal
- Priorizar respiro, legibilidade, acessibilidade

## Design System

### Paleta de Cores
```
Terra (base):
- areia: #F5F1E8 (fundo principal)
- barro: #D4C4A8 (backgrounds secundários)
- terracota: #C17F59 (acento quente)

Natureza:
- folhagem: #5A6F52 (verde sálvia - cor primária)
- musgo: #3D4A35 (verde escuro - textos)
- ceu: #B8C5D0 (azul suave)

Neutros:
- pedra: #9A9383 (textos secundários)
- cinza: #6B6560 (textos)
- grafite: #2C2825 (títulos)

Especial:
- dourado: #C9A962 (Tau franciscano, destaques sutis)
- branco: #FDFCF9 (cards, contraste)
```

### Tipografia
```
Títulos: Playfair Display (serifada, elegante, editorial)
- Display: 48-72px (hero)
- H1: 36-48px
- H2: 28-32px
- H3: 22-24px

Corpo: Source Sans 3 (sans-serif, legível, moderna)
- Body: 16-18px
- Small: 14px
- Caption: 12px
```

### Espaçamento
- Respiro generoso (muito white space)
- Margens e padding consistentes (8px base)
- Seções com padding vertical de 80-120px

### Elementos
- Bordas sutis (1px, cor terracota clara)
- Sombras suaves (não pesadas)
- Cantos arredondados sutis (4-8px)
- Transições suaves (200-300ms)

## Sitemap

```
/ (Home)
  - Hero contemplativo
  - Quem Somos (introdução)
  - Nossa Espiritualidade
  - Presenças (mapa/locais)
  - Vocações
  - Notícias/Reflexões (secundário)
  - Contato

Rotas futuras (não implementadas nesta fase):
/sobre
/espiritualidade
/presencas
/vocacoes
/noticias
/contato
```

## Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (home)
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SpiritualitySection.tsx
│   │   ├── PresenceSection.tsx
│   │   ├── VocationsSection.tsx
│   │   ├── ReflectionsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/ (shadcn existente)
├── lib/
│   └── utils.ts
└── content/
    └── mockData.ts
```

---
Task ID: 2-7
Agent: Main Agent
Task: Implementar design system, componentes e homepage

Work Log:
- Implementado globals.css com design system franciscano completo
- Criado mockData.ts com conteúdo institucional coerente
- Implementado Header com navegação responsiva e símbolo Tau
- Implementado Footer com informações de contato e links
- Criado HeroSection com animações e citação de Francisco de Assis
- Criado AboutSection com pilares franciscanos e estatísticas
- Criado SpiritualitySection com elementos espirituais e destaques
- Criado PresenceSection com grid de localizações
- Criado VocationsSection com steps de formação e contato
- Criado ReflectionsSection com posts editoriais
- Criado ContactSection com formulário e informações
- Atualizado layout.tsx com fontes Playfair Display e Source Sans 3
- Configurado metadados SEO completos em português

Stage Summary:
- Projeto institucional completo para a Ordem dos Frades Menores no Brasil
- Design system terroso e contemplativo, não genérico
- 7 seções na homepage: Hero, Quem Somos, Espiritualidade, Presenças, Vocações, Reflexões, Contato
- Código lintado sem erros
- Servidor rodando na porta 3000
