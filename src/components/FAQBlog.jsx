import React from 'react';
import { HelpCircle, Mail, Phone } from 'lucide-react';

const FAQItem = ({ q, a }) => (
  <details className="group rounded-lg border border-slate-200 p-4 bg-white" aria-expanded="false">
    <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
      <span>{q}</span>
      <HelpCircle className="h-5 w-5 text-[#3498db] transition-transform group-open:rotate-45" aria-hidden="true"/>
    </summary>
    <p className="mt-2 text-slate-700">{a}</p>
  </details>
);

const ArticleCard = ({ title, excerpt, href }) => (
  <article className="rounded-lg border border-slate-200 bg-white p-5 h-full" aria-labelledby={title.replace(/\s+/g,'-').toLowerCase()}>
    <h3 id={title.replace(/\s+/g,'-').toLowerCase()} className="font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-700">{excerpt}</p>
    <a href={href} className="mt-3 inline-block text-sm font-semibold text-[#3498db] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db] rounded">Read more</a>
  </article>
);

const FAQBlog = () => {
  return (
    <section className="py-16" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-6 grid gap-4" role="list">
              <FAQItem q="What is a credit score in India?" a="A three-digit number (300–900) summarising your creditworthiness based on repayment history, credit utilization, age of credit, credit mix and recent enquiries." />
              <FAQItem q="How often should I check my score?" a="Monthly checks are fine and do not impact your score when done via soft enquiries. Avoid frequent hard enquiries from multiple applications." />
              <FAQItem q="Will closing my old credit card hurt my score?" a="It can reduce the average age of your credit and available limit, potentially hurting your score. Consider keeping it open with minimal usage." />
              <FAQItem q="Is this simulator the same as CIBIL?" a="No. This is an educational tool. Actual scores from CIBIL, Experian, Equifax, or CRIF may differ based on proprietary algorithms and your real data." />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">From the Blog</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4" role="list" aria-label="Latest articles">
              <ArticleCard title="5 Ways to Improve Your CIBIL Score" excerpt="Timely EMIs, low utilization, and smart credit mix can elevate your score above 750." href="#" />
              <ArticleCard title="Managing Credit Card Debt in India" excerpt="Practical steps to reduce interest costs: snowball vs avalanche, balance transfers, and budgeting." href="#" />
              <ArticleCard title="Understanding Your Credit Report" excerpt="Decode sections like account information, DPD, enquiries, and dispute resolution." href="#" />
              <ArticleCard title="Loan Eligibility and Interest Rates" excerpt="How banks map score bands to approval odds and APRs in the Indian context." href="#" />
            </div>
            <div id="contact" className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
              <p className="mt-1 text-slate-700">Have questions about credit assessment, data privacy, or your report?</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <a href="mailto:support@crediease.in" className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]">
                  <Mail className="h-4 w-4 text-[#3498db]" aria-hidden="true"/> support@crediease.in
                </a>
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]">
                  <Phone className="h-4 w-4 text-[#3498db]" aria-hidden="true"/> +91 99999 99999
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-600">We recommend accessing your score and submitting any forms only over a secure HTTPS connection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQBlog;
