'use client';

import React, { useState } from 'react';

interface CheckInCycle {
  id: string;
  name: string;
  window: string;
  daysCompleted: number;
  totalDays: number;
  status: 'IN_PROGRESS' | 'COMPLETED';
}

export default function CheckInsPage() {
  const [cycles, setCycles] = useState<CheckInCycle[]>([
    { id: 'cyc_005', name: 'May 2024', window: 'May 1 – May 31, 2024', daysCompleted: 3, totalDays: 7, status: 'IN_PROGRESS' },
    { id: 'cyc_004', name: 'April 2024', window: 'Apr 1 – Apr 30, 2024', daysCompleted: 7, totalDays: 7, status: 'COMPLETED' },
    { id: 'cyc_003', name: 'March 2024', window: 'Mar 1 – Mar 31, 2024', daysCompleted: 7, totalDays: 7, status: 'COMPLETED' },
    { id: 'cyc_002', name: 'February 2024', window: 'Feb 1 – Feb 29, 2024', daysCompleted: 7, totalDays: 7, status: 'COMPLETED' },
    { id: 'cyc_001', name: 'January 2024', window: 'Jan 1 – Jan 31, 2024', daysCompleted: 7, totalDays: 7, status: 'COMPLETED' },
  ]);

  const [activeTab, setActiveTab] = useState<'ALL' | 'UPCOMING'>('ALL');

  const handleContinueCheckIn = (cycleId: string) => {
    setCycles(prev =>
      prev.map(c => {
        if (c.id === cycleId && c.daysCompleted < c.totalDays) {
          const nextDays = c.daysCompleted + 1;
          const status = nextDays === c.totalDays ? 'COMPLETED' : 'IN_PROGRESS';
          return { ...c, daysCompleted: nextDays, status };
        }
        return c;
      })
    );
  };

  const currentCycle = cycles[0];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            My Check-Ins
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            View your past check-ins and keep up with your monthly participation.
          </p>
        </div>

        {/* Current Cycle Ticker */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '12px 18px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontSize: '1.25rem', color: 'var(--brand-color)' }}>📅</span>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', letterSpacing: '0.05em' }}>
              Current Cycle
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              May 1 – May 31, 2024
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--border-color)', marginBottom: '24px', paddingBottom: '2px' }}>
        <button
          onClick={() => setActiveTab('ALL')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'ALL' ? '2.5px solid var(--brand-color)' : 'none',
            color: activeTab === 'ALL' ? 'var(--brand-color)' : 'var(--text-secondary)',
            fontWeight: activeTab === 'ALL' ? 700 : 500,
            fontSize: '0.95rem',
            padding: '8px 4px 12px',
            cursor: 'pointer',
            transition: 'all 0.1s'
          }}
        >
          All Check-Ins
        </button>
        <button
          onClick={() => setActiveTab('UPCOMING')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'UPCOMING' ? '2.5px solid var(--brand-color)' : 'none',
            color: activeTab === 'UPCOMING' ? 'var(--brand-color)' : 'var(--text-secondary)',
            fontWeight: activeTab === 'UPCOMING' ? 700 : 500,
            fontSize: '0.95rem',
            padding: '8px 4px 12px',
            cursor: 'pointer',
            transition: 'all 0.1s'
          }}
        >
          Upcoming
        </button>
      </div>

      {activeTab === 'ALL' ? (
        <>
          {/* Inner blue alert banner */}
          <div 
            style={{ 
              padding: '16px 20px', 
              borderRadius: '10px', 
              backgroundColor: 'var(--brand-alert-bg)', 
              border: '1px solid var(--brand-alert-border)', 
              color: 'var(--brand-alert-text)', 
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}
          >
            <span style={{ fontSize: '1.2rem', color: 'var(--brand-color)' }}>ℹ️</span>
            <span>Check in daily during your 7-day participation window each month.</span>
          </div>

          {/* Table Cycles List */}
          <div className="glass-card" style={{ '--role-color': 'var(--brand-color)', padding: '0', overflow: 'hidden' } as React.CSSProperties}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-secondary)' }}>Cycle</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-secondary)' }}>Check-In Window</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-secondary)' }}>Days Completed</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-secondary)' }}>Status</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cycles.map((c) => {
                    const isInProgress = c.status === 'IN_PROGRESS';
                    return (
                      <tr 
                        key={c.id} 
                        style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color 0.2s' }} 
                        onMouseEnter={(e)=>e.currentTarget.style.backgroundColor = 'var(--bg-primary)'} 
                        onMouseLeave={(e)=>e.currentTarget.style.backgroundColor='transparent'}
                      >
                        {/* Cycle Name */}
                        <td style={{ padding: '20px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '1.25rem', color: isInProgress ? 'var(--brand-color)' : 'var(--text-muted)' }}>📅</span>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</span>
                              {isInProgress && <span style={{ fontSize: '0.725rem', color: 'var(--brand-color)', fontWeight: 600, marginTop: '2px' }}>Current Cycle</span>}
                            </div>
                          </div>
                        </td>

                        {/* Check-In Window */}
                        <td style={{ padding: '20px 24px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                          {c.window}
                        </td>

                        {/* Timeline Circles */}
                        <td style={{ padding: '20px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {Array.from({ length: c.totalDays }).map((_, index) => {
                              const dayNum = index + 1;
                              const isCompleted = dayNum <= c.daysCompleted;
                              const isCurrent = isInProgress && dayNum === c.daysCompleted + 1;

                              if (isCompleted) {
                                return (
                                  <div 
                                    key={dayNum} 
                                    style={{ 
                                      width: '24px', 
                                      height: '24px', 
                                      borderRadius: '50%', 
                                      backgroundColor: 'var(--color-user)', 
                                      color: '#fff', 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center', 
                                      fontWeight: 800, 
                                      fontSize: '0.65rem',
                                      border: '1.5px solid var(--color-user-border)'
                                    }}
                                  >
                                    ✓
                                  </div>
                                );
                              }

                              if (isCurrent) {
                                return (
                                  <div 
                                    key={dayNum} 
                                    style={{ 
                                      width: '24px', 
                                      height: '24px', 
                                      borderRadius: '50%', 
                                      backgroundColor: 'var(--bg-secondary)', 
                                      border: '2px solid var(--brand-color)', 
                                      color: 'var(--brand-color)', 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center', 
                                      fontWeight: 700, 
                                      fontSize: '0.75rem',
                                      boxShadow: '0 0 0 3px var(--focus-ring)'
                                    }}
                                  >
                                    {dayNum}
                                  </div>
                                );
                              }

                              return (
                                <div 
                                  key={dayNum} 
                                  style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'var(--bg-secondary)', 
                                    border: '1.5px solid var(--border-color)', 
                                    color: 'var(--text-muted)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontWeight: 500, 
                                    fontSize: '0.75rem'
                                  }}
                                >
                                  {dayNum}
                                </div>
                              );
                            })}
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '6px', fontWeight: 600 }}>
                              {c.daysCompleted} of {c.totalDays}
                            </span>
                          </div>
                        </td>

                        {/* Status Badge */}
                        <td style={{ padding: '20px 24px' }}>
                          <span 
                            className="role-badge"
                            style={{ 
                              '--badge-bg': isInProgress ? 'var(--brand-light)' : 'var(--color-user-light)', 
                              '--badge-color': isInProgress ? 'var(--brand-color)' : 'var(--color-user)',
                              fontSize: '0.7rem',
                              padding: '4px 10px',
                              borderRadius: '9999px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            } as React.CSSProperties}
                          >
                            <span style={{ fontSize: '0.8rem' }}>{isInProgress ? '🕒' : '✓'}</span>
                            {isInProgress ? 'In Progress' : 'Completed'}
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                          {isInProgress ? (
                            <button
                              onClick={() => handleContinueCheckIn(c.id)}
                              className="premium-btn premium-btn-primary"
                              style={{ 
                                '--btn-color': 'var(--brand-color)', 
                                '--focus-ring': 'rgba(10, 87, 227, 0.15)',
                                padding: '8px 16px',
                                fontSize: '0.8rem',
                                borderRadius: '8px'
                              } as React.CSSProperties}
                            >
                              Continue Check-In
                            </button>
                          ) : (
                            <button
                              className="premium-btn premium-btn-secondary"
                              style={{ 
                                padding: '8px 16px',
                                fontSize: '0.8rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--bg-secondary)',
                                color: 'var(--text-secondary)'
                              }}
                              onClick={() => alert(`Showing participation summary for ${c.name}`)}
                            >
                              View Summary
                            </button>
                          )}
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 32px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>🔒</span>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Upcoming Participation Windows</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '380px', margin: '8px auto 0' }}>
            Future check-in slots open automatically on the first day of each calendar month. Next slot opens June 1, 2024.
          </p>
        </div>
      )}
    </div>
  );
}
