import { ArrowRight, Building2, Factory, Landmark, ShieldCheck, Store, TrendingUp } from 'lucide-react';
import { BrandBanner } from '@/components/brand-banner';
import { ScrollReveal } from '@/components/scroll-reveal';

const pillars = [
  {
    title: 'Accounting & Bookkeeping',
    body: 'Maintenance on ZOHO Books, bank reconciliations, and vendor/customer ledger management.',
    icon: Landmark,
  },
  {
    title: 'GST & Tax Compliance',
    body: 'Routine reconciliation (GSTR-2B), TDS filings, and support during departmental notices.',
    icon: ShieldCheck,
  },
  {
    title: 'Monthly MIS & Reporting',
    body: 'P&L Analysis, Cash Flow Summaries, and Project-wise Profitability.',
    icon: TrendingUp,
  },
  {
    title: 'Advisory & Risk Control',
    body: 'Business structuring (Proprietorship to Pvt Ltd), FEMA, and Regulatory guidance.',
    icon: ArrowRight,
  },
];

const profiles = [
  { title: 'B2B Traders', icon: Store },
  { title: 'Small Manufacturers', icon: Factory },
  { title: 'Service Providers', icon: Building2 },
  { title: 'Growing Startups', icon: TrendingUp },
];

export default function Home() {
  return (
    <main>
      <section className="grid-veil border-b border-navy/10 bg-gradient-to-b from-ivory to-white">
        <div className="section-shell py-20 sm:py-28">
          <ScrollReveal className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-burgundy">FinBridge Advisors & Associates</p>
            <h1 className="font-serif text-4xl leading-tight text-navy sm:text-6xl">
              Financial Clarity. Compliance Confidence. Strategic Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-navy/80">
              Structured Advisory for Growing Enterprises. Founded by Harsh Pandey, CA Finalist.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BrandBanner />

      <section className="section-shell py-16">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">The Reality Check</h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ScrollReveal className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-8" delay={0.08}>
            <h3 className="font-serif text-2xl text-burgundy">Transactional Chaos</h3>
            <ul className="mt-5 space-y-3 text-navy/80">
              <li>• Disorganized books and fragmented records</li>
              <li>• Fear of tax notices and avoidable escalations</li>
              <li>• Last-minute filing rushes and reactive fixes</li>
              <li>• Limited visibility into actual financial position</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal className="rounded-2xl border border-navy/20 bg-navy p-8 text-ivory" delay={0.16}>
            <h3 className="font-serif text-2xl">Structured Systems</h3>
            <ul className="mt-5 space-y-3 text-ivory/90">
              <li>• Operational clarity with disciplined workflows</li>
              <li>• Defined scope and documented accountability</li>
              <li>• Strategic oversight across compliance cycles</li>
              <li>• Peace of mind from steady execution</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">The Four Pillars of Financial Health</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map(({ title, body, icon: Icon }, idx) => (
              <ScrollReveal
                key={title}
                delay={idx * 0.08}
                className="rounded-2xl border border-navy/10 bg-ivory p-6 shadow-soft transition hover:-translate-y-1"
              >
                <Icon className="h-6 w-6 text-burgundy" />
                <h3 className="mt-4 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-navy/75">{body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">The Engagement Model</h2>
        </ScrollReveal>
        <ScrollReveal className="mt-8 overflow-hidden rounded-2xl border border-navy/10" delay={0.1}>
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-navy text-ivory">
              <tr>
                <th className="px-4 py-4 font-semibold">Focus Area</th>
                <th className="px-4 py-4 font-semibold">Transactional Model</th>
                <th className="px-4 py-4 font-semibold">FinBridge Retainer</th>
              </tr>
            </thead>
            <tbody className="bg-white text-navy/85">
              <tr className="border-t border-navy/10">
                <td className="px-4 py-4 font-medium">Compliance Workflow</td>
                <td className="px-4 py-4">Reactive fixes near deadlines</td>
                <td className="px-4 py-4">Timely compliance with planned cadence</td>
              </tr>
              <tr className="border-t border-navy/10">
                <td className="px-4 py-4 font-medium">Ownership</td>
                <td className="px-4 py-4">No clear accountability</td>
                <td className="px-4 py-4">Defined responsibility and follow-through</td>
              </tr>
              <tr className="border-t border-navy/10">
                <td className="px-4 py-4 font-medium">Strategic Input</td>
                <td className="px-4 py-4">Minimal advisory beyond filing</td>
                <td className="px-4 py-4">Continuous oversight and ongoing advisory</td>
              </tr>
            </tbody>
          </table>
        </ScrollReveal>
      </section>

      <section className="bg-navy py-16 text-ivory">
        <div className="section-shell">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl">Who We Serve</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map(({ title, icon: Icon }, idx) => (
              <ScrollReveal key={title} delay={idx * 0.07} className="rounded-xl border border-ivory/20 p-5">
                <Icon className="h-6 w-6 text-burgundy" />
                <p className="mt-3 font-medium">{title}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <ScrollReveal className="rounded-2xl border border-burgundy/30 bg-burgundy/5 p-8 sm:p-10">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">Founder & Contact</h2>
          <p className="mt-4 text-navy/80">Harsh Pandey · CA Finalist · FinBridge Advisors & Associates</p>
          <div className="mt-6 grid gap-4 text-navy sm:grid-cols-3">
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-burgundy">Phone</span>
              7489500340
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-burgundy">Email</span>
              finbridgeadvisorsandassociates@gmail.com
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-burgundy">Location</span>
              Indore
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
