"use client";

export default function FaqAccordionItem({ id, question, answer, isOpen, onToggle }) {
  const panelId = `faq-panel-${id}`;
  const triggerId = `faq-trigger-${id}`;

  return (
    <div className="group border-b border-primary/12 last:border-b-0">
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-5 md:py-6 text-left transition-colors hover:bg-primary/[0.03] md:gap-5 rounded-xl px-2 -mx-2 md:px-3 md:-mx-3"
      >
        <span
          className={`w-1 shrink-0 rounded-full bg-accent transition-all duration-300 ease-out ${
            isOpen ? "min-h-14 self-stretch md:min-h-16" : "h-10 self-center md:h-12"
          }`}
          aria-hidden
        />
        <span className="faq-question min-w-0 flex-1 text-lg font-bold leading-snug text-foreground md:text-xl lg:text-[1.35rem]">
          {question}
        </span>
        <span
          className="faq-toggle shrink-0 tabular-nums text-2xl font-light leading-none text-primary md:text-3xl w-9 text-center select-none"
          aria-hidden
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="faq-answer whitespace-pre-line pb-6 pl-0 pr-2 text-[15px] leading-[1.8] text-foreground/75 md:text-[17px] md:pr-10 md:pl-1 lg:pb-7">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
