'use client';

import React, { useState } from 'react';
import {
  LuFileText,
  LuDownload,
  LuCalendar,
  LuCircleCheck,
  LuActivity,
  LuHouse,
  LuTriangleAlert,
  LuChevronRight
} from 'react-icons/lu';

const reports = [
  {
    title: 'Monthly Behavioral Summary – May 2026',
    type: 'Behavioral',
    period: 'May 1–31, 2026',
    generated: 'Jun 1, 2026',
    status: 'Ready',
    size: '2.4 MB',
    color: 'var(--brand-color)',
    bg: 'var(--brand-light)'
  },
  {
    title: 'Pre-Tenancy Completion Report – Q2 2026',
    type: 'Pre-Tenancy',
    period: 'Apr 1 – Jun 30, 2026',
    generated: 'Jun 3, 2026',
    status: 'Ready',
    size: '1.1 MB',
    color: 'var(--color-admin)',
    bg: 'var(--color-admin-light)'
  },
  {
    title: 'Integrity Score Trends – April 2026',
    type: 'Score Trends',
    period: 'Apr 1–30, 2026',
    generated: 'May 2, 2026',
    status: 'Ready',
    size: '0.8 MB',
    color: 'var(--color-user)',
    bg: 'var(--color-user-light)'
  },
  {
    title: 'Early Warning Incidents – March 2026',
    type: 'Incidents',
    period: 'Mar 1–31, 2026',
    generated: 'Apr 3, 2026',
    status: 'Ready',
    size: '0.5 MB',
    color: '#ef4444',
    bg: 'var(--color-alert-light)'
  },
  {
    title: 'Full Portfolio Report – Q1 2026',
    type: 'Portfolio',
    period: 'Jan 1 – Mar 31, 2026',
    generated: 'Apr 5, 2026',
    status: 'Archived',
    size: '4.2 MB',
    color: 'var(--text-muted)',
    bg: 'var(--bg-primary)'
  }
];

const chartData = [
  { month: 'Jan', score: 72 },
  { month: 'Feb', score: 78 },
  { month: 'Mar', score: 74 },
  { month: 'Apr', score: 81 },
  { month: 'May', score: 76 },
  { month: 'Jun', score: 85 }
];

export default function LandlordReportsPage() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filtered = reports.filter(r => selectedType === 'all' || r.type.toLowerCase().includes(selectedType.toLowerCase()));

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Reports</h1>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Download and review behavioral summaries for your entire portfolio
            </p>
          </div>
          <button
            className="premium-btn premium-btn-primary"
            style={{ '--btn-color': 'var(--color-admin)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' } as React.CSSProperties}
            onClick={() => alert('Sandbox: Generate new custom report')}
          >
            <LuFileText /> Generate Report
          </button>
        </div>

        {/* Score Trend Chart Card */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 32px', boxShadow: 'var(--shadow-sm)', marginBottom: '32px', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Portfolio Integrity Score Trend</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Average monthly score across all monitored tenants</p>
            </div>
            <span style={{ fontSize: '0.675rem', padding: '4px 10px', borderRadius: '6px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)', fontWeight: 700 }}>↑ +9 pts this month</span>
          </div>

          {/* Chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '120px' }}>
            {chartData.map((d, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: '6px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--brand-color)' }}>{d.score}</span>
                <div style={{ width: '100%', borderRadius: '4px 4px 0 0', backgroundColor: i === chartData.length - 1 ? 'var(--brand-color)' : 'var(--border-color)', height: `${(d.score / 100) * 80}px`, transition: 'height 0.4s ease' }} />
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['all', 'behavioral', 'pre-tenancy', 'incidents', 'portfolio'].map((f) => (
            <button
              key={f}
              onClick={() => setSelectedType(f)}
              style={{
                padding: '6px 14px',
                borderRadius: '7px',
                border: '1px solid',
                borderColor: selectedType === f ? 'var(--color-admin)' : 'var(--border-color)',
                backgroundColor: selectedType === f ? 'var(--color-admin)' : 'var(--bg-secondary)',
                color: selectedType === f ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.775rem',
                fontWeight: 700,
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {f === 'all' ? 'All Reports' : f}
            </button>
          ))}
        </div>

        {/* Reports List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map((r, i) => (
            <div
              key={i}
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px 24px', boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: r.bg, color: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  <LuFileText />
                </div>
                <div>
                  <strong style={{ fontSize: '0.925rem', color: r.status === 'Archived' ? 'var(--text-secondary)' : 'var(--text-primary)', display: 'block' }}>{r.title}</strong>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                    <span style={{ fontSize: '0.675rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: r.bg, color: r.color, fontWeight: 700 }}>{r.type}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <LuCalendar style={{ fontSize: '0.75rem' }} /> {r.period}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{r.size}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Generated</span>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{r.generated}</span>
                </div>
                <button
                  className={`premium-btn ${r.status === 'Archived' ? 'premium-btn-secondary' : 'premium-btn-primary'}`}
                  style={{ '--btn-color': r.color, padding: '8px 16px', borderRadius: '7px', fontSize: '0.775rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' } as React.CSSProperties}
                  onClick={() => alert(`Sandbox: Download "${r.title}"`)}
                >
                  <LuDownload /> {r.status === 'Archived' ? 'Archive' : 'Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}
