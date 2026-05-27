'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

// Import Lucide React Icons
import { LuCalendar, LuCircleCheck, LuClock, LuLock, LuChevronRight } from 'react-icons/lu';

interface DailyLog {
  day: number;
  date: string;
  status: 'COMPLETED' | 'UPCOMING' | 'PENDING';
  isClickable: boolean;
}

export default function ProgressPage() {
  const router = useRouter();

  const logs: DailyLog[] = [
    { day: 1, date: 'May 3, 2024', status: 'COMPLETED', isClickable: true },
    { day: 2, date: 'May 4, 2024', status: 'COMPLETED', isClickable: true },
    { day: 3, date: 'May 5, 2024', status: 'COMPLETED', isClickable: true },
    { day: 4, date: 'May 6, 2024', status: 'UPCOMING', isClickable: false },
    { day: 5, date: 'May 7, 2024', status: 'PENDING', isClickable: false },
    { day: 6, date: 'May 8, 2024', status: 'PENDING', isClickable: false },
    { day: 7, date: 'May 9, 2024', status: 'PENDING', isClickable: false },
  ];

  const handleRowClick = (log: DailyLog) => {
    if (log.isClickable) {
      router.push(`/applicant/progress/${log.day}`);
    }
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            My Progress
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Track your participation in the 7-day process. Complete each daily check-in to keep your application on track.
          </p>
        </div>

        {/* 7-Day Process details widget */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '12px 18px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontSize: '1.25rem', color: '#0a57e3', display: 'flex' }}>
            <LuCalendar />
          </span>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
              7-Day Participation Process
            </span>
            <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Complete daily check-ins.
            </span>
          </div>
        </div>
      </div>

      {/* Grid: Progress details + Next checkin */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px', marginBottom: '24px' }}>
        
        {/* Overall Progress */}
        <div className="glass-card" style={{ '--role-color': '#0a57e3', display: 'flex', flexDirection: 'column', justifySelf: 'center', justifyContent: 'space-between', minHeight: '200px' } as React.CSSProperties}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Overall Progress
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '12px', marginBottom: '16px' }}>
              Day <span style={{ color: '#0a57e3' }}>3</span> of 7
            </h2>
            
            {/* Progress bar details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ flex: 1, height: '8px', borderRadius: '4px', backgroundColor: 'var(--border-color)', overflow: 'hidden' }}>
                <div style={{ width: '43%', height: '100%', backgroundColor: '#0a57e3', transition: 'width 0.3s' }} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                43% Complete
              </span>
            </div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
            Keep it up! You have 4 more daily check-ins to go.
          </p>
        </div>

        {/* Next Check-in */}
        <div className="glass-card" style={{ '--role-color': '#0a57e3', display: 'flex', flexDirection: 'column', justifySelf: 'center', justifyContent: 'space-between', minHeight: '200px' } as React.CSSProperties}>
          <div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.2rem', color: '#0a57e3', display: 'flex' }}><LuCalendar /></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Next Check-In
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Available Tomorrow
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Check back in within 24 hours to complete Day 4.
            </p>
          </div>
          <div style={{ fontSize: '0.725rem', color: '#0a57e3', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ⏳ Open June 1st
          </div>
        </div>

      </div>

      {/* Daily Progress List */}
      <div className="glass-card" style={{ '--role-color': '#0a57e3', padding: '0', overflow: 'hidden', marginBottom: '24px' } as React.CSSProperties}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Daily Check-In Progress</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {logs.map((log) => {
            const isCompleted = log.status === 'COMPLETED';
            const isUpcoming = log.status === 'UPCOMING';
            const isPending = log.status === 'PENDING';

            return (
              <div
                key={log.day}
                onClick={() => handleRowClick(log)}
                style={{
                  padding: '20px 32px',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: log.isClickable ? 'pointer' : 'default',
                  backgroundColor: 'transparent',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (log.isClickable) e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                }}
                onMouseLeave={(e) => {
                  if (log.isClickable) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Day Details */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                  {isCompleted ? (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>
                      ✓
                    </div>
                  ) : isUpcoming ? (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#ffffff', border: '2px solid #0a57e3', color: '#0a57e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700 }}>
                      {log.day}
                    </div>
                  ) : (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1.5px solid var(--border-color)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 500 }}>
                      {log.day}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>Day {log.day}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{log.date}</span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'flex-end', flex: 1 }}>
                  {isCompleted ? (
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981' }}>Completed</span>
                  ) : isUpcoming ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span 
                        className="role-badge"
                        style={{ 
                          '--badge-bg': '#eff6ff', 
                          '--badge-color': '#0a57e3',
                          fontSize: '0.65rem',
                          padding: '4px 10px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        } as React.CSSProperties}
                      >
                        <LuClock /> Available Tomorrow
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0a57e3' }}>Upcoming</span>
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Pending</span>
                  )}

                  {/* Navigation arrow */}
                  <span style={{ fontSize: '1.1rem', color: log.isClickable ? 'var(--text-muted)' : 'transparent', display: 'flex', alignItems: 'center' }}>
                    <LuChevronRight />
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Private Banner */}
      <div 
        style={{ 
          padding: '18px 24px', 
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <span style={{ fontSize: '1.25rem', color: '#0a57e3', display: 'flex' }}><LuLock /></span>
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Your information is private and secure.
          </h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Your data is used only for application review and is never shared.
          </p>
        </div>
      </div>

    </div>
  );
}
