'use client';

import React from 'react';
import Link from 'next/link';

// Import high-fidelity vector icons from React Icons Lucide library
import { 
  LuCalendar, 
  LuShieldCheck, 
  LuLock, 
  LuInfo,
  LuChevronRight
} from 'react-icons/lu';

export default function ParticipationDashboardPage() {
  
  // Custom mock trigger for check-in demo
  const handleStartCheckIn = () => {
    alert('Launching your Day 3 Survey Check-in sandbox form! Takes < 2 minutes.');
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Top Welcome Title */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.035em', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Welcome, Alex! <span style={{ display: 'inline-block', animation: 'wave 2s infinite' }}>👋</span>
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          You're in your 7-day participation process. Complete each daily check-in to help finalize your application.
        </p>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            20% { transform: rotate(-10deg); }
            40% { transform: rotate(10deg); }
            60% { transform: rotate(-10deg); }
            80% { transform: rotate(10deg); }
          }
        `}} />
      </div>

      {/* Info Alert Callout Banner */}
      <div 
        style={{ 
          padding: '14px 20px', 
          backgroundColor: '#eff6ff', 
          border: '1px solid #bfdbfe', 
          borderRadius: '10px', 
          color: '#1e3a8a', 
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px'
        }}
      >
        <span style={{ fontSize: '1.2rem', color: '#0a57e3', display: 'flex' }}>
          <LuInfo />
        </span>
        <span>This is a short 7-day process. Just complete your daily check-ins.</span>
      </div>

      {/* Primary Grid: Progress (Left) & Streak (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        
        {/* Card 1: Your Progress */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '28px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '190px',
            backgroundColor: '#ffffff'
          } as React.CSSProperties}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Your Progress
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0' }}>
              Day <span style={{ color: '#0a57e3' }}>3</span> of 7
            </h2>
            
            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', marginTop: '6px' }}>
              <div style={{ flex: 1, height: '8px', borderRadius: '4px', backgroundColor: 'var(--border-color)', overflow: 'hidden' }}>
                <div style={{ width: '43%', height: '100%', backgroundColor: '#0a57e3', borderRadius: '4px' }} />
              </div>
            </div>
            <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '2px' }}>
              43% Complete
            </span>
            
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.4' }}>
              Keep going! You only have 4 more daily check-ins.
            </p>
          </div>

          {/* Premium Vector SVG Calendar Checklist Illustration */}
          <div style={{ marginLeft: '24px', flexShrink: 0, position: 'relative' }}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Calendar Background */}
              <rect x="15" y="20" width="70" height="65" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
              {/* Calendar Header */}
              <path d="M15 30C15 24.4772 19.4772 20 25 20H75C80.5228 20 85 24.4772 85 30V35H15V30Z" fill="#3b82f6"/>
              {/* Calendar Rings */}
              <rect x="28" y="12" width="6" height="12" rx="3" fill="#94a3b8" />
              <rect x="66" y="12" width="6" height="12" rx="3" fill="#94a3b8" />
              {/* Checklist Lines */}
              <line x1="28" y1="48" x2="52" y2="48" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
              <line x1="28" y1="60" x2="62" y2="60" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
              <line x1="28" y1="72" x2="48" y2="72" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
              {/* Checked Indicator badges */}
              <circle cx="68" cy="50" r="8" fill="#10b981"/>
              <path d="M65 50L67 52L71 48" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              
              <circle cx="62" cy="70" r="8" fill="#10b981"/>
              <path d="M59 70L61 72L65 68" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Calendar Bottom Right Large Checked Badge */}
              <circle cx="82" cy="80" r="14" fill="#3b82f6" stroke="#ffffff" strokeWidth="3"/>
              <path d="M77 80L80 83L87 76" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Card 2: Check-In Streak */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '28px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '190px',
            backgroundColor: '#ffffff'
          } as React.CSSProperties}
        >
          <div>
            <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Check-In Streak
            </span>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '4px', marginBottom: '24px' }}>
              Your daily check-ins
            </h4>
          </div>

          {/* Timeline Streaks Row */}
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative', paddingBottom: '12px' }}>
            
            {/* Horizontal timeline connector lines */}
            <div style={{ position: 'absolute', top: '15px', left: '16px', right: '16px', height: '2px', backgroundColor: 'var(--border-color)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '15px', left: '16px', width: '33%', height: '2px', backgroundColor: '#10b981', zIndex: 1 }} />

            {/* Day 1: Checked */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                ✓
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '8px' }}>Day 1</span>
            </div>

            {/* Day 2: Checked */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                ✓
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '8px' }}>Day 2</span>
            </div>

            {/* Day 3: Active */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#0a57e3', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, boxShadow: '0 0 0 3px rgba(10, 87, 227, 0.2)' }}>
                3
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 800, color: '#0a57e3', marginTop: '8px' }}>Day 3</span>
            </div>

            {/* Day 4: Gray */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1.5px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>
                4
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 500, color: 'var(--text-muted)', marginTop: '8px' }}>Day 4</span>
            </div>

            {/* Day 5: Gray */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1.5px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>
                5
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 500, color: 'var(--text-muted)', marginTop: '8px' }}>Day 5</span>
            </div>

            {/* Day 6: Gray */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1.5px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>
                6
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 500, color: 'var(--text-muted)', marginTop: '8px' }}>Day 6</span>
            </div>

            {/* Day 7: Gray */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2 }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1.5px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>
                7
              </div>
              <span style={{ fontSize: '0.675rem', fontWeight: 500, color: 'var(--text-muted)', marginTop: '8px' }}>Day 7</span>
            </div>

          </div>
        </div>

      </div>

      {/* Secondary Row Grid: Checkin Form Block & Why it Matters Callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '24px', marginBottom: '24px' }}>
        
        {/* Today's Check-in Card (Screenshot 5) */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            backgroundColor: '#ffffff'
          } as React.CSSProperties}
        >
          {/* Calendar circle icon */}
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: '#eff6ff', 
              color: '#0a57e3', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '1.35rem',
              flexShrink: 0
            }}
          >
            <LuCalendar />
          </div>

          {/* Text block */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Today's Check-In
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.4' }}>
              Your next check-in is ready. It takes less than 2 minutes.
            </p>
          </div>

          {/* Start Checkin Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <button
              onClick={handleStartCheckIn}
              className="premium-btn premium-btn-primary"
              style={{
                '--btn-color': '#0a57e3',
                '--focus-ring': 'rgba(10, 87, 227, 0.15)',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700
              } as React.CSSProperties}
            >
              Start Check-In
            </button>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Takes &lt; 2 minutes
            </span>
          </div>
        </div>

        {/* Why it Matters Card (Screenshot 5) */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#ffffff'
          } as React.CSSProperties}
        >
          {/* Shield circle icon */}
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: '#eff6ff', 
              color: '#0a57e3', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '1.35rem',
              flexShrink: 0
            }}
          >
            <LuShieldCheck />
          </div>

          {/* Text block & Link */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Why it matters
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.45' }}>
              Your participation helps create a safe and reliable community for everyone.
            </p>
            <Link 
              href="/applicant/support/process" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '2px', 
                fontSize: '0.775rem', 
                color: '#0a57e3', 
                fontWeight: 700, 
                marginTop: '6px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e)=>e.currentTarget.style.textDecoration='underline'}
              onMouseLeave={(e)=>e.currentTarget.style.textDecoration='none'}
            >
              Learn more <LuChevronRight />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Card: Secure lock banner */}
      <div 
        style={{ 
          padding: '20px 32px', 
          backgroundColor: '#ffffff',
          border: '1.5px solid var(--border-color)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div 
          style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '50%', 
            backgroundColor: '#eff6ff', 
            color: '#0a57e3', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.25rem',
            flexShrink: 0
          }}
        >
          <LuLock />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Your information is private and secure.
          </h4>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
            Your data is used only for application review and is never shared.
          </p>
        </div>
      </div>

    </div>
  );
}
