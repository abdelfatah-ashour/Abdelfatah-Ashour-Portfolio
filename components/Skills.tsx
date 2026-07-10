import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import type { SkillGroup } from '@/lib/data';

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section
      id="skills"
      labelledBy="skills-heading"
      className="brand-section relative overflow-hidden"
    >
      <div
        aria-hidden
        className="brand-wash pointer-events-none absolute top-8 right-0 translate-x-1/4"
      >
        <div className="parallax-slow h-56 w-56 rounded-full bg-gradient-to-bl from-gold-soft/18 via-transparent to-transparent" />
      </div>
      <div
        aria-hidden
        className="brand-wash pointer-events-none absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4"
      >
        <div className="parallax-slow h-44 w-44 rounded-full bg-gradient-to-tr from-sky-mist/20 to-transparent" />
      </div>

      <SectionHeading
        id="skills-heading"
        eyebrow="Expertise"
        title="Skills"
        description="Four pillars of my frontend craft — from language fundamentals to the tools that keep products shipping."
      />

      <ul className="skills-board mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
        {skills.map((group, index) => (
          <li
            key={group.category}
            className={`skills-card reveal-scale skills-card-${index + 1} ${
              index % 2 === 1 ? 'reveal-delay-1' : ''
            }`}
          >
            <article className="skills-card-body">
              <header className="skills-card-head">
                <span aria-hidden className="skills-card-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="skills-card-title font-display">{group.category}</h3>
              </header>

              <div aria-hidden className="skills-card-rule" />

              <ul className="skills-card-list" aria-label={group.category}>
                {group.items.map((skill) => (
                  <li key={skill} className="skills-chip">
                    {skill}
                  </li>
                ))}
              </ul>

              <span aria-hidden className="skills-card-mark">
                {group.category.charAt(0)}
              </span>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
