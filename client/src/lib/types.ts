// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

// Experience types
export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

// Skill types
export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

// Social link types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
