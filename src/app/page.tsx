"use client";

import { useMemo, useState } from "react";

const HOURLY_RATE = 300;
const WEEKS_PER_YEAR = 52;

export default function HomePage() {
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const annualRevenueRecovered = useMemo(() => {
    return hoursPerWeek * WEEKS_PER_YEAR * HOURLY_RATE;
  }, [hoursPerWeek]);

  return (
    <main className="min-h-screen bg-midnight-onyx text-ghost-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-kinetic-gold">
            Clinical Sovereignty
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            Architecting Autonomous Logic Gates for the Sacramento Legal Sector.
          </h1>
          <p className="text-lg text-surgical-slate md:text-xl">
            Resolve Administrative Friction through Human-in-the-Loop Governance.
          </p>
        </div>

        <button
          className="bg-kinetic-gold px-8 py-3 text-sm font-extrabold uppercase tracking-[0.25em] text-midnight-onyx shadow-[0_12px_40px_rgba(212,175,55,0.25)] transition hover:-translate-y-0.5"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          type="button"
        >
          Initialize Systems Audit
        </button>

        <div className="mt-6 w-full max-w-xl rounded-none border border-slate-700/50 bg-[#0B1324] px-6 py-8 text-left shadow-[0_24px_60px_rgba(2,6,23,0.5)]">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Friction Calculator
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-surgical-slate">
                Hours wasted on discovery per week
              </span>
              <span className="font-mono text-xl text-kinetic-gold">
                {hoursPerWeek} hrs
              </span>
            </div>
          </div>

          <input
            aria-label="Hours wasted on discovery per week"
            className="mt-6 w-full accent-kinetic-gold"
            max={40}
            min={0}
            onChange={(event) => setHoursPerWeek(Number(event.target.value))}
            step={1}
            type="range"
            value={hoursPerWeek}
          />

          <div className="mt-6 border-t border-slate-700/50 pt-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Annual Revenue Recovered
            </p>
            <p className="mt-2 font-mono text-2xl text-ghost-white">
              ${annualRevenueRecovered.toLocaleString()}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
