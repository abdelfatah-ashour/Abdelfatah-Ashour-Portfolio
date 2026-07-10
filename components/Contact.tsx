import { ArrowUpRight, Calendar } from 'lucide-react';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import type { Contact } from '@/lib/data';

type ContactSectionProps = {
  contact: Contact;
};

function pathTail(url: string) {
  try {
    const { pathname } = new URL(url);
    return pathname.replace(/\/+$/, '').split('/').filter(Boolean).at(-1) ?? url;
  } catch {
    return url;
  }
}

export function ContactSection({ contact }: ContactSectionProps) {
  const channels: {
    key: keyof Contact['links'];
    label: string;
    value: string;
    external?: boolean;
  }[] = [
    {
      key: 'email',
      label: 'Email',
      value: contact.links.email.replace(/^mailto:/i, ''),
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: pathTail(contact.links.linkedin),
      external: true,
    },
    {
      key: 'github',
      label: 'GitHub',
      value: pathTail(contact.links.github),
      external: true,
    },
    {
      key: 'twitter',
      label: 'Twitter',
      value: contact.twitterHandle,
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      labelledBy="contact-heading"
      className="brand-section relative overflow-hidden"
    >
      <div
        aria-hidden
        className="brand-wash pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/5"
      >
        <div className="parallax-slow h-64 w-64 rounded-full bg-gradient-to-bl from-gold-soft/22 via-transparent to-transparent" />
      </div>
      <div
        aria-hidden
        className="brand-wash pointer-events-none absolute bottom-4 left-0 -translate-x-1/3"
      >
        <div className="parallax-slow h-48 w-48 rounded-full bg-gradient-to-tr from-sky-mist/22 to-transparent" />
      </div>

      <div className="contact-panel relative overflow-hidden">
        <div aria-hidden className="contact-panel-sheen pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="contact-panel-orb pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full"
        />
        <div
          aria-hidden
          className="contact-panel-orb-alt pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full"
        />

        <div className="contact-layout relative">
          <div className="contact-invite">
            <SectionHeading
              id="contact-heading"
              eyebrow="Connect"
              title="Contact"
            />

            <p className="contact-lead font-display reveal reveal-delay-1">
              Open to thoughtful collaborations and calm software.
            </p>

            <p className="contact-support reveal reveal-delay-1">
              Book a conversation on Calendly — no forms, just a clear next step.
            </p>

            <div className="contact-cta reveal reveal-delay-2">
              <Button href={contact.calendly} external className="brand-cta">
                <Calendar aria-hidden className="size-4" strokeWidth={1.5} />
                Get in touch
              </Button>
            </div>
          </div>

          <div className="contact-channels reveal-left reveal-delay-1">
            <div className="brand-eyebrow mb-6 flex items-center gap-4">
              <span aria-hidden className="brand-eyebrow-rule" />
              <p className="text-[0.7rem] font-medium tracking-[0.32em] uppercase">
                Channels
              </p>
            </div>

            <ul className="contact-channel-list">
              {channels.map(({ key, label, value, external }) => (
                <li key={key}>
                  <a
                    href={contact.links[key]}
                    className="contact-channel"
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : undefined)}
                  >
                    <span className="contact-channel-label">{label}</span>
                    <span className="contact-channel-value">
                      {value}
                      <ArrowUpRight
                        aria-hidden
                        className="contact-channel-arrow size-3.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
