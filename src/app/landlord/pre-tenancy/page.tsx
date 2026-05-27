'use client';

import React, { useState } from 'react';
import { LuSearch, LuCalendar, LuRefreshCw, LuEllipsisVertical, LuX, LuDownload, LuTriangleAlert, LuCircleCheck, LuCircleAlert, LuLock, LuEye, LuChevronDown } from 'react-icons/lu';

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
  const [isUnlocked, setIsUnlocked] = useState(applicant.progress === 100);
  const [exampleExpanded, setExampleExpanded] = useState(true);

  const tabs = ['Summary', 'Responsiveness', 'Response Quality', 'Behavioral Integrity', 'Consistency'] as const;

  const timelineDays = [
    { day: 1, status: 'ok' },
    { day: 2, status: 'ok' },
    { day: 3, status: 'ok' },
    { day: 4, status: 'warn' },
    { day: 5, status: 'fail' },
    { day: 6, status: 'fail' },
    { day: 7, status: 'fail' }
  ];

  return (
    <div
      style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(6px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
      onClick={onClose}
    >
      <div
        style={{ backgroundColor: '#ffffff', borderRadius: '20px', width: '100%', maxWidth: '820px', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 24px 50px rgba(15,23,42,0.22)', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ padding: '24px 28px 18px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Behavioral</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Applicant Behavior Report — Detailed behavioral analysis.</p>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1.3rem', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
            <LuX />
          </button>
        </div>

        {/* Applicant Profile Card */}
        <div style={{ margin: '20px 28px', padding: '20px 24px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#7c3aed', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '0.9rem' }}>•</span> Applicant Behavior Report
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>{applicant.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{applicant.unit || '123 Main St Cleveland, OH'}</p>
            </div>
            
            {/* Stability Index Box */}
            {!isUnlocked ? (
              <div style={{ backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '12px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', width: '310px', boxSizing: 'border-box' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.725rem', color: '#7c3aed', fontWeight: 800 }}>Behavioral Stability Index</div>
                  <div style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 700, marginTop: '2px' }}>Pattern Forming</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '1px' }}>({applicant.day}/{applicant.totalDays} days)</div>
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#ffffff', flexShrink: 0 }}>👤</div>
                <div style={{ fontSize: '0.625rem', color: '#7c3aed', width: '90px', lineHeight: '1.25', fontWeight: 500 }}>
                  Final score becomes available after the 7-days process
                </div>
              </div>
            ) : (
              <div style={{ backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '12px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '14px', minWidth: '220px' }}>
                <div>
                  <div style={{ fontSize: '0.725rem', color: '#7c3aed', fontWeight: 800, marginBottom: '2px' }}>Behavioral</div>
                  <div style={{ fontSize: '0.725rem', color: '#7c3aed', fontWeight: 800 }}>Stability Index</div>
                </div>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#ffffff', flexShrink: 0 }}>👤</div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'baseline', gap: '1px' }}>
                    68<span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>/100</span>
                  </div>
                  <div style={{ height: '5px', borderRadius: '2px', backgroundColor: '#e2e8f0', overflow: 'hidden', width: '60px', marginTop: '4px' }}>
                    <div style={{ height: '100%', width: '68%', borderRadius: '2px', background: 'linear-gradient(90deg, #ef4444, #f59e0b, #10b981)' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Metadata pills */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '14px', borderTop: '1px solid var(--border-color)', paddingTop: '10px', flexWrap: 'wrap' }}>
            {!isUnlocked ? (
              <>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Preview based on the first {applicant.day} days of the process
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Behavioral observation only
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Participation may vary and is reflected in the report
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Reduced participation is part of the behavioral pattern
                </span>
              </>
            ) : (
              <>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Based on 7 days of participation
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Behavioral observation only
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#7c3aed' }}>●</span> Final decision remains with the landlord
                </span>
              </>
            )}
          </div>
        </div>

        {/* Tabs Menu */}
        <div style={{ padding: '0 28px', display: 'flex', gap: '4px', borderBottom: '1px solid var(--border-color)', marginBottom: '20px', overflowX: 'auto' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: '12px 16px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: activeTab === tab ? 700 : 500, color: activeTab === tab ? '#0a57e3' : 'var(--text-secondary)', borderBottom: activeTab === tab ? '2.5px solid #0a57e3' : '2.5px solid transparent', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div style={{ padding: '0 28px 28px', textAlign: 'left' }}>

          {/* SUMMARY TAB */}
          {activeTab === 'Summary' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Decision Summary */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <LuTriangleAlert style={{ color: '#f59e0b', fontSize: '1.1rem' }} />
                    <strong style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>Decision Summary</strong>
                  </div>
                  <div style={{ fontSize: '0.825rem', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                    Decision: <span style={{ color: '#7c3aed', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#f5f3ff' }}>Requires Attention</span>
                  </div>
                  {[
                    { icon: '●', color: '#10b981', text: 'Consistent: participation in tasks and activities.' },
                    { icon: '⚠', color: '#f59e0b', text: 'Frequent short, unserious responses.' },
                    { icon: '●', color: '#f59e0b', text: 'Self-oriented behavior detected in selected responses.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      <span style={{ color: item.color, flexShrink: 0, fontWeight: 'bold' }}>{item.icon}</span> {item.text}
                    </div>
                  ))}
                </div>

                {/* Final Recommendation */}
                <div style={{ border: '1px solid #fde68a', borderRadius: '12px', padding: '18px', backgroundColor: '#fffbeb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <LuTriangleAlert style={{ color: '#f59e0b', fontSize: '1.1rem' }} />
                    <strong style={{ fontSize: '0.925rem', color: '#92400e' }}>Final Recommendation</strong>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.725rem', fontWeight: 800, padding: '3px 10px', borderRadius: '20px', backgroundColor: '#7c3aed', color: '#ffffff' }}>Decision: Requires Attention</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#92400e', marginBottom: '6px', fontWeight: 500 }}>Pattern Type: <span style={{ fontWeight: 700 }}>Inconsistent</span></div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '10px' }}>
                    Behavior is <strong>Inconsistent</strong> — showing <strong>both cooperative</strong> and low-effort responses.
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    This report adds a <strong>behavioral layer</strong> to your existing screening process. Use it alongside background and credit checks to make <strong>a complete decision</strong>.
                  </div>
                </div>

                {/* What's Stable */}
                <div style={{ border: '1px solid #d1fae5', borderRadius: '12px', padding: '16px 18px', backgroundColor: '#f0fdf4' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#065f46', marginBottom: '10px' }}>✓ What&apos;s Stable</div>
                  {['Good participation across most days', 'Responded on time in early stages'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#065f46', marginBottom: '6px' }}>
                      <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span> {t}
                    </div>
                  ))}
                </div>

                {/* What Needs Attention */}
                <div style={{ border: '1px solid #fde68a', borderRadius: '12px', padding: '16px 18px', backgroundColor: '#fffbeb' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#92400e', marginBottom: '10px' }}>⚠ What Needs Attention</div>
                  {['Multiple low-effort responses.', 'Inconsistent engagement toward later days.'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#92400e', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 'bold' }}>⚠</span> {t}
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Timeline Snapshot</div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>How the behavior evolved over 7 days</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {timelineDays.map((d) => (
                      <div key={d.day} style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Day {d.day}</div>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '50%', margin: '0 auto',
                          backgroundColor: d.status === 'ok' ? '#10b981' : d.status === 'warn' ? '#f59e0b' : '#ef4444',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: '#ffffff', fontWeight: 800
                        }}>
                          {d.status === 'ok' ? '✓' : d.status === 'warn' ? '!' : '✗'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Risk Insight */}
                <div style={{ border: '1px solid #fed7aa', borderRadius: '12px', padding: '16px', backgroundColor: '#fff7ed' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: '#ea580c', fontSize: '1.2rem', display: 'flex' }}><LuTriangleAlert /></span>
                    <strong style={{ fontSize: '0.875rem', color: '#c2410c' }}>Key Risk Insight</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#c2410c', lineHeight: '1.5', margin: 0 }}>
                    This applicant shows moderate <strong>inconsistency</strong> with signs of selective cooperation.
                  </p>
                </div>

                {/* Download */}
                <button
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', borderRadius: '10px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
                  onClick={() => alert(`Sandbox: Download PDF Report for ${applicant.name}`)}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <LuDownload /> Download PDF Report
                </button>
              </div>

              {/* Right Side: Summary Scale */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>Summary Scale</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Manageable', desc: 'Consistent and cooperative behavior' },
                    { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Requires Attention', desc: 'Mixed or inconsistent behavior' },
                    { icon: <LuCircleAlert />, color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Elevated Risk', desc: 'Concerning behavioral patterns' }
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: s.bg, border: `1px solid ${s.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: s.color, fontSize: '1.2rem', display: 'flex' }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: s.color }}>{s.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: '1.3' }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', padding: '14px', borderRadius: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontSize: '1rem', color: '#7c3aed', display: 'flex', marginTop: '1px' }}>🔷</span>
                  <span style={{ fontSize: '0.775rem', color: '#7c3aed', lineHeight: '1.45', fontWeight: 500 }}>
                    This category is factored into the <strong>final summary decision</strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* RESPONSIVENESS TAB */}
          {activeTab === 'Responsiveness' && (
            <div>
              {/* Header Status Bar */}
              <div style={{ padding: '16px 20px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>Responsiveness:</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#fff7ed', color: '#ea580c', border: '1px solid #ffedd5' }}>Moderate</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Contribution to Decision: <strong style={{ color: '#ea580c' }}>Medium Impact</strong>
                </div>
              </div>

              {/* Progress and Metrics Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#f5f3ff', padding: '16px 20px', borderRadius: '12px', border: '1px solid #ddd6fe' }}>
                  <div style={{ fontSize: '0.725rem', color: '#7c3aed', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Average response</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '6px 0 4px' }}>1h 37m</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px' }}>
                    <span>Day 1</span> <span>Day 2</span> <span style={{ color: '#7c3aed' }}>🕐</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#f5f3ff', padding: '16px 20px', borderRadius: '12px', border: '1px solid #ddd6fe' }}>
                  <div style={{ fontSize: '0.725rem', color: '#7c3aed', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>On-time %</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '6px 0 4px' }}>77%</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span>Day 3 ⚠️</span> <span>Day 4 🔒</span> <span>Day 5 🔒</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#f5f3ff', padding: '16px 20px', borderRadius: '12px', border: '1px solid #ddd6fe' }}>
                  <div style={{ fontSize: '0.725rem', color: '#7c3aed', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Response Quality</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#7c3aed', margin: '6px 0 4px' }}>Mixed</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px' }}>
                    <span>Day 6 🔒</span> <span>Day 7 🔒</span>
                  </div>
                </div>
              </div>

              {/* Progress bar info */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>Progress</span>
                  <span>{applicant.day || 3}/7 days</span>
                </div>
                <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(applicant.day / 7) * 100}%`, backgroundColor: '#7c3aed', borderRadius: '4px' }} />
                </div>
              </div>

              {/* Yellow Alert banner */}
              <div style={{ padding: '14px 18px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.775rem', color: '#b45309', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>⚠️</span> Delayed responses on multiple days
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>⚠️</span> Required reminder to complete task
                </div>
              </div>

              {/* Cover locked block or Unlocked details */}
              {!isUnlocked ? (
                <div style={{ position: 'relative', border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden' }}>
                  
                  {/* Blurred mock content in background */}
                  <div style={{ padding: '24px', opacity: 0.15, filter: 'blur(5px)', pointerEvents: 'none', userSelect: 'none' }}>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '10px' }}>Behavioral Integrity</h4>
                    <p style={{ fontSize: '0.8rem', marginBottom: '15px' }}>Consistent information even when probed or rephrased across all checks.</p>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '10px' }}>Consistency Pattern</h4>
                    <p style={{ fontSize: '0.8rem', marginBottom: '15px' }}>Erratic or declining engagement. Signals unreliable behavioral patterns.</p>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '10px' }}>Final Recommendation</h4>
                    <p style={{ fontSize: '0.8rem' }}>Requires extreme attention. Recommended further face-to-face checking.</p>
                  </div>

                  {/* Absolute Centered Lock Block */}
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px 24px', textAlign: 'center', zIndex: 10 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '14px' }}>
                      <LuLock />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>See the full 7-day behavioral pattern</h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '380px' }}>Understand how the applicant behaves over time</p>
                    
                    <button
                      onClick={() => setIsUnlocked(true)}
                      style={{ backgroundColor: '#0a57e3', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(10,87,227,0.2)', transition: 'background-color 0.15s', marginBottom: '18px', width: '220px' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#024ec4'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0a57e3'}
                    >
                      Unlock Full Report
                    </button>

                    <div style={{ textAlign: 'left', width: '100%', maxWidth: '240px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Full consistency pattern</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Behavioral risk signals</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Final recommendation</div>
                    </div>

                    <button
                      disabled
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '220px', padding: '10px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#f1f5f9', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700, cursor: 'not-allowed' }}
                    >
                      <LuDownload /> Download Full Report (PDF)
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }} className="animate-fade-in">
                  {/* Left Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Observed Signals */}
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>Observed Signals</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                          { title: 'Delayed Responses', desc: 'Multiple responses completed past the standard 4-hour active window.' },
                          { title: 'Reminder Dependencies', desc: 'Required automated system triggers on Day 3, 5, and 7 to prompt engagement.' },
                          { title: 'Participation Decline', desc: 'Engagement rates drop rapidly after initial Day 2 cooperative phase.' }
                        ].map((sig, i) => (
                          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.8rem' }}>
                            <span style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '1rem', marginTop: '-2px' }}>●</span>
                            <div>
                              <strong style={{ color: 'var(--text-primary)', display: 'block' }}>{sig.title}</strong>
                              <span style={{ color: 'var(--text-secondary)', marginTop: '2px', display: 'block', lineHeight: '1.4' }}>{sig.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example Log */}
                    <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Example Behavior Log</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                          { day: 'Day 1', text: 'Immediate and complete response' },
                          { day: 'Day 3', text: 'Response delayed with reduced detail' },
                          { day: 'Day 5', text: 'Minimal answer compared to earlier responses' },
                          { day: 'Day 7', text: 'Required reminder to complete task' }
                        ].map((ex, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            <span style={{ fontSize: '0.675rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f5f3ff', color: '#7c3aed', minWidth: '45px', textAlign: 'center' }}>{ex.day}</span>
                            <span>{ex.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Scale and Decision */}
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Responsiveness Scale</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Manageable', desc: 'Consistent behavior across all days', sub: '→ Predictable and stable engagement' },
                        { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Requires Attention', desc: 'Fluctuating participation or effort', sub: '→ indicates inconsistency over time.' },
                        { icon: <LuCircleAlert />, color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Elevated Risk', desc: 'Erratic or declining engagement', sub: '→ Signals unreliable behavioral pattern' }
                      ].map((s, i) => (
                        <div key={i} style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ color: s.color, fontSize: '1rem', display: 'flex' }}>{s.icon}</span>
                            <strong style={{ fontSize: '0.825rem', color: s.color }}>{s.label}</strong>
                          </div>
                          <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{s.desc}</div>
                          <div style={{ fontSize: '0.7rem', color: s.color, marginTop: '2px', fontWeight: 600 }}>{s.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* RESPONSE QUALITY TAB */}
          {activeTab === 'Response Quality' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }} className="animate-fade-in">
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Yellow Status Banner */}
                <div style={{ padding: '16px 20px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#f59e0b', display: 'flex' }}><LuTriangleAlert /></span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>Response Quality: Requires Attention</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Pattern: Inconsistent</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#fff7ed', color: '#ea580c', border: '1px solid #ffedd5' }}>71%</span>
                  </div>
                </div>
                
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '4px' }}>
                  Contribution to Decision: <strong style={{ color: '#ea580c' }}>Medium Impact</strong>
                </div>

                {/* Observed Signals */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0 0' }}>Observed Signals</h4>
                  {[
                    { label: 'Low-effort responses', metric: '24%', desc: 'The applicant skipped open steps and gave 2-word minimal answers.' },
                    { label: 'Irrelevant responses detected', metric: '(3)', desc: 'The applicant gave answers that did not directly address the question.' },
                    { label: 'Very short responses', metric: '(11)', desc: 'Answers were minimal (1-2 words) showing low effort or limited engagement.' }
                  ].map((sig, i) => (
                    <div key={i} style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#fff5f5', border: '1px solid #fca5a5', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#ef4444' }}>• {sig.label}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ef4444', backgroundColor: '#ffe4e6', padding: '1px 8px', borderRadius: '4px' }}>{sig.metric}</span>
                      </div>
                      <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>{sig.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Response Quality Insight */}
                <div style={{ border: '1px solid #fde68a', borderRadius: '12px', padding: '16px', backgroundColor: '#fffbeb' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#ea580c', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>⚠️</span>
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: '#92400e', display: 'block', marginBottom: '2px' }}>Response Quality Insight</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.45', margin: 0 }}>
                        The applicant shows <strong>inconsistent response quality</strong> — alternating between thoughtful and low-effort replies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Collapsible View Example Behavior Accordion */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
                  <div 
                    onClick={() => setExampleExpanded(!exampleExpanded)}
                    style={{ padding: '14px 18px', backgroundColor: '#fffbeb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', borderBottom: exampleExpanded ? '1px solid var(--border-color)' : 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#92400e' }}>
                      <span style={{ display: 'flex' }}><LuEye /></span> View Example Behavior
                    </div>
                    <span style={{ display: 'flex', color: '#92400e' }}>
                      {exampleExpanded ? <LuChevronDown /> : <LuChevronDown style={{ transform: 'rotate(180deg)' }} />}
                    </span>
                  </div>
                  
                  {exampleExpanded && (
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#ffffff' }} className="animate-fade-in">
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>●</span>
                        <span>&quot;OK&quot; (Day 3)</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>●</span>
                        <span>&quot;Yes&quot; — without explanation when details were requested</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>●</span>
                        <span>Detailed answer on Day 1 showing cooperation and clarity</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>Response Quality Scale</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Reliable', desc: 'Mostly thoughtful, relevant replies' },
                    { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Mixed', desc: 'Inconsistent response quality' },
                    { icon: <LuCircleAlert />, color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Low Quality', desc: 'Frequent low-effort or irrelevant replies' }
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: s.bg, border: `1px solid ${s.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: s.color, fontSize: '1.2rem', display: 'flex' }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: s.color }}>{s.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: '1.3' }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '16px', padding: '14px', borderRadius: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontSize: '1rem', color: '#7c3aed', display: 'flex', marginTop: '1px' }}>🔷</span>
                  <span style={{ fontSize: '0.775rem', color: '#7c3aed', lineHeight: '1.45', fontWeight: 500 }}>
                    This category is factored into the <strong>final summary decision</strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* BEHAVIORAL INTEGRITY TAB */}
          {activeTab === 'Behavioral Integrity' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }} className="animate-fade-in">
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Green Status Banner */}
                <div style={{ padding: '16px 20px', backgroundColor: '#e6fbf3', border: '1px solid #a7f3d0', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#10b981', display: 'flex' }}><LuCircleCheck /></span>
                    <strong style={{ fontSize: '0.875rem', color: '#065f46' }}>Behavioral Integrity: Manageable</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#065f46' }}>Pattern: Consistent - 101%</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0' }}>100%</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '4px' }}>
                  Contribution to Decision: <strong>Low Impact</strong>
                </div>

                <div style={{ display: 'flex', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span>&gt;</span> This category is factored into the <span style={{ color: '#7c3aed', fontWeight: 600 }}>final summary decision</span>
                </div>

                {/* Observed Signals */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0 0' }}>Observed Signals</h4>
                  {[
                    { title: 'Honest Responses', desc: 'No signs of deception detected or discrepancies found.' },
                    { title: 'Stable Statements', desc: 'Consistent information even when probed or rephrased.' },
                    { title: 'Aligned Behavior', desc: 'Responses matched the situation, showing reasonable alignment.' }
                  ].map((sig, i) => (
                    <div key={i} style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '0.9rem' }}><LuCircleCheck /></span> {sig.title}
                      </span>
                      <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.45', paddingLeft: '20px' }}>{sig.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Example Behavior Log */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>Example Behavior</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { day: 'Day 2', text: 'Applicant provided consistent details when asked the same question in a different way.' },
                      { day: 'Day 4', text: 'Followed instructions exactly without attempting to bypass or modify requirements.' },
                      { day: 'Day 6', text: 'Response aligned with earlier statements, showing no contradictions.' }
                    ].map((ex, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <span style={{ fontSize: '0.675rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f5f3ff', color: '#7c3aed', flexShrink: 0 }}>{ex.day}</span>
                        <span style={{ lineHeight: '1.4' }}>{ex.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>Behavioral Integrity Scale</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Manageable', desc: 'Honest, consistent, aligned responses' },
                    { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Requires Attention', desc: 'May indicate misunderstanding or unclear interpretation' },
                    { icon: <LuCircleAlert />, color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Elevated Risk', desc: 'Contradictory or manipulative patterns' }
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: s.bg, border: `1px solid ${s.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: s.color, fontSize: '1.2rem', display: 'flex' }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: s.color }}>{s.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: '1.3' }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '16px', padding: '14px', borderRadius: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontSize: '1rem', color: '#7c3aed', display: 'flex', marginTop: '1px' }}>🔷</span>
                  <span style={{ fontSize: '0.775rem', color: '#7c3aed', lineHeight: '1.45', fontWeight: 500 }}>
                    This category is factored into the <strong>final summary decision</strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* CONSISTENCY TAB */}
          {activeTab === 'Consistency' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }} className="animate-fade-in">
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Yellow Banner Status */}
                <div style={{ padding: '16px 20px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.1rem', color: '#f59e0b', display: 'flex' }}><LuTriangleAlert /></span>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>Consistency: Requires Attention</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Pattern: Variable</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0' }}>100%</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '4px' }}>
                  Contribution to Decision: <strong style={{ color: '#ea580c' }}>Medium Impact</strong>
                </div>

                <div style={{ display: 'flex', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span>&gt;</span> This category is factored into the <span style={{ color: '#7c3aed', fontWeight: 600 }}>final summary decision</span>
                </div>

                {/* Behavioral Pattern Over Time (Connecting dots timeline) */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '24px' }}>Behavioral Pattern Over Time</h4>
                  
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                    {/* Horizontal connector line */}
                    <div style={{ position: 'absolute', left: '16px', right: '16px', top: '16px', height: '2px', backgroundColor: '#e2e8f0', zIndex: 1 }} />
                    
                    {[
                      { day: 'Day 1', status: 'ok' },
                      { day: 'Day 2', status: 'ok' },
                      { day: 'Day 3', status: 'ok' },
                      { day: 'Day 4', status: 'warn' },
                      { day: 'Day 5', status: 'fail' },
                      { day: 'Day 6', status: 'fail' },
                      { day: 'Day 7', status: 'fail' }
                    ].map((d, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 5, position: 'relative' }}>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '50%',
                          backgroundColor: d.status === 'ok' ? '#10b981' : d.status === 'warn' ? '#f59e0b' : '#ef4444',
                          color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800,
                          boxShadow: '0 4px 6px rgba(0,0,0,0.08)'
                        }}>
                          {d.status === 'ok' ? '✓' : d.status === 'warn' ? '!' : '✗'}
                        </div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 600 }}>{d.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consistency Insight */}
                <div style={{ border: '1px solid #fca5a5', borderRadius: '12px', padding: '16px', backgroundColor: '#fff5f5', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ef4444', fontSize: '1.1rem', display: 'flex' }}><LuTriangleAlert /></span>
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: '#b91c1c', display: 'block', marginBottom: '2px' }}>Consistency Insight</strong>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.45', margin: 0 }}>
                      The applicant showed <strong>strong engagement early</strong>, followed by <strong>decreasing consistency</strong> and effort over time.
                    </p>
                  </div>
                </div>

                {/* View Example Behavior Log List */}
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>View Example Behavior</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { text: 'Immediate and complete response', color: '#10b981', bg: '#e6fbf3', label: 'Day 1' },
                      { text: 'Response delayed with reduced detail', color: '#10b981', bg: '#e6fbf3', label: 'Day 3' },
                      { text: 'Minimal answer compared to earlier responses', color: '#ef4444', bg: '#fff5f5', label: 'Day 5' },
                      { text: 'Required reminder to complete task', color: '#ef4444', bg: '#fff5f5', label: 'Day 7' }
                    ].map((ex, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '8px', backgroundColor: ex.bg }}>
                        <span style={{ fontSize: '0.725rem', fontWeight: 800, color: ex.color, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#ffffff', minWidth: '42px', textAlign: 'center', display: 'inline-block' }}>{ex.label}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{ex.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>Consistency Scale</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: <LuCircleCheck />, color: '#10b981', bg: '#e6fbf3', border: '#a7f3d0', label: 'Manageable', desc: 'Consistent behavior across all days', sub: '→ Predictable and stable engagement' },
                    { icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a', label: 'Requires Attention', desc: 'Fluctuating participation or effort', sub: '→ indicates inconsistency over time.' },
                    { icon: <LuCircleAlert />, color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', label: 'Elevated Risk', desc: 'Erratic or declining engagement', sub: '→ Signals unreliable behavioral pattern' }
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ color: s.color, fontSize: '1rem', display: 'flex' }}>{s.icon}</span>
                        <strong style={{ fontSize: '0.825rem', color: s.color }}>{s.label}</strong>
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{s.desc}</div>
                      <div style={{ fontSize: '0.7rem', color: s.color, marginTop: '2px', fontWeight: 600 }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '16px', padding: '14px', borderRadius: '10px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontSize: '1rem', color: '#7c3aed', display: 'flex', marginTop: '1px' }}>🔷</span>
                  <span style={{ fontSize: '0.775rem', color: '#7c3aed', lineHeight: '1.45', fontWeight: 500 }}>
                    This category is factored into the <strong>final summary decision</strong>
                  </span>
                </div>
              </div>
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
