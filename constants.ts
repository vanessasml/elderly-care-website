import { Content, Activity, TeamMember, Partner } from './types';

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 1,
    title: "Workshop de Pintura Criativa",
    date: "2026",
    description: "Uma tarde cheia de cores e expressão artística onde os nossos idosos exploraram a sua criatividade através da aguarela.",
    imageUrl: "https://picsum.photos/id/1015/800/600"
  },
  {
    id: 2,
    title: "Caminhada no Parque da Cidade",
    date: "2026",
    description: "Promoção da saúde física e convívio social com uma caminhada leve, seguida de um piquenique saudável.",
    imageUrl: "https://picsum.photos/id/1084/800/600"
  },
  {
    id: 3,
    title: "Aula de Inclusão Digital",
    date: "2026",
    description: "Ajudando a comunidade a conectar-se com familiares distantes através do uso de tablets e smartphones.",
    imageUrl: "https://picsum.photos/id/3/800/600"
  },
  {
    id: 4,
    title: "Baile de Outono",
    date: "2026",
    description: "Música, dança e muita alegria marcaram o nosso tradicional baile de outono.",
    imageUrl: "https://picsum.photos/id/129/800/600"
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Fernanda Pinheiro",
    role: "Assistente Social e Diretora Geral",
    image: "https://picsum.photos/id/64/300/300"
  },
  {
    name: "Por preencher",
    role: "Coordenador de Atividades",
    image: "https://picsum.photos/id/91/300/300"
  },
  {
    name: "Anuncio em Breve",
    role: "Fisioterapeuta",
    image: "https://picsum.photos/id/338/300/300"
  }
];

export const PARTNERS_DATA: Partner[] = [
  { name: "Câmara Municipal de Castelo Branco", website: "#" },
  { name: "Anuncio em Breve", website: "#" },
  { name: "Anuncio em Breve", website: "#" },
  { name: "Anuncio em Breve", website: "#" }
];

export const TRANSLATIONS: Record<'pt' | 'en', Content> = {
  pt: {
    nav: {
      home: "Início",
      mission: "Missão e Valores",
      activities: "Atividades",
      about: "Quem Somos",
      contact: "Contactos",
    },
    home: {
      heroTitle: "Envelhecimento Ativo e Feliz",
      heroSubtitle: "Promovemos a qualidade de vida, autonomia e integração social dos idosos através de atividades e apoio comunitário.",
      cta: "Junte-se a Nós",
      featuresTitle: "O Que Fazemos",
      feature1Title: "Inclusão Digital",
      feature1Desc: "Atividades para ajudar os idosos a conectarem-se com a tecnologia e o mundo digital.",
      feature2Title: "Atividades Socioculturais",
      feature2Desc: "Workshops, passeios e eventos para combater o isolamento e promover a amizade.",
      feature3Title: "Saúde e Movimento",
      feature3Desc: "Aulas de ginástica adaptada e acompanhamento de saúde regular.",
    },
    mission: {
      title: "A Nossa Identidade",
      missionTitle: "Missão",
      missionDesc: "Promover a dignidade e qualidade de vida da população sénior, combatendo o isolamento social e fomentando um envelhecimento ativo, saudável e participativo.",
      visionTitle: "Visão",
      visionDesc: "Ser uma referência de excelência no apoio social, construindo uma comunidade onde cada idoso se sente valorizado, integrado e feliz.",
      valuesTitle: "Valores",
      valuesList: ["Respeito e Dignidade", "Solidariedade", "Inovação Social", "Transparência", "Humanização"],
    },
    activities: {
      title: "Diário de Atividades",
      subtitle: "Acompanhe os nossos momentos mais recentes e as memórias que construímos juntos.",
    },
    about: {
      title: "Quem Somos",
      description: "A Idoso Ativo nasceu da vontade de fazer a diferença na vida dos mais velhos. Somos uma equipa multidisciplinar apaixonada pelo que faz, composta por profissionais de saúde, assistentes sociais e voluntários dedicados.",
      teamTitle: "A Nossa Equipa",
      partnersTitle: "Parceiros",
    },
    contact: {
      title: "Fale Connosco",
      subtitle: "Estamos aqui para ajudar. Entre em contacto para saber mais sobre os nossos serviços ou para se tornar voluntário.",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Mensagem",
      sendButton: "Enviar Mensagem",
      addressTitle: "Morada",
      phoneTitle: "Telefone",
      emailTitle: "Email",
      successMessage: "Mensagem enviada com sucesso! Entraremos em contacto brevemente.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    }
  },
  en: {
    nav: {
      home: "Home",
      mission: "Mission & Values",
      activities: "Activities",
      about: "Who We Are",
      contact: "Contact",
    },
    home: {
      heroTitle: "Active and Happy Aging in Place",
      heroSubtitle: "We promote quality of life, autonomy, and social integration for the elderly through activities and community support.",
      cta: "Join Us",
      featuresTitle: "What We Do",
      feature1Title: "Digital Inclusion",
      feature1Desc: "Activities to help the elderly connect with technology and the digital world.",
      feature2Title: "Sociocultural Activities",
      feature2Desc: "Workshops, tours, and events to combat isolation and promote friendship.",
      feature3Title: "Health & Movement",
      feature3Desc: "Adapted gymnastics classes and regular health monitoring.",
    },
    mission: {
      title: "Our Identity",
      missionTitle: "Mission",
      missionDesc: "To promote the dignity and quality of life of the senior population, fighting social isolation and fostering active, healthy, and participatory aging.",
      visionTitle: "Vision",
      visionDesc: "To be a reference of excellence in social support, building a community where every senior feels valued, integrated, and happy.",
      valuesTitle: "Values",
      valuesList: ["Respect & Dignity", "Solidarity", "Social Innovation", "Transparency", "Humanization"],
    },
    activities: {
      title: "Activity Diary",
      subtitle: "Follow our most recent moments and the memories we build together.",
    },
    about: {
      title: "Who We Are",
      description: "Idoso Ativo was born from the desire to make a difference in the lives of the elderly. We are a multidisciplinary team passionate about what we do, composed of health professionals, social workers, and dedicated volunteers.",
      teamTitle: "Our Team",
      partnersTitle: "Partners",
    },
    contact: {
      title: "Reach Out",
      subtitle: "We are here to help. Contact us to learn more about our services or to become a volunteer.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
      successMessage: "Message sent successfully! We will contact you soon.",
    },
    footer: {
      rights: "All rights reserved.",
    }
  }
};