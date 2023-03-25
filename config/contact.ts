export enum ContactType {
  github = "github",
  linkedin = "linkedin",
  twitter = "twitter",
  email = "email",
  buymeacoffee = "buymeacoffee",
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: "@abdoashour07",
  site: "https://abdelfatah-ashour-portfolio.vercel.app/",
  calendly: "https://calendly.com/abdelfatahashour",
  links: {
    github: "https://github.com/abdelfatah-ashour",
    linkedin: "https://www.linkedin.com/in/abdelfatah-ashour",
    twitter: "https://twitter.com/abdoashour07",
    email: "mailto:abdelfatahashour4@gmail.com",
    buymeacoffee: "https://www.buymeacoffee.com/abdelfatah",
  },
};
