import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import type { Profile } from '@/lib/data';

type AboutProps = {
  profile: Profile;
};

export function About({ profile }: AboutProps) {
  const [lead, ...rest] = profile.bio;

  return (
    <Section
      id="about"
      labelledBy="about-heading"
      className="brand-section relative overflow-hidden"
    >
      <div
        aria-hidden
        className="brand-wash brand-wash-tl pointer-events-none absolute top-12 left-0 -translate-x-1/3"
      >
        <div className="parallax-slow h-64 w-64 rounded-full bg-gradient-to-br from-sky-mist/30 via-gold-soft/8 to-transparent" />
      </div>

      <SectionHeading
        id="about-heading"
        eyebrow="Story"
        title="About"
      />

      <div className="about-layout mt-12 md:mt-16">
        <p className="about-lead reveal font-display">{lead}</p>

        <div className="about-split">
          <figure className="about-frame reveal-left">
            <div className="about-matte">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                width={400}
                height={500}
                decoding="async"
                loading="lazy"
                className="about-portrait-img"
              />
            </div>
          </figure>

          <div className="about-body reveal reveal-delay-1">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
