const capabilities = [
  {
    industry: 'SaaS & Technology',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'We help SaaS companies connect with decision-makers at target accounts through AI-researched, personalized outreach that speaks to their specific challenges.',
    capabilities: ['Account-based targeting', 'Technical buyer outreach', 'Product-market fit messaging'],
    accent: '#1a6cf0',
  },
  {
    industry: 'Professional Services',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'For consulting firms, agencies, and service providers who need a steady flow of qualified conversations with the right clients — built through relevance, not volume.',
    capabilities: ['Expertise-led positioning', 'Relationship-first outreach', 'Thought leadership campaigns'],
    accent: '#00c8ff',
  },
  {
    industry: 'Emerging & Growth-Stage',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: 'Startups and growth-stage companies that need to build outbound from scratch. We design and execute systems that generate qualified meetings from day one.',
    capabilities: ['Outbound system design', 'Market validation outreach', 'Scalable campaign frameworks'],
    accent: '#1a6cf0',
  },
];

const differentiators = [
  {
    title: 'We research before we reach out',
    description: 'AI helps us understand every prospect before a single message is sent — so outreach is always relevant and valuable.',
  },
  {
    title: 'Personalization, not templates',
    description: 'Every campaign is built around messaging crafted for your specific market, not recycled scripts from another client.',
  },
  {
    title: 'Conversations, not spam',
    description: 'Our goal is to start genuine business conversations with the right people — not blast thousands of inboxes hoping for a response.',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060d1a 0%, #0a1628 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px divider-line" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 orb-cyan rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What Sets Us Apart</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            INTELLIGENT OUTREACH. <span className="gradient-text">REAL CONVERSATIONS.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Most lead generation agencies rely on mass email campaigns and generic templates. VectorBridge takes a different approach.
          </p>
        </div>

        {/* UVP Block */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 mb-16 text-center" style={{ borderColor: 'rgba(0, 200, 255, 0.25)' }}>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            We use AI-assisted research to understand every prospect before outreach begins. Every campaign is built around{' '}
            <span className="text-cyan-400 font-semibold">personalized messaging</span>{' '}
            designed to start genuine business conversations — not spam inboxes.
          </p>
          <p className="text-gray-500 italic">
            AI helps us work smarter. Human expertise ensures every conversation feels authentic.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((cap, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden group">
              {/* Top bar */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${cap.accent}, #00c8ff)` }} />

              <div className="p-7">
                {/* Industry badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: `${cap.accent}20`, color: cap.accent, border: `1px solid ${cap.accent}40` }}
                  >
                    {cap.industry}
                  </span>
                  <div style={{ color: cap.accent }}>
                    {cap.icon}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{cap.description}</p>

                {/* Capabilities list */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {cap.capabilities.map((c, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${cap.accent}25` }}>
                        <svg className="w-2.5 h-2.5" fill="none" stroke={cap.accent} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="mb-6 text-center">
          <h3 className="font-rajdhani font-bold text-3xl text-white">
            THE <span className="text-cyan-400">VECTORBRIDGE</span> DIFFERENCE
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <div key={i} className="testimonial-card rounded-2xl p-6">
              {/* Number */}
              <div className="flex gap-1 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, #1a6cf0, #00c8ff)' }}>
                  {i + 1}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-white font-semibold text-base mb-3">
                {d.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
