const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'AI-Powered Prospect Research',
    description: 'We use AI-assisted tools to identify and build highly targeted lists of your ideal B2B prospects — verified, enriched, and aligned with your ICP.',
    highlights: ['ICP-based targeting', 'AI-assisted filtering', 'Real-time verification'],
    color: '#1a6cf0',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Personalized Email Outreach',
    description: 'Carefully crafted, multi-step email sequences designed to start genuine business conversations with decision-makers — not spam inboxes.',
    highlights: ['A/B tested sequences', 'Deliverability optimized', 'Personalized messaging'],
    color: '#00c8ff',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'LinkedIn Lead Generation',
    description: 'Strategic LinkedIn outreach campaigns that connect your brand with the right decision-makers and build professional relationships that lead to real conversations.',
    highlights: ['Profile optimization', 'Connection campaigns', 'Thoughtful messaging'],
    color: '#1a6cf0',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Appointment Setting',
    description: 'We go beyond lead lists — we work to book qualified meetings directly onto your calendar, so your sales team can focus on prospects who are ready to talk.',
    highlights: ['Pre-qualified meetings', 'Calendar integration', 'Follow-up support'],
    color: '#00c8ff',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Pipeline Analytics & Reporting',
    description: 'Full-funnel reporting dashboards that give you complete visibility into campaign performance, conversion rates, and ROI in real time.',
    highlights: ['Live dashboards', 'Weekly reports', 'ROI tracking'],
    color: '#1a6cf0',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'CRM Integration & Automation',
    description: 'Seamless integration with your existing CRM and sales stack, automating lead handoffs and follow-up sequences to eliminate manual work.',
    highlights: ['HubSpot & Salesforce', 'Custom workflows', 'Auto lead scoring'],
    color: '#00c8ff',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #060d1a 100%)' }}>
      {/* Background element */}
      <div className="absolute top-0 left-0 right-0 h-px divider-line" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            FULL-STACK <span className="gradient-text">LEAD GENERATION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every service we offer is built around one goal: connecting your business with the right prospects through intelligent, personalized outreach.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
                  border: `1px solid ${service.color}33`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {service.highlights.map((h, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
