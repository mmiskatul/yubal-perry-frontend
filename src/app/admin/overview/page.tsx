'use client';

import React from 'react';

// Import vector icons from React Icons Lu library
import { 
  LuLayoutDashboard, 
  LuCircleAlert, 
  LuClock, 
  LuActivity,
  LuShieldAlert,
  LuMailWarning,
  LuCreditCard,
  LuCircleCheck
} from 'react-icons/lu';

export default function AdminOverviewPage() {
  
  const stats = [
    { title: 'SYSTEM STATUS', value: 'Operational', color: 'var(--color-user)', details: 'All services active' },
    { title: 'API ERROR RATE', value: '0.12%', color: 'var(--color-user)', details: 'Normal range' },
    { title: 'P95 LATENCY', value: '187ms', color: '#6b7280', details: '-12ms from avg' },
    { title: 'QUEUE FAILURES', value: '4', color: '#ef4444', details: '+2 from previous hour' },
    { title: 'EMAIL/SMS HEALTH', value: 'Email: Green / SMS: Amber', color: 'var(--color-support)', details: 'Twilio SMS queue spike' },
    { title: 'PAYMENT PROVIDER', value: 'Stripe', color: 'var(--color-user)', details: 'Healthy connection' }
  ];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          System Overview
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Real-time metrics and orchestration control for all services.
        </p>
      </div>

      {/* Grid: 6 stats blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {stat.title}
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px 0' }}>
              {stat.value}
            </h2>
            <span 
              style={{ 
                fontSize: '0.725rem', 
                fontWeight: 600, 
                color: stat.color === '#ef4444' ? '#ef4444' : stat.color === '#f59e0b' ? '#f59e0b' : '#10b981'
              }}
            >
              {stat.details}
            </span>
          </div>
        ))}
      </div>

      {/* Double Pane Middle Grid: Error Trend and Latency Trend */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Error Trend wave */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem', color: '#ef4444', display: 'flex' }}><LuCircleAlert /></span>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Error Trend (24h)</h3>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Avg: 0.12%</span>
          </div>

          {/* Premium Vector Chart */}
          <div style={{ width: '100%', height: '180px', position: 'relative', marginTop: '8px' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="errorGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fee2e2" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="400" y2="75" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Fill Gradient path */}
              <path d="M 0 110 Q 50 115 100 125 T 200 65 T 300 110 T 400 100 L 400 150 L 0 150 Z" fill="url(#errorGrad)" />
              {/* Main Line path */}
              <path d="M 0 110 Q 50 115 100 125 T 200 65 T 300 110 T 400 100" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              
              {/* Trend dot indicator */}
              <circle cx="200" cy="65" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.675rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 600 }}>
              <span>00:00</span>
              <span>08:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>

        {/* Latency Trend wave */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--brand-color)', display: 'flex' }}><LuClock /></span>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Latency Trend (24h)</h3>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Avg: 187ms</span>
          </div>

          {/* Premium Vector Chart */}
          <div style={{ width: '100%', height: '180px', position: 'relative', marginTop: '8px' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="latencyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="400" y2="75" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Fill Gradient path */}
              <path d="M 0 90 Q 60 95 100 100 T 200 45 T 300 110 T 400 35 L 400 150 L 0 150 Z" fill="url(#latencyGrad)" />
              {/* Main Line path */}
              <path d="M 0 90 Q 60 95 100 100 T 200 45 T 300 110 T 400 35" fill="none" stroke="#0a57e3" strokeWidth="3" strokeLinecap="round" />
              
              {/* Trend dot indicator */}
              <circle cx="200" cy="45" r="5" fill="#0a57e3" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.675rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 600 }}>
              <span>00:00</span>
              <span>08:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Panel: Security Snapshot table card */}
      <div 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 32px',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
          <span style={{ fontSize: '1.25rem', color: 'var(--brand-color)', display: 'flex' }}><LuShieldAlert /></span>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Security Snapshot</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { label: 'Failed Logins', value: '23', color: 'var(--text-primary)' },
            { label: 'Suspicious Locations', value: '3', color: '#ef4444', weight: 800 },
            { label: 'Role Changes', value: '2', color: 'var(--text-primary)' },
            { label: 'Last 24 Hours', value: '2', color: 'var(--text-primary)' }
          ].map((row, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                borderBottom: idx === 3 ? 'none' : '1px solid var(--border-color)'
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{row.label}</span>
              <strong style={{ fontSize: '0.85rem', color: row.color, fontWeight: row.weight || 700 }}>{row.value}</strong>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
