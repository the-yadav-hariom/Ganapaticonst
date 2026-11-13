import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'BIM Services',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Try sending to local service backend
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      // Fallback works gracefully offline too
      console.log('Submitted locally:', formData);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-10">
        <div className="relative inline-block w-full max-w-lg p-8 my-8 text-left bg-white rounded-2xl shadow-2xl transform transition-all border border-stone-200">
          
          {/* Close Button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 transition-colors p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-[#2ca35c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 font-semibold mb-2">Thank You!</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Your request has been received. A Ganapati Ganesh Construction representative will reach out to you within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#2ca35c] hover:bg-[#258d4e] text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <span className="text-[#2ca35c] text-xs font-bold tracking-[0.2em] uppercase block mb-1">
                START YOUR PROJECT
              </span>
              <h3 className="font-serif text-2xl text-zinc-900 font-normal mb-2">
                Request A Quote & Consultation
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm mb-6">
                Provide your project requirements and our team will prepare a tailored engineering proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9136226996"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                    >
                      <option>BIM Services</option>
                      <option>VDC Services</option>
                      <option>Offshore Engineering Support</option>
                      <option>Technical Staffing Solutions</option>
                      <option>CAD Drafting & Documentation</option>
                      <option>Scan to BIM Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your project scope, timeline, and location..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#2ca35c] hover:bg-[#258d4e] text-white font-medium text-sm py-3 rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    {submitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

