const values = [
  {
    icon: '🎯',
    title: 'Precision Targeting',
    description: 'Every prospect we contact has been carefully researched to match your exact ideal customer profile — no spray and pray.',
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Research',
    description: 'AI helps us analyze prospects and personalize outreach at scale — while human expertise keeps every conversation authentic.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Optimization',
    description: 'Every decision we make is informed by real campaign data. We track, test, and refine to continuously improve your results.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    description: 'We\'re not a vendor — we\'re an extension of your team. Your success is our success, and we\'re fully invested in your growth.',
  },
];

const whyUs = [
  { label: 'Done-for-you execution', desc: 'We handle everything from prospect research to booking meetings' },
  { label: 'AI-powered, human-guided', desc: 'Smart technology backed by real expertise — not bots pretending to be people' },
  { label: 'No long-term contracts', desc: 'Month-to-month engagements — we earn your business every month' },
  { label: 'Dedicated account manager', desc: 'A real human who knows your business, always available' },
  { label: 'Transparent reporting', desc: 'You see everything — no black boxes, no guessing' },
  { label: 'Personalized, not templated', desc: 'Every campaign is custom-built for your market and ICP' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#060d1a' }}>
      <div className="absolute top-0 left-0 right-0 h-px divider-line" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Left orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 orb-blue rounded-full blur-3xl opacity-20 pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Who We Are</span>
            </div>

            <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              WE ARE THE <span className="gradient-text">BRIDGE</span> BETWEEN YOUR BUSINESS AND GROWTH
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              VectorBridge was created to help B2B companies generate meaningful sales conversations through intelligent prospect research and highly personalized outreach.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Instead of sending thousands of generic emails, we focus on understanding each prospect and delivering outreach that is relevant, valuable, and human.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Our mission is simple: help businesses build real relationships that lead to qualified meetings and sustainable growth.
            </p>

            {/* Why us list */}
            <div className="space-y-3">
              {whyUs.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1a6cf0, #00c8ff)' }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.label}</span>
                    <span className="text-gray-500 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - values cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}

            {/* CTA card */}
            <div className="sm:col-span-2 rounded-2xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(26,108,240,0.2), rgba(0,200,255,0.1))', border: '1px solid rgba(0,200,255,0.3)' }}>
              <p className="text-white font-bold text-xl mb-3">
                Ready to build your pipeline?
              </p>
              <p className="text-gray-400 text-sm mb-5">
                Let's talk about how AI-powered, personalized outreach can work for your business.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-8 py-3 rounded-xl text-white font-bold"
              >
                Book a Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
