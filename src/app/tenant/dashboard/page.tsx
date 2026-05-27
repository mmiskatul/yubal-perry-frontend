'use client';

import React from 'react';

export default function TenantDashboard() {
  const recentActivities = [
    { text: 'Daily check-in submitted', date: 'May 3, 2024 at 7:42 PM' },
    { text: 'Daily check-in submitted', date: 'May 2, 2024 at 7:31 PM' },
    { text: 'Daily check-in submitted', date: 'May 1, 2024 at 7:28 PM' },
  ];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      {/* Top Header Bar */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '32px'
        }}
      >
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Welcome back, Alex!
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Here's your participation overview for this month.
          </p>
        </div>

        {/* Current Cycle Ticker */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '12px 18px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontSize: '1.25rem', color: '#0a57e3' }}>📅</span>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', letterSpacing: '0.05em' }}>
              Current Cycle
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              May 1 – May 31, 2024
            </span>
          </div>
        </div>
      </div>

      {/* Grid: Participation Timeline + This Month summary */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px', marginBottom: '24px' }}>
        
        {/* Monthly Participation Tracker */}
        <div className="glass-card" style={{ '--role-color': '#0a57e3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' } as React.CSSProperties}>
          <div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#0a57e3', fontSize: '1.1rem' }}>
                👥
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>Monthly Participation</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Complete your daily check-in to stay on track.
                </p>
              </div>
            </div>

            {/* Circular Timeline Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'space-between', width: '100%', padding: '0 16px', margin: '32px 0 24px' }}>
              
              {/* Day 1: Completed */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', zIndex: 2 }}>
                  ✓
                </div>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '8px', fontWeight: 600 }}>May 1</span>
                {/* Connector line */}
                <div style={{ position: 'absolute', top: '17px', left: '50%', right: '-50%', height: '3px', backgroundColor: '#10b981', zIndex: 1 }} />
              </div>

              {/* Day 2: Completed */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', zIndex: 2 }}>
                  ✓
                </div>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '8px', fontWeight: 600 }}>May 2</span>
                {/* Connector line */}
                <div style={{ position: 'absolute', top: '17px', left: '50%', right: '-50%', height: '3px', backgroundColor: '#10b981', zIndex: 1 }} />
              </div>

              {/* Day 3: Completed */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', zIndex: 2 }}>
                  ✓
                </div>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '8px', fontWeight: 600 }}>May 3</span>
                {/* Connector line */}
                <div style={{ position: 'absolute', top: '17px', left: '50%', right: '-50%', height: '3px', backgroundColor: '#0a57e3', zIndex: 1 }} />
              </div>

              {/* Day 4: Available */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#ffffff', border: '2px solid #0a57e3', color: '#0a57e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', zIndex: 2, boxShadow: '0 0 0 4px rgba(10, 87, 227, 0.1)' }}>
                  4
                </div>
                <span style={{ fontSize: '0.725rem', color: '#0a57e3', marginTop: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.025em', display: 'block', textAlign: 'center', whiteSpace: 'nowrap' }}>
                  May 4 <br/><span style={{ fontSize: '0.6rem', fontWeight: 700 }}>Available Today</span>
                </span>
                {/* Connector line */}
                <div style={{ position: 'absolute', top: '17px', left: '50%', right: '-50%', height: '3px', backgroundColor: 'var(--border-color)', zIndex: 1 }} />
              </div>

              {/* Day 5: Upcoming */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#ffffff', border: '2px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: '0.9rem', zIndex: 2 }}>
                  5
                </div>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500 }}>May 5</span>
                {/* Connector line */}
                <div style={{ position: 'absolute', top: '17px', left: '50%', right: '-50%', height: '3px', backgroundColor: 'var(--border-color)', zIndex: 1 }} />
              </div>

              {/* Day 6: Upcoming */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 1 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#ffffff', border: '2px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: '0.9rem', zIndex: 2 }}>
                  6
                </div>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500 }}>May 6</span>
                {/* Connector line */}
                <div style={{ position: 'absolute', top: '17px', left: '50%', right: '-50%', height: '3px', backgroundColor: 'var(--border-color)', zIndex: 1 }} />
              </div>

              {/* Day 7: Upcoming */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flex: 0.5 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#ffffff', border: '2px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: '0.9rem', zIndex: 2 }}>
                  7
                </div>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500 }}>May 7</span>
              </div>

            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              3 of 7 days completed
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Participation Window: May 1 – May 7
            </span>
          </div>
        </div>

        {/* This Month Grid Info */}
        <div className="glass-card" style={{ '--role-color': '#0a57e3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' } as React.CSSProperties}>
          <div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a57e3', fontSize: '1.1rem' }}>
                📆
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>This Month</h3>
              </div>
            </div>

            {/* List entries */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e6fbf3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '0.75rem', fontWeight: 800 }}>✓</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Submitted</span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>3</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a57e3', fontSize: '0.75rem', fontWeight: 800 }}>🕒</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Available</span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>1</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800 }}>🔒</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Upcoming</span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>3</span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Grid: Recent Activity + Helpful Reminders */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px', marginBottom: '24px' }}>
        
        {/* Recent Activity List */}
        <div className="glass-card" style={{ '--role-color': '#0a57e3' } as React.CSSProperties}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a57e3', fontSize: '1.1rem' }}>
              📄
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>Recent Activity</h3>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recentActivities.map((act, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: index < recentActivities.length - 1 ? '1px solid var(--border-color)' : 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e)=>e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e)=>e.currentTarget.style.opacity = '1'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e6fbf3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '0.75rem' }}>✓</div>
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{act.text}</h4>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{act.date}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>➔</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '16px' }}>
            <a href="/tenant/check-ins" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0a57e3', textDecoration: 'none' }}>
              View all activity ➔
            </a>
          </div>
        </div>

        {/* Helpful Reminders Ticker */}
        <div className="glass-card" style={{ '--role-color': '#0a57e3' } as React.CSSProperties}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a57e3', fontSize: '1.1rem' }}>
              🔔
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>Helpful Reminders</h3>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '1.25rem', color: '#0a57e3', display: 'block', marginTop: '2px' }}>🕒</span>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Check-in daily</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.3' }}>
                  Complete your daily check-in before midnight.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '1.25rem', color: '#0a57e3', display: 'block', marginTop: '2px' }}>✉️</span>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Didn't get a text?</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.3' }}>
                  Check your email, including spam or promotions folders.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '1.25rem', color: '#0a57e3', display: 'block', marginTop: '2px' }}>🎧</span>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Need help?</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.3' }}>
                  Our support team is here for you.
                </p>
              </div>
            </div>

          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '20px' }}>
            <a href="/tenant/support" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0a57e3', textDecoration: 'none' }}>
              Visit Help Center ➔
            </a>
          </div>
        </div>

      </div>

      {/* Private info card */}
      <div 
        style={{ 
          padding: '18px 24px', 
          backgroundColor: '#f8fafc',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <span style={{ fontSize: '1.35rem', color: 'var(--text-muted)' }}>🔒</span>
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Your information is private and secure.
          </h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            We respect your privacy and never share your information.
          </p>
        </div>
      </div>
    </div>
  );
}
