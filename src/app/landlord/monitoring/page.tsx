'use client';

import React, { useState } from 'react';
import { LuDownload, LuHouse, LuUsers, LuFilter, LuChevronDown, LuActivity } from 'react-icons/lu';

// Mini sparkline dot chart
function SparkLine({ data, color }: { data: number[], color: string }) {
  const w = 120, h = 40;
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * (w - 8) + 4,
    y: h - ((v - min) / range) * (h - 8) - 4
  }));
  const days = ['T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <div>
      <svg width={w} height={h} style={{ overflow: 'visible' }}>
        {pts.map((p, i) => i < pts.length - 1 && (
          <line key={i} x1={p.x} y1={p.y} x2={pts[i + 1].x} y2={pts[i + 1].y} stroke={color} strokeWidth="1.5" strokeDasharray={color === '#94a3b8' ? '4 2' : ''} />
        ))}
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill={color} stroke="#ffffff" strokeWidth="1.5" />
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: w, marginTop: '2px' }}>
        {days.map((d, i) => (
          <span key={i} style={{ fontSize: '9px', color: 'var(--text-muted)', textAlign: 'center', width: `${100 / days.length}%` }}>{d}</span>
        ))}
      </div>
    </div>
  );
}

const tenantCards = [
  {
    initials: 'MV', color: 'var(--color-support)', bg: 'var(--color-support-light)',
    name: 'Marcus Villanueva', unit: 'Unit 201',
    status: 'Slight Decline', statuscolor: 'var(--color-support)', statusBg: 'var(--color-support-light)',
    participation: 62, prevParticipation: 82, change: -14, changeUp: false,
    timing: 'Slower', timingcolor: 'var(--color-support)',
    followThrough: 'Partial', followcolor: 'var(--color-support)',
    communication: 'Reduced', commColor: '#ef4444',
    sparkData: [82, 78, 74, 70, 66, 63, 62],
    sparkColor: '#f97316',
    insight: 'Engagement has been improving over the week.'
  },
  {
    initials: 'LW', color: 'var(--color-user)', bg: 'var(--color-user-light)',
    name: 'Linda Wu', unit: 'Unit 202',
    status: 'Improving', statuscolor: 'var(--color-user)', statusBg: 'var(--color-user-light)',
    participation: 85, prevParticipation: 75, change: +10, changeUp: true,
    timing: 'On Time', timingcolor: 'var(--color-user)',
    followThrough: 'Reliable', followcolor: 'var(--color-user)',
    communication: 'Clear', commcolor: 'var(--color-user)',
    sparkData: [75, 77, 79, 81, 83, 84, 85],
    sparkcolor: 'var(--color-user)',
    insight: 'Engagement has been improving over the week.'
  },
  {
    initials: 'JR', color: 'var(--brand-color)', bg: 'var(--brand-light)',
    name: 'James Rodriguez', unit: 'Unit 203',
    status: 'Stable', statuscolor: 'var(--text-secondary)', statusBg: 'var(--bg-primary)',
    participation: 76, prevParticipation: 76, change: 0, changeUp: true,
    timing: 'On Time', timingcolor: 'var(--color-user)',
    followThrough: 'Consistent', followcolor: 'var(--color-user)',
    communication: 'Good', commcolor: 'var(--color-user)',
    sparkData: [76, 75, 77, 76, 77, 76, 76],
    sparkcolor: 'var(--text-muted)',
    insight: 'Engagement has been improving over the week.'
  },
  {
    initials: 'SP', color: 'var(--color-support)', bg: 'var(--color-support-light)',
    name: 'Sarah Patel', unit: 'Unit 204',
    status: 'Slight Decline', statuscolor: 'var(--color-support)', statusBg: 'var(--color-support-light)',
    participation: 62, prevParticipation: 67, change: -5, changeUp: false,
    timing: 'Slightly Slow', timingcolor: 'var(--color-support)',
    followThrough: 'Partial', followcolor: 'var(--color-support)',
    communication: 'Less Active', commColor: '#ef4444',
    sparkData: [67, 66, 65, 64, 63, 62, 62],
    sparkColor: '#f97316',
    insight: 'Engagement has been improving over the week.'
  }
];

export default function LandlordMonitoringPage() {
  const [property, setProperty] = useState('Lakeview A-02');
  const [period, setPeriod] = useState('Last 7 Days');

  return (
    <div className="animate-fade-in" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', textAlign: 'left' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Tenant Monitoring</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Track ongoing behavior, engagement, and trends across your active tenants.
          </p>
        </div>
        <button
          style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--brand-color)', color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => alert('Sandbox: Export Report')}
        >
          <LuDownload /> Export Report
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '14px 20px', marginBottom: '20px', display: 'flex', gap: '12px', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
        {[
          { icon: <LuHouse style={{ fontSize: '0.85rem' }} />, value: property, onChange: setProperty },
          { icon: <LuUsers style={{ fontSize: '0.85rem' }} />, value: 'All Active Tenants', onChange: () => {} },
          { icon: null, value: period, onChange: setPeriod }
        ].map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: 600, backgroundColor: 'var(--bg-primary)' }}>
            {f.icon} {f.value} <LuChevronDown style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: 600, backgroundColor: 'var(--bg-primary)', marginLeft: 'auto' }}>
          <LuFilter style={{ fontSize: '0.85rem' }} /> Filter
        </div>
      </div>

      {/* 2-Column Tenant Card Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {tenantCards.map((t, i) => (
          <div key={i} style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 22px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
            {/* Tenant Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{t.unit}</div>
                </div>
              </div>
              <span style={{ fontSize: '0.725rem', fontWeight: 800, padding: '4px 12px', borderRadius: '20px', backgroundColor: t.statusBg, color: t.statusColor }}>
                {t.status}
              </span>
            </div>

            {/* 3-Column Data */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '12px' }}>
              {/* Participation */}
              <div>
                <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Participation</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{t.participation}%</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.775rem', fontWeight: 700, color: t.changeUp ? '#10b981' : '#ef4444' }}>
                    {t.change === 0 ? '→ 0%' : t.changeUp ? `↑ ${t.change}%` : `↓ ${Math.abs(t.change)}%`}
                  </span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '6px' }}>from {t.prevParticipation}%</div>
                {/* Bar */}
                <div style={{ height: '5px', borderRadius: '3px', backgroundColor: 'var(--border-color)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${t.participation}%`, borderRadius: '3px', backgroundColor: t.changeUp ? '#10b981' : '#f97316' }} />
                </div>
              </div>

              {/* Interaction Context */}
              <div>
                <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Interaction Context</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {[
                    { label: 'Response Timing', value: t.timing, color: t.timingColor },
                    { label: 'Follow-through', value: t.followThrough, color: t.followColor },
                    { label: 'Communication', value: t.communication, color: t.commColor }
                  ].map((ctx, ci) => (
                    <div key={ci} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: `${ctx.color}20`, color: ctx.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', flexShrink: 0 }}>●</div>
                      <div>
                        <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>{ctx.label}</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: ctx.color }}>{ctx.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7-Day Trend */}
              <div>
                <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>7-Day Trend</div>
                <SparkLine data={t.sparkData} color={t.sparkColor} />
              </div>
            </div>

            {/* Insight + View Details */}
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <strong>Insight:</strong> {t.insight}
              </span>
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7c3aed', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap', padding: '0 0 0 10px', display: 'flex', alignItems: 'center', gap: '4px' }}
                onClick={() => alert(`Sandbox: View details for ${t.name}`)}
              >
                View Details ›
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Insight Footer */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px 24px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
        <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
          <LuActivity />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>Portfolio Insight</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Average participation across 4 tenants is <strong>72%</strong>, <span style={{ color: '#ef4444', fontWeight: 700 }}>down 4%</span> from last 7 days.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'Improving', value: '1 Tenant', icon: '↗', color: 'var(--color-user)' },
            { label: 'Stable', value: '1 Tenant', icon: '—', color: 'var(--text-secondary)' },
            { label: 'Declining', value: '2 Tenants', icon: '↘', color: '#ef4444' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.875rem', color: s.color, fontWeight: 800 }}>{s.icon} {s.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
