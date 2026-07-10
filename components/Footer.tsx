import { Container } from '@/components/Container';
import type { Contact, Site } from '@/lib/data';

type FooterProps = {
  site: Site;
  contact: Contact;
};

export function Footer({ site, contact }: FooterProps) {
  const year = new Date().getFullYear();
  const [firstName, ...rest] = site.author.split(' ');
  const lastName = rest.join(' ');

  return (
    <footer className="footer-reveal">
      <Container className="flex min-h-[40vh] flex-col justify-between gap-10 py-16 sm:min-h-[44vh] sm:py-20">
        <div className="max-w-xl">
          <div className="brand-eyebrow flex items-center gap-4">
            <span aria-hidden className="brand-eyebrow-rule" />
            <p className="text-[0.7rem] font-medium tracking-[0.32em] uppercase">
              Thanks for visiting
            </p>
          </div>
          <p className="font-display mt-5 text-4xl leading-[0.92] tracking-[-0.02em] text-ink sm:text-5xl">
            <span className="block">{firstName}</span>
            {lastName ? (
              <span className="footer-lastname mt-1 block">{lastName}</span>
            ) : null}
          </p>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-muted">
            Built with care — open to thoughtful collaborations.
          </p>
          <div aria-hidden className="brand-divider mt-8" />
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <p className="text-sm tracking-wide text-ink-muted">© {year}</p>
          <nav aria-label="Social">
            <ul className="flex flex-wrap gap-5 text-sm">
              <li>
                <a
                  href={contact.links.github}
                  className="text-ink-muted link-underline hover:text-sage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contact.links.linkedin}
                  className="text-ink-muted link-underline hover:text-sage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.links.email}
                  className="text-ink-muted link-underline hover:text-sage"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
