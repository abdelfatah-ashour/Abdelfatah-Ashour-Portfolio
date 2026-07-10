import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import type { Experience } from '@/lib/data';

type ExperienceSectionProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section
      id="experience"
      labelledBy="experience-heading"
      className="brand-section relative overflow-hidden"
    >
      <div
        aria-hidden
        className="brand-wash pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4"
      >
        <div className="parallax-slow h-72 w-72 rounded-full bg-gradient-to-bl from-sage-light/20 via-sky-mist/12 to-transparent" />
      </div>
      <div
        aria-hidden
        className="brand-wash pointer-events-none absolute bottom-8 left-0 -translate-x-1/3"
      >
        <div className="parallax-slow h-48 w-48 rounded-full bg-gradient-to-tr from-gold-soft/18 to-transparent" />
      </div>

      <SectionHeading
        id="experience-heading"
        eyebrow="Path"
        title="Experience"
        description="Roles where I shaped product interfaces, refactored what mattered, and shipped with care."
      />

      <ol className="experience-list mt-16 max-w-3xl">
        {experience.map((job, index) => {
          const isLast = index === experience.length - 1;

          return (
            <li
              key={job.company}
              className={`reveal experience-item relative grid gap-5 sm:grid-cols-[3.5rem_1fr] sm:gap-10 ${
                index === 0 ? '' : 'reveal-delay-1'
              } ${isLast ? '' : 'pb-14 sm:pb-16'}`}
            >
              <div className="relative flex items-center gap-3 sm:flex-col sm:items-center">
                <span
                  aria-hidden
                  className="experience-marker relative z-10 flex size-8 shrink-0 items-center justify-center text-[0.7rem] font-medium tracking-wide"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {!isLast ? (
                  <span
                    aria-hidden
                    className="experience-rail absolute top-8 bottom-[-4rem] left-1/2 hidden w-px -translate-x-1/2 sm:block"
                  />
                ) : null}
                <p className="font-display text-2xl leading-none tracking-[-0.02em] text-ink sm:hidden">
                  {job.company}
                </p>
              </div>

              <article>
                <header className="experience-header pb-5">
                  <h3 className="font-display hidden text-3xl leading-none tracking-[-0.02em] text-ink sm:block sm:text-4xl">
                    {job.company}
                  </h3>
                  <p className="experience-role text-base font-medium sm:mt-3">
                    {job.role}
                  </p>
                  <p className="mt-1.5 text-sm tracking-[0.04em] text-ink-muted">
                    {job.period}
                  </p>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                    {job.summary}
                  </p>
                </header>

                <ul className="mt-6 space-y-3.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[0.75rem_1fr] gap-3 text-base leading-relaxed text-ink"
                    >
                      <span aria-hidden className="experience-dot mt-2.5 size-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul
                  className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
                  aria-label={`${job.company} tech stack`}
                >
                  {job.stack.map((tech) => (
                    <li key={tech} className="experience-tech text-sm tracking-wide">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
