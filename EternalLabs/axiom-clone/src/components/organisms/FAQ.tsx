"use client";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What is Axiom?",
    a: "Axiom is a trading platform that helps you discover, analyze, and act on opportunities in crypto markets.",
  },
  {
    q: "How secure is Axiom?",
    a: "We use non-custodial workflows and integrate directly with decentralized protocols. Your keys and funds remain under your control.",
  },
  {
    q: "Can I buy crypto on Axiom?",
    a: "You can connect your wallet and trade supported pairs via integrated DEXs and aggregators.",
  },
  {
    q: "How does Axiom offer yield?",
    a: "Axiom surfaces yield opportunities across protocols and lets you track rewards in one place.",
  },
  {
    q: "Is Axiom decentralized?",
    a: "Yes, execution is on-chain via decentralized protocols, while the app provides research and execution tooling.",
  },
];

export default function FAQ() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <h2 className="text-3xl font-bold text-foreground lg:col-span-2">FAQ</h2>

      <div className="lg:col-span-3 space-y-2 w-full max-w-xl">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group rounded-lg bg-white/5 backdrop-blur-[2px] px-4 py-3 open:py-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between text-sm text-foreground/95">
              <span className="mr-3 font-medium">{item.q}</span>
              <span className="transition-transform group-open:rotate-180 text-muted-foreground">▾</span>
            </summary>
            <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
