import { Container } from '@/components/Container';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

type HeaderProps = {
  name: string;
};

export function Header({ name }: HeaderProps) {
  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  return (
    <header className="brand-header sticky top-0 z-50">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="brand-logo" aria-label={name}>
          <span aria-hidden className="brand-logo-mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/static/brand/logo-mark.svg"
              alt=""
              width={32}
              height={32}
              className="brand-logo-mark-img"
            />
          </span>
          <span className="brand-logo-word">
            <span className="brand-logo-first">{firstName}</span>
            {lastName ? (
              <span className="brand-logo-last">{lastName}</span>
            ) : null}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-ink-muted transition-colors hover:text-sage link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative sm:hidden">
          <summary
            className="flex size-10 list-none items-center justify-center rounded-sm text-ink marker:content-none [&::-webkit-details-marker]:hidden"
            aria-label="Menu"
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-px w-5 bg-current transition group-open:translate-y-[3.5px] group-open:rotate-45" />
              <span className="block h-px w-5 bg-current transition group-open:opacity-0" />
              <span className="block h-px w-5 bg-current transition group-open:-translate-y-[3.5px] group-open:-rotate-45" />
            </span>
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute top-full right-0 mt-2 w-48 rounded-sm border border-ink/10 bg-mist/95 p-2 shadow-sm backdrop-blur-md"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-sm px-3 py-2.5 text-sm text-ink hover:bg-mist-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
