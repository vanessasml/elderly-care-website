export type Language = 'pt' | 'en';

export interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Partner {
  name: string;
  website: string;
}

export interface Content {
  nav: {
    home: string;
    mission: string;
    activities: string;
    about: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    featuresTitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  mission: {
    title: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    valuesList: string[];
  };
  activities: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    teamTitle: string;
    partnersTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    successMessage: string;
  };
  footer: {
    rights: string;
  };
}