'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ROLES_CONFIG } from '@/config/roles';

interface OpsTask {
  id: string;
  name: string;
  assignedTo: string;
  progress: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  dueDate: string;
}

export default function ManagerDashboard() {
  const { user } = useAuth();
  
  const [tasks, setTasks] = useState<OpsTask[]>([
    { id: 'tsk_101', name: 'Establish API Gateway Core', assignedTo: 'Miskat Masab', progress: 85, priority: 'HIGH', dueDate: '2026-06-01' },
    { id: 'tsk_102', name: 'Refactor Session Storage Layout', assignedTo: 'Alice Smith', progress: 40, priority: 'HIGH', dueDate: '2026-06-05' },
    { id: 'tsk_103', name: 'Configure Security Audit Logging', assignedTo: 'Bob Johnson', progress: 100, priority: 'MEDIUM', dueDate: '2026-05-24' },
    { id: 'tsk_104', name: 'Integrate Axios Client Service', assignedTo: 'Jane Doe', progress: 65, priority: 'MEDIUM', dueDate: '2026-06-10' },
    { id: 'tsk_105', name: 'Aesthetic Interface Design Refinements', assignedTo: 'Carol Danvers', progress: 15, priority: 'LOW', dueDate: '2026-06-25' },
  ]);

  const handleIncrementProgress = (taskId: string) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id === taskId) {
          const nextProg = Math.min(t.progress + 10, 100);
          return { ...t, progress: nextProg };
        }
        return t;
      })
    );
  };

  const activeThemeColor = user ? ROLES_CONFIG[user.role]?.themeColor : '#0ea5e9';

  return (
    <div style={{ padding: '8px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: activeThemeColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Operations Hub
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginTop: '4px' }}>
            Managerial Analytics Panel
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="premium-btn premium-btn-secondary">Download PDF Report</button>
          <button className="premium-btn premium-btn-primary" style={{ '--btn-color': activeThemeColor } as React.CSSProperties}>
            + Delegate Task
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="stats-grid">
        <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Projects</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>14 Active</h2>
          <p style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '12px' }}>+2 added this week</p>
        </div>

        <div className="glass-card" style={{ '--role-color': '#7c3aed' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Task Completion Index</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>78.2%</h2>
          <p style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 600, marginTop: '12px' }}>+4.1% MoM Improvement</p>
        </div>

        <div className="glass-card" style={{ '--role-color': '#10b981' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Quarterly OpEx</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>$64,812 / 85K</h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '12px' }}>76.2% allocated budget</p>
        </div>

        <div className="glass-card" style={{ '--role-color': '#f59e0b' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>FTE Capacity</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>92.4%</h2>
          <p style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600, marginTop: '12px' }}>Nearing peak threshold</p>
        </div>
      </div>

      {/* Operation Tasks Console */}
      <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Project Operations Tracker</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Track execution milestones and accelerate pending workflow blocks in real-time.
            </p>
          </div>
          <button className="premium-btn premium-btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Filter Priority</button>
        </div>

        {/* Task Grid Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Operation Name</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Assignee</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Milestone Progress</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Priority</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Due Date</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => {
                const priorityColor = t.priority === 'HIGH' ? '#ef4444' : t.priority === 'MEDIUM' ? '#f59e0b' : '#6b7280';
                return (
                  <tr key={t.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.backgroundColor='var(--bg-primary)'} onMouseLeave={(e)=>e.currentTarget.style.backgroundColor='transparent'}>
                    <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</td>
                    <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>{t.assignedTo}</td>
                    <td style={{ padding: '16px 20px', width: '220px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, width: '36px', display: 'inline-block' }}>{t.progress}%</span>
                        <div style={{ flex: 1, height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', overflow: 'hidden' }}>
                          <div style={{ width: `${t.progress}%`, height: '100%', backgroundColor: t.progress === 100 ? '#10b981' : activeThemeColor, transition: 'width 0.3s ease' }} />
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <span 
                        className="role-badge"
                        style={{ 
                          '--badge-bg': `${priorityColor}15`, 
                          '--badge-color': priorityColor,
                          fontSize: '0.65rem',
                          padding: '2px 8px'
                        } as React.CSSProperties}
                      >
                        {t.priority}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>{t.dueDate}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <button 
                        onClick={() => handleIncrementProgress(t.id)}
                        disabled={t.progress === 100}
                        style={{ 
                          padding: '6px 12px', 
                          borderRadius: '6px', 
                          border: '1px solid var(--border-color)',
                          backgroundColor: 'var(--bg-secondary)',
                          color: t.progress === 100 ? 'var(--text-muted)' : 'var(--text-primary)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: t.progress === 100 ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e)=>{
                          if (t.progress < 100) e.currentTarget.style.backgroundColor = 'var(--border-color)';
                        }}
                        onMouseLeave={(e)=>{
                          if (t.progress < 100) e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                        }}
                      >
                        {t.progress === 100 ? 'Completed' : 'Bump Progress'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
