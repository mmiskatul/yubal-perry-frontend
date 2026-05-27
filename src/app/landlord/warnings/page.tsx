'use client';

import React, { useState } from 'react';
import {
  LuTriangleAlert,
  LuBell,
  LuCircleCheck,
  LuInfo,
  LuHouse,
  LuClock,
  LuChevronRight,
  LuEye
} from 'react-icons/lu';

const warnings = [
  {
    id: 1,
    tenant: 'Marcus Villanueva',
    unit: 'Lakeview A-02',
    type: 'Participation Drop',
    detail: 'Participation rate fell from 82% to 68% — a 14% decline over 5 days.',
    time: 'Today 9:15 AM',
    severity: 'critical',
    status: 'Open',
    initials: 'MV',
    resolved: false
  },
  {
    id: 2,
    tenant: 'Elena Rossi',
    unit: 'Grand Plaza 6A',
    type: 'Integrity Score Decline',
    detail: 'Integrity Score dropped from 98 to 74 over 7 days. Monitor closely.',
    time: 'Yesterday 4:00 PM',
    severity: 'warning',
    status: 'Open',
    initials: 'ER',
    resolved: false
  },
  {
    id: 3,
    tenant: 'Dana Weiss',
    unit: 'Oak Ridge Tower 3B',
    type: 'Missed Check-Ins',
    detail: '3 consecutive missed check-ins detected. No response to follow-up message.',
    time: 'Yesterday 11:00 AM',
    severity: 'critical',
    status: 'Escalated',
    initials: 'DW',
    resolved: false
  },
  {
    id: 4,
    tenant: 'Carlos Rivera',
    unit: 'Maple Heights A-12',
    type: 'Response Time Delay',
    detail: 'Average response time increased to 36 hours. Previously responding within 2 hours.',
    time: '2 days ago',
    severity: 'info',
    status: 'Resolved',
    initials: 'CR',
    resolved: true
  }
];

const severityConfig: Record<string, { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  critical: { color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', icon: <LuTriangleAlert /> },
  warning: { color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', icon: <LuBell /> },
  info: { color: '#0a57e3', bg: '#eff6ff', border: '#bfdbfe', icon: <LuInfo /> }
};

export default function LandlordWarningsPage() {
  const [filter, setFilter] = useState<'all' | 'open' | 'resolved'>('all');

  const filtered = warnings.filter(w => {
    if (filter === 'all') return true;
    if (filter === 'open') return !w.resolved;
    return w.resolved;
  });

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Early Warnings</h1>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Behavioral alerts triggered by significant pattern changes in your tenants
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff5f5', border: '1px solid #fca5a5', padding: '10px 18px', borderRadius: '10px' }}>
            <LuTriangleAlert style={{ color: '#ef4444', fontSize: '1.1rem' }} />
            <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#ef4444' }}>3 Open Warnings</span>
          </div>
        </div>

        {/* Summary Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {[
            { label: 'Total Warnings', value: '4', sub: 'All time', color: '#0a57e3', bg: '#eff6ff' },
            { label: 'Critical', value: '2', sub: 'Require action', color: '#ef4444', bg: '#fff5f5' },
            { label: 'Moderate', value: '1', sub: 'Monitor', color: '#f59e0b', bg: '#fffbeb' },
            { label: 'Resolved', value: '1', sub: 'Closed out', color: '#10b981', bg: '#e6fbf3' }
          ].map((c, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
              <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>{c.label}</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: c.color, margin: '0 0 4px 0' }}>{c.value}</h2>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{c.sub}</span>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '6px', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '10px', width: 'fit-content', marginBottom: '24px' }}>
          {(['all', 'open', 'resolved'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 18px',
                borderRadius: '7px',
                border: 'none',
                backgroundColor: filter === f ? '#ffffff' : 'transparent',
                color: filter === f ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                textTransform: 'capitalize',
                boxShadow: filter === f ? '0 1px 4px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              {f === 'all' ? 'All' : f === 'open' ? 'Open' : '✓ Resolved'}
            </button>
          ))}
        </div>

        {/* Warning Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filtered.map((w, i) => {
            const cfg = severityConfig[w.severity];
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  border: `1.5px solid ${w.resolved ? 'var(--border-color)' : cfg.border}`,
                  borderLeft: `4px solid ${w.resolved ? '#10b981' : cfg.color}`,
                  borderRadius: '0 12px 12px 0',
                  padding: '20px 24px',
                  boxShadow: 'var(--shadow-sm)',
                  opacity: w.resolved ? 0.75 : 1,
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    {/* Avatar */}
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: w.resolved ? '#e6fbf3' : cfg.bg, color: w.resolved ? '#10b981' : cfg.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0, border: `2px solid ${w.resolved ? '#a7f3d0' : cfg.border}` }}>
                      {w.initials}
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{w.tenant}</strong>
                        <span style={{ fontSize: '0.675rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: w.resolved ? '#e6fbf3' : cfg.bg, color: w.resolved ? '#10b981' : cfg.color, fontWeight: 700 }}>
                          {w.resolved ? '✓ Resolved' : w.status}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                        <LuHouse style={{ fontSize: '0.75rem' }} /> {w.unit}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.8rem', color: w.resolved ? '#10b981' : cfg.color, display: 'flex' }}>{w.resolved ? <LuCircleCheck /> : cfg.icon}</span>
                        <strong style={{ fontSize: '0.875rem', color: w.resolved ? 'var(--text-secondary)' : 'var(--text-primary)' }}>{w.type}</strong>
                      </div>

                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{w.detail}</p>
                    </div>
                  </div>

                  {/* Right side: time + actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <LuClock style={{ fontSize: '0.75rem' }} /> {w.time}
                    </span>
                    {!w.resolved && (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="premium-btn premium-btn-secondary" style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          onClick={() => alert(`Sandbox: View details for ${w.tenant}`)}>
                          <LuEye /> View
                        </button>
                        <button className="premium-btn premium-btn-primary" style={{ '--btn-color': cfg.color, padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem' } as React.CSSProperties}
                          onClick={() => alert(`Sandbox: Respond to warning for ${w.tenant}`)}>
                          Respond
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
            <LuCircleCheck style={{ fontSize: '3rem', color: '#10b981', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>All clear!</h3>
            <p style={{ fontSize: '0.825rem', marginTop: '4px' }}>No warnings in this category.</p>
          </div>
        )}

    </div>
  );
}
