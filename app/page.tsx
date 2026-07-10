import { About } from '@/components/About';
import { ContactSection } from '@/components/Contact';
import { ExperienceSection } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SkillsSection } from '@/components/Skills';
import {
  getContact,
  getExperience,
  getProfile,
  getSite,
  getSkills,
} from '@/lib/data';

export default function HomePage() {
  const site = getSite();
  const profile = getProfile();
  const contact = getContact();
  const experience = getExperience();
  const skills = getSkills();

  return (
    <>
      <div className="page-frame">
        <Header name={profile.name} />
        <main id="main">
          <Hero profile={profile} calendly={contact.calendly} />
          <About profile={profile} />
          <ExperienceSection experience={experience} />
          <SkillsSection skills={skills} />
          <ContactSection contact={contact} />
        </main>
      </div>
      <Footer site={site} contact={contact} />
    </>
  );
}
