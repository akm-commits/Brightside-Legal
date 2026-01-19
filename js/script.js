const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const mixChannel = (start, end, progress) =>
  Math.round(start + (end - start) * progress);

const mixColor = (start, end, progress) => [
  mixChannel(start[0], end[0], progress),
  mixChannel(start[1], end[1], progress),
  mixChannel(start[2], end[2], progress),
];

document.addEventListener("DOMContentLoaded", () => {
  const frictionRange = document.getElementById("frictionRange");
  const frictionValue = document.getElementById("frictionValue");
  const recoveredHours = document.getElementById("recoveredHours");

  const updateFriction = () => {
    if (!frictionRange || !frictionValue || !recoveredHours) {
      return;
    }
    const value = Number.parseInt(frictionRange.value, 10);
    const hours = Math.round(value * 12);
    frictionValue.textContent = `${value}%`;
    recoveredHours.textContent = `${hours.toLocaleString()} hrs`;
  };

  if (frictionRange) {
    updateFriction();
    frictionRange.addEventListener("input", updateFriction);
  }

  const processSection = document.querySelector(".process");
  const fidelityStep = document.getElementById("fidelity");
  const meterFill = processSection?.querySelector(".meter-fill");
  let processBounds = { start: 0, end: 0 };
  let ticking = false;

  const updateProcessBounds = () => {
    if (!processSection || !fidelityStep) {
      return;
    }
    processBounds = {
      start: processSection.getBoundingClientRect().top + window.scrollY,
      end: fidelityStep.getBoundingClientRect().top + window.scrollY,
    };
  };

  const updateProcessShift = () => {
    if (!processSection) {
      return;
    }
    const marker = window.scrollY + window.innerHeight * 0.5;
    const span = Math.max(processBounds.end - processBounds.start, 1);
    const progress = clamp((marker - processBounds.start) / span, 0, 1);
    const [r, g, b] = mixColor([15, 23, 42], [30, 41, 59], progress);
    processSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (meterFill) {
      meterFill.style.width = `${20 + progress * 80}%`;
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(() => {
        updateProcessShift();
        ticking = false;
      });
    }
  };

  if (processSection) {
    updateProcessBounds();
    updateProcessShift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      updateProcessBounds();
      updateProcessShift();
    });
  }

  const onboardingForm = document.querySelector(".onboarding-form");
  const steps = onboardingForm
    ? Array.from(onboardingForm.querySelectorAll(".form-step"))
    : [];
  const progressFill = document.getElementById("progressFill");
  const progressSteps = onboardingForm
    ? Array.from(onboardingForm.querySelectorAll(".progress-step"))
    : [];
  let activeStep = 0;

  const setStep = (index) => {
    if (!steps.length) {
      return;
    }
    activeStep = clamp(index, 0, steps.length - 1);
    steps.forEach((step, idx) => {
      step.classList.toggle("is-active", idx === activeStep);
    });
    progressSteps.forEach((step, idx) => {
      step.classList.toggle("is-active", idx <= activeStep);
    });
    if (progressFill) {
      progressFill.style.width = `${((activeStep + 1) / steps.length) * 100}%`;
    }
  };

  const validateStep = () => {
    const current = steps[activeStep];
    if (!current) {
      return true;
    }
    const inputs = Array.from(current.querySelectorAll("input, select, textarea"));
    const invalid = inputs.find((input) => !input.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      return false;
    }
    return true;
  };

  if (onboardingForm) {
    onboardingForm.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const action = target.getAttribute("data-action");
      if (!action) {
        return;
      }
      if (action === "next" && !validateStep()) {
        return;
      }
      if (action === "next") {
        setStep(activeStep + 1);
      }
      if (action === "prev") {
        setStep(activeStep - 1);
      }
    });

    onboardingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      setStep(steps.length - 1);
    });

    setStep(0);
  }

  const dropZone = document.getElementById("dropZone");
  const pdfUpload = document.getElementById("pdfUpload");
  const uploadStatus = document.getElementById("uploadStatus");

  const handleUpload = (file) => {
    if (!dropZone || !uploadStatus || !file) {
      return;
    }
    dropZone.classList.add("is-armed");
    uploadStatus.textContent = `Safe-Signal encryption engaged for ${file.name}.`;
  };

  if (dropZone && pdfUpload) {
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropZone.classList.add("is-armed");
    });

    dropZone.addEventListener("dragleave", () => {
      if (!pdfUpload.files.length) {
        dropZone.classList.remove("is-armed");
      }
    });

    dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      const file = event.dataTransfer?.files?.[0];
      if (file) {
        pdfUpload.files = event.dataTransfer.files;
        handleUpload(file);
      }
    });

    pdfUpload.addEventListener("change", () => {
      const file = pdfUpload.files?.[0];
      if (file) {
        handleUpload(file);
      }
    });
  }

  const safetyGate = document.getElementById("safetyGate");
  const governorToggle = document.getElementById("governorToggle");
  const gateStatus = document.getElementById("gateStatus");

  if (safetyGate && governorToggle) {
    const updateGate = () => {
      const verified = governorToggle.checked;
      safetyGate.classList.toggle("is-verified", verified);
      if (gateStatus) {
        gateStatus.textContent = verified
          ? "Status: Eden/Governor verified. Gate stabilized."
          : "Status: Awaiting verification.";
      }
    };

    governorToggle.addEventListener("change", updateGate);
    updateGate();
  }
});
