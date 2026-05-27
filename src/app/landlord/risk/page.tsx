'use client';

import React, { useState } from 'react';
import {
  LuShieldAlert,
  LuTriangleAlert,
  LuInfo,
  LuActivity,
  LuClock,
  LuHouse,
  LuChevronRight
} from 'react-icons/lu';

const riskTenants = [
  {
    name: 'Marcus Villanueva',
    unit: 'Lakeview A-02',
    riskLevel: 'High',
    riskScore: 88,
    factors: [
      { label: 'Participation Drop', value: '-14%', severity: 'critical' },
      { label: 'Missed Check-Ins', value: '3 in a row', severity: 'critical' },
      { label: 'Response Time', value: '>48 hrs', severity: 'warning' }
    ],
    recommendation: 'Schedule an in-person meeting immediately.',
    initials: 'MV',
    color: '#ef4444',
    bg: '#fff5f5'
  },
  {
    name: 'Elena Rossi',
    unit: 'Grand Plaza 6A',
    riskLevel: 'Medium',
    riskScore: 54,
    factors: [
      { label: 'Integrity Score Decline', value: '-17 pts', severity: 'warning' },
      { label: 'Engagement Quality', value: 'Reduced', severity: 'warning' },
      { label: 'Check-In Streak', value: '4 days', severity: 'info' }
    ],
    recommendation: 'Send a follow-up message and monitor closely.',
    initials: 'ER',
    color: '#f59e0b',
    bg: '#fffbeb'
  }
];

const riskMatrix = [
  { label: 'Participation Rate', weight: 35, desc: 'Percentage of completed check-ins over the last 30 days' },
  { label: 'Response Time Consistency', weight: 25, desc: 'Average delay between task release and submission' },
  { label: 'Integrity Score Trend', weight: 20, desc: 'Weekly trajectory of the composite behavioral score' },
  { label: 'Communication Quality', weight: 15, desc: 'Tone, detail level, and coherence of text submissions' },
  { label: 'External Event Flags', weight: 5, desc: 'Sudden pattern breaks flagged by the system' }
];

export default function LandlordRiskPage() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Behavioral Risk</h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Identify tenants with elevated behavioral risk based on multi-factor analysis
          </p>
        </div>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {[
            { label: 'High Risk', value: '1', desc: 'Immediate action required', color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', icon: <LuShieldAlert /> },
            { label: 'Medium Risk', value: '1', desc: 'Monitor closely', color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', icon: <LuTriangleAlert /> },
            { label: 'Low Risk / Stable', value: '2', desc: 'No action required', color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', icon: <LuActivity /> }
          ].map((c, i) => (
            <div key={i} style={{ backgroundColor: c.bg, border: `1.5px solid ${c.border}`, borderRadius: '12px', padding: '24px', textAlign: 'left', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.4rem', color: c.color, display: 'flex' }}>{c.icon}</span>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: c.color }}>{c.label}</h3>
              </div>
              <strong style={{ fontSize: '2.2rem', fontWeight: 800, color: c.color, display: 'block' }}>{c.value}</strong>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{c.desc}</span>
            </div>
          ))}
        </div>

        {/* 2-Col Layout: Risk cards + Risk Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '24px', alignItems: 'start' }}>

          {/* Flagged Tenant Risk Cards */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', textAlign: 'left' }}>Flagged Tenants</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {riskTenants.map((t, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: '#ffffff', border: `1.5px solid ${t.color}40`, borderLeft: `4px solid ${t.color}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', cursor: 'pointer' }}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                        {t.initials}
                      </div>
                      <div>
                        <strong style={{ fontSize: '0.925rem', color: 'var(--text-primary)', display: 'block' }}>{t.name}</strong>
                        <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <LuHouse style={{ fontSize: '0.75rem' }} /> {t.unit}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.675rem', padding: '3px 10px', borderRadius: '6px', backgroundColor: t.bg, color: t.color, fontWeight: 700, display: 'block' }}>
                        {t.riskLevel} Risk
                      </span>
                      <strong style={{ fontSize: '1.2rem', color: t.color, fontWeight: 800 }}>{t.riskScore}</strong>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block' }}>Risk Index</span>
                    </div>
                  </div>

                  {expanded === i && (
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                      {/* Risk Factors */}
                      <h5 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Risk Factors</h5>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                        {t.factors.map((f, fi) => (
                          <div key={fi} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', backgroundColor: f.severity === 'critical' ? '#fff5f5' : f.severity === 'warning' ? '#fffbeb' : '#f8fafc', border: `1px solid ${f.severity === 'critical' ? '#fca5a5' : f.severity === 'warning' ? '#fde68a' : 'var(--border-color)'}` }}>
                            <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{f.label}</span>
                            <span style={{ fontSize: '0.775rem', fontWeight: 800, color: f.severity === 'critical' ? '#ef4444' : f.severity === 'warning' ? '#f59e0b' : '#0a57e3' }}>{f.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Recommendation */}
                      <div style={{ backgroundColor: '#f0f4ff', border: '1px solid #dbeafe', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <LuInfo style={{ color: '#0a57e3', fontSize: '1rem', flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontSize: '0.775rem', color: '#1e40af', lineHeight: '1.4' }}><strong>Recommendation:</strong> {t.recommendation}</span>
                      </div>

                      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                        <button className="premium-btn premium-btn-primary" style={{ '--btn-color': t.color, flex: 1, padding: '8px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 } as React.CSSProperties}
                          onClick={(e) => { e.stopPropagation(); alert(`Sandbox: Take action on ${t.name}`); }}>
                          Take Action <LuChevronRight style={{ display: 'inline' }} />
                        </button>
                        <button className="premium-btn premium-btn-secondary" style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '0.8rem' }}
                          onClick={(e) => { e.stopPropagation(); alert(`Sandbox: View full behavioral report for ${t.name}`); }}>
                          Full Report
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Risk Matrix Explainer */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Risk Scoring Matrix</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>How the Behavioral Risk Index is calculated</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {riskMatrix.map((factor, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{factor.label}</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0a57e3' }}>{factor.weight}%</span>
                  </div>
                  <div style={{ height: '6px', borderRadius: '3px', backgroundColor: '#e2e8f0', overflow: 'hidden', marginBottom: '4px' }}>
                    <div style={{ height: '100%', width: `${factor.weight * 3}%`, backgroundColor: '#0a57e3', borderRadius: '3px' }} />
                  </div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>{factor.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Score Thresholds</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { range: '75–100', label: 'High Risk', color: '#ef4444' },
                  { range: '40–74', label: 'Medium Risk', color: '#f59e0b' },
                  { range: '0–39', label: 'Low Risk / Stable', color: '#10b981' }
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{t.range}</span>
                    <span style={{ color: t.color, fontWeight: 700 }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}
