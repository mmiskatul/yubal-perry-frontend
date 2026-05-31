'use client';

import React, { useState } from 'react';
import { 
  LuDownload, 
  LuCheck, 
  LuClock, 
  LuExternalLink, 
  LuFileText, 
  LuBookOpen, 
  LuChevronRight,
  LuTriangleAlert 
} from 'react-icons/lu';
import { SiStripe } from 'react-icons/si';

export default function AffiliatePayoutsPage() {
  const [requesting, setRequesting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRequestPayout = () => {
    setRequesting(true);
    setTimeout(() => {
      setRequesting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  const payoutHistory = [
    { date: 'Mar 15, 2024', amount: '$1,250.00', method: 'Stripe Connect', status: 'Processing', color: 'var(--color-support)', bg: 'var(--color-support-light)' },
    { date: 'Feb 15, 2024', amount: '$1,120.00', method: 'Stripe Connect', status: 'Paid', color: 'var(--color-user)', bg: 'var(--color-user-light)' },
    { date: 'Jan 15, 2024', amount: '$980.50', method: 'Stripe Connect', status: 'Paid', color: 'var(--color-user)', bg: 'var(--color-user-light)' },
    { date: 'Dec 15, 2023', amount: '$1,450.00', method: 'Stripe Connect', status: 'Paid', color: 'var(--color-user)', bg: 'var(--color-user-light)' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0px' }}>
      
      {/* Toast Payout Success Notification */}
      {success && (
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
          <LuCheck /> Early Payout Requested Successfully!
        </div>
      )}

      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Payouts & Transfers
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Manage your earnings, view history, and update payment settings.
          </p>
        </div>
      </div>

      {/* Main Payout Setup and Early Payout Action Card */}
      <div 
        style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '16px', 
          padding: '28px 32px', 
          boxShadow: 'var(--shadow-sm)', 
          marginBottom: '28px',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Left Side: Payout Setup details */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.85rem' }}>
              <div>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  PAYOUT METHOD
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#635bff15', color: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>
                    <SiStripe />
                  </div>
                  <strong style={{ color: 'var(--text-primary)' }}>Stripe Connect</strong>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)' }}>
                    ACTIVE
                  </span>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  NEXT PAYOUT DATE
                </span>
                <div style={{ fontWeight: 800, color: 'var(--text-primary)', marginTop: '8px', fontSize: '0.95rem' }}>
                  March 15, 2024
                </div>
              </div>
            </div>

            {/* Warning verification banner */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-support-light)', border: '1px solid var(--color-support-border)', borderRadius: '8px', padding: '10px 14px', marginTop: '24px', fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              <span style={{ display: 'flex', fontSize: '0.9rem' }}><LuTriangleAlert /></span>
              <span>Processing | System is verifying transfer details</span>
              <a 
                href="#manage"
                onClick={(e) => { e.preventDefault(); alert('Redirecting to Stripe dashboard...'); }}
                style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--brand-color)', textDecoration: 'none', fontWeight: 700 }}
              >
                Manage Account <LuExternalLink style={{ fontSize: '0.8rem' }} />
              </a>
            </div>
          </div>

          {/* Right Side: Early Payout balance and button */}
          <div 
            style={{ 
              borderLeft: '1px solid var(--border-color)', 
              paddingLeft: '40px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Available for Payout
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 16px' }}>
              $1,250.00
            </h2>

            <button
              onClick={handleRequestPayout}
              disabled={requesting}
              style={{
                backgroundColor: 'var(--brand-color)',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: requesting ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 6px -1px rgba(10,87,227,0.15)',
                transition: 'all 0.2s',
                width: '100%',
                maxWidth: '240px',
                textAlign: 'center'
              }}
              onMouseEnter={e => { if(!requesting) e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { if(!requesting) e.currentTarget.style.opacity = '1'; }}
            >
              {requesting ? 'Processing Request...' : 'Request Early Payout'}
            </button>
          </div>

        </div>
      </div>

      {/* Dynamic Paid Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {[
          { title: 'Total Paid to Date', value: '$14,582.00', sub: '📈 +12.5%', subcolor: 'var(--color-user)', icon: <LuCheck /> },
          { title: 'Pending Commissions', value: '$340.50', sub: 'Review phase active', subColor: 'var(--text-muted)', icon: <LuClock /> },
          { title: 'Last Payout', value: '$1,120.00', sub: 'Completed Feb 15, 2024', subColor: 'var(--text-muted)', icon: <LuFileText /> }
        ].map((c, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'left'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {c.title}
                </span>
                {c.title === 'Total Paid to Date' && (
                  <span style={{ fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)', fontWeight: 700 }}>
                    {c.sub}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 2px' }}>
                {c.value}
              </h3>
              {c.title !== 'Total Paid to Date' && (
                <span style={{ fontSize: '0.725rem', color: c.subColor, fontWeight: 500 }}>
                  {c.sub}
                </span>
              )}
            </div>

            <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
              {c.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Two Pane Bottom Layout: Payout History and Accordion Guide */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px', marginBottom: '28px', flexWrap: 'wrap' }}>
        
        {/* Left Pane: Payout History Table */}
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
          <div style={{ padding: '0 28px 18px 28px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Payout History
            </h3>
            <button 
              onClick={() => alert('Downloading payout history...')}
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
              <LuDownload /> Download CSV
            </button>
          </div>

          {/* Table Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1.5fr 1fr', padding: '12px 28px', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
            {['DATE', 'AMOUNT', 'METHOD', 'STATUS'].map((head, idx) => (
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
            {payoutHistory.map((row, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.5fr 1fr',
                  alignItems: 'center',
                  padding: '16px 28px',
                  borderBottom: idx === payoutHistory.length - 1 ? 'none' : '1px solid var(--border-color)',
                  fontSize: '0.85rem',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.date}</div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{row.amount}</div>
                <div style={{ color: 'var(--text-secondary)' }}>{row.method}</div>
                <div>
                  <span 
                    style={{ 
                      fontSize: '0.7rem', 
                      padding: '3px 8px', 
                      borderRadius: '6px', 
                      backgroundColor: row.bg, 
                      color: row.color, 
                      fontWeight: 700 
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: How Payouts Work accordion list */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '16px', 
            padding: '24px', 
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ color: 'var(--brand-color)', display: 'flex', fontSize: '1.1rem' }}><LuBookOpen /></span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>How Payouts Work</strong>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { step: '1', title: 'Stripe Connect', desc: 'Securely link your bank account or debit card through our partner, Stripe. This ensures fast and automated transfers.' },
                { step: '2', title: 'Monthly Schedule', desc: 'Payouts are automatically initiated on the 15th of every month for all commissions earned in the previous calendar month.' },
                { step: '3', title: 'Thresholds', desc: 'Minimum payout threshold is $50.00. Balances below this amount roll over to the next month\'s cycle.' }
              ].map((guide, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                    {guide.step}
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{guide.title}</h5>
                    <p style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.45' }}>{guide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a 
            href="#policy"
            onClick={(e) => { e.preventDefault(); alert('Redirecting to payout policy docs...'); }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'var(--brand-color)', 
              textDecoration: 'none', 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '14px',
              marginTop: '20px'
            }}
          >
            View Payout Policy <LuChevronRight />
          </a>
        </div>

      </div>
    </div>
  );
}
