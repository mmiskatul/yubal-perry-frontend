'use client';

import React from 'react';
import Link from 'next/link';

// Import vector icons from React Icons Lu library
import { 
  LuShieldAlert, 
  LuCircleCheck, 
  LuTriangleAlert, 
  LuHistory, 
  LuUserPlus, 
  LuChevronDown, 
  LuEllipsisVertical, 
  LuCircleX, 
  LuTrash2
} from 'react-icons/lu';

export default function AdminRolesPage() {
  
  const managers = [
    { 
      name: 'Sarah Jenkins', 
      email: 's.jenkins@company.com', 
      role: 'Compliance Lead', 
      status: 'Active', 
      statuscolor: 'var(--color-user)', 
      statusBg: '#e6fbf3', 
      action: 'Oct 26, 14:22', 
      actionDesc: 'Policy Update', 
      mfa: 'Enabled', 
      mfacolor: 'var(--color-user)', 
      risk: 'Normal', 
      riskColor: 'var(--text-secondary)',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=sarah'
    },
    { 
      name: 'Robert Chen', 
      email: 'r.chen@company.com', 
      role: 'IT Auditor', 
      status: 'Locked', 
      statuscolor: 'var(--color-support)', 
      statusBg: '#fffbeb', 
      action: 'Oct 25, 09:10', 
      actionDesc: 'Failed Login', 
      mfa: 'Not Enabled', 
      mfaColor: '#ef4444', 
      risk: 'Suspicious', 
      riskColor: '#ef4444',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=robert'
    },
    { 
      name: 'Elena Rodriguez', 
      email: 'e.rod@company.com', 
      role: 'Security Analyst', 
      status: 'Inactive', 
      statusColor: '#6b7280', 
      statusBg: '#f3f4f6', 
      action: 'Oct 20, 11:45', 
      actionDesc: 'Session End', 
      mfa: 'Enabled', 
      mfacolor: 'var(--color-user)', 
      risk: 'Normal', 
      riskColor: 'var(--text-secondary)',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=elena'
    }
  ];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          System Reports & Audit Logs
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px', maxWidth: '800px', lineHeight: '1.5' }}>
          Comprehensive activity logs and detailed audit history for enterprise governance. Monitor administrative changes, permission escalations, and security events in real-time.
        </p>
      </div>

      {/* Grid: 3 Auditing Statistics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', marginBottom: '32px' }}>
        
        {/* Metric 1: MFA Health */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Security Health: MFA Adoption
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '12px 0 16px 0' }}>
              94%
            </h2>
            
            {/* MFA progress track */}
            <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--border-color)', overflow: 'hidden', width: '100%', marginBottom: '16px' }}>
              <div style={{ width: '94%', height: '100%', backgroundColor: 'var(--brand-color)', borderRadius: '3px' }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.75rem', color: 'var(--color-user)', fontWeight: 600 }}>
            <LuCircleCheck /> <span>Target exceeded by 4% this month</span>
          </div>
        </div>

        {/* Metric 2: Active Flags */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Active Flags
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', margin: '12px 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LuTriangleAlert style={{ fontSize: '1.5rem' }} /> 12
            </h2>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Critical incidents pending immediate review.
            </p>
          </div>
          
          <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>
            +2% vs last week
          </span>
        </div>

        {/* Metric 3: Governance Audit */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Recent Governance Audit
            </span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '16px 0 20px 0' }}>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <LuHistory /> Last audit: <strong>Oct 24, 2023</strong>
              </span>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <LuHistory /> Last security report: <strong>16 hours ago</strong>
              </span>
            </div>
          </div>
          
          <Link href="#" style={{ fontSize: '0.75rem', color: 'var(--brand-color)', fontWeight: 700, textDecoration: 'none' }} onMouseEnter={(e)=>e.currentTarget.style.textDecoration='underline'} onMouseLeave={(e)=>e.currentTarget.style.textDecoration='none'}>
            View full audit trail &rarr;
          </Link>
        </div>

      </div>

      {/* Main Panel: Governance Controls list */}
      <div 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 0',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '24px',
          textAlign: 'left'
        }}
      >
        {/* Table header row with dispatch control actions */}
        <div style={{ padding: '0 32px 16px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Governance Controls</h3>
            <button 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
              onClick={()=>alert('Bulk action dropdown trigger')}
            >
              Bulk Actions <LuChevronDown />
            </button>
          </div>
          
          <button 
            className="premium-btn premium-btn-primary"
            style={{ 
              '--btn-color': 'var(--brand-color)', 
              '--focus-ring': 'rgba(10, 87, 227, 0.15)',
              padding: '8px 16px', 
              borderRadius: '8px', 
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            } as React.CSSProperties}
            onClick={()=>alert('sandbox action: Create new compliance administrator profile')}
          >
            <LuUserPlus /> Add Manager
          </button>
        </div>

        {/* Manager lists Table grid */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Column labels */}
          <div style={{ display: 'flex', padding: '16px 32px', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <div style={{ flex: 1.5 }}>User</div>
            <div style={{ flex: 1.2 }}>Role</div>
            <div style={{ flex: 1 }}>Status</div>
            <div style={{ flex: 1.5 }}>Last Admin Action</div>
            <div style={{ flex: 1.2 }}>MFA Status</div>
            <div style={{ flex: 1 }}>Risk Flag</div>
            <div style={{ width: '40px' }} />
          </div>

          {/* Rows list */}
          {managers.map((manager, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '18px 32px',
                borderBottom: idx === managers.length - 1 ? 'none' : '1px solid var(--border-color)',
                fontSize: '0.825rem'
              }}
            >
              {/* User Avatar & details */}
              <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--bg-primary)',
                    backgroundImage: `url(${manager.avatar})`,
                    backgroundSize: 'cover',
                    border: '1.5px solid var(--border-color)'
                  }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{manager.name}</span>
                  <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>{manager.email}</span>
                </div>
              </div>

              {/* Role */}
              <div style={{ flex: 1.2, fontWeight: 600, color: 'var(--text-secondary)' }}>{manager.role}</div>

              {/* Status */}
              <div style={{ flex: 1, display: 'flex' }}>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '6px', backgroundColor: manager.statusBg, color: manager.statusColor, fontWeight: 700 }}>
                  {manager.status}
                </span>
              </div>

              {/* Last Action */}
              <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{manager.action}</span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>{manager.actionDesc}</span>
              </div>

              {/* MFA Status */}
              <div style={{ flex: 1.2, display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: manager.mfaColor }}>
                {manager.mfa === 'Enabled' ? <LuCircleCheck /> : <LuCircleX />}
                <span>{manager.mfa}</span>
              </div>

              {/* Risk Flag */}
              <div style={{ flex: 1, fontWeight: 700, color: manager.riskColor }}>
                {manager.risk}
              </div>

              {/* Options */}
              <div style={{ width: '40px', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <LuEllipsisVertical />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom Card: Danger Zone */}
      <div 
        style={{ 
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--color-alert-border)',
          borderRadius: '12px',
          padding: '24px 32px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left'
        }}
      >
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LuTrash2 /> Danger Zone
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Deleting a role will immediately revoke permissions for all assigned users.
          </p>
          <button 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#ef4444', 
              fontSize: '0.825rem', 
              fontWeight: 700, 
              marginTop: '12px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={()=>alert('sandbox security gate: Role deletions are blocked on static evaluation instances.')}
          >
            Delete This Role
          </button>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="premium-btn premium-btn-secondary"
            style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '0.8rem' }}
            onClick={()=>alert('Updates discarded')}
          >
            Discard
          </button>
          <button 
            className="premium-btn premium-btn-primary"
            style={{ '--btn-color': 'var(--brand-color)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.8rem' } as React.CSSProperties}
            onClick={()=>alert('Governance update logs saved successfully.')}
          >
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
}
