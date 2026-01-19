const reviews = [
  {
    author: "Capitol Mall Counsel",
    summary: "Signal clarity restored within 72 hours.",
    rating: "5.0",
    time: "2 days ago",
  },
  {
    author: "Sacramento Compliance",
    summary: "Zero redaction drift across audit window.",
    rating: "4.9",
    time: "5 days ago",
  },
  {
    author: "Governance Lead",
    summary: "Fidelity controls stabilized before deployment.",
    rating: "5.0",
    time: "1 week ago",
  },
];

const sentinelStatuses = [
  {
    label: "AI Receptionist",
    status: "Operational",
  },
  {
    label: "Web Chatbot",
    status: "Operational",
  },
];

export default function DashboardCommandCenter() {
  return (
    <main className="min-h-screen bg-midnight-onyx text-ghost-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-20">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-kinetic-gold">
            Command Center
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold md:text-6xl">
            Client Telemetry Dashboard
          </h1>
          <p className="mt-3 text-base text-surgical-slate md:text-lg">
            High-authority monitoring for governed logic gate performance.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-none border border-slate-700/60 bg-[#0B1324] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.55)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Fidelity Score
              </p>
              <span className="text-xs uppercase tracking-[0.3em] text-kinetic-gold">
                Target 100%
              </span>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <div className="relative h-44 w-44">
                <svg className="h-full w-full" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="rgba(148,163,184,0.25)"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#D4AF37"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * 0.02}`}
                    fill="none"
                    style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Current</p>
                  <p className="font-mono text-3xl text-ghost-white">98%</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-surgical-slate">
              Fidelity stabilized within clinical tolerance.
            </p>
          </article>

          <article className="rounded-none border border-slate-700/60 bg-[#0B1324] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.55)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Billable Hours Recovered
              </p>
              <span className="text-xs uppercase tracking-[0.3em] text-kinetic-gold">
                30-Day Window
              </span>
            </div>
            <div className="mt-10 text-center">
              <p className="font-mono text-5xl text-kinetic-gold">1,280</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
                Hours Recovered
              </p>
            </div>
            <div className="mt-8 flex justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>Baseline 720</span>
              <span>Delta +560</span>
            </div>
          </article>

          <article className="rounded-none border border-slate-700/60 bg-[#0B1324] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.55)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Reputation Pulse
              </p>
              <span className="text-xs uppercase tracking-[0.3em] text-kinetic-gold">
                Google Reviews
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {reviews.map((review) => (
                <div
                  key={review.author}
                  className="border border-slate-700/60 bg-midnight-onyx px-4 py-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-ghost-white">
                      {review.author}
                    </p>
                    <span className="font-mono text-sm text-kinetic-gold">
                      {review.rating}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-surgical-slate">{review.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                    {review.time}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-none border border-slate-700/60 bg-[#0B1324] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.55)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Sentinel Health
              </p>
              <span className="text-xs uppercase tracking-[0.3em] text-kinetic-gold">
                Live Status
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {sentinelStatuses.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center justify-between border border-slate-700/60 bg-midnight-onyx px-4 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-ghost-white">
                      {service.label}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {service.status}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-kinetic-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-kinetic-gold">
                      Stable
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
              Telemetry monitors refresh every 15 seconds.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
