# 🔄 Exemplos de Refatoração por Componente

## 1️⃣ Header/Navigation

### ANTES
```tsx
export function Header() {
  return (
    <header className="bg-white border-b border-[#E5D3B3]">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-franciscan-habit font-bold text-xl">Logo</h1>
        
        <a href="#" className="text-franciscan-earth hover:text-franciscan-habit">
          Menu Item
        </a>
        
        <button className="btn-institutional">
          CTA
        </button>
      </nav>
    </header>
  );
}
```

### DEPOIS
```tsx
export function Header() {
  return (
    <header className="bg-surface border-b border-soft">
      <nav className="container-franciscan flex justify-between items-center py-4">
        <h1 className="text-heading font-bold text-xl">Logo</h1>
        
        <a href="#" className="text-primary hover:text-heading">
          Menu Item
        </a>
        
        <button className="btn-primary">
          CTA
        </button>
      </nav>
    </header>
  );
}
```

**Mudanças:**
- `bg-white` → `bg-surface`
- `border-[#E5D3B3]` → `border-soft`
- `text-franciscan-habit` → `text-heading`
- `text-franciscan-earth` → `text-primary`
- `btn-institutional` → `btn-primary`

---

## 2️⃣ Footer

### ANTES
```tsx
export function Footer() {
  return (
    <footer className="bg-[#4A3B32] text-franciscan-cream">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8">
          
          <div className="border-l border-[#8B6A58] pl-6">
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <p className="text-[#E5D3B3] text-sm">Email: info@example.com</p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <a href="#" className="link-micro text-franciscan-cream">
              Link Item
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
```

### DEPOIS
```tsx
export function Footer() {
  return (
    <footer className="bg-brand-deep text-inverse">
      <div className="container-franciscan py-16">
        <div className="grid grid-cols-3 gap-8">
          
          <div className="border-l border-brand-hover pl-6">
            <h3 className="text-inverse font-bold mb-4">Contato</h3>
            <p className="text-inverse/90 text-sm">Email: info@example.com</p>
          </div>
          
          <div>
            <h3 className="text-inverse font-bold mb-4">Links</h3>
            <a href="#" className="link-secondary text-inverse">
              Link Item
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
```

**Mudanças:**
- `bg-[#4A3B32]` → `bg-brand-deep`
- `text-franciscan-cream` → `text-inverse`
- `text-white` → `text-inverse`
- `border-[#8B6A58]` → `border-brand-hover`
- `text-[#E5D3B3]` → `text-inverse/90`

---

## 3️⃣ SectionHeader (Componente Reutilizável)

### ANTES
```tsx
export function SectionHeader({ kicker, title, description }) {
  return (
    <div>
      <p className="inline-block text-[11px] uppercase tracking-wider text-franciscan-clay font-bold mb-4">
        {kicker}
      </p>
      <h2 className="text-4xl font-bold text-franciscan-habit mb-4">
        {title}
      </h2>
      <p className="text-lg text-franciscan-earth max-w-2xl">
        {description}
      </p>
    </div>
  );
}
```

### DEPOIS
```tsx
export function SectionHeader({ kicker, title, description }) {
  return (
    <div>
      <p className="section-kicker">
        {kicker}
      </p>
      <h2 className="section-title">
        {title}
      </h2>
      <p className="section-lead">
        {description}
      </p>
    </div>
  );
}
```

**Mudanças:**
- Substituir estilos inline por classes semânticas: `section-kicker`, `section-title`, `section-lead`

---

## 4️⃣ Card Component Base

### ANTES
```tsx
export function Card({ icon: Icon, title, content }) {
  return (
    <div className="rounded-3xl border border-[#E5D3B3] p-8 bg-[#FBF7F2] hover:-translate-y-1 transition-all">
      <div className="w-12 h-12 rounded-lg bg-[#F8F2EA] flex items-center justify-center mb-4">
        <Icon className="text-franciscan-habit" />
      </div>
      <h3 className="text-2xl font-bold text-franciscan-habit mb-3">
        {title}
      </h3>
      <p className="text-franciscan-earth">
        {content}
      </p>
    </div>
  );
}
```

### DEPOIS
```tsx
export function Card({ icon: Icon, title, content }) {
  return (
    <div className="card-soft">
      <div className="w-12 h-12 rounded-lg bg-soft flex items-center justify-center mb-4">
        <Icon className="text-brand" />
      </div>
      <h3 className="text-2xl font-bold text-heading mb-3">
        {title}
      </h3>
      <p className="text-primary">
        {content}
      </p>
    </div>
  );
}
```

**Mudanças:**
- Todos os estilos de card → `card-soft`
- `text-franciscan-habit` → `text-heading`
- `text-franciscan-earth` → `text-primary`
- `bg-[#F8F2EA]` → `bg-soft`

---

## 5️⃣ Button Components

### ANTES
```tsx
export function Button({ children, variant = 'primary' }) {
  if (variant === 'primary') {
    return (
      <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-franciscan-habit text-white font-medium hover:bg-franciscan-tau transition-all">
        {children}
      </button>
    );
  }
  
  return (
    <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-franciscan-habit border border-[#E5D3B3] font-medium hover:bg-[#F8F2EA]">
      {children}
    </button>
  );
}
```

### DEPOIS
```tsx
export function Button({ children, variant = 'primary' }) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium";
  
  if (variant === 'primary') {
    return (
      <button className={`${baseClasses} btn-primary`}>
        {children}
      </button>
    );
  }
  
  return (
    <button className={`${baseClasses} btn-secondary`}>
      {children}
    </button>
  );
}
```

**Mudanças:**
- `bg-franciscan-habit text-white` → `btn-primary`
- `bg-white border border-[#E5D3B3]` → `btn-secondary`

---

## 6️⃣ Link Component

### ANTES
```tsx
export function LinkWithIcon({ href, children, icon: Icon }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 text-franciscan-habit font-semibold hover:text-franciscan-tau transition-colors">
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );
}
```

### DEPOIS
```tsx
export function LinkWithIcon({ href, children, icon: Icon }) {
  return (
    <a href={href} className="link-primary">
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );
}
```

**Mudanças:**
- Toda a estilização → `link-primary` ou `link-secondary`

---

## 7️⃣ Grid de Cards/Pilares

### ANTES
```tsx
export function PillarGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.id} className="rounded-3xl border border-[#E5D3B3] p-7 bg-[#FBF7F2]">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F8F2EA] text-[#8A7668] text-xs font-bold">
            {item.badge}
          </span>
          <h3 className="text-2xl font-bold text-franciscan-habit mt-4 mb-3">
            {item.title}
          </h3>
          <p className="text-franciscan-earth">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
```

### DEPOIS
```tsx
export function PillarGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.id} className="card-soft">
          <span className="inline-block px-3 py-1 rounded-full bg-soft text-secondary text-xs font-bold">
            {item.badge}
          </span>
          <h3 className="text-2xl font-bold text-heading mt-4 mb-3">
            {item.title}
          </h3>
          <p className="text-primary">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
```

**Mudanças:**
- Card container → `card-soft`
- Badge bg → `bg-soft`
- Badge text → `text-secondary`
- Título → `text-heading`
- Descrição → `text-primary`

---

## 8️⃣ Form/Input

### ANTES
```tsx
export function Input({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-franciscan-habit mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-[#E5D3B3] bg-white text-franciscan-earth placeholder:text-franciscan-muted focus:border-franciscan-habit focus:outline-none"
      />
    </div>
  );
}
```

### DEPOIS
```tsx
export function Input({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-heading mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-soft bg-surface text-primary placeholder:text-muted focus:border-brand focus:outline-none"
      />
    </div>
  );
}
```

**Mudanças:**
- `text-franciscan-habit` → `text-heading`
- `border-[#E5D3B3]` → `border-soft`
- `bg-white` → `bg-surface`
- `text-franciscan-earth` → `text-primary`
- `text-franciscan-muted` → `text-muted`
- `focus:border-franciscan-habit` → `focus:border-brand`

---

## 9️⃣ Quote/Testimonial Block

### ANTES
```tsx
export function QuoteBlock({ text, author }) {
  return (
    <blockquote className="rounded-3xl border border-[#E5D3B3] px-8 py-6 bg-[#F8F2EA]">
      <p className="text-lg text-franciscan-earth italic mb-4">
        "{text}"
      </p>
      <footer className="text-sm font-semibold text-franciscan-habit">
        — {author}
      </footer>
    </blockquote>
  );
}
```

### DEPOIS
```tsx
export function QuoteBlock({ text, author }) {
  return (
    <blockquote className="quote-block">
      <p className="text-lg text-primary italic mb-4">
        "{text}"
      </p>
      <footer className="text-sm font-semibold text-heading">
        — {author}
      </footer>
    </blockquote>
  );
}
```

**Mudanças:**
- Card styles → `quote-block`
- Cores de texto → mapeadas para semânticas

---

## 🟢 Badges/Pills

### ANTES
```tsx
<span className="inline-block px-3 py-1 rounded-full border border-[#CDBA9A] text-[#6B4E3D] bg-[#F5EFE6] text-xs font-bold">
  Status
</span>
```

### DEPOIS
```tsx
<span className="inline-block px-3 py-1 rounded-full border border-border-strong text-brand bg-page text-xs font-bold">
  Status
</span>
```

---

## 📋 Quick Reference Table

| Elemento | Classe | Função |
|----------|--------|--------|
| Seção padrão | `section-shell` | Container com fundo page |
| Seção alt | `section-shell-alt` | Container com fundo soft |
| Header seção | `section-header` | Agrupa título + kicker |
| Kicker | `section-kicker` | Texto pequeno + linha |
| Título | `section-title` | Título de seção |
| Lead | `section-lead` | Descrição introdutória |
| Card base | `card-base` | Card simples |
| Card soft | `card-soft` | Card premium com elevação |
| Card contato | `card-contact` | Card com linha lateral |
| Botão primário | `btn-primary` | CTA principal |
| Botão secundário | `btn-secondary` | Ação secundária |
| Link primário | `link-primary` | Link com hover |
| Link secundário | `link-secondary` | Link com indicador |
| Surface suave | `surface-soft` | Superfícies diferenciadas |
| Quote | `quote-block` | Blocos de citação |

---

## ✅ Padrão Final

Ao refatorar qualquer componente, siga este processo:

1. **Identificar** — Quais classes antigas estão sendo usadas
2. **Mapear** — Usar a tabela acima como referência
3. **Substituir** — Trocar por classes semânticas
4. **Testar** — Verificar no navegador
5. **Commit** — Documentar a mudança

**Resultado:** Código limpo, consistente e fácil de manter! ✨
