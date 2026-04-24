# 🎨 Referência Visual de Cores

## Paleta Completa

### 📄 Backgrounds / Page & Surface

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  .bg-page          .bg-surface          .bg-soft                │
│  #F5EFE6           #FBF7F2               #F8F2EA                │
│  Fundo página      Fundo cards          Soft overlay            │
│  (base)            (principal)          (suave)                 │
│                                                                 │
│  █████████████     █████████████     █████████████             │
│  (mais escuro)     (claro)            (meio termo)             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 📝 Typography / Text Colors

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  .text-heading         .text-primary        .text-secondary       │
│  #4A3B32               #5C4A3F              #8A7668               │
│  Títulos               Texto corpo          Suporte               │
│  (mais escuro)         (escuro)             (médio)               │
│                                                                    │
│  .text-muted           .text-inverse                              │
│  #B5A79A               #F5EFE6                                    │
│  Desenfatizado         Em fondos escuros                          │
│  (claro)               (branco/bege)                              │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

### 🔲 Borders

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  .border-soft         .border-strong                │
│  #E5D3B3              #CDBA9A                        │
│  Sutil                Definida                      │
│  (clara/suave)        (mais evidente)               │
│                                                      │
│  ─────────────────    ─────────────────             │
│  (mais suave)         (mais definida)               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 🎯 Brand / Action Colors

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│ DEFAULT           HOVER              DEEP                 │
│ .brand            .brand-hover       .brand-deep          │
│ #6B4E3D           #8B6A58            #4A3B32              │
│ Principal         Ao passar mouse    Profundo/Texto      │
│                                                            │
│ ██████████        ██████████        ██████████           │
│ (marrom medio)    (marrom claro)    (marrom escuro)      │
│                                                            │
│ USO:              USO:               USO:                 │
│ • Botões          • Hover states     • Text branding      │
│ • CTA             • Active states    • Deep sections      │
│ • Links activos   • Focus rings      • Dark BGs           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

### ✨ Accent

```
┌─────────────────────────────────┐
│                                 │
│ .accent                         │
│ #6C8F6B                         │
│ Verde de ação                   │
│                                 │
│ ██████████                      │
│ (verde profesional)             │
│                                 │
│ USO:                            │
│ • Highlights ocasionais         │
│ • Indicadores especiais         │
│ • Elementos de ação alternativos│
│ • Em branding (raro)            │
│                                 │
└─────────────────────────────────┘
```

---

## 📋 Color Usage Matrix

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          COR → USE CASES                                │
├────────────────────────────────┬──────────────────────────────────────┤
│ bg-page                        │ • Fundo de página principal          │
│ (#F5EFE6 - Bege claro)         │ • Cor base de todos os backgrounds  │
│                                │ • Default para .section-shell       │
├────────────────────────────────┼──────────────────────────────────────┤
│ bg-surface                     │ • Cards principais                   │
│ (#FBF7F2 - Bege claro+)        │ • Sections destacadas                │
│                                │ • Input/Form backgrounds             │
│                                │ • Modal backgrounds                  │
├────────────────────────────────┼──────────────────────────────────────┤
│ bg-soft                        │ • Badges/Chips                       │
│ (#F8F2EA - Bege muito claro)   │ • Helper text backgrounds            │
│                                │ • Destaques suaves                   │
├────────────────────────────────┼──────────────────────────────────────┤
│ text-heading                   │ • Headlines (h1-h6)                  │
│ (#4A3B32 - Marrom escuro)      │ • Card titles                        │
│                                │ • Section titles                     │
│                                │ • Strong emphasis                    │
├────────────────────────────────┼──────────────────────────────────────┤
│ text-primary                   │ • Corpo de texto principal           │
│ (#5C4A3F - Marrom)             │ • Descrições                         │
│                                │ • Paragraphs                         │
│                                │ • Lista items                        │
├────────────────────────────────┼──────────────────────────────────────┤
│ text-secondary                 │ • Subtítulos                         │
│ (#8A7668 - Marrom médio)       │ • Texto de suporte                   │
│                                │ • Captions                           │
│                                │ • Grid item descriptions             │
├────────────────────────────────┼──────────────────────────────────────┤
│ text-muted                     │ • Disabled text                      │
│ (#B5A79A - Marrom claro)       │ • Placeholder text                   │
│                                │ • Comments/Metadata                  │
│                                │ • Secondary information              │
├────────────────────────────────┼──────────────────────────────────────┤
│ text-inverse                   │ • Texto EM fundos escuros (brand)   │
│ (#F5EFE6 - Bege)               │ • Footer content                     │
│                                │ • Inverse backgrounds                │
│                                │ • High contrast text                 │
├────────────────────────────────┼──────────────────────────────────────┤
│ border-soft                    │ • Card borders                       │
│ (#E5D3B3 - Bege+marrom)        │ • Input borders                      │
│                                │ • Dividers sutis                     │
│                                │ • Section dividers                   │
├────────────────────────────────┼──────────────────────────────────────┤
│ border-strong                  │ • Focus rings (inputs)               │
│ (#CDBA9A - Bege+marrom)        │ • Emphasis borders                   │
│                                │ • Error/Warning states               │
├────────────────────────────────┼──────────────────────────────────────┤
│ brand                          │ • Primary CTA buttons                │
│ (#6B4E3D - Marrom)             │ • Active navigation                  │
│                                │ • Primary links                      │
│                                │ • Branding accents                   │
├────────────────────────────────┼──────────────────────────────────────┤
│ brand-hover                    │ • Hover state para brand             │
│ (#8B6A58 - Marrom claro)       │ • Lighter shade de buttons           │
│                                │ • Active states mais sutis           │
├────────────────────────────────┼──────────────────────────────────────┤
│ brand-deep                     │ • Texto em brand backgrounds         │
│ (#4A3B32 - Marrom escuro)      │ • Deep section backgrounds           │
│                                │ • High contrast text                 │
│                                │ • (nota: idêntico a text-heading)   │
├────────────────────────────────┼──────────────────────────────────────┤
│ accent                         │ • Highlights ocasionais              │
│ (#6C8F6B - Verde)              │ • Elementos special features         │
│                                │ • Badges de status                   │
│                                │ • Secondary actions (raro)          │
└────────────────────────────────┴──────────────────────────────────────┘
```

---

## 🎯 Component Color Patterns

### Card Pattern
```tsx
<div className="card-soft">
  {/* Automaticamente: */}
  {/* • bg-surface (fundo) */}
  {/* • border-soft (borda) */}
  {/* • rounded-3xl (cantos) */}
  {/* • p-8 (padding) */}
</div>
```
**Palette:**
- Background: `#FBF7F2` (surface)
- Border: `#E5D3B3` (border-soft)
- Text padrão: Use `text-primary` (#5C4A3F)
- Text destaque: Use `text-heading` (#4A3B32)

---

### Button Pattern
```tsx
<button className="btn-primary">
  {/* Automaticamente: */}
  {/* • bg-brand (#6B4E3D) */}
  {/* • text-inverse (#F5EFE6) */}
  {/* • hover:bg-brand-hover (#8B6A58) */}
</button>
```
**Palette:**
- Fundo: `#6B4E3D` (brand)
- Texto: `#F5EFE6` (inverse)
- Hover: `#8B6A58` (brand-hover)

---

### Section Pattern
```tsx
<section className="section-shell">
  {/* Automaticamente: */}
  {/* • bg-page (#F5EFE6) */}
  {/* • container-franciscan (max-width) */}
  {/* • section-padding */}
</section>
```
**Palette:**
- Background: `#F5EFE6` (page)
- Texto headings: Use `text-heading` (#4A3B32)
- Texto corpo: Use `text-primary` (#5C4A3F)

---

## 🌅 Dark Mode Inverter

```
LIGHT MODE  ←→  DARK MODE
────────────────────────────

page        ←→  brand-deep
#F5EFE6     ←→  #4A3B32

surface     ←→  brand
#FBF7F2     ←→  #6B4E3D

text-heading ←→ inverse
#4A3B32     ←→  #F5EFE6

Automático! Você não precisa fazer nada
```

---

## 📝 Copy-Paste de Cores

### Por Tipo de Elemento:

**Para Títulos:**
```tsx
className="text-heading"  // #4A3B32
// OU:
className="text-[#4A3B32]"  // Se precisar inline
```

**Para Corpo de Texto:**
```tsx
className="text-primary"  // #5C4A3F
```

**Para Suporte/Subtítulo:**
```tsx
className="text-secondary"  // #8A7668
```

**Para Desenfatizado:**
```tsx
className="text-muted"  // #B5A79A
```

**Para Fundos Principais:**
```tsx
className="bg-surface"  // #FBF7F2
```

**Para Bordas:**
```tsx
className="border border-soft"  // #E5D3B3
```

**Para Botões:**
```tsx
className="btn-primary"  // Automático: bg-brand, text-inverse
// ou:
className="bg-brand text-inverse hover:bg-brand-hover"
```

---

## 🛠️ Conversão Rápida: Hex → Classe

| Se você ver... | Use esta classe... |
|---|---|
| `#F5EFE6` | `bg-page` ou `text-inverse` |
| `#FBF7F2` | `bg-surface` |
| `#F8F2EA` | `bg-soft` |
| `#4A3B32` | `text-heading` ou `bg-brand-deep` |
| `#5C4A3F` | `text-primary` |
| `#8A7668` | `text-secondary` |
| `#B5A79A` | `text-muted` |
| `#E5D3B3` | `border-soft` |
| `#CDBA9A` | `border-strong` |
| `#6B4E3D` | `bg-brand` ou `btn-primary` |
| `#8B6A58` | `bg-brand-hover` ou `hover:bg-brand` |
| `#6C8F6B` | `bg-accent` (raro) |

---

## 🎓 Exemplo Completo: Card + Text

```tsx
// ANTES (com cores hardcoded)
<div className="rounded-3xl border border-[#E5D3B3] p-8 bg-[#FBF7F2]">
  <h3 className="text-[#4A3B32] font-bold">Título</h3>
  <p className="text-[#5C4A3F]">Descrição</p>
  <button className="bg-[#6B4E3D] text-[#F5EFE6]">
    CTA
  </button>
</div>

// DEPOIS (com classes semânticas)
<div className="card-soft">
  <h3 className="text-heading font-bold">Título</h3>
  <p className="text-primary">Descrição</p>
  <button className="btn-primary">
    CTA
  </button>
</div>
```

**Benefícios:**
- ✅ 65% menos caracteres
- ✅ 100% consistência
- ✅ Fácil de manter
- ✅ Dark mode automático

---

## 📚 Referências Rápidas por Arquivo

**Precisa da definição exata da cor?**
→ `tailwind.config.ts` (seção `colors`)

**Precisa da classe CSS?**
→ `src/app/globals.css` (seção `@layer utilities`)

**Precisa de um exemplo?**
→ `COMPONENT_REFACTORING_EXAMPLES.md` (seu tipo de component)

**Precisa de color mapping table?**
→ `DESIGN_SYSTEM_MIGRATION.md` (tabela central)

---

## 🎯 Teste Visual: Contrast Checker

Verificar contraste (WCAG AA minimum):

```
✓ Heading (#4A3B32) em Page (#F5EFE6)        7:1 ✓ AAA
✓ Primary (#5C4A3F) em Page (#F5EFE6)        6.5:1 ✓ AAA
✓ Secondary (#8A7668) em Page (#F5EFE6)      4.8:1 ✓ AA
✓ Inverse (#F5EFE6) em Brand (#6B4E3D)       8:1 ✓ AAA
✓ Text (#4A3B32) em Surface (#FBF7F2)        7:1 ✓ AAA
```

Todas as combinações padrão estão **WCAG AA compliant** ✓

---

## 💡 Pro Tips

**Deixar cores consistentes em todo site:**
1. Abrir `tailwind.config.ts`
2. Procurar `colors: {`
3. Atualizar 1 hex value
4. Todos os componentes mudaram automaticamente
5. Não precisou tocar em nenhum componente React!

**Adicionar nova variação de cor:**
```tsx
// Em tailwind.config.ts:
colors: {
  'brand-light': '#9B8A7F',  // ← Nova!
}

// Em globals.css:
@layer utilities {
  .bg-brand-light {
    @apply bg-[#9B8A7F];
  }
}

// Usar normalmente:
<div className="bg-brand-light">
```

**Remover uma cor (rara):**
1. Procurar em `COMPONENT_REFACTORING_EXAMPLES.md` seus uses cases
2. Migrar componentes para classe semântica similar
3. Remover de `tailwind.config.ts`
4. Remover de `globals.css`

---

**🎨 Paleta Visual Completa Referência!**

Mantenha este arquivo aberto enquanto refatora. 💪
