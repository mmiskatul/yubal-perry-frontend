'use client';

import React, { useState } from 'react';
import {
  LuSearch, LuUser, LuHouse, LuMonitor, LuTriangleAlert, LuSettings,
  LuMessageSquare, LuMail, LuPhone, LuChevronRight, LuChevronDown, LuInfo
} from 'react-icons/lu';

const topics = [
  { icon: <LuUser />, iconColor: '#6b7280', iconBg: '#f3f4f6', title: 'Getting Started', desc: 'Learn the basics and set up your account for success.' },
  { icon: <LuHouse />, iconColor: '#10b981', iconBg: '#e6fbf3', title: 'Pre-Tenancy', desc: 'Set up new properties and start the pre-tenancy process.' },
  { icon: <LuMonitor />, iconColor: '#0a57e3', iconBg: '#eff6ff', title: 'Monitoring', desc: 'Monitor tenant behavior and stay informed.' },
  { icon: <LuTriangleAlert />, iconColor: '#ef4444', iconBg: '#fff5f5', title: 'Early Warnings', desc: 'Understand alerts and take action quickly.' },
  { icon: <LuSettings />, iconColor: '#f59e0b', iconBg: '#fffbeb', title: 'Account & Settings', desc: 'Manage your account, team, and preferences.' }
];

const faqs = [
  { q: 'How do I add a new property?' },
  { q: "What's the difference between vacant and occupied?" },
  { q: 'How does tenant monitoring work?' },
  { q: 'How do I manage early warnings?' },
  { q: 'Can I invite someone to help manage my properties?' }
];

const faqAnswers = [
  'Go to the Properties page and click "+ Add Property". Choose the occupancy type (Occupied or Vacant) and fill in the property name. The property will immediately appear in your portfolio.',
  'Vacant properties have no current tenant and can be set up for the Pre-Tenancy process. Occupied properties have an active tenant and are enrolled in behavioral monitoring.',
  'Tenant monitoring tracks participation rates, response timing, communication quality, and engagement trends. You can view per-tenant cards on the Monitoring page.',
  'Early warnings are automatically triggered when behavioral thresholds are crossed. Go to the Early Warnings page to review the alert, view the trend data, and take action.',
  'Yes — go to Settings > Properties & Team and click "Invite Property Manager" to add a team member and assign them to specific properties.'
];

export default function LandlordHelpPage() {
  const [search, setSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="animate-fade-in" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Help Center</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
          Find answers, guides, and support to help you get the most out of Tenant Integrity.
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '36px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <LuSearch style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '1rem' }} />
          <input
            type="text"
            placeholder="Search help articles, topics and guides..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 16px 14px 46px', border: '1px solid var(--border-color)', borderRight: 'none', borderRadius: '8px 0 0 8px', fontSize: '0.875rem', outline: 'none', color: 'var(--text-primary)', boxSizing: 'border-box' }}
            onFocus={e => e.currentTarget.style.borderColor = '#0a57e3'}
            onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
          />
        </div>
        <button
          style={{ padding: '14px 28px', backgroundColor: '#0a57e3', color: '#ffffff', border: 'none', borderRadius: '0 8px 8px 0', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer' }}
          onClick={() => alert(`Sandbox: Search for "${search}"`)}
        >
          Search
        </button>
      </div>

      {/* Popular Topics */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Popular Topics</h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Browse by topic to find the help you need.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {topics.map((topic, i) => (
            <div
              key={i}
              style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '20px 18px', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a57e3'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(10,87,227,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              onClick={() => alert(`Sandbox: Browse ${topic.title} articles`)}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: topic.iconBg, color: topic.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', marginBottom: '12px' }}>
                {topic.icon}
              </div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>{topic.title}</h3>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '14px' }}>{topic.desc}</p>
              <div style={{ fontSize: '0.775rem', color: '#0a57e3', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                View Articles →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ + Contact 2-col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}>

        {/* FAQ */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Frequently Asked Questions</h3>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Quick answers to common questions.</p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{faq.q}</span>
                  <LuChevronDown style={{ fontSize: '1rem', color: 'var(--text-muted)', transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0, marginLeft: '8px' }} />
                </button>
                {expandedFaq === i && (
                  <div style={{ padding: '0 0 16px 0' }}>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{faqAnswers[i]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            style={{ marginTop: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#0a57e3', fontSize: '0.825rem', fontWeight: 700, padding: '0', display: 'flex', alignItems: 'center', gap: '4px' }}
            onClick={() => alert('Sandbox: View all FAQs')}
          >
            View All FAQs →
          </button>
        </div>

        {/* Still need help */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Still need help?</h3>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Our support team is here for you.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                icon: <LuMessageSquare />, iconColor: '#7c3aed', iconBg: '#f5f3ff',
                title: 'Contact Support', detail: 'Get help from our support team',
                sub: 'Usually replies within 24 hours', subColor: '#7c3aed'
              },
              {
                icon: <LuMail />, iconColor: '#0a57e3', iconBg: '#eff6ff',
                title: 'Email Us', detail: 'support@tenantintegrity.com',
                sub: 'We typically respond within 24 hours', subColor: '#0a57e3'
              },
              {
                icon: <LuPhone />, iconColor: '#f59e0b', iconBg: '#fffbeb',
                title: 'Call Us', detail: '(888) 123-4567',
                sub: 'Mon - Fri, 9:00 AM - 6:00 PM EST', subColor: '#f59e0b'
              }
            ].map((item, i, arr) => (
              <div
                key={i}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border-color)' : 'none', cursor: 'pointer' }}
                onClick={() => alert(`Sandbox: ${item.title}`)}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{item.detail}</div>
                    <div style={{ fontSize: '0.725rem', color: item.subColor, fontWeight: 600, marginTop: '2px' }}>{item.sub}</div>
                  </div>
                </div>
                <LuChevronRight style={{ color: 'var(--text-muted)', fontSize: '1rem', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <LuInfo style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} />
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Help content is updated regularly. Last updated: May 20, 2025</span>
      </div>
    </div>
  );
}
