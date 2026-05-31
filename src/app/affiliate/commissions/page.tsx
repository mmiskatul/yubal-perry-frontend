'use client';

import React from 'react';
import { 
  LuTrendingUp, 
  LuDownload, 
  LuFilter, 
  LuInfo, 
  LuChevronLeft, 
  LuChevronRight,
  LuLayoutDashboard
} from 'react-icons/lu';

export default function AffiliateCommissionsPage() {

  const commissionBreakdown = [
    { id: '#A1024', plan: 'Enterprise Annual', revenue: '$1,249.00', commission: '$249.80', progress: 'Converted', progcolor: 'var(--color-user)', progBg: '#e6fbf3', status: 'Approved', statuscolor: 'var(--color-user)' },
    { id: '#A1025', plan: 'Pro Monthly', revenue: '$49.00', commission: '$9.80', progress: 'Assessment Started', progcolor: 'var(--brand-color)', progBg: '#eff6ff', status: 'Pending', statuscolor: 'var(--color-support)' },
    { id: '#A1028', plan: 'Pro Annual', revenue: '$499.00', commission: '$99.80', progress: 'Dropped - Day 3', progcolor: 'var(--text-secondary)', progBg: '#f1f5f9', status: 'Pending', statuscolor: 'var(--color-support)' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0px' }}>
      
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Commissions & Earnings
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Transparent breakdown of your revenue-sharing and payouts.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            style={{ 
              padding: '10px 16px', 
              borderRadius: '10px', 
              border: '1px solid var(--border-color)', 
              backgroundColor: 'var(--bg-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              fontWeight: 600
            }}
          >
            <LuFilter /> Filter by Plan
          </button>
          <button 
            onClick={() => alert('Exporting commissions to CSV...')}
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
              transition: 'all 0.15s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <LuDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Standard Affiliate Plan Banner */}
      <div 
        style={{ 
          background: 'linear-gradient(135deg, #0a57e3 0%, #1e40af 100%)', 
          borderRadius: '16px', 
          padding: '24px 32px', 
          boxShadow: '0 10px 25px rgba(10,87,227,0.15)', 
          marginBottom: '28px',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            <LuTrendingUp />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
              Standard Affiliate Plan
            </h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>
              You earn <strong style={{ textDecoration: 'underline' }}>20% commission</strong> on every successful conversion.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.675rem', fontWeight: 800, opacity: 0.75, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Lifetime Earnings
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0 0 0' }}>
            $12,482.00
          </h2>
        </div>
      </div>

      {/* Metrics Detail Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {[
          { title: 'Total Earned Revenue', value: '$62,410.00', sub: '📈 12% from last month', subcolor: 'var(--color-user)' },
          { title: 'Commission Rate', value: '20%', sub: 'Fixed base rate', subColor: 'var(--text-muted)' },
          { title: 'Total Commission', value: '$12,482.00', sub: 'Processed to date', subColor: 'var(--text-muted)' },
          { title: 'Pending Payout', value: '$842.50', sub: '🕐 Next payout in 12 days', subcolor: 'var(--color-support)' }
        ].map((c, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}
          >
            <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {c.title}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px' }}>
              {c.value}
            </h3>
            <span style={{ fontSize: '0.725rem', color: c.subColor, fontWeight: 600 }}>
              {c.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Two Pane Middle Layout: Payout Info and Growth Chart */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', marginBottom: '28px', flexWrap: 'wrap' }}>
        
        {/* Left Pane: Payout Info */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ color: 'var(--brand-color)', display: 'flex', fontSize: '1.1rem' }}><LuInfo /></span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Payout Information</strong>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Payout Method</span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>💳 Stripe Connect</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Next Payout Date</span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>March 15, 2024</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Current Status</span>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)' }}>
                  SCHEDULED
                </span>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', lineHeight: '1.4', marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '14px' }}>
            Payouts are processed on the 15th of each month. Minimum payout threshold: $50.
          </div>
        </div>

        {/* Right Pane: Growth SVG Bar Chart */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Earnings Growth (Last 30 Days)
            </h4>
            <select 
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-secondary)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>

          {/* SVG Bar Chart container */}
          <div style={{ width: '100%', height: '180px', display: 'flex', alignItems: 'flex-end', gap: '8px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
            
            {/* Inline SVG Chart */}
            <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              {/* Grid Lines */}
              <line x1="0" y1="120" x2="500" y2="120" stroke="var(--border-color)" strokeWidth="1" />
              <line x1="0" y1="80" x2="500" y2="80" stroke="var(--border-color)" strokeWidth="1" />
              <line x1="0" y1="40" x2="500" y2="40" stroke="var(--border-color)" strokeWidth="1" />

              {/* Weekly Groups of Bars (Weekly earnings blocks) */}
              {/* Week 1 */}
              <rect x="20" y="90" width="12" height="60" rx="3" fill="#0a57e3" opacity="0.4" />
              <rect x="36" y="80" width="12" height="70" rx="3" fill="#0a57e3" opacity="0.5" />
              <rect x="52" y="60" width="12" height="90" rx="3" fill="#0a57e3" opacity="0.6" />
              <rect x="68" y="55" width="12" height="95" rx="3" fill="#0a57e3" opacity="0.7" />

              {/* Week 2 */}
              <rect x="120" y="85" width="12" height="65" rx="3" fill="#0a57e3" opacity="0.4" />
              <rect x="136" y="70" width="12" height="80" rx="3" fill="#0a57e3" opacity="0.5" />
              <rect x="152" y="45" width="12" height="105" rx="3" fill="#0a57e3" opacity="0.6" />
              <rect x="168" y="40" width="12" height="110" rx="3" fill="#0a57e3" opacity="0.7" />

              {/* Week 3 */}
              <rect x="220" y="65" width="12" height="85" rx="3" fill="#0a57e3" opacity="0.4" />
              <rect x="236" y="50" width="12" height="100" rx="3" fill="#0a57e3" opacity="0.5" />
              <rect x="252" y="35" width="12" height="115" rx="3" fill="#0a57e3" opacity="0.6" />
              <rect x="268" y="30" width="12" height="120" rx="3" fill="#0a57e3" opacity="0.7" />

              {/* Week 4 */}
              <rect x="320" y="80" width="12" height="70" rx="3" fill="#0a57e3" opacity="0.4" />
              <rect x="336" y="90" width="12" height="60" rx="3" fill="#0a57e3" opacity="0.5" />
              <rect x="352" y="100" width="12" height="50" rx="3" fill="#0a57e3" opacity="0.6" />
              <rect x="368" y="95" width="12" height="55" rx="3" fill="#0a57e3" opacity="0.7" />

              {/* Week 5 */}
              <rect x="420" y="50" width="12" height="100" rx="3" fill="#0a57e3" opacity="0.5" />
              <rect x="436" y="40" width="12" height="110" rx="3" fill="#0a57e3" opacity="0.6" />
              <rect x="452" y="30" width="12" height="120" rx="3" fill="#0a57e3" opacity="0.8" />
              <rect x="468" y="45" width="12" height="105" rx="3" fill="#0a57e3" opacity="0.7" />
            </svg>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.675rem', color: 'var(--text-muted)', fontWeight: 700, padding: '10px 10px 0' }}>
            <span>FEB 10</span>
            <span>FEB 17</span>
            <span>FEB 24</span>
            <span>MAR 03</span>
            <span>MAR 10</span>
          </div>
        </div>
      </div>

      {/* Commission Breakdown Table */}
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
            Commission Breakdown
          </h3>
          <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
            DETAILED TRANSFERS
          </span>
        </div>

        {/* Table Head */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1fr 1.5fr 1.5fr 1fr', padding: '12px 32px', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
          {['REFERRAL ID', 'PLAN', 'REVENUE', 'YOUR COMMISSION (20%)', 'PROGRESS STAGE', 'STATUS'].map((head, idx) => (
            <div 
              key={idx} 
              style={{ 
                fontSize: '0.675rem', 
                fontWeight: 800, 
                color: 'var(--text-muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
              }}
            >
              {head}
            </div>
          ))}
        </div>

        {/* Table Rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {commissionBreakdown.map((row, idx) => (
            <div 
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.5fr 1fr 1.5fr 1.5fr 1fr',
                alignItems: 'center',
                padding: '18px 32px',
                borderBottom: idx === commissionBreakdown.length - 1 ? 'none' : '1px solid var(--border-color)',
                fontSize: '0.85rem',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.id}</div>
              <div style={{ color: 'var(--text-secondary)' }}>{row.plan}</div>
              <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{row.revenue}</div>
              <div style={{ color: 'var(--brand-color)', fontWeight: 800 }}>{row.commission}</div>
              <div>
                <span 
                  style={{ 
                    fontSize: '0.7rem', 
                    padding: '3px 8px', 
                    borderRadius: '6px', 
                    backgroundColor: row.progBg, 
                    color: row.progcolor, 
                    fontWeight: 700 
                  }}
                >
                  {row.progress}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-primary)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: row.statuscolor }} />
                {row.status}
              </div>
            </div>
          ))}
        </div>

        {/* Paging Footer */}
        <div style={{ padding: '16px 32px 0', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Showing 1-3 of 124 referrals
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button 
              disabled 
              style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '6px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'var(--bg-secondary)', 
                color: 'var(--text-muted)', 
                cursor: 'not-allowed', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <LuChevronLeft />
            </button>
            <button 
              onClick={() => alert('Loading page 2...')}
              style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '6px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'var(--bg-secondary)', 
                color: 'var(--text-secondary)', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'all 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--brand-color)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <LuChevronRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
