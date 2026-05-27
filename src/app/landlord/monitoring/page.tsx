'use client';

import React, { useState } from 'react';
import {
  LuActivity,
  LuCircleCheck,
  LuTriangleAlert,
  LuHouse,
  LuInfo,
  LuChevronRight,
  LuEye,
  LuShieldAlert,
  LuClock
} from 'react-icons/lu';

const tenants = [
  {
    name: 'Marcus Villanueva',
    unit: 'Lakeview A-02',
    address: '458 Oak Avenue',
    integrityScore: 68,
    prevScore: 82,
    participation: '68%',
    timing: 'Delayed',
    communication: 'Low',
    status: 'Attention',
    color: '#ef4444',
    bg: '#fff5f5',
    initials: 'MV',
    trend: 'down'
  },
  {
    name: 'Elena Rossi',
    unit: 'Grand Plaza 6A',
    address: '8 Grand Plaza',
    integrityScore: 74,
    prevScore: 91,
    participation: '74%',
    timing: 'On Time',
    communication: 'Moderate',
    status: 'Monitor',
    color: '#f59e0b',
    bg: '#fffbeb',
    initials: 'ER',
    trend: 'down'
  },
  {
    name: 'Ray Fontaine',
    unit: 'Riverside Apt 402',
    address: '45 Temecula Drive',
    integrityScore: 92,
    prevScore: 88,
    participation: '94%',
    timing: 'On Time',
    communication: 'Excellent',
    status: 'Stable',
    color: '#10b981',
    bg: '#e6fbf3',
    initials: 'RF',
    trend: 'up'
  },
  {
    name: 'Amara Okafor',
    unit: 'Maple Heights A-12',
    address: '123 Maple Street',
    integrityScore: 88,
    prevScore: 85,
    participation: '88%',
    timing: 'On Time',
    communication: 'Good',
    status: 'Stable',
    color: '#10b981',
    bg: '#e6fbf3',
    initials: 'AO',
    trend: 'up'
  }
];

export default function LandlordMonitoringPage() {
  const [filter, setFilter] = useState<'all' | 'attention' | 'monitor' | 'stable'>('all');

  const filtered = tenants.filter(t => {
    if (filter === 'all') return true;
    return t.status.toLowerCase() === filter;
  });

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Monitoring</h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Active tenant behavioral monitoring across your entire portfolio
          </p>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {[
            { label: 'Total Monitored', value: '4', sub: 'Active tenants', icon: <LuActivity />, color: '#0a57e3', bg: '#eff6ff' },
            { label: 'Stable', value: '2', sub: 'No issues', icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3' },
            { label: 'Monitor', value: '1', sub: 'Watch closely', icon: <LuInfo />, color: '#f59e0b', bg: '#fffbeb' },
            { label: 'Requires Attention', value: '1', sub: 'Immediate action', icon: <LuShieldAlert />, color: '#ef4444', bg: '#fff5f5' }
          ].map((c, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.label}</span>
                <span style={{ fontSize: '1.1rem', color: c.color, display: 'flex', padding: '6px', backgroundColor: c.bg, borderRadius: '8px' }}>{c.icon}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{c.value}</h2>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{c.sub}</span>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {(['all', 'attention', 'monitor', 'stable'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '7px 16px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: '1px solid',
                borderColor: filter === f ? '#0a57e3' : 'var(--border-color)',
                backgroundColor: filter === f ? '#0a57e3' : '#ffffff',
                color: filter === f ? '#ffffff' : 'var(--text-secondary)',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {f === 'all' ? 'All Tenants' : f === 'attention' ? '⚠ Attention' : f === 'monitor' ? '● Monitor' : '✓ Stable'}
            </button>
          ))}
        </div>

        {/* Tenant Monitoring Table */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          {/* Table Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1.2fr', gap: '0', padding: '12px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)', fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <div>Tenant</div>
            <div>Score</div>
            <div>Participation</div>
            <div>Response Timing</div>
            <div>Communication</div>
            <div style={{ textAlign: 'right' }}>Actions</div>
          </div>

          {/* Table Rows */}
          {filtered.map((tenant, idx) => (
            <div
              key={idx}
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1.2fr', alignItems: 'center', padding: '18px 24px', borderBottom: idx < filtered.length - 1 ? '1px solid var(--border-color)' : 'none', transition: 'background 0.15s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Tenant Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: tenant.bg, color: tenant.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', border: `2px solid ${tenant.color}30` }}>
                  {tenant.initials}
                </div>
                <div>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block' }}>{tenant.name}</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <LuHouse style={{ fontSize: '0.75rem' }} /> {tenant.unit}
                  </span>
                </div>
              </div>

              {/* Score */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <strong style={{ fontSize: '1.1rem', color: tenant.color, fontWeight: 800 }}>{tenant.integrityScore}</strong>
                  <span style={{ fontSize: '0.65rem', color: tenant.trend === 'down' ? '#ef4444' : '#10b981', fontWeight: 700 }}>
                    {tenant.trend === 'down' ? `↓ from ${tenant.prevScore}` : `↑ from ${tenant.prevScore}`}
                  </span>
                </div>
                <span style={{ fontSize: '0.675rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: tenant.bg, color: tenant.color, fontWeight: 700, display: 'inline-block', marginTop: '4px' }}>
                  {tenant.status}
                </span>
              </div>

              {/* Participation */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{tenant.participation}</div>
                <div style={{ height: '4px', borderRadius: '2px', backgroundColor: '#e2e8f0', marginTop: '6px', overflow: 'hidden', width: '60px' }}>
                  <div style={{ height: '100%', width: tenant.participation, backgroundColor: tenant.color, borderRadius: '2px' }} />
                </div>
              </div>

              {/* Timing */}
              <div style={{ fontSize: '0.8rem', color: tenant.timing === 'Delayed' ? '#ef4444' : '#10b981', fontWeight: 600, textAlign: 'left' }}>
                {tenant.timing === 'Delayed' ? '⚠ ' : '✓ '}{tenant.timing}
              </div>

              {/* Communication */}
              <div style={{ fontSize: '0.8rem', color: tenant.communication === 'Low' ? '#ef4444' : tenant.communication === 'Moderate' ? '#f59e0b' : '#10b981', fontWeight: 600, textAlign: 'left' }}>
                {tenant.communication}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button className="premium-btn premium-btn-secondary" style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onClick={() => alert(`Sandbox: View full monitoring detail for ${tenant.name}`)}>
                  <LuEye /> View
                </button>
                {tenant.status !== 'Stable' && (
                  <button className="premium-btn premium-btn-primary" style={{ '--btn-color': tenant.color, padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem' } as React.CSSProperties}
                    onClick={() => alert(`Sandbox: Take action on ${tenant.name}`)}>
                    Act
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Footer */}
        <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <LuInfo /> Scores are recalculated daily based on check-in engagement, response quality, and communication patterns.
        </p>

    </div>
  );
}
