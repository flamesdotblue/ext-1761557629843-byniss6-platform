import React, { useMemo, useState } from 'react';

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-neutral-200 p-4 bg-white">
    <div className="text-sm text-neutral-600">{label}</div>
    <div className="mt-1 text-2xl font-semibold">{value}</div>
  </div>
);

const Range = ({ id, label, value, onChange, min = 0, max = 100, step = 1, help }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <label className="font-medium" htmlFor={id}>{label}</label>
      <span className="text-sm text-neutral-600" aria-live="polite">{value}</span>
    </div>
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-[#2ecc71]"
      aria-describedby={`${id}-help`}
    />
    {help && <p id={`${id}-help`} className="text-sm text-neutral-600">{help}</p>}
  </div>
);

const ScoreGauge = ({ score }) => {
  const pct = ((score - 300) / (900 - 300)) * 100;
  const color = score >= 750 ? '#2ecc71' : score >= 650 ? '#3498db' : '#e67e22';
  return (
    <div className="relative w-full max-w-sm" aria-label={`Estimated score ${Math.round(score)}`}>
      <div className="h-4 w-full rounded-full bg-neutral-200" role="progressbar" aria-valuemin={300} aria-valuemax={900} aria-valuenow={Math.round(score)}>
        <div className="h-4 rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <div className="mt-3 flex items-end justify-between text-sm text-neutral-700">
        <span>300</span>
        <span className="text-base font-semibold" style={{ color }}>{Math.round(score)}</span>
        <span>900</span>
      </div>
    </div>
  );
};

const CreditSection = () => {
  const [util, setUtil] = useState(30); // credit utilization %
  const [payHist, setPayHist] = useState(95); // on-time payments %
  const [age, setAge] = useState(48); // months
  const [enq, setEnq] = useState(1); // hard enquiries in last 6 months

  const estScore = useMemo(() => {
    // Simple heuristic aligned with common Indian scoring patterns
    // Weights similar to typical bureaus: payment history, utilization, age, enquiries
    const wPay = 0.4;
    const wUtil = 0.3;
    const wAge = 0.2;
    const wEnq = 0.1;

    const payScore = (payHist / 100) * 600 + 300; // higher is better
    const utilScore = (1 - Math.min(util, 100) / 100) * 400 + 300; // lower utilization is better
    const ageScore = Math.min(age / 84, 1) * 300 + 300; // cap at 7 years for full points
    const enqPenalty = Math.min(enq, 8) / 8; // normalize 0..1
    const enqScore = 300 + (1 - enqPenalty) * 300; // fewer enquiries is better

    const raw = wPay * payScore + wUtil * utilScore + wAge * ageScore + wEnq * enqScore;
    return Math.max(300, Math.min(900, raw));
  }, [util, payHist, age, enq]);

  return (
    <section id="credit" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Check and Understand Your Credit Score</h2>
            <p className="mt-4 text-neutral-700">
              In India, lenders commonly refer to bureau scores like CIBIL, Experian, CRIF High Mark, and Equifax ranging from 300 to 900. A higher score improves chances of approval and better interest rates. Keep utilization low, pay on time, maintain older accounts, and avoid frequent hard enquiries.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat label="Excellent" value=">= 750" />
              <Stat label="Good" value="700 – 749" />
              <Stat label="Fair" value="650 – 699" />
              <Stat label="Needs Work" value="< 650" />
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center rounded-md bg-[#3498db] px-5 py-3 text-white font-medium shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]">
              Get Guidance
            </a>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Credit Score Simulator</h3>
            <p className="mt-1 text-sm text-neutral-600">Adjust the sliders to see how habits may influence your estimated score. This is an educational tool, not a bureau score.</p>
            <div className="mt-6 grid gap-5">
              <Range id="util" label="Credit Utilization (%)" value={util} onChange={setUtil} min={0} max={100} help="Try to keep this under 30%." />
              <Range id="payHist" label="On-time Payment History (%)" value={payHist} onChange={setPayHist} min={0} max={100} help="Consistent on-time repayments matter the most." />
              <Range id="age" label="Average Credit Age (months)" value={age} onChange={setAge} min={0} max={180} help="Older accounts generally help." />
              <Range id="enq" label="Hard Enquiries (last 6 months)" value={enq} onChange={setEnq} min={0} max={8} help="Frequent enquiries may reduce your score temporarily." />
            </div>
            <div className="mt-8 flex flex-col items-start gap-4">
              <ScoreGauge score={estScore} />
              <div className="text-sm text-neutral-700">
                Estimated based on inputs. Actual bureau scores may vary.
              </div>
              <button className="inline-flex items-center rounded-md bg-[#2ecc71] px-4 py-2 text-white font-medium shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]">
                Check Your Credit Score
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSection;
