export default function ServiceDetailHeader({ service }) {
  return (
    <header className="w-full bg-background py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-primary mb-6">
          Service Detail
        </span>
        <h1 className="font-serif text-4xl font-bold text-foreground tracking-tight sm:text-5xl mb-4">
          {service.title}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-8">
          {service.description}
        </p>
        <div className="rounded-2xl overflow-hidden max-w-2xl mx-auto aspect-16/10 bg-surface">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
