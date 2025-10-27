import React from 'react';
import { Shield, BarChart3 } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary Navigation">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="Credit Assessment Home">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{background: 'linear-gradient(135deg,#3498db,#2ecc71)'}}>
              <Shield className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900">CrediEase India</span>
              <span className="text-xs text-slate-600">Secure • HTTPS</span>
            </div>
          </a>
          <ul className="hidden md:flex items-center gap-6" role="list">
            <li><a className="text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db] rounded px-1 py-1" href="#home">Home</a></li>
            <li><a className="text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db] rounded px-1 py-1" href="#credit-score">Credit Score</a></li>
            <li><a className="text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db] rounded px-1 py-1" href="#credit-report">Credit Report</a></li>
            <li><a className="text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db] rounded px-1 py-1" href="#education">Education</a></li>
            <li><a className="text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db] rounded px-1 py-1" href="#contact">Contact</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="#credit-score" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{backgroundColor:'#3498db'}}> 
              <BarChart3 className="h-4 w-4" aria-hidden="true"/>
              Check Your Credit Score
            </a>
            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]" aria-label="Open navigation menu">
              <span className="sr-only">Menu</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
        {/* Simple mobile links row */}
        <div className="md:hidden grid grid-cols-5 gap-1 pb-3 pt-1">
          {[
            { href: '#home', label: 'Home' },
            { href: '#credit-score', label: 'Score' },
            { href: '#credit-report', label: 'Report' },
            { href: '#education', label: 'Education' },
            { href: '#contact', label: 'Contact' },
          ].map(item => (
            <a key={item.href} href={item.href} className="text-center text-xs py-1 rounded text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]">{item.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
