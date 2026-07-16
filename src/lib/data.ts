import contact from '../../data/contact.json';
import experience from '../../data/experience.json';
import profile from '../../data/profile.json';
import site from '../../data/site.json';
import skills from '../../data/skills.json';

export type Site = typeof site;
export type Profile = typeof profile;
export type Contact = typeof contact;
export type Experience = (typeof experience)[number];
export type SkillGroup = (typeof skills)[number];

export function getSite(): Site {
  return site;
}

export function getProfile(): Profile {
  return profile;
}

export function getContact(): Contact {
  return contact;
}

export function getExperience(): Experience[] {
  return experience;
}

export function getSkills(): SkillGroup[] {
  return skills;
}
