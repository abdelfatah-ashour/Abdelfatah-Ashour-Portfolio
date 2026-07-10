import type { ReactNode } from 'react';
import { Container } from '@/components/Container';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function Section({
  id,
  children,
  className = '',
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section-enter scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
