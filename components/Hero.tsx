import { ArrowDown, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import type { Contact, Profile } from '@/lib/data';

type HeroProps = {
  profile: Profile;
  calendly: Contact['calendly'];
};

export function Hero({ profile, calendly }: HeroProps) {
  const [firstName, ...rest] = profile.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero relative flex min-h-[min(100svh,56rem)] flex-col overflow-hidden"
    >
      <div aria-hidden className="hero-stage pointer-events-none absolute inset-0">
        <div className="hero-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt=""
            width={960}
            height={1200}
            decoding="async"
            fetchPriority="high"
            className="hero-portrait-img"
          />
        </div>
        <div className="hero-veil" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-sheen" />
        <div className="hero-noise" />
      </div>

      <Container className="relative flex flex-1 flex-col justify-center py-24 sm:py-28 lg:py-32">
        <div className="hero-copy hero-exit relative max-w-2xl lg:max-w-3xl">
          <p className="hero-line hero-line-1 hero-eyebrow mb-8 flex items-center gap-4 text-[0.7rem] font-medium tracking-[0.38em] uppercase sm:mb-10">
            <span aria-hidden className="hero-eyebrow-rule" />
            <span className="hero-eyebrow-text">{profile.occupation}</span>
          </p>

          <h1
            id="hero-heading"
            className="hero-title font-display leading-[0.92] tracking-[-0.04em] text-ink"
          >
            <span className="hero-name-mask">
              <span className="hero-line hero-line-2 hero-firstname block text-[clamp(2.6rem,8.2vw,5.35rem)]">
                {firstName}
              </span>
            </span>
            {lastName ? (
              <span className="hero-name-mask mt-1 block sm:mt-2">
                <span className="hero-line hero-line-3 hero-lastname block text-[clamp(2.6rem,8.2vw,5.35rem)]">
                  {lastName}
                </span>
              </span>
            ) : null}
          </h1>

          <p className="hero-line hero-line-4 mt-8 max-w-md text-lg leading-relaxed text-ink-muted sm:mt-10 sm:text-xl">
            {profile.headline}
          </p>

          <div
            aria-hidden
            className="hero-line hero-line-5 hero-divider mt-9 sm:mt-11"
          />

          <div className="hero-line hero-line-6 hero-actions mt-9 flex flex-wrap items-center gap-3 sm:mt-10">
            <Button href="#experience" className="hero-cta">
              View experience
              <ArrowDown aria-hidden className="size-4" strokeWidth={1.5} />
            </Button>
            <Button
              href={calendly}
              variant="secondary"
              external
              className="hero-cta hero-cta-secondary"
            >
              Get in touch
              <Calendar aria-hidden className="size-4" strokeWidth={1.5} />
            </Button>
          </div>

          <p className="hero-line hero-line-7 mt-5">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume inline-flex items-center gap-1.5 text-sm text-ink-muted link-underline hover:text-sage"
            >
              <FileText aria-hidden className="size-3.5" strokeWidth={1.5} />
              Download resume
            </a>
          </p>
        </div>
      </Container>

      <div
        aria-hidden
        className="hero-scroll pointer-events-none absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8"
      >
        <span className="hero-scroll-cue">
          <span className="hero-scroll-line block h-10 w-px" />
        </span>
      </div>
    </section>
  );
}
