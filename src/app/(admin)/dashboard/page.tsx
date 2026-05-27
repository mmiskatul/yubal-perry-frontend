'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';
import { ROLES_CONFIG } from '@/config/roles';

interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'ACTIVE' | 'SUSPENDED';
  joinedDate: string;
}

export default function AdminDashboard() {
  const { user } = useAuth();
  
  // In-memory local state for demonstration
  const [users, setUsers] = useState<SystemUser[]>([
    { id: 'usr_001', name: 'Miskat Masab', email: 'admin@daber.com', role: 'ADMIN', status: 'ACTIVE', joinedDate: '2026-01-10' },
    { id: 'usr_002', name: 'Alice Smith', email: 'alice@company.com', role: 'MANAGER', status: 'ACTIVE', joinedDate: '2026-02-14' },
    { id: 'usr_003', name: 'Bob Johnson', email: 'bob@partner.com', role: 'SUPPORT', status: 'ACTIVE', joinedDate: '2026-03-22' },
    { id: 'usr_004', name: 'Carol Danvers', email: 'carol@gmail.com', role: 'USER', status: 'ACTIVE', joinedDate: '2026-05-01' },
    { id: 'usr_005', name: 'David Miller', email: 'david@company.com', role: 'USER', status: 'SUSPENDED', joinedDate: '2026-05-18' },
  ]);

  const handleRoleChange = (userId: string, newRole: Role) => {
    setUsers(prev => 
      prev.map(u => u.id === userId ? { ...u, role: newRole } : u)
    );
  };

  const handleToggleStatus = (userId: string) => {
    setUsers(prev =>
      prev.map(u => 
        u.id === userId 
          ? { ...u, status: u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE' } 
          : u
      )
    );
  };

  const activeThemeColor = user ? ROLES_CONFIG[user.role]?.themeColor : '#7c3aed';

  return (
    <div style={{ padding: '8px' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: activeThemeColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            System Terminal
          </span>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginTop: '4px' }}>
            Administrator Control Panel
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="premium-btn premium-btn-secondary">Export Audits</button>
          <button className="premium-btn premium-btn-primary" style={{ '--btn-color': activeThemeColor } as React.CSSProperties}>
            + Provision Node
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="stats-grid">
        <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>CPU Load</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>12.4%</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '12.4%', height: '100%', backgroundColor: activeThemeColor }} />
          </div>
        </div>

        <div className="glass-card" style={{ '--role-color': '#0ea5e9' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Server Latency</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>18ms</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '85%', height: '100%', backgroundColor: '#0ea5e9' }} />
          </div>
        </div>

        <div className="glass-card" style={{ '--role-color': '#10b981' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Memory Pools</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>4.8 / 16 GB</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '30%', height: '100%', backgroundColor: '#10b981' }} />
          </div>
        </div>

        <div className="glass-card" style={{ '--role-color': '#f59e0b' } as React.CSSProperties}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sockets Connected</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>4,812</h2>
          <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', marginTop: '16px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', backgroundColor: '#f59e0b' }} />
          </div>
        </div>
      </div>

      {/* Main Governance Section */}
      <div className="glass-card" style={{ '--role-color': activeThemeColor } as React.CSSProperties}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>User Governance & Directory</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Inspect profiles, modify system clearance levels, and toggle network suspensions instantly.
            </p>
          </div>
          <input 
            type="text" 
            placeholder="Search credentials..." 
            className="premium-input" 
            style={{ maxWidth: '240px', padding: '8px 12px', fontSize: '0.8rem' }} 
          />
        </div>

        {/* User Table Grid */}
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>User Details</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Security Clearance</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Status</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Provision Date</th>
                <th style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => {
                const uColor = ROLES_CONFIG[u.role]?.themeColor || '#7c3aed';
                return (
                  <tr key={u.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.backgroundColor='var(--bg-primary)'} onMouseLeave={(e)=>e.currentTarget.style.backgroundColor='transparent'}>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{u.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{u.email}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <select 
                        value={u.role} 
                        onChange={(e) => handleRoleChange(u.id, e.target.value as Role)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: '6px',
                          border: `1.5px solid ${uColor}40`,
                          backgroundColor: `${uColor}08`,
                          color: uColor,
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="ADMIN">ADMIN</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="SUPPORT">SUPPORT</option>
                        <option value="USER">USER</option>
                      </select>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <span 
                        className="role-badge"
                        style={{ 
                          '--badge-bg': u.status === 'ACTIVE' ? '#ecfdf5' : '#fef2f2', 
                          '--badge-color': u.status === 'ACTIVE' ? '#10b981' : '#ef4444',
                          fontSize: '0.65rem',
                          padding: '2px 8px'
                        } as React.CSSProperties}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>{u.joinedDate}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <button 
                        onClick={() => handleToggleStatus(u.id)}
                        style={{ 
                          padding: '6px 12px', 
                          borderRadius: '6px', 
                          border: '1px solid',
                          borderColor: u.status === 'ACTIVE' ? '#ef4444' : '#10b981',
                          backgroundColor: 'transparent',
                          color: u.status === 'ACTIVE' ? '#ef4444' : '#10b981',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e)=>{
                          e.currentTarget.style.backgroundColor = u.status === 'ACTIVE' ? '#fef2f2' : '#ecfdf5';
                        }}
                        onMouseLeave={(e)=>{
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        {u.status === 'ACTIVE' ? 'Suspend' : 'Reinstate'}
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
