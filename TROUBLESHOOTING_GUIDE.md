# 🛠️ Troubleshooting & Boas Práticas

## ⚠️ Problemas Comuns

### 1️⃣ "Classe não está sendo aplicada"

**Sintoma:** Você aplicou `.text-heading` mas o texto não mudou de cor

**Causas possíveis:**
- ❌ Você está usando `!important` em outra classe específica
- ❌ Tailwind não reconheceu a classe
- ❌ A classe está sobrescrita por `.dark` ou media query

**Solução:**
```tsx
// ❌ ERRADO
<h1 className="text-2xl text-[#4A3B32]">Título</h1>

// ✅ CERTO
<h1 className="text-2xl text-heading">Título</h1>

// Se ainda não funcionar, verificar globals.css:
// @layer utilities {
//   .text-heading {
//     @apply text-[#4A3B32];
//   }
// }
```

---

### 2️⃣ "A cor fica diferente no modo dark"

**Sintoma:** Seu componente usa `.bg-surface` mas fica muito escuro à noite

**Causa:** A paleta dark inverteu as cores automaticamente

**Solução:**
```tsx
// ✅ CERTO - Deixar inversão automática funcionar
<div className="bg-surface">
  Conteúdo
</div>

// Se precisar controlar manualmente:
<div className="bg-surface dark:bg-surface">
  Conteúdo (forçar mesma cor nos dois modos)
</div>
```

---

### 3️⃣ "Classe com modificador (_66%, opacity, etc) não funciona"

**Sintoma:** Você tentou usar `.text-secondary/80` e nada aconteceu

**Causa:** Modificadores de opacity exigem valores pré-definidos

**Solução:**
```tsx
// ❌ ERRADO
<p className="text-secondary/66">Texto</p>

// ✅ CERTO - Use valores padrão Tailwind
<p className="text-secondary/50">Texto com 50% opacity</p>
<p className="text-secondary/75">Texto com 75% opacity</p>
<p className="text-secondary/90">Texto com 90% opacity</p>

// Se precisar de 66% exato, use inline style:
<p className="text-secondary" style={{ opacity: 0.66 }}>
  Texto com 66% opacity
</p>
```

---

### 4️⃣ "Remover color-mix() deixou a cor diferente"

**Sintoma:** Quando troquei `color-mix(in_srgb,var(--franciscan-sand)_66%,white_34%)` por `border-soft`, a borda ficou mais clara/escura

**Causa:** O `color-mix()` criava uma cor intermediária; a classe semântica usa a cor exata do token

**Solução:**
```tsx
// Se a diferença é perceptível, ajuste em globals.css:

// @layer utilities {
//   .border-soft-66 {
//     border-color: color-mix(in srgb, var(--semantic-border-soft) 66%, white 34%);
//   }
// }

// Depois use:
<div className="border-soft-66">
  Com 66% de saturação
</div>

// OU escolha outra classe semântica:
<div className="border-soft">  // 100% saturação
  Borda mais definida
</div>
```

---

### 5️⃣ "Meu componente usa classes customizadas do ShadCN"

**Sintoma:** Seu botão usa `.button` do ShadCN mas quer integrar com design system

**Causa:** Conflito entre namespaces de classes

**Solução:**
```tsx
// ✅ CERTO - Combinar ShadCN + semantic classes
import { Button } from '@/components/ui/button';

export function MyButton({ children }) {
  return (
    <Button className="btn-primary">
      {children}
    </Button>
  );
}

// ShadCN classes mantêm funcionalidade
// btn-primary adiciona tema semântico
// Tailwind resolve conflitos em cascata
```

---

### 6️⃣ "Build falha: 'Unknown class name'"

**Sintoma:** `npm run build` retorna erro `Unknown class name: .text-heading`

**Causa:** Tailwind config não está incluindo a classe no build

**Solução:**
```tsx
// 1. Verificar tailwind.config.ts:
export default {
  theme: {
    extend: {
      colors: {
        'heading': '#4A3B32',  // ✅ Precisa existir aqui
        'text-heading': '#4A3B32',  // ❌ Isso não funciona em colors
      }
    }
  }
}

// 2. Verificar globals.css:
// @layer utilities {
//   .text-heading {
//     @apply text-[#4A3B32];  // ✅ Precisa estar aqui
//   }
// }

// 3. Se ainda não funcionar:
npx tailwindcss -i ./src/app/globals.css -o ./output.css --watch
// Isso mostra erros de parsing em tempo real
```

---

### 7️⃣ "Classe funciona em dev mas não em production"

**Sintoma:** `npm run dev` mostra certo, mas na build/deploy fica diferente

**Causa:** Purging de CSS (classes não detectadas)

**Solução:**
```tsx
// tailwind.config.ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // ✅ Incluir todos os arquivos
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Isso garante que o Tailwind varre todos os arquivos
  // e inclui as classes na build final
}

// Depois:
npm run build  // Fazer rebuild
```

---

### 8️⃣ "Precisei mudar a paleta, onde faço?"

**Sintoma:** Design pediu para mudar o brand de `#6B4E3D` para `#7A5F4F`

**Passos:**

```tsx
// 1. Editar tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'brand': '#7A5F4F',  // ← Atualizar aqui
      }
    }
  }
}

// 2. Editar src/app/globals.css
:root {
  --semantic-brand: #7A5F4F;  // ← Atualizar aqui também
}

// 3. Nenhuma mudança nos components!
// Todas as classes .bg-brand, .text-brand, .btn-primary
// automaticamente usarão a nova cor

// 4. Testar
npm run dev
// Verificar que todo brand mudou de cor
```

---

## ✅ Boas Práticas

### 1️⃣ Usar classe base, não inline styles

```tsx
// ❌ EVITAR
<h1 style={{ color: '#4A3B32' }}>Título</h1>

// ✅ PREFERIR
<h1 className="text-heading">Título</h1>

// Por quê?
// - Consistência visual
// - Fácil manutenção (trocar paleta em 1 lugar)
// - Melhor performance (classes são pré-compiladas)
```

---

### 2️⃣ Usar composição de classes ao invés de @apply

```tsx
// ❌ EVITAR (em globals.css)
.my-custom-card {
  @apply rounded-3xl border border-soft p-8 bg-soft;
}

// ✅ PREFERIR (em React)
<div className="rounded-3xl border border-soft p-8 bg-soft">
  Conteúdo
</div>

// ✅ OU usar @layer components
@layer components {
  .card-soft {
    @apply rounded-3xl border border-soft p-8 bg-soft;
  }
}

// Por quê?
// - React é mais legível
// - Fácil variar per-instância
// - Menos CSS gerado
```

---

### 3️⃣ Manter semântica mesmo com variações

```tsx
// ❌ EVITAR - Nós matamos a semântica
<button className="bg-[#6B4E3D]">Clique</button>

// ✅ PREFERIR - Use token base + modificadores
<button className="bg-brand hover:bg-brand-hover">Clique</button>

// ✅ SE PRECISAR VARIAR - Estenda a paleta
// Em tailwind.config.ts:
colors: {
  'brand': '#6B4E3D',
  'brand-hover': '#8B6A58',
  'brand-deep': '#4A3B32',
  'brand-light': '#8B7A6F',  // ← Nova variação
}
```

---

### 4️⃣ Documentar exceções em comentários

```tsx
// ✅ BOM - Explica por que saiu do padrão
<div className="border-2 border-accent">
  {/* Exceção: Design requestou borda de accent para destaque especial */}
  Conteúdo
</div>

// ❌ RUIM - Sem contexto
<div className="border-2 border-[#6C8F6B]">
  Conteúdo
</div>
```

---

### 5️⃣ Testar sempre com Dark Mode

```tsx
// ✅ BOM - Componente funciona nos dois modos
<div className="bg-surface text-primary">
  Funciona em light e dark
</div>

// ❌ RUIM - Pode ficar ilegível no modo dark
<div className="bg-white text-black">
  Pode ficar invisível à noite
</div>
```

---

### 6️⃣ Agrupar classes lógicas

```tsx
// ❌ EVITAR - Desorganizado
<button className="text-heading bg-brand px-6 py-3 rounded-lg hover:bg-brand-hover font-semibold inline-flex items-center">

// ✅ PREFERIR - Lógico e legível
<button className="
  inline-flex items-center
  px-6 py-3
  rounded-lg
  bg-brand hover:bg-brand-hover
  text-heading font-semibold
">

// ✅ OU usar classe componente
<button className="btn-primary">
```

---

### 7️⃣ Usar extends corretamente

```tsx
// ✅ BOM - Cria classe derivada
<button className="btn-primary">Enviar</button>

// Se precisar mudar marginalmente:
<button className="btn-primary ms-2">Enviar</button>

// ❌ EVITAR - Duplicar classe
<button className="btn-primary px-8">Enviar</button>

// ✅ SE PRECISAR - Estender em globals.css
@layer components {
  .btn-primary-large {
    @apply btn-primary px-8 py-4;
  }
}
```

---

### 8️⃣ Atualizar tipagem se usar TypeScript

```tsx
// ✅ RECOMENDADO - Tipos semânticos
interface ComponentProps {
  textColor?: 'heading' | 'primary' | 'secondary' | 'muted';
  bgColor?: 'page' | 'surface' | 'soft';
}

export function Component({ textColor = 'primary', bgColor = 'page' }) {
  return (
    <div className={`bg-${bgColor} text-${textColor}`}>
      {/* TypeScript valida os valores */}
    </div>
  );
}
```

---

## 🚀 Performance Tips

### 1️⃣ Usar `className` ao invés de template strings

```tsx
// ❌ LENTO - Novo objeto a cada render
<div className={`text-${color}`}>

// ✅ RÁPIDO - Classe estática
<div className="text-heading">

// ✅ SE PRECISAR DINÂMICO - Mapear valores
const colorClass = {
  heading: 'text-heading',
  primary: 'text-primary',
  secondary: 'text-secondary',
};
<div className={colorClass[color]}>
```

---

### 2️⃣ Evitar classes geradas dinamicamente

```tsx
// ❌ EVITAR - Tailwind não consegue previamente gerar isso
for (let i = 0; i < 10; i++) {
  classes += `p-${i} `;  // Não vai compilar
}

// ✅ CERTO - Use classe fixa ou lista de variações
const paddingClasses = [
  'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-7', 'p-8'
];
<div className={paddingClasses[index]}>
```

---

### 3️⃣ Usar tailwind/forms para input padronizado

```tsx
// ✅ RECOMENDADO
// Instalar: npm install -D @tailwindcss/forms
// Em tailwind.config.ts:
// plugins: [require('@tailwindcss/forms')]

// Depois:
<input className="border border-soft rounded-lg px-3 py-2" />
// Automáticamente usa tokens semânticos
```

---

## 📊 Checklist de Refatoração

Ao migrar um componente, confira:

- [ ] Todas as classes `.text-franciscan-*` foram substituídas
- [ ] Todos os valores `color-mix()` foram removidos
- [ ] Todos os hex hardcoded foram mapeados (`#4A3B32` → `text-heading`)
- [ ] Componente testado em light mode
- [ ] Componente testado em dark mode
- [ ] Sem `!important` adicionado
- [ ] Classes agrupadas logicamente no file
- [ ] Sem inline styles (exceto varições únicas)
- [ ] Build passa sem erros (`npm run build`)
- [ ] Visual idêntico ao design (ou melhoria aprovada)

---

## 📞 Quando Chamar Ajuda

### Cenários para Escalação

1. **Cores bem diferentes após troca:**
   - Verifique se não há conflito com outro seletor
   - Abra DevTools (F12) e veja qual classe está sendo aplicada
   - Procure por `!important` em outros places

2. **Classes funcionam em dev mas não em prod:**
   - Executar `npm run build` localmente
   - Verificar `content` em `tailwind.config.ts`
   - Limpar `.next` e tentar novamente

3. **Componente ShadCN fica estranho:**
   - Verificar `src/lib/utils.ts` (pode ter `cn()` helper)
   - Consultar docs: https://ui.shadcn.com/

4. **Dúvida sobre qual classe usar:**
   - Procurar em `DESIGN_SYSTEM_MIGRATION.md` (tabela de mapping)
   - Procurar em `COMPONENT_REFACTORING_EXAMPLES.md` (exemplos por tipo)
   - Procurar em `globals.css` (definições de classes)

---

## 🎓 Resumo Rápido

| Problema | Solução |
|----------|---------|
| Cor não muda | Verificar typo, checker DevTools |
| Color-mix quebrou | Usar classe semântica ao invés |
| Dark mode fica ruim | Deixar inversão automática funcionar |
| Build falha | Verificar `content` em config |
| Performance lenta | Usar classes estáticas não dinâmicas |
| Não sabe qual classe usar | Procurar em tabelas de mapping |

---

**Perguntas? Consulte os arquivos:**
- `DESIGN_SYSTEM_MIGRATION.md` — Mapping completo
- `COMPONENT_REFACTORING_EXAMPLES.md` — Exemplos por tipo
- `src/app/globals.css` — Definições de classes
- `tailwind.config.ts` — Valores de tokens
