'use client';

import React, { useState } from 'react';
import { 
  LuUsers, 
  LuActivity, 
  LuTrendingUp, 
  LuDownload, 
  LuCopy, 
  LuCheck, 
  LuShare2, 
  LuUser, 
  LuAward, 
  LuMessageCircle 
} from 'react-icons/lu';

export default function AffiliateReferralsPage() {
  const [copied, setCopied] = useState(false);

  const referralLink = 'https://platform.com/ref?id=partner_alex_882';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const recentConversions = [
    { initials: 'JS', name: 'James Smith', plan: 'Pro Annual Plan', earned: '+$49.00', time: '2H AGO', color: 'var(--brand-light)', textColor: 'var(--brand-color)' },
    { initials: 'ML', name: 'Maria Lopez', plan: 'Basic Monthly', earned: '+$12.50', time: '5H AGO', color: 'var(--brand-light)', textColor: 'var(--brand-color)' },
    { initials: 'KT', name: 'Kevin Taylor', plan: 'Enterprise', earned: '+$199.00', time: '1D AGO', color: 'var(--brand-light)', textColor: 'var(--brand-color)' },
    { initials: 'DR', name: 'Daniel Reed', plan: 'Pro Monthly', earned: '+$24.00', time: '2D AGO', color: 'var(--brand-light)', textColor: 'var(--brand-color)' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0px' }}>
      
      {/* Toast Alert */}
      {copied && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'var(--color-user)',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(16,185,129,0.2)',
          zIndex: 9999,
          fontSize: '0.875rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeInUp 0.25s ease'
        }}>
          <LuCheck /> Link Copied to Clipboard!
        </div>
      )}

      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Affiliate Partner Dashboard
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Track your referral performance and revenue share.
          </p>
        </div>

        <button 
          onClick={() => alert('Exporting affiliate conversions...')}
          style={{ 
            padding: '10px 18px', 
            borderRadius: '10px', 
            border: 'none', 
            backgroundColor: 'var(--brand-color)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 700,
            boxShadow: '0 4px 6px -1px rgba(10,87,227,0.15)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <LuDownload /> Export Report
        </button>
      </div>

      {/* Unique Partner Link Banner Card */}
      <div 
        style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '16px', 
          padding: '32px', 
          boxShadow: 'var(--shadow-sm)', 
          marginBottom: '28px',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Your Unique Partner Link
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Share this link to earn <strong style={{ color: 'var(--brand-color)' }}>20% commission</strong> on every conversion.
            </p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', position: 'relative', alignItems: 'center' }}>
              <div 
                style={{ 
                  flex: 1, 
                  backgroundColor: 'var(--bg-primary)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '10px', 
                  padding: '12px 16px', 
                  fontSize: '0.85rem', 
                  fontFamily: 'var(--font-geist-mono), monospace',
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {referralLink}
              </div>
              <button
                onClick={handleCopy}
                style={{
                  backgroundColor: 'var(--brand-color)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {copied ? <LuCheck /> : <LuCopy />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Quick Share Buttons */}
          <div style={{ minWidth: '220px' }}>
            <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'left' }}>
              Quick Share
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <LuShare2 />, label: 'Social' },
                { icon: <LuUser />, label: 'Invite' },
                { icon: <LuAward />, label: 'Target' },
                { icon: <LuMessageCircle />, label: 'Chat' }
              ].map((share, idx) => (
                <button
                  key={idx}
                  onClick={() => alert(`Share via ${share.label}...`)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--brand-color)';
                    e.currentTarget.style.color = 'var(--brand-color)';
                    e.currentTarget.style.backgroundColor = 'var(--brand-light)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  }}
                >
                  {share.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Summary Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {[
          { title: 'Total Referrals', value: '1,284', change: '+12%', icon: <LuUsers /> },
          { title: 'Active Conversions', value: '342', change: '+4.2%', icon: <LuAward /> },
          { title: 'Earned Revenue', value: '$4,821.50', change: 'Last 30 Days', icon: <LuTrendingUp />, color: 'var(--color-user)' }
        ].map((m, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '24px 28px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'left'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {m.title}
                </span>
                <span style={{ fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)', fontWeight: 700 }}>
                  {m.change}
                </span>
              </div>
              <h2 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 800, 
                color: m.color ? m.color : 'var(--text-primary)', 
                margin: '8px 0 0 0'
              }}>
                {m.value}
              </h2>
            </div>
            
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              {m.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Conversions Table */}
      <div 
        style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '16px', 
          padding: '24px 0', 
          boxShadow: 'var(--shadow-sm)', 
          textAlign: 'left' 
        }}
      >
        <div style={{ padding: '0 32px 18px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Recent Conversions
          </h3>
          <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
            REAL-TIME ACTIVITY
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {recentConversions.map((row, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '18px 32px',
                borderBottom: idx === recentConversions.length - 1 ? 'none' : '1px solid var(--border-color)',
                fontSize: '0.875rem',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Initials Avatar */}
              <div 
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  backgroundColor: row.color, 
                  color: row.textColor, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 800, 
                  fontSize: '0.8rem',
                  marginRight: '14px',
                  flexShrink: 0
                }}
              >
                {row.initials}
              </div>

              {/* Name and plan */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{row.plan}</div>
              </div>

              {/* Earnings & Time */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800, color: 'var(--color-user)', fontSize: '0.95rem' }}>{row.earned}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 600 }}>{row.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ padding: '16px 32px 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
          <button 
            onClick={() => alert('Loading full activity log...')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--brand-color)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
