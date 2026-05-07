export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Content Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track and optimize your{' '}
          <span className="text-[#58a6ff]">brand partnerships</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Monitor every brand deal in one place — payment schedules, deliverable deadlines, ROI analytics, and performance metrics. Stop leaving money on the table.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $11/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Payment Tracking', 'ROI Analytics', 'Deliverable Deadlines', 'Deal Pipeline', 'Revenue Forecasting', 'Brand CRM'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$11</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage brand deals</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited brand deal tracking',
              'Payment schedule reminders',
              'ROI & performance analytics',
              'Deliverable deadline management',
              'Revenue forecasting dashboard',
              'Brand contact CRM',
              'CSV export',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure payment via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is Brand Deal Tracker for?',
              a: 'Any content creator — YouTubers, Instagram influencers, TikTokers, podcasters — who manages brand sponsorships and wants to stay on top of payments, deliverables, and ROI.'
            },
            {
              q: 'How does payment tracking work?',
              a: 'Enter your deal terms and payment milestones. The dashboard shows upcoming payments, overdue invoices, and total earned vs. expected revenue so you never miss a payout.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your account settings. You keep access until the end of your billing period with no cancellation fees.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Brand Deal Tracker. All rights reserved.
      </footer>
    </main>
  )
}
