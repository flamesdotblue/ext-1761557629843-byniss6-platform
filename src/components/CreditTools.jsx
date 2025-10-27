import React, { useMemo, useState } from 'react';
import { Info, ArrowRight } from 'lucide-react';

const Slider = ({ id, label, min=0, max=100, step=1, value, onChange, helper }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-sm font-medium text-slate-800">{label}</label>
      <span className="text-xs text-slate-600" aria-live="polite">{value}</span>
    </div>
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full accent-[#3498db]"
      aria-describedby={helper ? `${id}-desc` : undefined}
    />
    {helper && (
      <p id={`${id}-desc`} className="text-xs text-slate-600 flex items-start gap-1"><Info className="h-4 w-4 text-[#3498db] mt-0.5" aria-hidden="true"/>{helper}</p>
    )}
  </div>
);

const Gauge = ({ score }) => {
  const percent = ((score - 300) / 600) * 100;
  const color = score >= 750 ? '#2ecc71' : score >= 650 ? '#f59e0b' : '#ef4444';
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-56 h-28" role="img" aria-label={`Estimated credit score ${score}`}>
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444"/>
              <stop offset="50%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#2ecc71"/>
            </linearGradient>
          </defs>
          <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="url(#gaugeGrad)" strokeWidth="10" strokeLinecap="round"/>
          <circle cx={10 + 0.8 * percent} cy="50" r="0" fill="none"/>
        </svg>
        <div className="absolute left-0 top-0 w-full h-full" style={{transform: `rotate(${(percent/100)*180 - 90}deg)`, transformOrigin: '50% 100%'}} aria-hidden="true">
          <div className="mx-auto w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[60px]" style={{borderTopColor: color}}></div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-3xl font-extrabold tracking-tight" style={{color}}>{score}</div>
        <p className="text-xs text-slate-600">Range: 300 – 900 (CIBIL/Experian/Equifax/CRIF)</p>
      </div>
    </div>
  );
};

const CreditTools = () => {
  const [history, setHistory] = useState(90); // on-time %
  const [util, setUtil] = useState(30); // % utilization
  const [age, setAge] = useState(36); // months average age
  const [inq, setInq] = useState(1); // last 6-12m hard pulls
  const [mix, setMix] = useState(60); // 0-100 variety

  const score = useMemo(() => {
    // Simple educational model for India: weightings inspired by common bureau methodologies
    // history 35%, utilization 30%, age 15%, inquiries 10%, mix 10%
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
    const historyScore = clamp(history, 0, 100) / 100; // higher is better
    const utilScore = 1 - clamp(util, 0, 100) / 100; // lower is better
    const ageScore = clamp(age, 0, 180) / 180; // 15 years max
    const inqScore = 1 - clamp(inq, 0, 10) / 10; // fewer is better
    const mixScore = clamp(mix, 0, 100) / 100;

    const weighted = 0.35*historyScore + 0.30*utilScore + 0.15*ageScore + 0.10*inqScore + 0.10*mixScore;
    return Math.round(300 + weighted * 600);
  }, [history, util, age, inq, mix]);

  return (
    <section id="credit-score" aria-labelledby="sim-heading" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 id="sim-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">Credit Score Simulator</h2>
            <p className="text-slate-700">Adjust the sliders to see how key factors influence your indicative score in India. This tool is educational and does not fetch data from any bureau.</p>
            <div className="grid gap-5">
              <Slider id="history" label="On-time Payment History (%)" value={history} onChange={setHistory} helper="Aim for 95%+ on-time payments to keep your score healthy." />
              <Slider id="util" label="Credit Utilization (%)" value={util} onChange={setUtil} helper="Try to keep card balances under 30% of your limit; under 10% is ideal." />
              <Slider id="age" label="Average Age of Credit (months)" min={0} max={180} value={age} onChange={setAge} helper="Older accounts improve stability. Avoid closing your oldest card unless necessary." />
              <Slider id="inq" label="Hard Inquiries (last 12 months)" min={0} max={10} value={inq} onChange={setInq} helper="Multiple recent applications can temporarily lower your score." />
              <Slider id="mix" label="Credit Mix (variety %)" value={mix} onChange={setMix} helper="A balanced mix (e.g., card + loan) can help, but only borrow what you can repay." />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white shadow" style={{backgroundColor:'#2ecc71'}}>
                Get Guidance <ArrowRight className="h-4 w-4" aria-hidden="true"/>
              </a>
              <a href="#credit-report" className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-[#3498db] ring-1 ring-[#3498db]">About Credit Reports</a>
            </div>
          </div>
          <div className="bg-white rounded-xl ring-1 ring-slate-200 p-6 lg:p-8">
            <Gauge score={score} />
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg" style={{background:'linear-gradient(135deg, rgba(52,152,219,0.08), rgba(46,204,113,0.08))'}}>
                <h3 className="font-semibold text-slate-900">What is a good score?</h3>
                <p className="mt-1 text-slate-700">750+ is generally considered strong for Indian lenders and improves approval odds and interest rates.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50">
                <h3 id="credit-report" className="font-semibold text-slate-900">Credit Report</h3>
                <p className="mt-1 text-slate-700">Your report lists accounts, repayment history, enquiries, and defaults. Dispute errors with the bureau if you spot inaccuracies.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50">
                <h3 className="font-semibold text-slate-900">Data Security</h3>
                <p className="mt-1 text-slate-700">Always check your score and submit details over HTTPS (lock icon in the address bar) to protect your data.</p>
              </div>
              <div className="p-4 rounded-lg" style={{background:'linear-gradient(135deg, rgba(46,204,113,0.08), rgba(52,152,219,0.08))'}}>
                <h3 id="education" className="font-semibold text-slate-900">Tips to Improve</h3>
                <ul className="mt-1 list-disc pl-5 text-slate-700">
                  <li>Pay EMIs and card bills before the due date</li>
                  <li>Lower utilization by prepaying or increasing limits responsibly</li>
                  <li>Limit new applications within a short window</li>
                  <li>Keep old accounts active with small monthly spends</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditTools;
