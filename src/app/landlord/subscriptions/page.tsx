'use client';

import React, { useState } from 'react';
import {
  LuCreditCard,
  LuCircleCheck,
  LuStar,
  LuZap,
  LuInfo,
  LuChevronRight
} from 'react-icons/lu';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    desc: 'Perfect for landlords with 1–3 properties',
    features: ['Up to 3 properties', '7-day pre-tenancy process', 'Behavioral monitoring', 'Early warnings', 'Email reports'],
    current: false,
    color: 'var(--color-guest)',
    bg: 'var(--color-guest-light)',
    btnText: 'Downgrade'
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    desc: 'Most popular for growing landlords',
    features: ['Up to 15 properties', 'Advanced risk scoring', 'All monitoring tools', 'Priority early warnings', 'CSV + PDF reports', 'Dedicated support'],
    current: true,
    color: 'var(--color-admin)',
    bg: 'var(--color-admin-light)',
    btnText: 'Current Plan'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large portfolios and property managers',
    features: ['Unlimited properties', 'White-label branding', 'API access', 'Custom integrations', 'Account manager', 'SLA guarantee'],
    current: false,
    color: 'var(--brand-color)',
    bg: 'var(--brand-light)',
    btnText: 'Contact Sales'
  }
];

const invoices = [
  { date: 'Jun 1, 2026', desc: 'Professional Plan – May 2026', amount: '$79.00', status: 'Paid' },
  { date: 'May 1, 2026', desc: 'Professional Plan – Apr 2026', amount: '$79.00', status: 'Paid' },
  { date: 'Apr 1, 2026', desc: 'Professional Plan – Mar 2026', amount: '$79.00', status: 'Paid' },
  { date: 'Mar 1, 2026', desc: 'Starter → Professional Upgrade', amount: '$50.00', status: 'Paid' }
];

export default function LandlordSubscriptionsPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Subscriptions</h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Manage your billing plan and view payment history
          </p>
        </div>

        {/* Current Plan Banner */}
        <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)', borderRadius: '16px', padding: '24px 32px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
              <LuStar />
            </div>
            <div>
              <span style={{ fontSize: '0.725rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Current Plan</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '4px 0' }}>Professional</h2>
              <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Renews on July 1, 2026 · $79/month</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="premium-btn" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }} onClick={() => alert('Sandbox: Manage payment method')}>
              <LuCreditCard style={{ display: 'inline', marginRight: '6px' }} />Payment Method
            </button>
            <button className="premium-btn" style={{ backgroundColor: 'var(--bg-secondary)', color: '#7c3aed', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }} onClick={() => alert('Sandbox: Upgrade to Enterprise plan')}>
              Upgrade <LuChevronRight />
            </button>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Billing Cycle:</span>
          <div style={{ display: 'flex', gap: '4px', backgroundColor: 'var(--bg-primary)', padding: '3px', borderRadius: '8px' }}>
            {(['monthly', 'annual'] as const).map((c) => (
              <button key={c} onClick={() => setBillingCycle(c)} style={{ padding: '5px 16px', borderRadius: '6px', border: 'none', backgroundColor: billingCycle === c ? 'var(--bg-secondary)' : 'transparent', color: billingCycle === c ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', textTransform: 'capitalize', boxShadow: billingCycle === c ? '0 1px 4px rgba(0,0,0,0.08)' : 'none' }}>
                {c} {c === 'annual' && <span style={{ color: 'var(--color-user)', fontSize: '0.65rem', fontWeight: 800 }}>SAVE 20%</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{ backgroundColor: 'var(--bg-secondary)', border: `1.5px solid ${plan.current ? plan.color : 'var(--border-color)'}`, borderRadius: '14px', padding: '24px', boxShadow: plan.current ? '0 4px 20px rgba(124, 58, 237, 0.15)' : 'var(--shadow-sm)', textAlign: 'left', position: 'relative' }}
            >
              {plan.current && (
                <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#7c3aed', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '4px 14px', borderRadius: '9999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Current Plan
                </span>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: plan.bg, color: plan.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  {i === 0 ? <LuZap /> : i === 1 ? <LuStar /> : <LuZap />}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: plan.color }}>{plan.name}</h3>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {billingCycle === 'annual' && plan.price !== 'Custom' ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}` : plan.price}
                </span>
                {plan.period && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{plan.period}</span>}
              </div>

              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.4' }}>{plan.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <LuCircleCheck style={{ color: plan.color, fontSize: '0.9rem', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`premium-btn ${plan.current ? 'premium-btn-secondary' : 'premium-btn-primary'}`}
                style={{ '--btn-color': plan.color, width: '100%', padding: '10px', borderRadius: '8px', fontSize: '0.825rem', fontWeight: 700, cursor: plan.current ? 'default' : 'pointer', opacity: plan.current ? 0.6 : 1 } as React.CSSProperties}
                disabled={plan.current}
                onClick={() => !plan.current && alert(`Sandbox: Switch to ${plan.name} plan`)}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

        {/* Invoice History */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Invoice History</h3>
            <button className="premium-btn premium-btn-secondary" style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.775rem' }} onClick={() => alert('Sandbox: Download all invoices')}>
              Download All
            </button>
          </div>
          {invoices.map((inv, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: i < invoices.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>{inv.date}</span>
                <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{inv.desc}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--text-primary)' }}>{inv.amount}</span>
                <span style={{ fontSize: '0.675rem', padding: '3px 10px', borderRadius: '6px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)', fontWeight: 700 }}>
                  <LuCircleCheck style={{ display: 'inline', marginRight: '4px' }} />Paid
                </span>
                <button className="premium-btn premium-btn-secondary" style={{ padding: '5px 10px', borderRadius: '6px', fontSize: '0.7rem' }} onClick={() => alert(`Sandbox: Download invoice for ${inv.date}`)}>
                  PDF
                </button>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}
