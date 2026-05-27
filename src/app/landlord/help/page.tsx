'use client';

import React, { useState } from 'react';
import {
  LuCircleHelp,
  LuSearch,
  LuChevronDown,
  LuMessageSquare,
  LuMail,
  LuPhone,
  LuBookOpen,
  LuCircleCheck
} from 'react-icons/lu';

const faqs = [
  {
    question: 'How is the Integrity Score calculated?',
    answer: 'The Integrity Score is a composite metric calculated from five behavioral factors: participation rate (35%), response time consistency (25%), score trend trajectory (20%), communication quality (15%), and event flags (5%). Scores range from 0–100 and are updated daily.',
    category: 'Scoring'
  },
  {
    question: 'What triggers an Early Warning?',
    answer: 'Early Warnings are automatically triggered when a tenant\'s participation rate drops by more than 10% in 5 days, when they miss 3+ consecutive check-ins, when their Integrity Score falls by 15+ points, or when unusual response patterns are detected.',
    category: 'Warnings'
  },
  {
    question: 'How long does the Pre-Tenancy process take?',
    answer: 'The standard pre-tenancy process runs for 7 consecutive days. Applicants must complete daily behavioral check-ins assigned by you. At the end of the 7-day cycle, a full behavioral report is generated for your review.',
    category: 'Pre-Tenancy'
  },
  {
    question: 'Can I add multiple properties to the same account?',
    answer: 'Yes! Depending on your subscription tier, you can manage multiple properties from a single dashboard. The Starter plan supports up to 3 properties, Professional up to 15, and Enterprise provides unlimited properties.',
    category: 'Properties'
  },
  {
    question: 'How do tenants complete check-ins?',
    answer: 'Tenants receive daily check-in tasks via their own Tenant Portal account. They log in to answer the assigned question and submit their response. You can view all responses in real-time through your monitoring dashboard.',
    category: 'Tenants'
  },
  {
    question: 'Can I export behavioral reports?',
    answer: 'Yes. Monthly behavioral summary reports are available as PDF and CSV downloads from the Reports section of your dashboard. You can also generate custom reports for specific date ranges and properties.',
    category: 'Reports'
  }
];

export default function LandlordHelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [messageText, setMessageText] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    setMessageSent(true);
    setMessageText('');
    setTimeout(() => setMessageSent(false), 4000);
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Help &amp; Support</h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Find answers to common questions or get in touch with our team
          </p>
        </div>

        {/* Hero Search Bar */}
        <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginBottom: '32px', color: '#ffffff', boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.2)' }}>
          <LuCircleHelp style={{ fontSize: '2.5rem', marginBottom: '12px', opacity: 0.9 }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>How can we help you?</h2>
          <p style={{ fontSize: '0.875rem', opacity: 0.85, marginBottom: '20px' }}>Search our knowledge base or browse the FAQ below</p>
          <div style={{ position: 'relative', maxWidth: '460px', margin: '0 auto' }}>
            <LuSearch style={{ position: 'absolute', left: '16px', top: '14px', color: 'rgba(0,0,0,0.4)', fontSize: '1rem' }} />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: '10px', border: 'none', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px', alignItems: 'start' }}>

          {/* FAQ Accordion */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}>
              <LuBookOpen style={{ color: '#7c3aed' }} /> Frequently Asked Questions
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredFaqs.map((faq, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: '#ffffff', border: `1px solid ${expandedFaq === i ? '#7c3aed40' : 'var(--border-color)'}`, borderRadius: '10px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <div>
                      <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#f5f3ff', color: '#7c3aed', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', marginBottom: '6px' }}>
                        {faq.category}
                      </span>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.3' }}>{faq.question}</h4>
                    </div>
                    <span style={{ fontSize: '1rem', color: '#7c3aed', transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0, marginLeft: '12px' }}>
                      <LuChevronDown />
                    </span>
                  </button>
                  {expandedFaq === i && (
                    <div style={{ padding: '0 20px 16px 20px', borderTop: '1px solid #f5f3ff' }}>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}

              {filteredFaqs.length === 0 && (
                <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <LuSearch style={{ fontSize: '2rem', marginBottom: '8px' }} />
                  <p style={{ fontSize: '0.875rem' }}>No results for &ldquo;{searchQuery}&rdquo;</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0', display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}>
              <LuMessageSquare style={{ color: '#7c3aed' }} /> Contact Support
            </h3>

            {/* Message Form */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
              <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>SEND A MESSAGE</label>
              <textarea
                placeholder="Describe your issue or question..."
                value={messageText}
                onChange={e => setMessageText(e.target.value)}
                style={{ width: '100%', height: '100px', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-primary)', outline: 'none', resize: 'none', boxSizing: 'border-box', marginBottom: '12px' }}
                onFocus={e => e.currentTarget.style.borderColor = '#7c3aed'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
              />
              <button
                className="premium-btn premium-btn-primary"
                style={{ '--btn-color': '#7c3aed', width: '100%', padding: '10px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' } as React.CSSProperties}
                onClick={handleSendMessage}
              >
                {messageSent ? <><LuCircleCheck /> Message Sent!</> : 'Send Message'}
              </button>
            </div>

            {/* Contact Cards */}
            {[
              { icon: <LuMail />, label: 'Email Support', detail: 'support@tenantintegrity.com', action: 'Email Us', color: '#0a57e3', bg: '#eff6ff' },
              { icon: <LuPhone />, label: 'Phone Support', detail: '1-800-555-0123 · Mon–Fri 9–5 PM', action: 'Call Now', color: '#10b981', bg: '#e6fbf3' }
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px 20px', boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                    {c.icon}
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block' }}>{c.label}</strong>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{c.detail}</span>
                  </div>
                </div>
                <button className="premium-btn premium-btn-secondary" style={{ padding: '7px 14px', borderRadius: '7px', fontSize: '0.775rem' }} onClick={() => alert(`Sandbox: ${c.action}`)}>
                  {c.action}
                </button>
              </div>
            ))}
          </div>

        </div>

    </div>
  );
}
