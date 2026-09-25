export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { container: 44, text: 'text-base', sub: 'text-[10px]' },
    md: { container: 52, text: 'text-xl', sub: 'text-xs' },
    lg: { container: 68, text: 'text-2xl', sub: 'text-sm' },
  };

  const s = sizes[size];
  const c = s.container;

  return (
    <div className="flex items-center gap-3">
      {/* VB Circle Emblem */}
      <div className="flex-shrink-0 relative" style={{ width: c, height: c }}>
        <svg viewBox="0 0 100 100" width={c} height={c}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a6cf0" />
              <stop offset="100%" stopColor="#00c8ff" />
            </linearGradient>
            <linearGradient id="letterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#1a6cf0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Outer ring */}
          <circle cx="50" cy="50" r="47" fill="#0a1628" stroke="url(#ringGrad)" strokeWidth="3" filter="url(#glow)" />
          {/* Inner dark bg */}
          <circle cx="50" cy="50" r="44" fill="#060d1a" />
          {/* V letter */}
          <path
            d="M18 25 L32 62 L42 40 L52 62 L66 25"
            stroke="url(#letterGrad)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          {/* B letter */}
          <path
            d="M56 25 L56 75"
            stroke="url(#letterGrad)"
            strokeWidth="5.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M56 25 Q80 25 80 38 Q80 50 56 50"
            stroke="url(#letterGrad)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M56 50 Q82 50 82 63 Q82 75 56 75"
            stroke="url(#letterGrad)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Swoosh accent */}
          <path
            d="M30 55 Q50 35 75 42"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className={`font-rajdhani font-bold ${s.text} tracking-wider`}>
          <span className="text-white">VECTOR </span>
          <span style={{ color: '#00c8ff' }}>BRIDGE</span>
        </div>
        <div className={`${s.sub} tracking-[0.2em] text-gray-500 font-medium uppercase mt-0.5`}>
          B2B Lead Generation
        </div>
      </div>
    </div>
  );
}
