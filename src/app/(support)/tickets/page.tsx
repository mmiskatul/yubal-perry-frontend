'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ROLES_CONFIG } from '@/config/roles';

interface HelpTicket {
  id: string;
  userEmail: string;
  subject: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  priority: 'URGENT' | 'HIGH' | 'NORMAL';
  assignedDate: string;
}

export default function SupportDashboard() {
  const { user } = useAuth();
  
  // Custom mock global ticket database
  const [tickets, setTickets] = useState<HelpTicket[]>([
    { id: 'tkt_802', userEmail: 'user@daber.com', subject: 'Axios Client HTTP Refresh 401 Interception Loop', status: 'IN_PROGRESS', priority: 'HIGH', assignedDate: '2026-05-26' },
    { id: 'tkt_805', userEmail: 'customer12@daber.com', subject: 'Session storage clearing when switching roles in sandbox', status: 'OPEN', priority: 'URGENT', assignedDate: '2026-05-27' },
    { id: 'tkt_801', userEmail: 'user@daber.com', subject: 'Configuring custom sub-domains for Operations managers', status: 'RESOLVED', priority: 'NORMAL', dateCreated: '2026-05-20' } as any,
    { id: 'tkt_799', userEmail: 'partner@corporation.com', subject: 'CORS policies throwing failures on standard operations route', status: 'RESOLVED', priority: 'HIGH', assignedDate: '2026-05-18' },
  ]);

  const handleUpdateStatus = (ticketId: string, nextStatus: HelpTicket['status']) => {
    setTickets(prev =>
      prev.map(t => t.id === ticketId ? { ...t, status: nextStatus } : t)
    );
  };

  const activeThemeColor = user ? ROLES_CONFIG[user.role]?.themeColor : '#f59e0b';

  return (
    <div style={{ padding: '8px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: activeThemeColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Support Desk
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginTop: '4px' }}>
            Customer Operations Queue
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="premium-btn premium-btn-secondary">Export SLA Metrics</button>
          <button className="premium-btn premium-btn-primary" style={{ '--btn-color': activeThemeColor } as React.CSSProperties}>
            ⚡ Auto-Assign Ticket
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="stats-grid">
        <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Response SLA</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>14.8 Min</h2>
          <p style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '12px' }}>✓ SLA target is met (Goal: &lt;20m)</p>
        </div>

        <div className="glass-card" style={{ '--role-color': '#ef4444' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pending Inquiries</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>2 Outstanding</h2>
          <p style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600, marginTop: '12px' }}>1 Urgent ticket requires action</p>
        </div>

        <div className="glass-card" style={{ '--role-color': '#10b981' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Resolved Today</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>12 Tickets</h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '12px' }}>84% customer satisfaction rate</p>
        </div>

        <div className="glass-card" style={{ '--role-color': '#0ea5e9' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Agents</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>6 Online</h2>
          <p style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '12px' }}>All queues functioning standard</p>
        </div>
      </div>

      {/* Ticket List Console */}
      <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Assigned Operations Queue</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Select support requests, communicate fixes, and toggle statuses to meet operations SLA agreements.
            </p>
          </div>
          <input 
            type="text" 
            placeholder="Search tickets by ID/subject..." 
            className="premium-input" 
            style={{ maxWidth: '260px', padding: '8px 12px', fontSize: '0.8rem' }} 
          />
        </div>

        {/* Support Queue Table */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Ticket</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Filer Details</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>SLA Priority</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Status</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => {
                const priorityColor = t.priority === 'URGENT' ? '#ef4444' : t.priority === 'HIGH' ? '#f59e0b' : '#6b7280';
                const statusColor = t.status === 'RESOLVED' ? '#10b981' : t.status === 'IN_PROGRESS' ? '#0ea5e9' : '#f59e0b';
                
                return (
                  <tr key={t.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.backgroundColor='var(--bg-primary)'} onMouseLeave={(e)=>e.currentTarget.style.backgroundColor='transparent'}>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{t.subject}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>ID: {t.id}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>{t.userEmail}</td>
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
                    <td style={{ padding: '16px 20px' }}>
                      <span 
                        className="role-badge"
                        style={{ 
                          '--badge-bg': `${statusColor}10`, 
                          '--badge-color': statusColor,
                          fontSize: '0.65rem',
                          padding: '2px 8px'
                        } as React.CSSProperties}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        {t.status !== 'RESOLVED' && (
                          <>
                            {t.status === 'OPEN' && (
                              <button 
                                onClick={() => handleUpdateStatus(t.id, 'IN_PROGRESS')}
                                style={{ 
                                  padding: '6px 12px', 
                                  borderRadius: '6px', 
                                  border: '1px solid var(--border-color)',
                                  backgroundColor: 'var(--bg-secondary)',
                                  color: 'var(--text-primary)',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  cursor: 'pointer'
                                }}
                              >
                                Triage In Progress
                              </button>
                            )}
                            <button 
                              onClick={() => handleUpdateStatus(t.id, 'RESOLVED')}
                              style={{ 
                                padding: '6px 12px', 
                                borderRadius: '6px', 
                                border: '1px solid #10b981',
                                backgroundColor: '#10b981',
                                color: '#fff',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)'
                              }}
                            >
                              Resolve
                            </button>
                          </>
                        )}
                        {t.status === 'RESOLVED' && (
                          <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, padding: '6px 12px' }}>✓ Ticket Resolved</span>
                        )}
                      </div>
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
