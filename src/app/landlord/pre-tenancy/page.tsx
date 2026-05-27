'use client';

import React, { useState } from 'react';
import {
  LuClock,
  LuPlus,
  LuCircleCheck,
  LuChevronRight,
  LuCalendar,
  LuUserPlus,
  LuInfo,
  LuActivity,
  LuHouse,
  LuTriangleAlert
} from 'react-icons/lu';

const applicants = [
  {
    name: 'Jordan Mitchell',
    property: 'Maple Heights A-12',
    day: 3,
    totalDays: 7,
    score: 82,
    status: 'Active',
    color: '#0a57e3',
    bg: '#eff6ff',
    avatar: 'JM',
    tasks: ['Morning Routine ✓', 'Evening Check-In ✓', 'Weekend Engagement ✓'],
    lastActive: '2 hours ago'
  },
  {
    name: 'Priya Nair',
    property: 'Riverside Apt 402',
    day: 5,
    totalDays: 7,
    score: 91,
    status: 'Active',
    color: '#10b981',
    bg: '#e6fbf3',
    avatar: 'PN',
    tasks: ['Morning Routine ✓', 'Evening Check-In ✓', 'Weekend Engagement ✓'],
    lastActive: '30 minutes ago'
  },
  {
    name: 'Carlos Rivera',
    property: 'Grand Plaza 6A',
    day: 7,
    totalDays: 7,
    score: 76,
    status: 'Completed',
    color: '#10b981',
    bg: '#e6fbf3',
    avatar: 'CR',
    tasks: ['Morning Routine ✓', 'Evening Check-In ✓', 'Weekend Engagement ✓'],
    lastActive: 'Completed'
  },
  {
    name: 'Dana Weiss',
    property: 'Oak Ridge Tower 3B',
    day: 2,
    totalDays: 7,
    score: 58,
    status: 'At Risk',
    color: '#ef4444',
    bg: '#fff5f5',
    avatar: 'DW',
    tasks: ['Morning Routine ✗', 'Evening Check-In ✓', 'Weekend Engagement ✗'],
    lastActive: '1 day ago'
  }
];

export default function LandlordPreTenancyPage() {
  const [selectedApplicant, setSelectedApplicant] = useState<typeof applicants[0] | null>(null);

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
              Pre-Tenancy
            </h1>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Monitor applicants completing their 7-day behavioral assessment cycle
            </p>
          </div>
          <button
            className="premium-btn premium-btn-primary"
            style={{ '--btn-color': '#7c3aed', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' } as React.CSSProperties}
            onClick={() => alert('Sandbox: Add new applicant to pre-tenancy')}
          >
            <LuUserPlus /> Add Applicant
          </button>
        </div>

        {/* 4 Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {[
            { label: 'Active Applicants', value: '3', sub: '+1 this week', color: '#0a57e3', bg: '#eff6ff', icon: <LuActivity /> },
            { label: 'Completed This Week', value: '1', sub: 'Ready to select', color: '#10b981', bg: '#e6fbf3', icon: <LuCircleCheck /> },
            { label: 'At Risk', value: '1', sub: 'Needs attention', color: '#ef4444', bg: '#fff5f5', icon: <LuTriangleAlert /> },
            { label: 'Avg. Integrity Score', value: '76%', sub: 'Across all active', color: '#7c3aed', bg: '#f5f3ff', icon: <LuClock /> }
          ].map((card, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{card.label}</span>
                <span style={{ fontSize: '1.1rem', color: card.color, display: 'flex', padding: '6px', backgroundColor: card.bg, borderRadius: '8px' }}>{card.icon}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{card.value}</h2>
              <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{card.sub}</span>
            </div>
          ))}
        </div>

        {/* Main Grid: Applicant Cards + Detail */}
        <div style={{ display: 'grid', gridTemplateColumns: selectedApplicant ? '1fr 1.4fr' : '1fr', gap: '24px' }}>

          {/* Applicant List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {applicants.map((app, i) => (
              <div
                key={i}
                onClick={() => setSelectedApplicant(app)}
                style={{
                  backgroundColor: '#ffffff',
                  border: `1.5px solid ${selectedApplicant?.name === app.name ? app.color : 'var(--border-color)'}`,
                  borderRadius: '12px',
                  padding: '20px 24px',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: app.bg, color: app.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', border: `2px solid ${app.color}30` }}>
                      {app.avatar}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{app.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <LuHouse style={{ fontSize: '0.8rem' }} /> {app.property}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.675rem', padding: '3px 10px', borderRadius: '6px', backgroundColor: app.bg, color: app.color, fontWeight: 700 }}>
                    {app.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.725rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Day {app.day} of {app.totalDays}</span>
                    <span style={{ color: app.color, fontWeight: 700 }}>Integrity Score: {app.score}%</span>
                  </div>
                  <div style={{ height: '6px', borderRadius: '3px', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(app.day / app.totalDays) * 100}%`, borderRadius: '3px', backgroundColor: app.color, transition: 'width 0.4s ease' }} />
                  </div>
                  <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Last active: {app.lastActive}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          {selectedApplicant && (
            <div style={{ backgroundColor: '#ffffff', border: `2px solid ${selectedApplicant.color}30`, borderTop: `4px solid ${selectedApplicant.color}`, borderRadius: '0 0 12px 12px', padding: '28px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', position: 'sticky', top: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selectedApplicant.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{selectedApplicant.property}</span>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', color: 'var(--text-muted)' }} onClick={() => setSelectedApplicant(null)}>×</button>
              </div>

              {/* Score Ring + Status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: selectedApplicant.bg, borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', border: `4px solid ${selectedApplicant.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <strong style={{ fontSize: '1.25rem', color: selectedApplicant.color, fontWeight: 800 }}>{selectedApplicant.score}</strong>
                  <span style={{ fontSize: '0.6rem', color: selectedApplicant.color, fontWeight: 600 }}>SCORE</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Integrity Score</h4>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Day {selectedApplicant.day} of {selectedApplicant.totalDays} completed</p>
                  <span style={{ fontSize: '0.675rem', padding: '3px 10px', borderRadius: '6px', backgroundColor: `${selectedApplicant.color}20`, color: selectedApplicant.color, fontWeight: 700, display: 'inline-block', marginTop: '6px' }}>{selectedApplicant.status}</span>
                </div>
              </div>

              {/* Task Completion */}
              <h5 style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Task Completion Log</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {selectedApplicant.tasks.map((task, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                    <LuCircleCheck style={{ color: '#10b981', fontSize: '1rem' }} />
                    {task}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="premium-btn premium-btn-primary" style={{ '--btn-color': '#7c3aed', flex: 1, padding: '10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 } as React.CSSProperties}
                  onClick={() => alert(`Sandbox: View full report for ${selectedApplicant.name}`)}>
                  Full Report <LuChevronRight style={{ display: 'inline' }} />
                </button>
                <button className="premium-btn premium-btn-secondary" style={{ padding: '10px 16px', borderRadius: '8px', fontSize: '0.8rem' }}
                  onClick={() => alert(`Sandbox: Send message to ${selectedApplicant.name}`)}>
                  Message
                </button>
              </div>
            </div>
          )}
        </div>

    </div>
  );
}
