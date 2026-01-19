const profiles = [
  {
    title: "The Architect",
    role: "Systems oversight and precision architecture.",
  },
  {
    title: "The Governor",
    role: "Human-in-the-loop governance and clinical verification.",
  },
];

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-midnight-onyx text-ghost-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-24">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-kinetic-gold">
            The Architecture
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold md:text-6xl">
            Clinical Precision, Governed Velocity
          </h1>
          <p className="mt-4 text-base text-surgical-slate md:text-lg">
            Two primary operators ensure every logic gate meets legal-grade integrity.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {profiles.map((profile) => (
            <article
              key={profile.title}
              className="rounded-none border border-slate-700/60 bg-[#0B1324] px-6 py-8 shadow-[0_24px_60px_rgba(2,6,23,0.55)]"
            >
              <div className="flex flex-col gap-6">
                <div className="relative h-56 w-full overflow-hidden rounded-none border border-slate-700/60 bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-black/80" />
                  <div className="absolute inset-0 mix-blend-screen">
                    <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.4),rgba(255,255,255,0.05))]" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/70">
                    High-Contrast Placeholder
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kinetic-gold">
                    {profile.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">{profile.title}</h2>
                  <p className="mt-3 text-sm text-surgical-slate">{profile.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="rounded-none border border-slate-700/60 bg-[#0B1324] px-6 py-10">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-kinetic-gold">
              Logic Gate Comparison
            </p>
            <h2 className="text-3xl font-semibold">
              Traditional AI vs. Brightside Logic Gates
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-none border border-slate-700/60">
            <div className="grid grid-cols-2 bg-midnight-onyx text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="px-5 py-4">Traditional AI</span>
              <span className="px-5 py-4 text-kinetic-gold">Brightside Logic Gates</span>
            </div>
            <div className="grid grid-cols-2 border-t border-slate-700/60">
              <div className="px-5 py-6 text-sm text-surgical-slate">
                High Risk / Low Fidelity
              </div>
              <div className="px-5 py-6 text-sm text-ghost-white">
                Governor-Led / 100% PII Redaction
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-none border border-slate-700/60 bg-[#0B1324] px-6 py-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-kinetic-gold">
              140W Standard
            </p>
            <h2 className="text-3xl font-semibold">
              Uninterrupted Power, Clinical Precision
            </h2>
            <p className="text-base text-surgical-slate">
              We operate at a 140W standard to guarantee uninterrupted power delivery,
              deterministic governance, and surgical accuracy for every audit sequence.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
