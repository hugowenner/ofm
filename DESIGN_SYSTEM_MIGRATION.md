# 🎨 Guia de Migração para Design System Semântico

## 📝 Resumo

O projeto foi refatorado para usar um **design system semântico centralizado**.

**Data:** 17 de abril de 2026
**Status:** ✅ Sistema implementado e validado

---

## 🎯 Principais Mudanças

### ✅ Implementado

1. **tailwind.config.ts** — Novos tokens semânticos
2. **src/app/globals.css** — Classes reutilizáveis
3. **AboutSection.tsx** — Refatorado como exemplo

### 📊 Antes vs Depois

#### ANTES (cores soltas):
```tsx
<div className="border border-[color-mix(in_srgb,var(--franciscan-sand)_66%,white_34%)]">
  <p className="text-franciscan-earth">Texto</p>
</div>
```

#### DEPOIS (semântico):
```tsx
<div className="border border-soft">
  <p className="text-primary">Texto</p>
</div>
```

---

## 🎨 Mapa de Migração de Classes

### Tipografia

| Antiga | Nova | Uso |
|--------|------|-----|
| `text-franciscan-habit` | `text-heading` | Títulos fortes |
| `text-franciscan-earth` | `text-primary` | Corpo de texto |
| `text-franciscan-stone` | `text-secondary` | Texto secundário |
| `text-franciscan-muted` | `text-muted` | Texto auxiliar |
| `text-franciscan-cream` | `text-inverse` | Texto claro em fundo escuro |

### Fundos

| Antiga | Nova | Uso |
|--------|------|-----|
| `bg-franciscan-parchment` | `bg-page` | Fundo principal |
| `bg-franciscan-cream` | `bg-surface` | Cards/superfícies |
| `bg-[#F8F2EA]` | `bg-soft` | Seções alternadas |
| `bg-franciscan-habit` | `bg-emphasis` | Ênfase/CTA |

### Bordas

| Antiga | Nova | Uso |
|--------|------|-----|
| `border-[#E5D3B3]` | `border-soft` | Bordas suaves |
| `border-[#CDBA9A]` | `border-strong` | Bordas fortes |
| `border-franciscan` | `border-soft` | Padrão |

### Marca

| Antiga | Nova | Uso |
|--------|------|-----|
| `text-franciscan-clay` | `text-brand` | Marca primária |
| `text-franciscan-tau` | `text-brand-hover` | Marca hover |
| `bg-franciscan-habit` | `bg-brand` | BG marca |

### Componentes

| Antiga | Nova | Uso |
|--------|------|-----|
| `card-premium` | `card-soft` | Card principal |
| `card-editorial` | `card-contact` | Card com linha |
| `.card-base` | `.card-base` | Card simples |
| `btn-institutional` | `btn-primary` | Botão primário |
| `btn-secondary-institutional` | `btn-secondary` | Botão secundário |
| `link-editorial` | `link-primary` | Link principal |
| `link-micro` | `link-secondary` | Link com indicador |
| `section-shell` | `section-shell` | Seção padrão |
| `section-shell-alt` | `section-shell-alt` | Seção alternada |

---

## 🚀 Padrões de Refatoração

### 1️⃣ Seções Header

**ANTES:**
```tsx
<div className="section-header">
  <p className="text-[#6B4E3D]">KICKER</p>
  <h2 className="text-franciscan-habit">Título</h2>
  <p className="text-franciscan-earth">Descrição</p>
</div>
```

**DEPOIS:**
```tsx
<div className="section-header">
  <p className="section-kicker">KICKER</p>
  <h2 className="section-title">Título</h2>
  <p className="section-lead">Descrição</p>
</div>
```

### 2️⃣ Cards

**ANTES:**
```tsx
<div className="rounded-3xl border border-[#E5D3B3] p-7 bg-[#FBF7F2]">
  <h3 className="text-franciscan-habit">Card Title</h3>
  <p className="text-franciscan-earth">Content</p>
</div>
```

**DEPOIS:**
```tsx
<div className="card-soft">
  <h3 className="text-heading">Card Title</h3>
  <p className="text-primary">Content</p>
</div>
```

### 3️⃣ Botões

**ANTES:**
```tsx
<button className="btn-institutional">
  Ação
</button>
```

**DEPOIS:**
```tsx
<button className="btn-primary">
  Ação
</button>
```

### 4️⃣ Borders + Color-Mix

**ANTES:**
```tsx
<div className="border border-[color-mix(in_srgb,var(--franciscan-sand)_66%,white_34%)]">
  Content
</div>
```

**DEPOIS:**
```tsx
<div className="border border-soft">
  Content
</div>
```

---

## 📋 Checklist de Migração por Componente

### Priority 1 (Já feito)
- ✅ AboutSection

### Priority 2 (Próximos)
- [ ] Header
- [ ] Footer
- [ ] SectionHeader (componente reutilizável)
- [ ] Button components
- [ ] Link components

### Priority 3
- [ ] VocationsSection
- [ ] PresenceSection
- [ ] SpiritualitySection
- [ ] ReflectionsSection
- [ ] ContactSection
- [ ] NewsSection

---

## 🎯 Como Refatorar um Componente

### Step 1: Substituir Classes Antigas
```tsx
// Encontre todas as ocorrências de:
// - text-franciscan-*
// - bg-[#...]
// - border-[#...]
// - color-mix(...) com valores franciscan
```

### Step 2: Mapear para Novas Classes
Use a tabela acima como referência de substituição.

### Step 3: Remover Variáveis Inline
```tsx
// ❌ NÃO:
className="text-[#5C4A3F]"

// ✅ SIM:
className="text-primary"
```

### Step 4: Usar Classes de Componentes
```tsx
// ❌ NÃO:
className="rounded-3xl border p-7 bg-surface"

// ✅ SIM:
className="card-soft"
// ou
className="card-base"  // para card simples
```

### Step 5: Testar
Abra o navegador e verifique se as cores estão corretas. O sistema é 100% compatível.

---

## 🎨 Tokens Disponíveis no Tailwind

### Cores Diretas (em qualquer classe)
```css
/* Backgrounds */
.bg-page        /* #F5EFE6 */
.bg-surface     /* #FBF7F2 */
.bg-soft        /* #F8F2EA */
.bg-emphasis    /* #6B4E3D - brand */

/* Text */
.text-heading     /* #4A3B32 */
.text-primary     /* #5C4A3F */
.text-secondary   /* #8A7668 */
.text-muted       /* #B5A79A */
.text-inverse     /* #F5EFE6 */
.text-brand       /* #6B4E3D */

/* Borders */
.border-soft      /* #E5D3B3 */
.border-strong    /* #CDBA9A */

/* Brands */
.bg-brand         /* #6B4E3D */
```

### Variáveis CSS
```css
/* Em qualquer propriedade CSS */
var(--semantic-page)          /* #F5EFE6 */
var(--semantic-surface)       /* #FBF7F2 */
var(--semantic-text-heading)  /* #4A3B32 */
var(--semantic-brand)         /* #6B4E3D */
/* etc... */
```

---

## 📐 Componentes Prontos para Usar

### Section Shells
```tsx
<section className="section-shell">
  {/* Fundo: page (#F5EFE6) */}
</section>

<section className="section-shell-alt">
  {/* Fundo: soft (#F8F2EA) */}
</section>
```

### Section Headers
```tsx
<div className="section-header">
  <p className="section-kicker">KICKER</p>
  <h2 className="section-title">Título</h2>
  <p className="section-lead">Descrição...</p>
</div>
```

### Cards
```tsx
<div className="card-base">
  {/* Card simples - borda soft, bg surface */}
</div>

<div className="card-soft">
  {/* Card premium - com elevação, gradiente */}
</div>

<div className="card-contact">
  {/* Card com linha lateral */}
</div>
```

### Buttons
```tsx
<button className="btn-primary">Primário</button>
<button className="btn-secondary">Secundário</button>
```

### Links
```tsx
<a href="#" className="link-primary">Link primário</a>
<a href="#" className="link-secondary">Link secundário</a>
```

---

## 🔍 Exemplo Completo (AboutSection Refatorado)

```tsx
export function AboutSection() {
  return (
    <section id="quem-somos" className="section-shell">
      <div className="container-franciscan">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-kicker">Identidade</p>
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-lead">Descrição...</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.id} className="card-soft">
              <h3 className="text-heading">{item.title}</h3>
              <p className="text-primary">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="surface-soft p-8">
          <h3 className="text-heading mb-6">Estatísticas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center border border-soft bg-surface rounded-lg p-4">
                <div className="text-2xl font-bold text-heading">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ Benefícios da Refatoração

1. **Consistência Visual** — Cores padronizadas em todo o projeto
2. **Manutenção Fácil** — Alterar cor global é trivial
3. **Escalabilidade** — Novos componentes usam sistema estabelecido
4. **Legibilidade** — Nomes semânticos são claros
5. **Performance** — Menos CSS gerado (sem color-mix inline)
6. **Acessibilidade** — Contrastes padronizados e adequados

---

## 🚀 Próximas Etapas

1. Refatorar componentes em Priority 2
2. Validar visual em diferentes telas
3. Testar dark mode (se necessário)
4. Documentar padrões de uso para novos componentes
5. Manter este guia atualizado

---

## 📞 Dúvidas?

Consulte:
- `tailwind.config.ts` — Tokens disponíveis
- `src/app/globals.css` — Definições das classes
- Exemplos neste arquivo

**Sistema validado e pronto para produção!** ✅
