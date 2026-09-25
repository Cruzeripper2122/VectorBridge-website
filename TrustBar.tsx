const industries = [
  'SaaS', 'FinTech', 'Consulting', 'Logistics', 'Healthcare Tech',
  'Manufacturing', 'Real Estate', 'Legal Services', 'Cybersecurity', 'EdTech',
];

export default function TrustBar() {
  return (
    <section className="py-10 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060d1a 0%, #0a1628 100%)', borderTop: '1px solid rgba(26,108,240,0.1)', borderBottom: '1px solid rgba(26,108,240,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-500 text-xs font-medium tracking-widest uppercase text-center">
            Built for B2B companies across industries
          </p>

          {/* Scrolling industry tags */}
          <div className="w-full overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
              style={{ background: 'linear-gradient(90deg, #0a1628, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
              style={{ background: 'linear-gradient(270deg, #0a1628, transparent)' }} />

            <div
              className="flex gap-4 w-max"
              style={{
                animation: 'scroll-left 20s linear infinite',
              }}
            >
              {[...industries, ...industries].map((industry, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium text-gray-400"
                  style={{
                    border: '1px solid rgba(26,108,240,0.2)',
                    background: 'rgba(26,108,240,0.05)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
