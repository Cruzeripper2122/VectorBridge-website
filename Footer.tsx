import Logo from './Logo';

const footerLinks = {
  Services: [
    'Prospect Research',
    'Cold Email Outreach',
    'LinkedIn Lead Gen',
    'Appointment Setting',
    'Pipeline Analytics',
    'CRM Integration',
  ],
  Company: [
    'About Us',
    'Our Process',
    'Case Studies',
    'Blog',
    'Careers',
    'Contact',
  ],
  Resources: [
    'Lead Gen Guide',
    'B2B Sales Playbook',
    'Email Templates',
    'ICP Worksheet',
    'ROI Calculator',
    'FAQ',
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#030810', borderTop: '1px solid rgba(26,108,240,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="text-gray-500 text-sm leading-relaxed mt-5 max-w-xs">
              VectorBridge helps B2B companies generate meaningful sales conversations through AI-powered research and personalized outreach. We bridge the gap between your business and your next best customer.
            </p>

            <div className="mt-6 space-y-2">
              <a href="mailto:chibuikemamaefule871@gmail.com" className="block text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Email: chibuikemamaefule871@gmail.com
              </a>
              <a href="https://wa.me/2348157702310" className="block text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Phone/WhatsApp: +234 815 770 2310
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: 'Twitter',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
                  style={{ border: '1px solid rgba(26,108,240,0.2)', background: 'rgba(26,108,240,0.05)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(0,200,255,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(26,108,240,0.2)')}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                      className="text-gray-500 text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Vector Bridge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
