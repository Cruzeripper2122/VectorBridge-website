import { useEffect, useRef } from 'react';

const pillars = [
  { value: 'AI', label: 'Powered Research' },
  { value: '1:1', label: 'Personalized Outreach' },
  { value: 'ICP', label: 'Precision Targeting' },
  { value: 'ROI', label: 'Focused Campaigns' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient grid-bg"
    >
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb-cyan rounded-full blur-3xl pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: i % 2 === 0 ? '#1a6cf0' : '#00c8ff',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              B2B Lead Generation Powered by AI
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-on-scroll opacity-0 font-rajdhani font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight mb-6 leading-none">
            <span className="text-white">BRIDGE THE GAP</span>
            <br />
            <span className="gradient-text">BETWEEN YOU &</span>
            <br />
            <span className="text-white">YOUR NEXT CLIENT</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-on-scroll opacity-0 text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
            VectorBridge uses{' '}
            <span className="text-cyan-400 font-semibold">AI-powered research</span>{' '}
            and personalized outreach to connect your business with qualified B2B prospects — starting genuine conversations, not spamming inboxes.
          </p>

          {/* AI reinforcement line */}
          <p className="animate-on-scroll opacity-0 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 italic">
            AI-powered research. Human strategy. Personalized outreach.
          </p>

          {/* CTAs */}
          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-lg tracking-wide glow-blue"
            >
              Start Generating Leads →
            </button>
            <button
              onClick={() => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg tracking-wide"
            >
              See How It Works
            </button>
          </div>

          {/* Pillars (replaces unverified stats) */}
          <div className="animate-on-scroll opacity-0 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <div className="stat-number text-4xl sm:text-5xl font-bold gradient-text mb-1">
                  {pillar.value}
                </div>
                <div className="text-gray-400 text-sm font-medium tracking-wide">
                  {pillar.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="bounce-scroll">
          <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
