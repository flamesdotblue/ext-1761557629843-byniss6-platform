import React from 'react';
import { Mail, Phone, Shield } from 'lucide-react';

const brandBlue = '#3498db';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Contact us</h2>
            <p className="mt-2 text-slate-700">Have questions about your credit journey? Reach out and we’ll get back to you.</p>
            <div className="mt-4 space-y-2 text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-600" aria-hidden="true" /> support@credwise.in</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-slate-600" aria-hidden="true" /> +91-00000-00000</p>
              <p className="flex items-center gap-2"><Shield className="h-4 w-4 text-slate-600" aria-hidden="true" /> We use HTTPS and industry best practices to protect your data.</p>
            </div>
          </div>

          <form className="bg-slate-50 rounded-2xl p-6 border border-slate-200" aria-label="Contact form" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#3498db] focus:ring-[#3498db]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#3498db] focus:ring-[#3498db]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-800">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#3498db] focus:ring-[#3498db]"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[#3498db] px-5 py-3 font-medium text-white shadow hover:bg-[#2d86c3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3498db]">Send message</button>
              <p className="text-xs text-slate-500">By contacting us, you agree to our privacy policy. We will never perform a hard enquiry without your explicit consent.</p>
            </div>
          </form>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} CredWise India. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#education" className="text-slate-700 hover:text-slate-900">Blog</a>
            <a href="#report" className="text-slate-700 hover:text-slate-900">Get Report</a>
            <a href="#home" className="text-slate-700 hover:text-slate-900">Home</a>
          </div>
        </div>
      </div>

      <div className="h-1 w-full" style={{background: `linear-gradient(90deg, ${brandBlue}, #2ecc71)`}} aria-hidden="true" />
    </footer>
  );
}
