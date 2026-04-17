/**
 * Mock Data - Ordem dos Frades Menores no Brasil
 * Província Santa Cruz
 * 
 * Conteúdo inspirado nos valores franciscanos:
 * fraternidade, minoridade, missão, simplicidade, acolhida e cuidado com a criação
 */

export const siteConfig = {
  name: "Frades Menores no Brasil",
  fullName: "Ordem dos Frades Menores - Província Santa Cruz",
  description: "Uma presença franciscana viva: fraternidade, simplicidade e cuidado com a criação",
  url: "https://fradesmenores.org.br",
  province: "Província Santa Cruz",
  location: "Belo Horizonte, MG",
  founded: "1891",
};

export const navigation = {
  main: [
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Espiritualidade", href: "#espiritualidade" },
    { name: "Presenças", href: "#presencas" },
    { name: "Vocações", href: "#vocacoes" },
    { name: "Reflexões", href: "#reflexoes" },
    { name: "Contato", href: "#contato" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/vocacaofranciscanaofm", icon: "instagram" },
    { name: "YouTube", href: "https://youtube.com/c/EscolaFranciscanadeTeologia", icon: "youtube" },
    { name: "Facebook", href: "https://facebook.com/franciscanosPSC", icon: "facebook" },
  ],
};

export const heroContent = {
  title: "Uma presença que acolhe",
  subtitle: "Frades Menores no Brasil",
  description: `Há mais de 800 anos, Francisco de Assis escolheu viver o Evangelho 
    com simplicidade e alegria. Hoje, continuamos essa busca: homens que vivem em 
    fraternidade, servindo com humildade e cuidando de toda a criação.`,
  cta: {
    primary: { text: "Conhecer nossa história", href: "#quem-somos" },
    secondary: { text: "Vida franciscana", href: "#espiritualidade" },
  },
  quote: {
    text: "O Senhor me disse que queria que eu fosse um novo louco no mundo.",
    author: "Francisco de Assis",
  },
};

export const aboutContent = {
  title: "Quem Somos",
  subtitle: "Uma família fraterna a serviço do Reino",
  description: `Somos a Ordem dos Frades Menores (OFM) no Brasil, parte de uma família 
    religiosa presente em todo o mundo. Vivemos em fraternidade, seguindo Jesus Cristo 
    no carisma de Francisco de Assis.`,
  pillars: [
    {
      title: "Fraternidade",
      description: "Vivemos como irmãos, partilhando vida, fé e missão. Nossa comunidade é sinal de que outro mundo é possível.",
      icon: "users",
    },
    {
      title: "Minoridade",
      description: "Escolhemos viver sem poder, sem posses, sem prestígio. Estamos entre os últimos, como Jesus esteve.",
      icon: "heart",
    },
    {
      title: "Missão",
      description: "Anunciamos o Evangelho com a vida, não apenas com palavras. Estamos presente nas periferias existenciais.",
      icon: "compass",
    },
    {
      title: "Criação",
      description: "Cuidamos da Casa Comum. Para Francisco, todas as criaturas eram irmãs, dignas de respeito e cuidado.",
      icon: "leaf",
    },
  ],
  stats: [
    { value: "800+", label: "Anos de história" },
    { value: "120", label: "Frades no Brasil" },
    { value: "25", label: "Comunidades" },
    { value: "6", label: "Estados presentes" },
  ],
};

export const spiritualityContent = {
  title: "Nossa Espiritualidade",
  subtitle: "O caminho de Francisco",
  description: `A espiritualidade franciscana nasce do encontro com o Deus que se faz 
    pobre e menor. É uma espiritualidade encarnada, alegre, simples - que encontra 
    o divino no cotidiano e em cada criatura.`,
  elements: [
    {
      title: "O Evangelho como regra",
      description: "Para Francisco, o Evangelho não era um livro de leis, mas um convite à vida. Cada palavra de Jesus era para ser vivida, não apenas estudada.",
    },
    {
      title: "A pobreza como liberdade",
      description: "Não por penitência, mas por amor. A pobreza liberta para relações genuínas, sem possessão nem dominação.",
    },
    {
      title: "A criação como revelação",
      description: "Em todas as criaturas, Francisco via um reflexo do Criador. Irmão Sol, Irmã Lua, Irmão Lobo - todos eram família.",
    },
    {
      title: "A alegria como testemunho",
      description: "Os frades devem alegrar-se sempre no Senhor. A alegria franciscana brota da gratidão, não das circunstâncias.",
    },
  ],
  highlights: [
    {
      title: "Oração Contemplativa",
      image: "/images/prayer.jpg",
      description: "A oração é o coração da vida franciscana. Momentos de silêncio, escuta e adoração.",
    },
    {
      title: "Vida Fraterna",
      image: "/images/community.jpg",
      description: "Compartilhamos tudo: oração, trabalho, mesa, sonhos. A fraternidade é nossa primeira pregação.",
    },
    {
      title: "Serviço aos Pobres",
      image: "/images/service.jpg",
      description: "Estamos presentes nas periferias, nos hospitais, nas escolas, nas ruas. Onde há necessidade, há franciscanos.",
    },
  ],
};

export const presenceContent = {
  title: "Nossas Presenças",
  subtitle: "Onde estamos",
  description: `A Província Santa Cruz está presente em seis estados brasileiros, 
    em grandes cidades e no interior, em paróquias, santuários, escolas e obras sociais.`,
  locations: [
    {
      city: "Belo Horizonte",
      state: "MG",
      type: "Sede Provincial",
      description: "Casa provincial e curia, formação inicial, paróquia e santuário.",
    },
    {
      city: "São Paulo",
      state: "SP",
      type: "Comunidade",
      description: "Presença em bairros periféricos, pastoral universitária.",
    },
    {
      city: "Rio de Janeiro",
      state: "RJ",
      type: "Comunidade",
      description: "Paróquia histórica, trabalho com população de rua.",
    },
    {
      city: "Ouro Preto",
      state: "MG",
      type: "Santuário",
      description: "Santuário histórico, turismo religioso, arte sacra.",
    },
    {
      city: "Tiradentes",
      state: "MG",
      type: "Paróquia",
      description: "Paróquia histórica, formação permanente, retiros.",
    },
    {
      city: "Diamantina",
      state: "MG",
      type: "Comunidade",
      description: "Presença no Vale do Jequitinhonha, obras sociais.",
    },
    {
      city: "Juiz de Fora",
      state: "MG",
      type: "Comunidade",
      description: "Paróquia universitária, pastoral da comunicação.",
    },
    {
      city: "Vitória",
      state: "ES",
      type: "Comunidade",
      description: "Paróquia e obras sociais, pastoral da saúde.",
    },
    {
      city: "Curitiba",
      state: "PR",
      type: "Comunidade",
      description: "Centro de espiritualidade, retiros e formação.",
    },
    {
      city: "Brasília",
      state: "DF",
      type: "Comunidade",
      description: "Presença na capital federal, pastoral política.",
    },
  ],
};

export const vocationsContent = {
  title: "Vocações",
  subtitle: "Uma chamada à vida plena",
  description: `Você sente um apelo para algo maior? Uma inquietação que não se 
    cala? Talvez Deus esteja te convidando para uma aventura de fé e serviço 
    como franciscano.`,
  steps: [
    {
      number: "01",
      title: "Discernimento",
      description: "Um período de escuta e acompanhamento para conhecer a vocação franciscana e discernir sua chamada.",
    },
    {
      number: "02",
      title: "Postulantado",
      description: "Tempo de integração à vida fraterna, estudo da fé e conhecimento da história franciscana.",
    },
    {
      number: "03",
      title: "Noviciado",
      description: "Ano de formação intensiva, aprofundamento da espiritualidade e compromisso com a Ordem.",
    },
    {
      number: "04",
      title: "Profissão",
      description: "Compromisso público de viver os conselhos evangélicos em fraternidade, como sinal do Reino.",
    },
  ],
  contact: {
    title: "Quer saber mais?",
    description: "Nossa equipe de animação vocacional está disponível para conversar, tirar dúvidas e acompanhar seu discernimento.",
    email: "vocacoes@fradesmenores.org.br",
    phone: "(31) 3333-4444",
    schedule: "Atendimento de segunda a sexta, das 9h às 17h",
  },
};

export const reflectionsContent = {
  title: "Reflexões",
  subtitle: "Pensamentos para o caminho",
  description: `Textos breves, orações e meditações para alimentar a jornada 
    espiritual. O silêncio que fala, a palavra que silencia.`,
  posts: [
    {
      title: "Onde está Deus?",
      excerpt: "Não nos templos suntuosos, mas nas periferias da existência. Francisco descobriu Deus nos leprosos, nos pobres, na natureza ferida.",
      author: "Frei Carlos Mestre",
      date: "2025-01-15",
      category: "Espiritualidade",
    },
    {
      title: "A alegria de ser menor",
      excerpt: "Num mundo que exalta o sucesso e o poder, escolher ser menor é uma revolução silenciosa. É se libertar para amar de verdade.",
      author: "Frei João Silva",
      date: "2025-01-10",
      category: "Vida Franciscana",
    },
    {
      title: "Cuidar da Casa Comum",
      excerpt: "A ecologia não é modismo para franciscanos. É herança de Francisco, que via em cada criatura um reflexo do Criador.",
      author: "Frei Pedro Santos",
      date: "2025-01-05",
      category: "Criação",
    },
  ],
};

export const contactContent = {
  title: "Contato",
  subtitle: "Fale conosco",
  description: `Estamos à disposição para conversar, esclarecer dúvidas, 
    agendar visitas ou receber suas intenções de oração.`,
  address: {
    street: "Rua Frei Orlando, 100",
    neighborhood: "Centro",
    city: "Belo Horizonte",
    state: "MG",
    zip: "30110-000",
    country: "Brasil",
  },
  phones: [
    { label: "Secretaria", number: "(31) 3333-4444" },
    { label: "Vocações", number: "(31) 3333-5555" },
  ],
  email: "contato@fradesmenores.org.br",
  hours: {
    weekdays: "8h às 12h, 14h às 18h",
    weekend: "8h às 12h (sábados)",
  },
};

export const footerContent = {
  description: `A Ordem dos Frades Menores está presente no Brasil desde o século XIX, 
    construindo uma história de fé, serviço e fraternidade.`,
  links: {
    about: [
      { name: "Nossa História", href: "#historia" },
      { name: "A Ordem no Mundo", href: "#ordem" },
      { name: "São Francisco", href: "#francisco" },
      { name: "Santa Clara", href: "#clara" },
    ],
    life: [
      { name: "Vida Fraterna", href: "#fraternidade" },
      { name: "Oração", href: "#oracao" },
      { name: "Missão", href: "#missao" },
      { name: "Formação", href: "#formacao" },
    ],
    media: [
      { name: "Reflexões", href: "#reflexoes" },
      { name: "Notícias", href: "#noticias" },
      { name: "Eventos", href: "#eventos" },
      { name: "Publicações", href: "#publicacoes" },
    ],
  },
  legal: [
    { name: "Política de Privacidade", href: "#privacidade" },
    { name: "Termos de Uso", href: "#termos" },
  ],
};
