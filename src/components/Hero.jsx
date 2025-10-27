import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Smarter Credit Assessment for India
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700">
              Understand your credit score and build financial confidence. Explore your score, learn how lenders in India use it, and improve your eligibility for loans and credit cards.
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#2ecc71] mt-0.5" aria-hidden="true"/><span className="text-slate-800">Free simulator with Indian market insights (CIBIL/Experian/Equifax/CRIF ranges 300–900)</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#2ecc71] mt-0.5" aria-hidden="true"/><span className="text-slate-800">Actionable steps to improve repayment history and utilization</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#2ecc71] mt-0.5" aria-hidden="true"/><span className="text-slate-800">Secure by default: we recommend and support HTTPS</span></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#credit-score" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{backgroundColor:'#3498db'}}>Check Your Credit Score</a>
              <a href="#education" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-[#3498db] ring-1 ring-[#3498db] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3498db]">Learn More</a>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white/30">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} aria-label="Interactive 3D credit card"/>
            <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{background: 'radial-gradient(1200px 400px at 10% 10%, rgba(52,152,219,0.12), transparent), radial-gradient(900px 300px at 90% 90%, rgba(46,204,113,0.12), transparent)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
