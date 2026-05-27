'use client';

import React from 'react';

// Import vector icons from React Icons Lu library
import { 
  LuServer, 
  LuActivity, 
  LuTriangleAlert, 
  LuClock, 
  LuRefreshCw, 
  LuCode, 
  LuSlidersHorizontal, 
  LuCircleHelp, 
  LuSearch
} from 'react-icons/lu';
import { SiStripe, SiTwilio } from 'react-icons/si';

export default function AdminIntegrationPage() {
  
  const webhookRows = [
    { id: 'evt_1OuY...9d2', type: 'payment_intent.succeeded', status: '200 OK', statusColor: '#10b981', statusBg: '#e6fbf3', latency: '128ms', time: '14:22:10', failed: false },
    { id: 'evt_1OuX...1a3', type: 'customer.created', status: '200 OK', statusColor: '#10b981', statusBg: '#e6fbf3', latency: '89ms', time: '14:20:05', failed: false },
    { id: 'evt_1OuW...2v4', type: 'charge.failed', status: '500 ERR', statusColor: '#ef4444', statusBg: '#fef2f2', latency: '342ms', time: '14:18:42', failed: true }
  ];

  const smsRows = [
    { id: 'SM77...a81', recipient: '+1 (555) ...9012', status: 'DELIVERED', color: '#10b981', latency: '1.1s', time: '14:15:33' },
    { id: 'SM23...b02', recipient: '+44 7700 ...1234', status: 'DELIVERED', color: '#10b981', latency: '0.9s', time: '14:12:12' },
    { id: 'SM88...c55', recipient: '+1 (555) ...4455', status: 'UNDELIVERED', color: '#f59e0b', latency: '2.4s', time: '14:05:01' }
  ];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Page Header with Infrastructure Search */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Security, Backups & Deployments
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Infrastructure monitor, backups configuration and deployment activity logs.
          </p>
        </div>

        {/* Infrastructure Search Input */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '260px' }}>
            <span style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex' }}><LuSearch /></span>
            <input 
              type="text" 
              placeholder="Search Infrastructure..." 
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                outline: 'none',
                backgroundColor: '#ffffff'
              }}
            />
          </div>
          <button 
            style={{ 
              padding: '8px', 
              borderRadius: '8px', 
              border: '1px solid var(--border-color)', 
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-secondary)'
            }}
          >
            <LuSlidersHorizontal style={{ fontSize: '0.9rem' }} />
          </button>
        </div>
      </div>

      {/* Grid: 4 metric stats blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {[
          { title: 'STRIPE STATUS', value: '99.99%', sub: 'Uptime (Last 30d)', status: 'HEALTHY', color: '#635bff', icon: <SiStripe /> },
          { title: 'TWILIO STATUS', value: 'Operational', sub: 'All regions active', status: 'HEALTHY', color: '#f22f46', icon: <SiTwilio /> },
          { title: 'FAILED EVENTS', value: '42', sub: '-12% vs yesterday', status: 'ATTENTION', color: '#ef4444', icon: <LuTriangleAlert /> },
          { title: 'AVG LATENCY', value: '142ms', sub: '-5ms optimization', status: 'OPTIMAL', color: '#0a57e3', icon: <LuClock /> }
        ].map((m, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {m.title}
              </span>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '6px 0 2px 0' }}>
                {m.value}
              </h2>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{m.sub}</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
              <span style={{ fontSize: '1.15rem', color: m.color, display: 'flex' }}>{m.icon}</span>
              <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '9999px', backgroundColor: `${m.color}15`, color: m.color, fontWeight: 700 }}>
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Double Pane Middle Grid: Stripe & Twilio Diagnostics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Stripe panel */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '28px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#635bff15', color: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                <SiStripe />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Stripe</h3>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 500 }}>Payment Infrastructure</span>
              </div>
            </div>
            
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }} onClick={()=>alert('Refreshing Stripe status...')}><LuRefreshCw /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.825rem' }}>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>CONNECTION</span>
              <strong style={{ display: 'block', color: '#10b981', marginTop: '4px' }}>● Active</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>MODE</span>
              <strong style={{ display: 'block', color: '#0a57e3', marginTop: '4px' }}>Live</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>WEBHOOK STATUS</span>
              <strong style={{ display: 'block', color: '#10b981', marginTop: '4px' }}>Healthy</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>LAST EVENT</span>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginTop: '4px' }}>2m ago</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>FAILED (24H)</span>
              <strong style={{ display: 'block', color: '#ef4444', marginTop: '4px' }}>4 events</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>API LATENCY</span>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginTop: '4px' }}>142ms</strong>
            </div>
          </div>
        </div>

        {/* Twilio panel */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '28px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f22f4615', color: '#f22f46', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                <SiTwilio />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Twilio</h3>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 500 }}>SMS Infrastructure</span>
              </div>
            </div>
            
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }} onClick={()=>alert('Checking Twilio connection...')}><LuCode /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.825rem' }}>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>PROVIDER</span>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginTop: '4px' }}>Twilio (US-East)</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>DELIVERY RATE</span>
              <strong style={{ display: 'block', color: '#10b981', marginTop: '4px' }}>99.8%</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>QUEUE BACKLOG</span>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginTop: '4px' }}>12 items</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>LAST FAILURE</span>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginTop: '4px' }}>4h ago</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>RATE LIMIT</span>
              <strong style={{ display: 'block', color: '#10b981', marginTop: '4px' }}>Normal</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-secondary)' }}>AVG PROCESS TIME</span>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginTop: '4px' }}>1.2s</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Double Pane Bottom Tables: Recent Webhooks and Recent SMS Events */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        {/* Table 1: Recent Webhook Activity */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 0', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ padding: '0 32px 16px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Recent Webhook Activity</h3>
            <span style={{ fontSize: '0.725rem', color: '#0a57e3', fontWeight: 700 }}>REAL-TIME FEED</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {webhookRows.map((row, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  borderBottom: idx === webhookRows.length - 1 ? 'none' : '1px solid var(--border-color)',
                  backgroundColor: row.failed ? '#fff5f5' : 'transparent', // Red highlight for failures
                  fontSize: '0.825rem'
                }}
              >
                <div style={{ flex: 1, fontWeight: 700, color: 'var(--text-primary)' }}>{row.id}</div>
                <div style={{ flex: 1.5, color: 'var(--text-secondary)' }}>{row.type}</div>
                <div style={{ flex: 1, display: 'flex' }}>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '6px', backgroundColor: row.statusBg, color: row.statusColor, fontWeight: 700 }}>
                    {row.status}
                  </span>
                </div>
                <div style={{ flex: 0.8, color: 'var(--text-secondary)' }}>{row.latency}</div>
                <div style={{ flex: 0.8, color: 'var(--text-muted)', textAlign: 'right' }}>{row.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 2: Recent SMS Events */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 0', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ padding: '0 32px 16px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Recent SMS Events</h3>
            <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700 }}>GLOBAL QUEUE</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {smsRows.map((row, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  borderBottom: idx === smsRows.length - 1 ? 'none' : '1px solid var(--border-color)',
                  fontSize: '0.825rem'
                }}
              >
                <div style={{ flex: 1, fontWeight: 700, color: 'var(--text-primary)' }}>{row.id}</div>
                <div style={{ flex: 1.5, color: 'var(--text-secondary)' }}>{row.recipient}</div>
                <div style={{ flex: 1.2, fontWeight: 700, color: row.color }}>{row.status}</div>
                <div style={{ flex: 0.8, color: 'var(--text-secondary)' }}>{row.latency}</div>
                <div style={{ flex: 0.8, color: 'var(--text-muted)', textAlign: 'right' }}>{row.time}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
