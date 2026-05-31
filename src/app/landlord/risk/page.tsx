'use client';

import React, { useState } from 'react';
import { LuSearch, LuHouse, LuUsers, LuEllipsisVertical, LuInfo } from 'react-icons/lu';

const tenants = [
  {
    initials: 'JH', color: '#ef4444', bg: 'var(--color-alert-light)',
    name: 'Jordan Hayes', since: 'Tenant since Mar 2024',
    property: 'Maple Heights', unit: 'A-102',
    participation: 58,
    engagement: 'Lower engagement', engColor: '#ef4444',
    timing: 'Delayed', timingColor: '#ef4444',
    followThrough: 'Inconsistent', followColor: '#ef4444',
    communication: 'Limited', commColor: '#ef4444',
    riskLevel: 'Requires Attention', riskColor: '#ef4444', riskBg: 'var(--color-alert-light)'
  },
  {
    initials: 'ER', color: 'var(--color-support)', bg: 'var(--color-support-light)',
    name: 'Elena Rossi', since: 'Tenant since Feb 2024',
    property: 'Maple Heights', unit: 'A-105',
    participation: 62,
    engagement: 'Moderate engagement', engcolor: 'var(--color-support)',
    timing: 'Mostly On Time', timingcolor: 'var(--color-support)',
    followThrough: 'Partial', followcolor: 'var(--color-support)',
    communication: 'Adequate', commcolor: 'var(--color-user)',
    riskLevel: 'Monitor', riskcolor: 'var(--color-support)', riskBg: 'var(--color-support-light)'
  },
  {
    initials: 'MT', color: 'var(--color-support)', bg: 'var(--color-support-light)',
    name: 'Marcus Thompson', since: 'Tenant since Jan 2024',
    property: 'Oakwood Villas', unit: 'B-203',
    participation: 71,
    engagement: 'Moderate engagement', engcolor: 'var(--color-support)',
    timing: 'On Time', timingcolor: 'var(--color-user)',
    followThrough: 'Partial', followcolor: 'var(--color-support)',
    communication: 'Clear', commcolor: 'var(--color-user)',
    riskLevel: 'Monitor', riskcolor: 'var(--color-support)', riskBg: 'var(--color-support-light)'
  },
  {
    initials: 'LW', color: 'var(--color-user)', bg: 'var(--color-user-light)',
    name: 'Linda Wu', since: 'Tenant since Jan 2023',
    property: 'Maple Heights', unit: 'A-201',
    participation: 91,
    engagement: 'High engagement', engcolor: 'var(--color-user)',
    timing: 'On Time', timingcolor: 'var(--color-user)',
    followThrough: 'Consistent', followcolor: 'var(--color-user)',
    communication: 'Clear', commcolor: 'var(--color-user)',
    riskLevel: 'Stable', riskcolor: 'var(--color-user)', riskBg: 'var(--color-user-light)'
  },
  {
    initials: 'SC', color: 'var(--color-user)', bg: 'var(--color-user-light)',
    name: 'Sarah Chen', since: 'Tenant since Jun 2022',
    property: 'Pinecrest Place', unit: 'C-301',
    participation: 88,
    engagement: 'High engagement', engcolor: 'var(--color-user)',
    timing: 'On Time', timingcolor: 'var(--color-user)',
    followThrough: 'Consistent', followcolor: 'var(--color-user)',
    communication: 'Clear', commcolor: 'var(--color-user)',
    riskLevel: 'Stable', riskcolor: 'var(--color-user)', riskBg: 'var(--color-user-light)'
  },
  {
    initials: 'RW', color: 'var(--color-user)', bg: 'var(--color-user-light)',
    name: 'Robert Wilson', since: 'Tenant since Apr 2022',
    property: 'Oakwood Villas', unit: 'B-101',
    participation: 85,
    engagement: 'High engagement', engcolor: 'var(--color-user)',
    timing: 'On Time', timingcolor: 'var(--color-user)',
    followThrough: 'Consistent', followcolor: 'var(--color-user)',
    communication: 'Clear', commcolor: 'var(--color-user)',
    riskLevel: 'Stable', riskcolor: 'var(--color-user)', riskBg: 'var(--color-user-light)'
  }
];

export default function LandlordRiskPage() {
  const [search, setSearch] = useState('');

  const filtered = tenants.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.property.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fade-in" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px', textAlign: 'left' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Behavioral Risk</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px', maxWidth: '560px' }}>
            Snapshot of tenant behaviour across your portfolio. Reflects current state, not changes. Based on participation and interaction patterns.
          </p>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '8px', whiteSpace: 'nowrap' }}>
          <LuInfo style={{ fontSize: '0.85rem' }} /> DATA AS OF TODAY, 9:00 AM
        </div>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginBottom: '24px', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {[
          { label: 'AT RISK', count: 2, pct: '10% OF TENANTS', color: '#ef4444', linkText: 'View tenants ›' },
          { label: 'REQUIRES MONITORING', count: 4, pct: '20% OF TENANTS', color: 'var(--color-support)', linkText: 'View tenants ›' },
          { label: 'STABLE', count: 14, pct: '70% OF TENANTS', color: 'var(--color-user)', linkText: 'View tenants ›' },
          { label: 'TOTAL TENANTS', count: 20, pct: '', color: 'var(--brand-color)', linkText: 'View all ›' }
        ].map((card, i) => (
          <div key={i} style={{ padding: '24px', borderRight: i < 3 ? '1px solid var(--border-color)' : 'none', backgroundColor: 'var(--bg-secondary)', textAlign: 'left' }}>
            <div style={{ fontSize: '0.675rem', fontWeight: 800, color: card.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>{card.label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.9rem', color: card.color }}>{i < 3 ? <LuUsers /> : <LuUsers />}</span>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, color: card.color, lineHeight: 1 }}>{card.count}</span>
            </div>
            {card.pct && <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '10px' }}>{card.pct}</div>}
            <div style={{ fontSize: '0.8rem', color: card.color, fontWeight: 600, cursor: 'pointer' }} onClick={() => alert(`Sandbox: View ${card.label} tenants`)}>{card.linkText}</div>
          </div>
        ))}
      </div>

      {/* Table Filter Bar */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px 12px 0 0', padding: '14px 20px', display: 'flex', gap: '12px', alignItems: 'center', borderBottom: 'none' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <LuSearch style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.9rem' }} />
          <input type="text" placeholder="Search by tenant or property..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '8px 14px 8px 38px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', outline: 'none', boxSizing: 'border-box', color: 'var(--text-primary)', backgroundColor: 'var(--bg-secondary)' }}
            onFocus={e => e.currentTarget.style.borderColor = 'var(--brand-color)'} onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'} />
        </div>
        {[
          { icon: <LuHouse style={{ fontSize: '0.85rem' }} />, label: 'All Properties' },
          { icon: <LuUsers style={{ fontSize: '0.85rem' }} />, label: 'All Tenants' }
        ].map((btn, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-secondary)', cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: 600, backgroundColor: 'var(--bg-secondary)' }}>
            {btn.icon} {btn.label} <span style={{ fontSize: '0.7rem', marginLeft: '2px' }}>▾</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '0 0 12px 12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {/* Head */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.3fr 1.2fr 1.2fr 1.2fr 1.3fr 40px', padding: '10px 24px', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)', borderTop: '1px solid var(--border-color)' }}>
          {['TENANT', 'PROPERTY', 'PARTICIPATION', 'ENGAGEMENT', 'RESPONSE TIMING', 'FOLLOW-THROW', 'COMMUNICATION', 'RISK LEVEL', ''].map((h, i) => (
            <div key={i} style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>{h}</div>
          ))}
        </div>

        {/* Rows */}
        {filtered.map((t, i) => (
          <div
            key={i}
            style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.3fr 1.2fr 1.2fr 1.2fr 1.3fr 40px', alignItems: 'center', padding: '16px 24px', borderBottom: i < filtered.length - 1 ? '1px solid var(--border-color)' : 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {/* Tenant */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.775rem', flexShrink: 0 }}>{t.initials}</div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>{t.since}</div>
              </div>
            </div>

            {/* Property */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t.property}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{t.unit}</div>
            </div>

            {/* Participation */}
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'left' }}>{t.participation}%</div>

            {/* Engagement */}
            <div style={{ fontSize: '0.775rem', fontWeight: 600, color: t.engColor, textAlign: 'left' }}>{t.engagement}</div>

            {/* Response Timing */}
            <div style={{ fontSize: '0.775rem', fontWeight: 600, color: t.timingColor, textAlign: 'left' }}>{t.timing}</div>

            {/* Follow-through */}
            <div style={{ fontSize: '0.775rem', fontWeight: 600, color: t.followColor, textAlign: 'left' }}>{t.followThrough}</div>

            {/* Communication */}
            <div style={{ fontSize: '0.775rem', fontWeight: 600, color: t.commColor, textAlign: 'left' }}>{t.communication}</div>

            {/* Risk Level */}
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: t.riskColor }}>{t.riskLevel}</span>
            </div>

            {/* More */}
            <div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '4px', display: 'flex', alignItems: 'center' }}
                onClick={() => alert(`Sandbox: More options for ${t.name}`)}>
                <LuEllipsisVertical />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Showing 1 to {filtered.length} of 20 tenants</span>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <button style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}>‹</button>
          {[1, 2, 3, 4].map(p => (
            <button key={p} style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid', borderColor: p === 1 ? 'var(--brand-color)' : 'var(--border-color)', backgroundColor: p === 1 ? 'var(--brand-color)' : 'var(--bg-secondary)', color: p === 1 ? '#ffffff' : 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>{p}</button>
          ))}
          <button style={{ width: '30px', height: '30px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}>›</button>
        </div>
      </div>

      {/* Info Footer */}
      <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: 'var(--brand-alert-bg)', border: '1px solid var(--brand-alert-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <LuInfo style={{ color: 'var(--brand-color)', fontSize: '1rem', flexShrink: 0 }} />
        <span style={{ fontSize: '0.8rem', color: 'var(--brand-alert-text)' }}>Behavioural Risk reflects the current state of tenant behaviour based on participation and interaction patterns.</span>
      </div>
    </div>
  );
}
