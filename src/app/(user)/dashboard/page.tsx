'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ROLES_CONFIG } from '@/config/roles';

interface SupportTicket {
  id: string;
  subject: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  priority: 'URGENT' | 'HIGH' | 'NORMAL';
  dateCreated: string;
}

export default function UserDashboard() {
  const { user } = useAuth();
  
  // Custom mock user tickets
  const [tickets, setTickets] = useState<SupportTicket[]>([
    { id: 'tkt_802', subject: 'Axios Client HTTP Refresh 401 Interception Loop', status: 'IN_PROGRESS', priority: 'HIGH', dateCreated: '2026-05-26' },
    { id: 'tkt_801', subject: 'Configuring custom sub-domains for Operations managers', status: 'RESOLVED', priority: 'NORMAL', dateCreated: '2026-05-20' },
  ]);

  const [subject, setSubject] = useState('');
  const [priority, setPriority] = useState<'URGENT' | 'HIGH' | 'NORMAL'>('NORMAL');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newTicket: SupportTicket = {
        id: `tkt_${Math.floor(800 + Math.random() * 200)}`,
        subject: subject,
        status: 'OPEN',
        priority: priority,
        dateCreated: new Date().toISOString().split('T')[0],
      };

      setTickets(prev => [newTicket, ...prev]);
      setSubject('');
      setIsSubmitting(false);
    }, 600);
  };

  const activeThemeColor = user ? ROLES_CONFIG[user.role]?.themeColor : '#10b981';

  return (
    <div style={{ padding: '8px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: activeThemeColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Client Portal
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginTop: '4px' }}>
            Customer Services Terminal
          </h1>
        </div>
        <span 
          className="role-badge"
          style={{ 
            '--badge-bg': `${activeThemeColor}15`, 
            '--badge-color': activeThemeColor,
            fontSize: '0.85rem',
            padding: '6px 16px',
            borderRadius: '12px'
          } as React.CSSProperties}
        >
          Premium Plan Active
        </span>
      </div>

      {/* Metrics Row */}
      <div className="stats-grid">
        <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Secure Storage API</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>1.2 / 10 GB</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '12%', height: '100%', backgroundColor: activeThemeColor }} />
          </div>
        </div>

        <div className="glass-card" style={{ '--role-color': '#7c3aed' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Webhooks</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>3 Active</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', backgroundColor: '#7c3aed' }} />
          </div>
        </div>

        <div className="glass-card" style={{ '--role-color': '#0ea5e9' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>API Keys</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>2 Configured</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '40%', height: '100%', backgroundColor: '#0ea5e9' }} />
          </div>
        </div>

        <div className="glass-card" style={{ '--role-color': '#f59e0b' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Integrations</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>8 Connected</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '80%', height: '100%', backgroundColor: '#f59e0b' }} />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
        
        {/* Support Ticket List */}
        <div className="glass-card" style={{ '--role-color': '#f59e0b' } as React.CSSProperties}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>My Support Inquiries</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Review pending operations queries and replies from our support desk.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tickets.map((t) => {
              const statusColor = t.status === 'RESOLVED' ? '#10b981' : t.status === 'IN_PROGRESS' ? '#0ea5e9' : '#f59e0b';
              const pColor = t.priority === 'URGENT' ? '#ef4444' : t.priority === 'HIGH' ? '#f59e0b' : '#6b7280';
              return (
                <div 
                  key={t.id} 
                  style={{ 
                    padding: '16px', 
                    borderRadius: '10px', 
                    border: '1px solid var(--border-color)', 
                    backgroundColor: 'var(--bg-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '70%' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>{t.id} • Created {t.dateCreated}</span>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.4' }}>{t.subject}</h4>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span 
                      className="role-badge" 
                      style={{ 
                        '--badge-bg': `${pColor}10`, 
                        '--badge-color': pColor, 
                        fontSize: '0.6rem',
                        padding: '2px 8px' 
                      } as React.CSSProperties}
                    >
                      {t.priority}
                    </span>
                    <span 
                      className="role-badge" 
                      style={{ 
                        '--badge-bg': `${statusColor}10`, 
                        '--badge-color': statusColor, 
                        fontSize: '0.6rem',
                        padding: '2px 8px' 
                      } as React.CSSProperties}
                    >
                      {t.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ticket Submission Form */}
        <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>Submit Tech Ticket</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Encountering issue? Describe it below to launch an operations ticket.
          </p>

          <form onSubmit={handleCreateTicket} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Issue Description
              </label>
              <textarea 
                className="premium-input" 
                placeholder="Describe your error or integration request..." 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                rows={3}
                style={{ resize: 'none', fontFamily: 'inherit', '--focus-color': activeThemeColor } as React.CSSProperties}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Priority Clearance
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="NORMAL">Normal Operation</option>
                <option value="HIGH">High Priority Block</option>
                <option value="URGENT">Urgent Outage</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="premium-btn premium-btn-primary" 
              disabled={isSubmitting}
              style={{ 
                '--btn-color': activeThemeColor, 
                '--focus-ring': `${activeThemeColor}40`,
                marginTop: '8px'
              } as React.CSSProperties}
            >
              {isSubmitting ? 'Filing Inquiry...' : 'Submit Support Ticket'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
