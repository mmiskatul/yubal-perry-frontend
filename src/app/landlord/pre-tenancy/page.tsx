'use client';

import React, { useState } from 'react';
import { LuSearch, LuCalendar, LuRefreshCw, LuEllipsisVertical, LuX, LuDownload, LuTriangleAlert, LuCircleCheck } from 'react-icons/lu';

const applicants = [
  {
    initials: 'AT', color: '#0a57e3', bg: '#eff6ff',
    name: 'Alex Thompson', unit: 'Maple Heights A-12',
    property: 'Maple Heights', propUnit: 'A-12',
    day: 3, totalDays: 7, progress: 43,
    participation: 82, trend: 'Increasing', trendUp: true,
    signal: 'CONSISTENT ENGAGEMENT', signalColor: '#10b981', signalBg: '#e6fbf3'
  },
  {
    initials: 'SJ', color: '#10b981', bg: '#e6fbf3',
    name: 'Sarah Jenkins', unit: 'Oakwood Villas B-203',
    property: 'Oakwood Villas', propUnit: 'B-203',
    day: 7, totalDays: 7, progress: 100,
    participation: 92, trend: 'Strong', trendUp: true,
    signal: 'CONSISTENT ENGAGEMENT', signalColor: '#10b981', signalBg: '#e6fbf3'
  },
  {
    initials: 'WC', color: '#f59e0b', bg: '#fffbeb',
    name: 'William Carter', unit: 'Pinecrest Place C-301',
    property: 'Pinecrest Place', propUnit: 'C-301',
    day: 5, totalDays: 7, progress: 71,
    participation: 52, trend: 'Decreasing', trendUp: false,
    signal: 'SLOWER RESPONSE PATTERN', signalColor: '#f59e0b', signalBg: '#fffbeb'
  },
  {
    initials: 'LP', color: '#f59e0b', bg: '#fffbeb',
    name: 'Linda Patel', unit: 'Maple Heights A-201',
    property: 'Maple Heights', propUnit: 'A-201',
    day: 4, totalDays: 7, progress: 57,
    participation: 45, trend: 'Decreasing', trendUp: false,
    signal: 'SLOWER RESPONSE PATTERN', signalColor: '#f59e0b', signalBg: '#fffbeb'
  },
  {
    initials: 'MJ', color: '#10b981', bg: '#e6fbf3',
    name: 'Michael Jhonson', unit: 'Oakwood Villas B-101',
    property: 'Oakwood Villas', propUnit: 'B-101',
    day: 7, totalDays: 7, progress: 100,
    participation: 88, trend: 'Strong', trendUp: true,
    signal: 'CONSISTENT ENGAGEMENT', signalColor: '#10b981', signalBg: '#e6fbf3'
  },
  {
    initials: 'EM', color: '#10b981', bg: '#e6fbf3',
    name: 'Emily Martinez', unit: 'Maple Heights A-15',
    property: 'Maple Heights', propUnit: 'A-15',
    day: 7, totalDays: 7, progress: 100,
    participation: 85, trend: 'Increasing', trendUp: true,
    signal: 'CONSISTENT ENGAGEMENT', signalColor: '#10b981', signalBg: '#e6fbf3'
  }
];

// ─────────── Behavioral Report Modal ───────────
function BehavioralReportModal({ applicant, onClose }: { applicant: typeof applicants[0], onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'Summary' | 'Responsiveness' | 'Response Quality' | 'Behavioral Integrity' | 'Consistency'>('Summary');
  const tabs = ['Summary', 'Responsiveness', 'Response Quality', 'Behavioral Integrity', 'Consistency'] as const;

  const timelineDays = [
    { day: 1, status: 'ok' },
    { day: 2, status: 'ok' },
    { day: 3, status: 'warn' },
    { day: 4, status: 'fail' },
    { day: 5, status: 'fail' },
    { day: 6, status: 'ok' },
    { day: 7, status: 'ok' }
  ];

  return (
    <div
      style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
      onClick={onClose}
    >
      <div
        style={{ backgroundColor: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '780px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.18)', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>Behavioral</h2>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>Applicant Behavior Report — Detailed behavioral analysis.</p>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1.2rem', padding: '4px' }} onClick={onClose}>
            <LuX />
          </button>
        </div>

        {/* Applicant Card */}
        <div style={{ margin: '16px 24px', padding: '16px 20px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border-color)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div>
              <div style={{ fontSize: '0.675rem', fontWeight: 800, color: '#7c3aed', marginBottom: '6px' }}>● Applicant Behavior Report</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>John Doe</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>123 Main St  Cleveland, OH</p>
            </div>
            {/* Stability Index */}
            <div style={{ backgroundColor: '#f0effe', border: '1px solid #ddd6fe', borderRadius: '10px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '180px' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#7c3aed', fontWeight: 700, marginBottom: '2px' }}>Behavioral</div>
                <div style={{ fontSize: '0.65rem', color: '#7c3aed', fontWeight: 700 }}>Stability Index</div>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0a57e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>👤</div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>68/100</div>
                <div style={{ height: '4px', borderRadius: '2px', backgroundColor: '#e2e8f0', overflow: 'hidden', width: '60px', marginTop: '4px' }}>
                  <div style={{ height: '100%', width: '68%', borderRadius: '2px', background: 'linear-gradient(90deg, #ef4444, #f59e0b)' }} />
                </div>
              </div>
            </div>
          </div>
          {/* Metadata pills */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
            {['● Based on 7 days of participation', '● Behavioral observation only', '● Final decision remains with the landlord'].map((t, i) => (
              <span key={i} style={{ fontSize: '0.675rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ padding: '0 24px', display: 'flex', gap: '0', borderBottom: '1px solid var(--border-color)', marginBottom: '20px' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: '12px 16px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.825rem', fontWeight: activeTab === tab ? 700 : 500, color: activeTab === tab ? '#0a57e3' : 'var(--text-secondary)', borderBottom: activeTab === tab ? '2.5px solid #0a57e3' : '2.5px solid transparent', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '0 24px 24px', textAlign: 'left' }}>

          {activeTab === 'Summary' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Decision Summary */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <LuTriangleAlert style={{ color: '#f59e0b', fontSize: '1rem' }} />
                    <strong style={{ fontSize: '0.9rem' }}>Decision Summary</strong>
                  </div>
                  <div style={{ fontSize: '0.8rem', marginBottom: '8px' }}>Decision: <span style={{ color: '#7c3aed', fontWeight: 700 }}>Requires Attention</span></div>
                  {[
                    { icon: '●', color: '#10b981', text: 'Consistent: participation in tasks and activities.' },
                    { icon: '⚠', color: '#f59e0b', text: 'Frequent short, unserious responses.' },
                    { icon: '●', color: '#f59e0b', text: 'Self-oriented behavior detected in selected responses.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span> {item.text}
                    </div>
                  ))}
                </div>

                {/* Final Recommendation */}
                <div style={{ border: '1px solid #fde68a', borderRadius: '10px', padding: '16px', backgroundColor: '#fffbeb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <LuTriangleAlert style={{ color: '#f59e0b', fontSize: '1rem' }} />
                    <strong style={{ fontSize: '0.9rem' }}>Final Recommendation</strong>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.725rem', fontWeight: 800, padding: '3px 10px', borderRadius: '20px', backgroundColor: '#7c3aed', color: '#ffffff' }}>Decision: Requires Attention</span>
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Pattern Type: <span style={{ fontWeight: 700 }}>Inconsistent</span></div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '8px' }}>
                    Behavior is <strong>Inconsistent</strong> — showing <strong>both cooperative</strong> and low-effort responses.
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    This report adds a <strong>behavioral layer</strong> to your existing screening process. Use it alongside background and credit checks to make <strong>a complete decision</strong>.
                  </div>
                </div>

                {/* What's Stable */}
                <div style={{ border: '1px solid #d1fae5', borderRadius: '10px', padding: '14px 16px', backgroundColor: '#f0fdf4' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#065f46', marginBottom: '8px' }}>✓ What&apos;s Stable</div>
                  {['Good participation across most days', 'Responded on time in early stages'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.775rem', color: '#065f46', marginBottom: '4px' }}>
                      <span style={{ color: '#10b981' }}>●</span> {t}
                    </div>
                  ))}
                </div>

                {/* What Needs Attention */}
                <div style={{ border: '1px solid #fde68a', borderRadius: '10px', padding: '14px 16px', backgroundColor: '#fffbeb' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#92400e', marginBottom: '8px' }}>⚠ What Needs Attention</div>
                  {['Multiple low-effort responses.', 'Inconsistent engagement toward later days.'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.775rem', color: '#92400e', marginBottom: '4px' }}>
                      <span>⚠</span> {t}
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Timeline Snapshot</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>How the behavior evolved over 7 days</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {timelineDays.map((d) => (
                      <div key={d.day} style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Day {d.day}</div>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '50%', margin: '0 auto',
                          backgroundColor: d.status === 'ok' ? '#10b981' : d.status === 'warn' ? '#f59e0b' : '#ef4444',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#ffffff'
                        }}>
                          {d.status === 'ok' ? '✓' : d.status === 'warn' ? '!' : '✗'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Risk Insight */}
                <div style={{ border: '1px solid #fed7aa', borderRadius: '10px', padding: '14px 16px', backgroundColor: '#fff7ed' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#f59e0b', fontSize: '1rem' }}>●</span>
                    <strong style={{ fontSize: '0.85rem', color: '#9a3412' }}>Key Risk Insight</strong>
                  </div>
                  <p style={{ fontSize: '0.775rem', color: '#9a3412', lineHeight: '1.4' }}>
                    This applicant shows moderate <strong>inconsistency</strong> with signs of selective cooperation.
                  </p>
                </div>

                {/* Download */}
                <button
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}
                  onClick={() => alert('Sandbox: Download PDF Report for John Doe')}
                >
                  <LuDownload /> Download PDF Report
                </button>
              </div>

              {/* Right: Summary Scale */}
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Summary Scale</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Manageable', desc: 'Consistent and corporate behavior' },
                    { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Requires Attention', desc: 'Mixed or inconsistent behavior' },
                    { icon: '△', color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Elevated Risk', desc: 'Concerning behavioral patterns' }
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: s.bg, border: `1px solid ${s.border}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: s.color, fontSize: '1.1rem', display: 'flex' }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.825rem', fontWeight: 800, color: s.color }}>{s.label}</div>
                        <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', padding: '12px 14px', borderRadius: '8px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#7c3aed', display: 'flex' }}>🔷</span>
                  <span style={{ fontSize: '0.75rem', color: '#7c3aed', lineHeight: '1.4' }}>This category is factored into the <strong>final summary decision</strong></span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Responsiveness' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                {/* Status */}
                <div style={{ padding: '16px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    <span style={{ color: '#f59e0b' }}>●</span> Responsiveness: <span style={{ color: '#f59e0b' }}>Requires Attention</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Trend: Declining <span style={{ backgroundColor: '#7c3aed', color: '#ffffff', fontSize: '0.65rem', padding: '1px 8px', borderRadius: '12px', fontWeight: 700 }}>71%</span> <span style={{ color: '#ef4444' }}>↓</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Contribution to Decision: <strong>Medium Impact</strong></div>
                </div>

                {/* Behavioral Metrics */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Behavioral Metrics</div>
                  {[
                    { icon: '🕐', label: 'Average Response Time:', value: '1h 37m', badge: null },
                    { icon: '✅', label: 'On-Time Responses:', value: '4 out of 7', badge: '54%', badgeColor: '#10b981', badgeBg: '#e6fbf3' },
                    { icon: '✅', label: 'Participation:', value: '5 out of 7 days', badge: '71%', badgeColor: '#10b981', badgeBg: '#e6fbf3' },
                    { icon: '⚠', label: 'Reminder Dependency:', value: 'High (3 reminders)', badge: null }
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                      <span style={{ flexShrink: 0 }}>{m.icon}</span>
                      <span><strong>{m.label}</strong> {m.value}</span>
                      {m.badge && <span style={{ fontSize: '0.65rem', fontWeight: 800, padding: '1px 8px', borderRadius: '12px', backgroundColor: m.badgeBg, color: m.badgeColor }}>{m.badge}</span>}
                    </div>
                  ))}
                </div>

                {/* Insight */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>Responsiveness Insight</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#7c3aed', fontSize: '1rem', flexShrink: 0 }}>●</span>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>The applicant showed strong initial engagement, followed by a decline in responsiveness and effort, with increasing variability in response quality over time.</p>
                  </div>
                </div>

                {/* View Example */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>View Example Behavior</div>
                  {[
                    'Day 1 — Immediate and complete response',
                    'Day 3 — Response delayed with reduced detail',
                    'Day 5 — Minimal answer compared to earlier responses',
                    'Day 7 — Required reminder to complete task'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      <span style={{ color: '#7c3aed', fontSize: '0.85rem' }}>●</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Responsiveness Scale */}
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Responsiveness Scale</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Manageable', desc: 'Consistent behavior across all days', sub: '→ Predictable and stable engagement' },
                    { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Requires Attention', desc: 'Fluctuating participation or effort', sub: '→ indicates inconsistency over time.' },
                    { icon: '△', color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Elevated Risk', desc: 'Erratic or declining engagement', sub: '→ Signals unreliable behavioral pattern' }
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ color: s.color, fontSize: '1rem', display: 'flex' }}>{s.icon}</span>
                        <strong style={{ fontSize: '0.825rem', color: s.color }}>{s.label}</strong>
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{s.desc}</div>
                      <div style={{ fontSize: '0.7rem', color: s.color, marginTop: '2px' }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', padding: '12px 14px', borderRadius: '8px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#7c3aed' }}>🔷</span>
                  <span style={{ fontSize: '0.75rem', color: '#7c3aed', lineHeight: '1.4' }}>This category is factored into the <strong>final summary decision</strong></span>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'Response Quality' || activeTab === 'Behavioral Integrity' || activeTab === 'Consistency') && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📊</div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{activeTab} analysis is available in the full report.</p>
              <button
                style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}
                onClick={() => alert('Sandbox: Download full PDF report')}
              >
                <LuDownload /> Download Full Report
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ─────────── Main Page ───────────
export default function LandlordPreTenancyPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [reportFor, setReportFor] = useState<typeof applicants[0] | null>(null);

  const filtered = applicants.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.property.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Behavioral Report Modal */}
      {reportFor && <BehavioralReportModal applicant={reportFor} onClose={() => setReportFor(null)} />}

      <div className="animate-fade-in" style={{ padding: '0' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '28px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Pre-Tenancy Process (7-Day behavioral Process)
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Track applicant engagement and response behavior during the 7-day pre tenancy process
          </p>
        </div>

        {/* Search + Filter Bar */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px 20px', marginBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ position: 'relative', flex: 1, maxWidth: '520px' }}>
            <LuSearch style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.95rem' }} />
            <input
              type="text"
              placeholder="Search applicants, properties..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '9px 14px 9px 40px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.85rem', outline: 'none', color: 'var(--text-primary)', backgroundColor: '#ffffff', boxSizing: 'border-box' }}
              onFocus={e => e.currentTarget.style.borderColor = '#0a57e3'}
              onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer', backgroundColor: '#ffffff', fontWeight: 600 }}>
            <LuCalendar style={{ fontSize: '0.95rem' }} /> Last 30 Days <span style={{ marginLeft: '4px', fontSize: '0.75rem' }}>▾</span>
          </div>
        </div>

        {/* Table */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.8fr 1.5fr 1.8fr 1.2fr 40px', padding: '12px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)' }}>
            {['APPLICANT', 'PROPERTY', 'PROGRESS', 'PARTICIPATION LEVEL', 'BEHAVIOURAL SIGNAL', 'HISTORY', ''].map((h, i) => (
              <div key={i} style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: i === 5 ? 'center' : 'left' }}>{h}</div>
            ))}
          </div>

          {filtered.map((a, i) => (
            <div
              key={i}
              style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.8fr 1.5fr 1.8fr 1.2fr 40px', alignItems: 'center', padding: '16px 24px', borderBottom: i < filtered.length - 1 ? '1px solid var(--border-color)' : 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fafbfc'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.775rem', flexShrink: 0 }}>{a.initials}</div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{a.name}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>{a.unit}</div>
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{a.property}</div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>{a.propUnit}</div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>{a.progress === 100 ? 'Complete' : `Day ${a.day} of ${a.totalDays}`}</div>
                <div style={{ height: '6px', borderRadius: '3px', backgroundColor: '#e2e8f0', overflow: 'hidden', width: '120px' }}>
                  <div style={{ height: '100%', width: `${a.progress}%`, borderRadius: '3px', backgroundColor: a.progress === 100 ? '#10b981' : a.trendUp ? '#0a57e3' : '#f59e0b' }} />
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--text-primary)' }}>{a.participation}%</div>
                <div style={{ fontSize: '0.725rem', marginTop: '2px', color: a.trendUp ? '#10b981' : '#ef4444', fontWeight: 600 }}>{a.trend}</div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', backgroundColor: a.signalBg, color: a.signalColor, letterSpacing: '0.04em' }}>{a.signal}</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0a57e3', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px' }}
                  onClick={() => setReportFor(a)}
                >
                  <LuRefreshCw style={{ fontSize: '0.8rem' }} /> View Progress
                </button>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={() => alert(`Sandbox: More options for ${a.name}`)}>
                  <LuEllipsisVertical />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '20px', alignItems: 'center' }}>
          {[1, 2].map(p => (
            <button key={p} onClick={() => setPage(p)} style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid', borderColor: page === p ? '#0a57e3' : 'var(--border-color)', backgroundColor: page === p ? '#0a57e3' : '#ffffff', color: page === p ? '#ffffff' : 'var(--text-secondary)', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}>{p}</button>
          ))}
          <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => setPage(Math.min(2, page + 1))}>›</button>
        </div>
      </div>
    </>
  );
}
