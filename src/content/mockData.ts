/**
 * Mock Data - Ordem dos Frades Menores no Brasil
 * Província Santa Cruz
 * 
 * Conteúdo inspirado nos valores franciscanos:
 * fraternidade, minoridade, missão, simplicidade, acolhida e cuidado com a criação
 */

export const siteConfig = {
  name: "Frades Menores",
  fullName: "Ordem dos Frades Menores - Província Santa Cruz",
  description: "Perto das pessoas, no caminho de Francisco",
  url: "https://fradesmenores.org.br",
  province: "Província Santa Cruz",
  location: "Belo Horizonte, MG",
  founded: "1891",
};

export const navigation = {
  main: [
    { name: "A Província Santa Cruz", href: "#provincia-santa-cruz" },
    { name: "Vocações", href: "#vocacao" },
    { name: "Vida e Missão", href: "#vida-e-missao" },
    { name: "Reflexões", href: "#reflexoes" },
    { name: "Contato", href: "#fale-conosco" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/vocacaofranciscanaofm", icon: "instagram" },
    { name: "YouTube", href: "https://youtube.com/c/EscolaFranciscanadeTeologia", icon: "youtube" },
    { name: "Facebook", href: "https://facebook.com/franciscanosPSC", icon: "facebook" },
  ],
};

export const heroContent = {
  title: "Perto das pessoas, no caminho de Francisco",
  subtitle: "Frades Menores · Província Santa Cruz",
  description: `Somos uma fraternidade em movimento. Vivemos a fé com simplicidade, 
    escuta e presença real. Caminhamos com o povo. Servimos nas comunidades. 
    E buscamos viver o Evangelho no ritmo da vida concreta.`,
  cta: {
    primary: { text: "Conhecer nossa história", href: "#provincia-santa-cruz" },
    secondary: { text: "Nossa vida franciscana", href: "#provincia-santa-cruz" },
  },
  quote: {
    text: "Começamos pequenos, mas não queremos viver longe de ninguém.",
    author: "Francisco de Assis",
  },
};

export const aboutContent = {
  title: "Quem Somos",
  subtitle: "Uma fraternidade que aprendeu a caminhar junto",
  description: `Nossa história começou longe daqui. A tradição franciscana chegou ao Brasil 
    pela coragem de frades vindos da Holanda, que encontraram em Manaus o primeiro passo 
    dessa missão. Depois vieram o Rio de Janeiro, Minas Gerais e muitos outros lugares. 
    Aos poucos, essa presença ganhou rosto brasileiro e se tornou a Província Santa Cruz.`,
  pillars: [
    {
      title: "Fraternidade",
      description: "Partilhamos a vida de forma concreta. Rezamos juntos, decidimos juntos e aprendemos a servir como irmãos de verdade.",
      icon: "users",
    },
    {
      title: "Minoridade",
      description: "Preferimos a simplicidade aos aplausos. Estar em segundo plano, para nós, é uma forma de ficar mais perto de quem precisa.",
      icon: "heart",
    },
    {
      title: "Missão",
      description: "A missão acontece onde a vida acontece: nas comunidades, nas escolas, nas periferias, nas paróquias e nos projetos sociais.",
      icon: "compass",
    },
    {
      title: "Criação",
      description: "Cuidar da criação é cuidar da casa comum. O mundo não é cenário. É dom, responsabilidade e relação.",
      icon: "leaf",
    },
  ],
  stats: [
    { value: "1891", label: "Início da missão no Brasil" },
    { value: "1950", label: "Autonomia provincial" },
    { value: "6", label: "Estados de presença" },
    { value: "1", label: "Fraternidade em caminho" },
  ],
};

export const historyContent = {
  title: "Nossa História",
  subtitle: "Da Holanda ao Brasil, uma missão que foi criando raiz",
  description: `A história da Província Santa Cruz começa na tradição franciscana 
    da Holanda e atravessa o oceano até chegar ao Brasil. Em Manaus, os primeiros 
    frades enfrentaram doenças, distâncias e as exigências de uma missão que pedia 
    coragem. Depois, vieram o Rio de Janeiro e Minas Gerais, onde a presença foi se 
    tornando mais estável, mais próxima e mais enraizada. Em 1950, essa caminhada 
    ganhou autonomia provincial. O que era missão se tornou casa, fraternidade e 
    responsabilidade compartilhada.`,
  moments: [
    {
      title: "Chegada ao Brasil",
      description: "Os primeiros passos nasceram da travessia e da confiança. A missão desembarcou em Manaus e encontrou o desafio de começar do zero.",
    },
    {
      title: "Tempo de prova",
      description: "A Amazônia trouxe doenças, distâncias e limitações. Foi um período duro, mas também fundador. A presença se mostrou firme onde havia fragilidade.",
    },
    {
      title: "Expansão e enraizamento",
      description: "Com o tempo, a missão se ampliou para o Rio de Janeiro e Minas Gerais. Paróquias, formação e comunidades deram novo corpo à presença franciscana.",
    },
    {
      title: "Autonomia em 1950",
      description: "A Província Santa Cruz passou a caminhar com rosto próprio. Não foi o fim de uma história. Foi o começo de uma maturidade vivida em fidelidade.",
    },
  ],
};

export const spiritualityContent = {
  title: "Nossa Espiritualidade",
  subtitle: "Rezar com os pés no chão",
  description: `A espiritualidade franciscana é simples porque nasce da vida. Ela não 
    separa oração e serviço, fé e cotidiano, silêncio e convivência. Francisco nos ensinou 
    a ver Deus no concreto: no irmão, na irmã, na mesa partilhada, na criação e nos gestos 
    pequenos que sustentam o amor.`,
  elements: [
    {
      title: "O Evangelho como regra",
      description: "Não começamos por ideias. Começamos por uma vida que quer escutar Jesus e traduzir o Evangelho em atitudes simples.",
    },
    {
      title: "A pobreza como liberdade",
      description: "Viver com pouco não é falta. É liberdade para servir, partilhar e não fazer da posse o centro da vida.",
    },
    {
      title: "A criação como revelação",
      description: "A natureza não é só beleza. É relação. Cuidar da criação é reconhecer que a vida inteira merece respeito.",
    },
    {
      title: "A alegria como testemunho",
      description: "A alegria franciscana não é barulho. É serenidade, gratidão e esperança mesmo quando o caminho é exigente.",
    },
  ],
  highlights: [
    {
      title: "Oração Contemplativa",
      image: "/images/prayer.jpg",
      description: "O silêncio abre espaço para ouvir melhor a Deus e também o que a vida pede de nós.",
    },
    {
      title: "Vida Fraterna",
      image: "/images/community.jpg",
      description: "Compartilhar a mesa, o trabalho e a oração é o jeito mais real de anunciar fraternidade.",
    },
    {
      title: "Serviço aos Pobres",
      image: "/images/service.jpg",
      description: "Nossa presença ganha sentido quando está perto de quem mais precisa: nas periferias, nas escolas, nas ruas e nos projetos sociais.",
    },
  ],
};

export const presenceContent = {
  title: "Nossas Presenças",
  subtitle: "Onde a vida nos chama",
  description: `Estamos em diferentes cidades e estados, mas sempre com o mesmo propósito: 
    estar perto das pessoas. Em cada lugar, a presença franciscana se traduz em educação, 
    pastoral, acolhida, formação e trabalho social.`,
  locations: [
    {
      city: "Belo Horizonte",
      state: "MG",
      type: "Sede Provincial",
      description: "Casa provincial, formação, discernimento e articulação da vida fraterna.",
    },
    {
      city: "São Paulo",
      state: "SP",
      type: "Comunidade",
      description: "Comunidades em bairros periféricos, com atenção à educação e à pastoral universitária.",
    },
    {
      city: "Rio de Janeiro",
      state: "RJ",
      type: "Comunidade",
      description: "Paróquia histórica e serviço junto a pessoas em situação de rua e vulnerabilidade.",
    },
    {
      city: "Ouro Preto",
      state: "MG",
      type: "Santuário",
      description: "Santuário, acolhida de peregrinos, arte sacra e memória viva da fé.",
    },
    {
      city: "Tiradentes",
      state: "MG",
      type: "Paróquia",
      description: "Paróquia, retiros, acompanhamento espiritual e cuidado com a vida comunitária.",
    },
    {
      city: "Diamantina",
      state: "MG",
      type: "Comunidade",
      description: "Presença no Vale do Jequitinhonha com obras sociais e serviço às famílias da região.",
    },
    {
      city: "Juiz de Fora",
      state: "MG",
      type: "Comunidade",
      description: "Paróquia universitária e pastoral da comunicação, com atenção à formação e ao diálogo.",
    },
    {
      city: "Vitória",
      state: "ES",
      type: "Comunidade",
      description: "Paróquia, obras sociais e presença junto à saúde e ao cuidado das pessoas.",
    },
    {
      city: "Curitiba",
      state: "PR",
      type: "Comunidade",
      description: "Centro de espiritualidade, retiros, formação e escuta vocacional.",
    },
    {
      city: "Brasília",
      state: "DF",
      type: "Comunidade",
      description: "Presença na capital federal com serviço pastoral e diálogo com a vida pública.",
    },
  ],
};

export const vocationsContent = {
  title: "Vocações",
  subtitle: "Quando a pergunta vira caminho",
  description: `Talvez você esteja vivendo uma busca silenciosa. Talvez exista em você 
    um desejo de servir, de viver com mais simplicidade e de encontrar uma forma de vida 
    mais livre. Se essa pergunta mora no seu coração, vale escutá-la com calma.`,
  steps: [
    {
      number: "01",
      title: "Discernimento",
      description: "Tempo de escuta, conversa e acompanhamento para entender se esse caminho faz sentido para sua vida.",
    },
    {
      number: "02",
      title: "Postulantado",
      description: "Fase de convivência mais próxima, estudo e encontro com a vida fraterna no dia a dia.",
    },
    {
      number: "03",
      title: "Noviciado",
      description: "Ano de formação mais intensa, para aprofundar a espiritualidade e amadurecer o compromisso.",
    },
    {
      number: "04",
      title: "Profissão",
      description: "Momento de assumir publicamente a vida fraterna e os conselhos evangélicos como escolha definitiva.",
    },
  ],
  contact: {
    title: "Quer conversar?",
    description: "Nossa equipe de animação vocacional pode caminhar com você, sem pressa e sem fórmulas prontas.",
    email: "vocacoes@fradesmenores.org.br",
    phone: "(31) 3469-5545",
    schedule: "Atendimento de segunda a sexta, das 9h às 17h",
  },
};

export const reflectionsContent = {
  title: "Reflexões",
  subtitle: "Palavras para caminhar",
  description: `Textos breves, orações e meditações nascidas da vida franciscana. 
    Não para ensinar de cima, mas para acompanhar de perto.`,
  posts: [
    {
      title: "Deus também passa pelo cotidiano",
      excerpt: "Nem sempre Deus se revela no extraordinário. Muitas vezes, Ele aparece no cuidado simples, na mesa partilhada e na atenção ao outro.",
      author: "Frei Carlos Mestre",
      date: "2025-01-15",
      category: "Espiritualidade",
    },
    {
      title: "Ser menor para ficar mais perto",
      excerpt: "Escolher a minoridade é recusar a lógica do prestígio para viver relações mais verdadeiras, mais livres e mais humanas.",
      author: "Frei João Silva",
      date: "2025-01-10",
      category: "Vida Franciscana",
    },
    {
      title: "Cuidar da Casa Comum",
      excerpt: "A criação é dom, não recurso. Quando a preservamos, estamos protegendo a vida de todos e honrando a herança de Francisco.",
      author: "Frei Pedro Santos",
      date: "2025-01-05",
      category: "Criação",
    },
  ],
};

export const lifeAndMissionContent = {
  title: "Vida e Missão",
  subtitle: "A missão acontecendo no chão da vida",
  description: `Aqui você encontra sinais concretos da presença franciscana: ações sociais,
    encontros, notícias das comunidades e histórias reais de quem caminha com a gente.
    Não é vitrine institucional. É vida partilhada em movimento.`,
  items: [
    {
      title: "Cozinha solidária amplia atendimento no Aglomerado",
      description:
        "Com apoio de voluntários e famílias da comunidade, o projeto passou a servir 280 refeições semanais e abriu rodas de escuta para mães e idosos.",
      category: "Missão",
      date: "2026-04-10",
      href: "#vida-e-missao",
    },
    {
      title: "Encontro provincial de juventudes franciscanas",
      description:
        "Jovens de seis cidades se reuniram em Belo Horizonte para um fim de semana de oração, oficinas de serviço e mutirão com pessoas em situação de rua.",
      category: "Evento",
      date: "2026-03-22",
      href: "#vida-e-missao",
    },
    {
      title: "Presença diária na beira do hospital",
      description:
        "Em Juiz de Fora, frades e leigos mantêm uma escala de visitas, bênçãos e acolhida para acompanhantes em longas internações, com apoio emocional e orientação prática.",
      category: "Testemunho",
      date: "2026-02-28",
      href: "#vida-e-missao",
    },
  ],
};

export const contactContent = {
  title: "Onde estamos",
  subtitle: "Província Santa Cruz em Belo Horizonte",
  description: `Se você quer conhecer melhor nossa missão, tirar dúvidas ou falar 
    sobre vocação, estamos à disposição.`,
  address: {
    street: "Rua Sabinópolis, 50A",
    neighborhood: "Carlos Prates",
    city: "Belo Horizonte",
    state: "MG",
    zip: "30710-340",
    country: "Brasil",
  },
  phones: [
    { label: "Secretaria", number: "(31) 3469-5545" },
  ],
  email: "contato@fradesmenores.org.br",
  hours: {
    weekdays: "8h às 12h, 14h às 18h",
    weekend: "8h às 12h (sábados)",
  },
};

export const footerContent = {
  description: `Uma fraternidade que atravessou oceanos, enfrentou desafios e criou raízes 
    no Brasil sem perder a simplicidade do início.`,
  links: {
    about: [
      { name: "Nossa História", href: "#historia" },
      { name: "Quem Somos", href: "#quem-somos" },
      { name: "Espiritualidade", href: "#espiritualidade" },
      { name: "Presenças", href: "#presencas" },
    ],
    life: [
      { name: "Vida Fraterna", href: "#fraternidade" },
      { name: "Oração", href: "#espiritualidade" },
      { name: "Missão", href: "#missao" },
      { name: "Formação", href: "#vocacoes" },
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

