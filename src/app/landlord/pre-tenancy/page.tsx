'use client';

import React, { useState } from 'react';
import { LuSearch, LuCalendar, LuRefreshCw, LuEllipsisVertical } from 'react-icons/lu';

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

export default function LandlordPreTenancyPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = applicants.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.property.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
          <LuCalendar style={{ fontSize: '0.95rem' }} /> Last 30 Days
          <span style={{ marginLeft: '4px', fontSize: '0.75rem' }}>▾</span>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {/* Table Head */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.8fr 1.5fr 1.8fr 1.2fr 40px', padding: '12px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)' }}>
          {['APPLICANT', 'PROPERTY', 'PROGRESS', 'PARTICIPATION LEVEL', 'BEHAVIOURAL SIGNAL', 'HISTORY', ''].map((h, i) => (
            <div key={i} style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: i === 5 ? 'center' : 'left' }}>{h}</div>
          ))}
        </div>

        {/* Rows */}
        {filtered.map((a, i) => (
          <div
            key={i}
            style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.8fr 1.5fr 1.8fr 1.2fr 40px', alignItems: 'center', padding: '16px 24px', borderBottom: i < filtered.length - 1 ? '1px solid var(--border-color)' : 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fafbfc'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {/* Applicant */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.775rem', flexShrink: 0 }}>
                {a.initials}
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{a.name}</div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>{a.unit}</div>
              </div>
            </div>

            {/* Property */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{a.property}</div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>{a.propUnit}</div>
            </div>

            {/* Progress */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                {a.progress === 100 ? 'Complete' : `Day ${a.day} of ${a.totalDays}`}
              </div>
              <div style={{ height: '6px', borderRadius: '3px', backgroundColor: '#e2e8f0', overflow: 'hidden', width: '120px' }}>
                <div style={{ height: '100%', width: `${a.progress}%`, borderRadius: '3px', backgroundColor: a.progress === 100 ? '#10b981' : a.trendUp ? '#0a57e3' : '#f59e0b', transition: 'width 0.4s' }} />
              </div>
            </div>

            {/* Participation Level */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--text-primary)' }}>{a.participation}%</div>
              <div style={{ fontSize: '0.725rem', marginTop: '2px', color: a.trendUp ? '#10b981' : '#ef4444', fontWeight: 600 }}>{a.trend}</div>
            </div>

            {/* Behavioural Signal */}
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.675rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', backgroundColor: a.signalBg, color: a.signalColor, letterSpacing: '0.04em' }}>
                {a.signal}
              </span>
            </div>

            {/* History */}
            <div style={{ textAlign: 'center' }}>
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0a57e3', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px' }}
                onClick={() => alert(`Sandbox: View progress for ${a.name}`)}
              >
                <LuRefreshCw style={{ fontSize: '0.8rem' }} /> View Progress
              </button>
            </div>

            {/* More */}
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
          <button
            key={p}
            onClick={() => setPage(p)}
            style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid', borderColor: page === p ? '#0a57e3' : 'var(--border-color)', backgroundColor: page === p ? '#0a57e3' : '#ffffff', color: page === p ? '#ffffff' : 'var(--text-secondary)', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}
          >
            {p}
          </button>
        ))}
        <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer' }}
          onClick={() => setPage(Math.min(2, page + 1))}>
          ›
        </button>
      </div>
    </div>
  );
}
