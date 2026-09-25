import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email:',
    value: 'chibuikemamaefule871@gmail.com',
    href: 'mailto:chibuikemamaefule871@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012 2v5a2 2 0 01-2 2H5l-3 3V7a2 2 0 012-2h14z" />
      </svg>
    ),
    label: 'Phone/WhatsApp:',
    value: '+234 815 770 2310',
    href: 'https://wa.me/2348157702310',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    revenue: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#060d1a' }}>
      <div className="absolute top-0 left-0 right-0 h-px divider-line" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Orbs */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 orb-blue rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Let's Talk</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            READY TO FILL YOUR <span className="gradient-text">PIPELINE?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Book a free strategy call. No pressure, no hard sell — just a candid conversation about how AI-powered outreach can work for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(26,108,240,0.3), rgba(0,200,255,0.2))', color: '#00c8ff' }}>
                  {info.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="text-white text-sm font-medium hover:text-cyan-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white text-sm font-medium">{info.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Trust signals */}
            <div className="glass-card rounded-xl p-6">
              <h4 className="text-white font-bold mb-4">What happens next?</h4>
              <div className="space-y-3">
                {[
                  'We review your submission',
                  'Strategy call scheduled within 24h',
                  'Custom proposal delivered in 48h',
                  'Campaign live within 7-10 days',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1a6cf0, #00c8ff)' }}>
                      {i + 1}
                    </div>
                    <span className="text-gray-400 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 text-center"
                style={{ borderColor: 'rgba(0,200,255,0.4)' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1a6cf0, #00c8ff)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-rajdhani font-bold text-3xl text-white mb-3">
                  MESSAGE RECEIVED!
                </h3>
                <p className="text-gray-400">
                  Thanks, <span className="text-cyan-400">{formData.name}</span>! We'll be in touch within 24 hours to schedule your free strategy call. Get ready to build your pipeline. 🚀
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none focus:ring-2 transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(26,108,240,0.25)',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(0,200,255,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,108,240,0.25)'}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(26,108,240,0.25)',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(0,200,255,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,108,240,0.25)'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(26,108,240,0.25)',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(0,200,255,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,108,240,0.25)'}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yoursite.com"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(26,108,240,0.25)',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(0,200,255,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,108,240,0.25)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">
                    Monthly Revenue Range *
                  </label>
                  <select
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm"
                    style={{
                      background: 'rgba(6,13,26,0.9)',
                      border: '1px solid rgba(26,108,240,0.25)',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,200,255,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(26,108,240,0.25)'}
                  >
                    <option value="" disabled>Select revenue range...</option>
                    <option value="pre-revenue">Pre-revenue / Early stage</option>
                    <option value="0-50k">$0 - $50K/mo</option>
                    <option value="50k-200k">$50K - $200K/mo</option>
                    <option value="200k-500k">$200K - $500K/mo</option>
                    <option value="500k+">$500K+/mo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What are your lead generation challenges? What does your ideal customer look like? Any specific goals or targets?"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(26,108,240,0.25)',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,200,255,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(26,108,240,0.25)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 rounded-xl text-white font-bold text-lg tracking-wide flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Book My Free Strategy Call
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  🔒 Your information is 100% secure. No spam, ever. We'll only reach out about your lead generation needs.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
