type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  animate?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  animate = true,
}: SectionHeadingProps) {
  return (
    <header className={`brand-heading max-w-2xl ${animate ? 'reveal' : ''}`}>
      <div className="brand-eyebrow mb-4 flex items-center gap-4 sm:mb-5">
        <span aria-hidden className="brand-eyebrow-rule" />
        <p className="text-[0.7rem] font-medium tracking-[0.32em] uppercase">
          {eyebrow}
        </p>
      </div>
      <h2
        id={id}
        className="font-display title-underline text-4xl leading-[0.95] tracking-[-0.02em] text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
