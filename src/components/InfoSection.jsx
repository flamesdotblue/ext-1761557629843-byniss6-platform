import React from 'react';

const FAQItem = ({ q, a }) => (
  <details className="group rounded-xl border border-neutral-200 p-4 bg-white open:shadow-sm">
    <summary className="cursor-pointer list-none">
      <h4 className="inline text-base font-semibold align-middle">{q}</h4>
    </summary>
    <p className="mt-3 text-neutral-700">{a}</p>
  </details>
);

const BlogCard = ({ title, excerpt, tag }) => (
  <article className="rounded-2xl border border-neutral-200 p-5 bg-white hover:shadow-sm focus-within:shadow-sm" aria-labelledby={title}>
    <div className="text-xs font-medium uppercase tracking-wide text-[#3498db]">{tag}</div>
    <h3 id={title} className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-neutral-700">{excerpt}</p>
    <a href="#" className="mt-3 inline-flex text-[#3498db] hover:underline" aria-label={`Read article: ${title}`}>Read more</a>
  </article>
);

const InfoSection = () => {
  return (
    <section className="relative">
      <div id="report" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Your Credit Report</h2>
            <p className="mt-4 text-neutral-700">
              A credit report contains your loan and credit card accounts, repayment history, enquiries, and personal details maintained by Indian credit bureaus like CIBIL, Experian, CRIF, and Equifax. Review it regularly for accuracy and dispute errors promptly.
            </p>
            <ul className="mt-6 list-disc pl-6 text-neutral-800">
              <li>Verify personal and contact details</li>
              <li>Check loan and credit card repayment history</li>
              <li>Monitor active accounts and credit limits</li>
              <li>Track recent hard enquiries</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center rounded-md bg-[#3498db] px-5 py-3 text-white font-medium shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]">
              Get My Report Reviewed
            </a>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-xl font-semibold">Quick Tips for India</h3>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li>Pay at least the total amount due on time to avoid late marks.</li>
              <li>Keep utilization generally under 30% of total limits; under 10% is ideal.</li>
              <li>Maintain old accounts to preserve credit age.</li>
              <li>Space out loan/card applications to limit hard enquiries.</li>
              <li>For errors, raise a dispute with the respective bureau online.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="education" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Education and Blog</h2>
        <p className="mt-3 text-neutral-700">Actionable guidance for India’s credit ecosystem.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <BlogCard
            title="How to Improve Your CIBIL Score in 90 Days"
            excerpt="Tackle the top levers: on-time payments, lower utilization, rectify report errors, and build positive history."
            tag="Credit Score"
          />
          <BlogCard
            title="Smart Debt Management for Indian Households"
            excerpt="Prioritize high-interest debt, automate repayments, and consider balance transfers strategically."
            tag="Debt"
          />
          <BlogCard
            title="Reading Your Credit Report: A Simple Walkthrough"
            excerpt="Understand sections like accounts, enquiries, DPD, write-offs, and how to spot discrepancies."
            tag="Credit Report"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#f5fbff] to-white border-y border-neutral-200">
        <div id="faq" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQItem q="What is a good credit score in India?" a="Typically, 750 and above is considered excellent for many lenders. Scores range between 300 and 900." />
            <FAQItem q="How often should I check my credit score?" a="At least once a quarter. It does not impact your score when you check it yourself (soft enquiry)." />
            <FAQItem q="Will closing old credit cards help?" a="Not usually. Closing old cards can reduce your average age and available limits, potentially lowering your score." />
            <FAQItem q="I found an error on my report. What next?" a="Raise a dispute on the respective bureau portal (CIBIL, Experian, CRIF, Equifax) with supporting documents." />
            <FAQItem q="Do BNPL accounts affect my score?" a="Yes, many BNPL providers report to bureaus. Late payments can negatively impact your score." />
            <FAQItem q="What documents are needed to get my report?" a="Typically PAN for identity along with basic KYC details. Some bureaus may require additional verification." />
          </div>
        </div>
      </div>

      <div id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-3 text-neutral-700">Have questions about credit scores, reports, or improving eligibility? Send us a message.</p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li><span className="font-medium">Email:</span> support@crediassess.in</li>
              <li><span className="font-medium">Hours:</span> Mon–Fri, 9:00–18:00 IST</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-neutral-200 p-6 bg-white space-y-4" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3498db]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3498db]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3498db]"></textarea>
            </div>
            <button type="submit" className="inline-flex items-center rounded-md bg-[#2ecc71] px-4 py-2 text-white font-medium shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ecc71]">
              Send Message
            </button>
            <p className="text-xs text-neutral-600">This site uses a secure HTTPS connection to protect your data.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
