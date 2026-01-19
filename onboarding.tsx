import { useEffect, useMemo, useState } from "react";

const steps = [
  {
    title: "Firm Details",
    description: "Governor Assignment in Progress.",
  },
  {
    title: "Operational Mapping Survey",
    description: "Calibrating clinical telemetry signals.",
  },
  {
    title: "Secure Document Upload",
    description: "Initializing Redaction Protocols.",
  },
];

const surveyQuestions = [
  "Average discovery volume per matter",
  "Primary intake channel for case data",
  "Current redaction workflow owner",
  "Compliance checkpoints required",
  "PII exposure risk rating",
  "Average turnaround time for reviews",
  "Preferred governance reporting format",
];

export default function SanctuaryOnboarding() {
  const [activeStep, setActiveStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const progressWidth = useMemo(
    () => `${((activeStep + 1) / steps.length) * 100}%`,
    [activeStep]
  );

  useEffect(() => {
    if (!isScanning) {
      return;
    }
    const timer = window.setTimeout(() => {
      setIsScanning(false);
    }, 2400);
    return () => window.clearTimeout(timer);
  }, [isScanning]);

  const moveStep = (direction: number) => {
    setActiveStep((current) =>
      Math.min(Math.max(current + direction, 0), steps.length - 1)
    );
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      setIsScanning(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <section className="relative min-h-screen px-6 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-10">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Sanctuary Onboarding Portal
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold md:text-5xl">
              <span className="font-['Inter']">Secure Medical Terminal</span>
            </h1>
            <p className="mt-3 text-base text-slate-300 md:text-lg">
              <span className="font-['Merriweather']">
                Provide operational inputs to initiate the 7-day audit sequence.
              </span>
            </p>
          </header>

          <div className="h-[2px] w-full bg-slate-700/50">
            <span
              className="block h-full bg-[#D4AF37]"
              style={{ width: progressWidth }}
            />
          </div>

          <div className="rounded-none border border-slate-700/60 bg-[#0B1324] px-8 py-10 shadow-[0_24px_70px_rgba(2,6,23,0.6)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/60 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Step {activeStep + 1} of {steps.length}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  <span className="font-['Inter']">{steps[activeStep].title}</span>
                </h2>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                {steps[activeStep].description}
              </p>
            </div>

            {activeStep === 0 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Firm Name
                  <input
                    className="border border-slate-700/60 bg-[#0F172A] px-4 py-3 text-[#F8FAFC] outline-none focus:border-[#D4AF37]"
                    placeholder="Sacramento Legal Office"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Primary Contact
                  <input
                    className="border border-slate-700/60 bg-[#0F172A] px-4 py-3 text-[#F8FAFC] outline-none focus:border-[#D4AF37]"
                    placeholder="Governor of Operations"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Secure Email
                  <input
                    className="border border-slate-700/60 bg-[#0F172A] px-4 py-3 text-[#F8FAFC] outline-none focus:border-[#D4AF37]"
                    placeholder="governor@firm.gov"
                    type="email"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Jurisdiction
                  <input
                    className="border border-slate-700/60 bg-[#0F172A] px-4 py-3 text-[#F8FAFC] outline-none focus:border-[#D4AF37]"
                    placeholder="Sacramento County"
                    type="text"
                  />
                </label>
              </div>
            )}

            {activeStep === 1 && (
              <div className="mt-8 grid gap-5">
                {surveyQuestions.map((question) => (
                  <label
                    key={question}
                    className="flex flex-col gap-2 text-sm text-slate-300"
                  >
                    {question}
                    <input
                      className="border border-slate-700/60 bg-[#0F172A] px-4 py-3 text-[#F8FAFC] outline-none focus:border-[#D4AF37]"
                      placeholder="Enter telemetry detail"
                      type="text"
                    />
                  </label>
                ))}
              </div>
            )}

            {activeStep === 2 && (
              <div className="mt-8 grid gap-6">
                <div
                  className={`relative flex min-h-[220px] flex-col items-center justify-center gap-4 border border-dashed border-slate-600/70 bg-[#0F172A] px-6 text-center transition ${
                    isScanning ? "border-[#D4AF37]" : ""
                  }`}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleDrop}
                >
                  <input
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={() => setIsScanning(true)}
                    type="file"
                  />
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Secure Document Upload
                  </p>
                  <p className="text-base text-slate-200">
                    Drag and drop PDFs to initiate scan.
                  </p>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                    Initializing Redaction Protocols
                  </p>
                  {isScanning && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="scan-line" />
                    </div>
                  )}
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Governor Assignment in Progress.
                </p>
              </div>
            )}

            <div className="mt-10 flex items-center justify-between">
              <button
                className="border border-slate-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-[#D4AF37]"
                onClick={() => moveStep(-1)}
                type="button"
              >
                Back
              </button>
              <button
                className="bg-[#D4AF37] px-6 py-2 text-xs font-extrabold uppercase tracking-[0.3em] text-[#0F172A] shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-0.5"
                onClick={() => moveStep(1)}
                style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                type="button"
              >
                {activeStep === steps.length - 1 ? "Finalize Intake" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .scan-line {
            position: absolute;
            left: 0;
            right: 0;
            height: 3px;
            background: rgba(212, 175, 55, 0.85);
            box-shadow: 0 0 25px rgba(212, 175, 55, 0.8);
            animation: scanMove 2.2s linear infinite;
          }

          @keyframes scanMove {
            0% {
              top: -10%;
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              top: 110%;
              opacity: 0;
            }
          }
        `}
      </style>
    </main>
  );
}
