import { useMemo, useState } from "react";

const HOURLY_RATE = 300;
const WEEKS_PER_YEAR = 52;

export default function HomePage() {
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const annualRevenueRecovered = useMemo(() => {
    return hoursPerWeek * WEEKS_PER_YEAR * HOURLY_RATE;
  }, [hoursPerWeek]);

  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Clinical Sovereignty
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
            <span className="font-['Inter']">
              Architecting Autonomous Logic Gates for the Sacramento Legal Sector.
            </span>
          </h1>
          <p className="text-lg text-slate-300 md:text-xl">
            <span className="font-['Merriweather']">
              Resolve Administrative Friction through Human-in-the-Loop Governance.
            </span>
          </p>
        </div>

        <button
          className="bg-[#D4AF37] px-8 py-3 text-sm font-extrabold uppercase tracking-[0.25em] text-[#0F172A] shadow-[0_12px_40px_rgba(212,175,55,0.25)] transition hover:-translate-y-0.5"
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
              <span className="text-sm text-slate-300">
                Hours wasted on discovery per week
              </span>
              <span className="font-['JetBrains_Mono'] text-xl text-[#D4AF37]">
                {hoursPerWeek} hrs
              </span>
            </div>
          </div>

          <input
            aria-label="Hours wasted on discovery per week"
            className="mt-6 w-full accent-[#D4AF37]"
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
            <p className="mt-2 font-['JetBrains_Mono'] text-2xl text-[#F8FAFC]">
              ${annualRevenueRecovered.toLocaleString()}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
