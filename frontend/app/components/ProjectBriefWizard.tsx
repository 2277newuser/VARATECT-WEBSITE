"use client";

import { useRef, useState } from "react";

type ProjectBrief = {
  division: string;
  spaceType: string;
  location: string;
  stage: string;
  timeline: string;
  area: string;
  budget: string;
  priorities: string[];
  vision: string;
  requirements: string;
  name: string;
  email: string;
  phone: string;
};

const initialBrief: ProjectBrief = {
  division: "",
  spaceType: "",
  location: "",
  stage: "",
  timeline: "",
  area: "",
  budget: "",
  priorities: [],
  vision: "",
  requirements: "",
  name: "",
  email: "",
  phone: "",
};

const steps = ["Project", "Details", "Your vision", "Your contact"];

const divisions = [
  {
    name: "Vara Pro",
    detail: "Architecture, interiors & consultancy",
  },
  {
    name: "Vara Home",
    detail: "Home planning, interiors & landscape",
  },
  {
    name: "Vara Revive",
    detail: "Renovation, remodelling & restoration",
  },
  {
    name: "Vara BIZ",
    detail: "Offices, retail & commercial spaces",
  },
];

const priorities = [
  "Natural light",
  "Connection to nature",
  "Flexible spaces",
  "Low maintenance",
  "Accessibility",
  "Brand identity",
  "Family living",
  "Something else",
];

function formatBrief(brief: ProjectBrief) {
  return [
    "VARATECT PROJECT BRIEF",
    "",
    `Service: ${brief.division || "Not specified"}`,
    `Space type: ${brief.spaceType || "Not specified"}`,
    `Location: ${brief.location || "Not specified"}`,
    `Project stage: ${brief.stage || "Not specified"}`,
    `Timeline: ${brief.timeline || "Not specified"}`,
    `Approximate area: ${brief.area || "Not specified"}`,
    `Budget: ${brief.budget || "Not specified"}`,
    `Priorities: ${brief.priorities.join(", ") || "Not specified"}`,
    "",
    "THE VISION",
    brief.vision || "Not provided",
    "",
    "MUST-HAVES OR CONSTRAINTS",
    brief.requirements || "Not provided",
    "",
    "CONTACT",
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Phone: ${brief.phone || "Not provided"}`,
  ].join("\n");
}

export default function ProjectBriefWizard({
  initialDivision = "",
}: {
  initialDivision?: string;
}) {
  const [brief, setBrief] = useState(() => ({
    ...initialBrief,
    division: initialDivision,
  }));
  const [step, setStep] = useState(0);
  const [reviewing, setReviewing] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function updateField(
    field: Exclude<keyof ProjectBrief, "priorities">,
    value: string,
  ) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  function togglePriority(priority: string) {
    setBrief((current) => ({
      ...current,
      priorities: current.priorities.includes(priority)
        ? current.priorities.filter((item) => item !== priority)
        : [...current.priorities, priority],
    }));
  }

  function nextStep() {
    if (!formRef.current?.reportValidity()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function reviewBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReviewing(true);
    setCopyMessage("");
  }

  async function copyBrief() {
    if (!navigator.clipboard?.writeText) {
      setCopyMessage("Copy isn’t available in this browser. You can open the email draft instead.");
      return;
    }

    try {
      await navigator.clipboard.writeText(formatBrief(brief));
      setCopyMessage("Project brief copied.");
    } catch {
      setCopyMessage("Couldn’t copy the brief. Please use the email draft instead.");
    }
  }

  const emailHref = `mailto:studiovaratect@gmail.com?subject=${encodeURIComponent(
    `Project enquiry — ${brief.division}`,
  )}&body=${encodeURIComponent(formatBrief(brief))}`;

  return (
    <div className="mx-auto max-w-[1040px] rounded-3xl border border-[#26362f]/10 bg-[#f1f5ef] p-5 shadow-[0_16px_50px_rgba(32,35,31,0.07)] sm:p-8 md:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#66785e]">
            Your project, your way
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em] sm:text-3xl">
            {reviewing ? "Review your project brief" : steps[step]}
          </h2>
        </div>
        {!reviewing && (
          <p className="text-xs text-[#74756e]">
            Step {step + 1} of {steps.length}
          </p>
        )}
      </div>

      {!reviewing && (
        <>
          <div
            role="progressbar"
            aria-label="Project brief progress"
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-valuenow={step + 1}
            className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#d5dfd3]"
          >
            <div
              className="h-full rounded-full bg-[#526c4e] transition-[width] duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <ol className="mt-4 grid grid-cols-4 gap-2" aria-label="Project brief steps">
            {steps.map((label, index) => (
              <li
                key={label}
                aria-current={index === step ? "step" : undefined}
                className={`text-[9px] uppercase tracking-[0.08em] sm:text-[10px] ${
                  index <= step ? "text-[#354b37]" : "text-[#92978f]"
                }`}
              >
                <span className="mr-1 font-medium">0{index + 1}</span>
                {label}
              </li>
            ))}
          </ol>
        </>
      )}

      {reviewing ? (
        <div className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <ReviewCard
              title="Project"
              rows={[
                ["Service", brief.division],
                ["Space", brief.spaceType],
                ["Location", brief.location],
                ["Stage", brief.stage],
              ]}
              onEdit={() => {
                setReviewing(false);
                setStep(0);
              }}
            />
            <ReviewCard
              title="Timeline & scale"
              rows={[
                ["Timeline", brief.timeline],
                ["Approximate area", brief.area],
                ["Budget", brief.budget],
              ]}
              onEdit={() => {
                setReviewing(false);
                setStep(1);
              }}
            />
            <ReviewCard
              title="Vision"
              rows={[
                ["Priorities", brief.priorities.join(", ")],
                ["What matters", brief.vision],
                ["Must-haves", brief.requirements],
              ]}
              onEdit={() => {
                setReviewing(false);
                setStep(2);
              }}
            />
            <ReviewCard
              title="Your contact"
              rows={[
                ["Name", brief.name],
                ["Email", brief.email],
                ["Phone", brief.phone],
              ]}
              onEdit={() => {
                setReviewing(false);
                setStep(3);
              }}
            />
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[#26362f]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-5 text-[#74756e]">
              Your answers stay in this browser until you open your email app.
              Review the draft there and attach plans or inspiration images if
              you have them.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={copyBrief}
                className="rounded-full border border-[#26362f]/20 px-5 py-3 text-xs font-medium text-[#26362f] transition-colors hover:bg-[#dfe9df]"
              >
                Copy brief
              </button>
              <a
                href={emailHref}
                className="rounded-full bg-[#26362f] px-5 py-3 text-center text-xs font-medium text-white transition-colors hover:bg-[#526c4e]"
              >
                Open email draft
              </a>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p aria-live="polite" className="text-xs text-[#526c4e]">
              {copyMessage}
            </p>
            <button
              type="button"
              onClick={() => {
                setReviewing(false);
                setStep(0);
              }}
              className="text-xs text-[#526c4e] underline decoration-[#526c4e]/40 underline-offset-4 hover:decoration-[#526c4e]"
            >
              Edit answers
            </button>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={reviewBrief} className="mt-8">
          {step === 0 && (
            <fieldset>
              <legend className="text-sm font-medium">
                Which VARATECT team would you like to work with?
              </legend>
              <p className="mt-1 text-xs text-[#74756e]">
                Choose the closest fit. We can help refine it together.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {divisions.map((division) => (
                  <label key={division.name} className="cursor-pointer">
                    <input
                      type="radio"
                      name="division"
                      value={division.name}
                      required
                      checked={brief.division === division.name}
                      onChange={(event) =>
                        updateField("division", event.target.value)
                      }
                      className="peer sr-only"
                    />
                    <span className="block rounded-2xl border border-[#26362f]/10 bg-white/70 p-4 transition-colors peer-checked:border-[#526c4e] peer-checked:bg-[#dfe9df] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#526c4e]">
                      <span className="block text-sm font-medium">
                        {division.name}
                      </span>
                      <span className="mt-1 block text-xs text-[#74756e]">
                        {division.detail}
                      </span>
                    </span>
                  </label>
                ))}
              </div>

              <label className="mt-6 block">
                <span className="text-xs font-medium">What kind of space is it?</span>
                <select
                  required
                  value={brief.spaceType}
                  onChange={(event) =>
                    updateField("spaceType", event.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm text-[#20231f] outline-none focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                >
                  <option value="">Choose a space type</option>
                  <option>House or villa</option>
                  <option>Apartment</option>
                  <option>Office or workspace</option>
                  <option>Retail or showroom</option>
                  <option>Restaurant or hospitality</option>
                  <option>Other</option>
                </select>
              </label>
            </fieldset>
          )}

          {step === 1 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-xs font-medium">
                  Where is the project?
                </span>
                <input
                  value={brief.location}
                  onChange={(event) =>
                    updateField("location", event.target.value)
                  }
                  placeholder="City or area is enough for now"
                  autoComplete="address-level2"
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9b9f98] focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>

              <label>
                <span className="text-xs font-medium">
                  Which stage are you at?
                </span>
                <select
                  required
                  value={brief.stage}
                  onChange={(event) => updateField("stage", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                >
                  <option value="">Choose a stage</option>
                  <option>Exploring ideas</option>
                  <option>Site or property identified</option>
                  <option>Already own or occupy the space</option>
                  <option>Ready to begin design</option>
                </select>
              </label>

              <label>
                <span className="text-xs font-medium">
                  When would you like to begin?
                </span>
                <select
                  value={brief.timeline}
                  onChange={(event) =>
                    updateField("timeline", event.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                >
                  <option value="">Not sure yet</option>
                  <option>As soon as possible</option>
                  <option>Within 1–3 months</option>
                  <option>Within 3–6 months</option>
                  <option>More than 6 months</option>
                  <option>Flexible</option>
                </select>
              </label>

              <label>
                <span className="text-xs font-medium">
                  Approximate area <span className="text-[#8b9087]">(optional)</span>
                </span>
                <input
                  value={brief.area}
                  onChange={(event) => updateField("area", event.target.value)}
                  placeholder="For example, 150 m² or 3 bedrooms"
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9b9f98] focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>

              <label>
                <span className="text-xs font-medium">
                  Budget range <span className="text-[#8b9087]">(optional)</span>
                </span>
                <input
                  value={brief.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                  placeholder="A rough range or “not decided”"
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9b9f98] focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>
            </div>
          )}

          {step === 2 && (
            <div>
              <fieldset>
                <legend className="text-sm font-medium">
                  What matters most in your space?
                </legend>
                <p className="mt-1 text-xs text-[#74756e]">
                  Pick any that feel right. You can add your own thoughts below.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {priorities.map((priority) => {
                    const selected = brief.priorities.includes(priority);
                    return (
                      <button
                        key={priority}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => togglePriority(priority)}
                        className={`rounded-full border px-4 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#526c4e] ${
                          selected
                            ? "border-[#526c4e] bg-[#526c4e] text-white"
                            : "border-[#26362f]/15 bg-white/70 text-[#3d443d] hover:bg-[#dfe9df]"
                        }`}
                      >
                        {priority}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="mt-7 block">
                <span className="text-xs font-medium">
                  Tell us about your vision
                </span>
                <span className="mt-1 block text-xs leading-5 text-[#74756e]">
                  What should the space feel like? What would you like it to do
                  for you?
                </span>
                <textarea
                  value={brief.vision}
                  onChange={(event) => updateField("vision", event.target.value)}
                  maxLength={700}
                  rows={4}
                  placeholder="Share whatever is on your mind—even if your ideas are still taking shape."
                  className="mt-2 w-full resize-y rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-[#9b9f98] focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-xs font-medium">
                  Must-haves or things to work around{" "}
                  <span className="text-[#8b9087]">(optional)</span>
                </span>
                <textarea
                  value={brief.requirements}
                  onChange={(event) =>
                    updateField("requirements", event.target.value)
                  }
                  maxLength={500}
                  rows={3}
                  placeholder="Existing features, practical needs, accessibility, or inspiration links."
                  className="mt-2 w-full resize-y rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-[#9b9f98] focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="text-xs font-medium">Your name</span>
                <input
                  required
                  value={brief.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>
              <label>
                <span className="text-xs font-medium">Email address</span>
                <input
                  required
                  type="email"
                  value={brief.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-medium">
                  Phone number <span className="text-[#8b9087]">(optional)</span>
                </span>
                <input
                  type="tel"
                  value={brief.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-[#26362f]/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#526c4e] focus:ring-2 focus:ring-[#526c4e]/15"
                />
              </label>
              <p className="sm:col-span-2 text-xs leading-5 text-[#74756e]">
                We’ll use these details only to help the team follow up about
                this project.
              </p>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-[#26362f]/10 pt-6">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(current - 1, 0))}
                className="rounded-full px-4 py-3 text-xs font-medium text-[#526c4e] transition-colors hover:bg-[#dfe9df]"
              >
                Back
              </button>
            ) : (
              <span />
            )}

            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-[#26362f] px-6 py-3.5 text-xs font-medium text-white transition-colors hover:bg-[#526c4e]"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-full bg-[#26362f] px-6 py-3.5 text-xs font-medium text-white transition-colors hover:bg-[#526c4e]"
              >
                Review your brief
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function ReviewCard({
  title,
  rows,
  onEdit,
}: {
  title: string;
  rows: [string, string][];
  onEdit: () => void;
}) {
  return (
    <section className="rounded-2xl border border-[#26362f]/10 bg-white/70 p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="text-[10px] font-medium text-[#526c4e] underline decoration-[#526c4e]/40 underline-offset-4 hover:decoration-[#526c4e]"
        >
          Edit
        </button>
      </div>
      <dl className="mt-4 space-y-3">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[10px] uppercase tracking-[0.08em] text-[#858a82]">
              {label}
            </dt>
            <dd className="mt-1 whitespace-pre-wrap break-words text-xs leading-5 text-[#414740]">
              {value || "Not provided"}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
