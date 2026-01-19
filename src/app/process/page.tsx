"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const steps = [
  {
    title: "Authorization",
    detail: "$500 audit initialization.",
  },
  {
    title: "Intake",
    detail: "Secure sample PDF ingestion.",
  },
  {
    title: "Governance Audit",
    detail: "Human-in-the-loop verification of AI outputs.",
  },
  {
    title: "Fidelity Report",
    detail: "Delivery of the time-save blueprint.",
  },
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const containerTop = rect.top + scrollY;
      const containerBottom = rect.bottom + scrollY;
      const marker = scrollY + viewportHeight * 0.5;
      const nextProgress =
        (marker - containerTop) / (containerBottom - containerTop || 1);
      setProgress(clamp(nextProgress, 0, 1));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main className="min-h-screen bg-midnight-onyx text-ghost-white">
      <section
        className="relative min-h-screen px-6 py-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(248,250,252,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,250,252,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-kinetic-gold">
              The Clinical Flow
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
              7-Day Audit Signal Path
            </h1>
            <p className="text-lg text-surgical-slate md:text-xl">
              A vertical governance sequence calibrated for precision and authority.
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative mx-auto grid w-full max-w-4xl grid-cols-[48px_1fr] gap-10"
          >
            <div className="relative flex justify-center">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-700/70" />
              <div
                className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-kinetic-gold shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                style={{ height: `${progress * 100}%` }}
              />
              <div
                className="absolute left-1/2 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-kinetic-gold shadow-[0_0_24px_rgba(212,175,55,0.9)]"
                style={{ top: `${progress * 100}%` }}
              />
            </div>

            <div className="flex flex-col gap-10">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-none border border-slate-700/50 bg-[#0B1324] px-6 py-6 shadow-[0_22px_50px_rgba(2,6,23,0.45)]"
                >
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Step {index + 1}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-kinetic-gold">
                      {step.title}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-ghost-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-base text-surgical-slate">
                    {step.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
