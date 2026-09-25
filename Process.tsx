const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start by deeply understanding your business, ideal customer profile, value proposition, and growth goals to craft a strategy tailored to your market.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'ICP & Strategy Build',
    description: 'Using AI-powered research, our team builds your Ideal Customer Profile, develops personalized messaging frameworks, and designs a targeted outreach strategy.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Campaign Launch',
    description: 'We launch multi-channel outreach campaigns via email and LinkedIn — each message personalized to resonate with the specific prospect receiving it.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: 'We continuously analyze performance data, A/B test messaging, and refine what works — building a sustainable, scalable pipeline over time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden" style={{ background: '#060d1a' }}>
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px divider-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            FROM ZERO TO <span className="gradient-text">PIPELINE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our structured 4-step framework takes you from discovery to a consistent pipeline of qualified B2B opportunities.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(0,200,255,0.3) 20%, rgba(26,108,240,0.5) 50%, rgba(0,200,255,0.3) 80%, transparent 95%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center lg:items-center">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #1a6cf0, #00c8ff)',
                      boxShadow: '0 0 20px rgba(0, 200, 255, 0.4)',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step number badge */}
                <div className="text-cyan-500/50 font-rajdhani font-bold text-5xl absolute top-0 -left-2 lg:left-auto lg:-top-2 select-none pointer-events-none opacity-30">
                  {step.number}
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 w-full text-left mt-2">
                  <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg glow-blue"
          >
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
