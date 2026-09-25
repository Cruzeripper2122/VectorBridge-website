import { useState } from 'react';

const faqs = [
  {
    question: 'How quickly will I see results?',
    answer: 'Timelines vary depending on your industry, ICP, and offer — but most campaigns are live within 7-10 business days of onboarding. From there, you can typically expect initial responses and conversations within the first few weeks as we test and optimize messaging.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'Our methodology is designed to work across B2B industries — including SaaS, professional services, fintech, logistics, healthcare technology, and more. We customize every campaign to your specific market and ICP, regardless of vertical.',
  },
  {
    question: 'Do you guarantee results?',
    answer: 'We don\'t make unrealistic guarantees — and we\'d encourage you to be cautious of any agency that does. What we do guarantee is a transparent, data-driven approach with clear reporting. We work closely with you to refine campaigns and maximize qualified opportunities over time.',
  },
  {
    question: 'What\'s the difference between a lead and an appointment?',
    answer: 'A lead is a prospect who has shown interest. An appointment is a pre-qualified, scheduled meeting on your calendar with a decision-maker who is ready to discuss your solution. We focus on booked appointments, not just raw leads, because appointments are what actually drive revenue.',
  },
  {
    question: 'How do you find and qualify leads?',
    answer: 'We use a combination of advanced prospecting tools, AI-powered data enrichment, and manual research to build highly targeted lists. Every prospect is verified against your ICP criteria before we ever reach out — ensuring outreach is always relevant and well-targeted.',
  },
  {
    question: 'What does the onboarding process look like?',
    answer: 'After signing, we kick off with a deep discovery session to understand your business, ICP, and goals. From there, we build your campaign strategy, messaging framework, and prospect lists. Campaigns typically go live within 7-10 business days of onboarding.',
  },
  {
    question: 'Are there long-term contracts?',
    answer: 'No long-term contracts. We operate on a month-to-month basis because we believe in earning your business every single month. That said, lead generation compounds over time — campaigns typically improve as we gather data and optimize.',
  },
  {
    question: 'How do I stay updated on campaign performance?',
    answer: 'You\'ll have access to a reporting dashboard showing key metrics. You\'ll also receive regular performance updates from your dedicated account manager, and we schedule strategy calls to review results and align on priorities.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #060d1a 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px divider-line" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Got Questions?</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl text-white mb-4">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with VectorBridge.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
              style={{
                borderColor: openIndex === i ? 'rgba(0, 200, 255, 0.4)' : 'rgba(26, 108, 240, 0.2)',
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-base transition-colors ${openIndex === i ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                  {faq.question}
                </span>
                <div
                  className="ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i ? 'linear-gradient(135deg, #1a6cf0, #00c8ff)' : 'rgba(26,108,240,0.1)',
                    border: '1px solid rgba(26,108,240,0.3)',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-5 pb-5">
                  <div className="h-px mb-4" style={{ background: 'rgba(26,108,240,0.2)' }} />
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
