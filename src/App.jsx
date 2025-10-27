import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditTools from './components/CreditTools';
import FAQBlog from './components/FAQBlog';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-slate-900 px-3 py-2 rounded shadow" aria-label="Skip to main content">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="">
        <Hero />
        <CreditTools />
        <FAQBlog />
      </main>
    </div>
  );
}

export default App;
