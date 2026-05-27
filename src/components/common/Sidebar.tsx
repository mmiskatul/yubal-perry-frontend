'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ROLES_CONFIG } from '@/config/roles';

interface MenuItem {
  label: string;
  href: string;
  icon: string;
  permission?: string;
}

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (!user) return null;

  const roleInfo = ROLES_CONFIG[user.role];
  const roleColor = roleInfo?.themeColor || '#7c3aed';

  // Dynamic menu items mapped by role
  const menuItems: Record<string, MenuItem[]> = {
    ADMIN: [
      { label: 'Admin Terminal', href: '/admin/dashboard', icon: '⚡' },
      { label: 'User Governance', href: '/admin/users', icon: '👥' },
      { label: 'System Configuration', href: '/admin/config', icon: '⚙️' },
      { label: 'Audit Logs', href: '/admin/audit', icon: '📝' },
    ],
    MANAGER: [
      { label: 'Operations hub', href: '/manager/dashboard', icon: '📊' },
      { label: 'Analytics Reports', href: '/manager/reports', icon: '📈' },
      { label: 'Resource Management', href: '/manager/team', icon: '💼' },
    ],
    USER: [
      { label: 'My Dashboard', href: '/user/dashboard', icon: '⊞' },
      { label: 'My Check-Ins', href: '/user/check-ins', icon: '📅' },
      { label: 'Messages', href: '/user/messages', icon: '✉️' },
      { label: 'Help & Support', href: '/user/support', icon: '❔' },
      { label: 'Settings', href: '/user/settings', icon: '⚙️' },
    ],
    SUPPORT: [
      { label: 'Support Queue', href: '/support/tickets', icon: '📥' },
      { label: 'System Lookups', href: '/support/lookups', icon: '🔍' },
    ],
  };

  const currentMenu = menuItems[user.role] || [];

  return (
    <aside className="sidebar" style={{ '--role-color': roleColor } as React.CSSProperties}>
      {/* Brand logo section */}
      {user.role === 'USER' ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', paddingLeft: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#0a57e3" stroke="#0a57e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11L11 13L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', display: 'flex', alignItems: 'center' }}>
            Tenant <span style={{ color: '#0a57e3', fontWeight: 800, marginLeft: '4px' }}>Integrity™</span>
          </span>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div 
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '8px', 
              backgroundColor: roleColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              boxShadow: `0 4px 10px ${roleColor}40`
            }}
          >
            D
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
            Daber<span style={{ color: roleColor }}>Portal</span>
          </span>
        </div>
      )}

      {/* User Info card */}
      <div 
        style={{ 
          padding: '16px', 
          borderRadius: '12px', 
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <div 
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            backgroundColor: `${roleColor}15`, 
            color: roleColor, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 700, 
            fontSize: '0.95rem',
            border: `2px solid ${roleColor}` 
          }}
        >
          {user.role === 'USER' ? 'AJ' : user.name.substring(0, 2)}
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {user.role === 'USER' ? 'Alex Johnson' : user.name}
          </h4>
          <span 
            className="role-badge" 
            style={{ 
              '--badge-bg': `${roleColor}15`, 
              '--badge-color': roleColor,
              fontSize: '0.65rem',
              padding: '2px 8px',
              marginTop: '4px'
            } as React.CSSProperties}
          >
            {user.role === 'USER' ? 'Applicant' : user.role}
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {currentMenu.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? roleColor : 'var(--text-secondary)',
                backgroundColor: isActive ? `${roleColor}08` : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <span style={{ fontSize: '1.15rem', color: isActive ? roleColor : 'var(--text-muted)' }}>{item.icon}</span>
              <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Custom Info Card for User (Need Help widget) */}
      {user.role === 'USER' && (
        <div 
          style={{ 
            padding: '16px', 
            borderRadius: '12px', 
            backgroundColor: '#f3f8ff', 
            border: '1px solid #dbebff',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.25rem', color: '#0a57e3' }}>💬</span>
            <div>
              <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e3a8a' }}>Need help?</h5>
              <p style={{ fontSize: '0.725rem', color: '#4b5563', marginTop: '2px', lineHeight: '1.3' }}>
                Our support team is here for you.
              </p>
            </div>
          </div>
          <Link
            href="/user/support"
            style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #0a57e3', 
              color: '#0a57e3',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '8px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>)=>e.currentTarget.style.backgroundColor='#f0f6ff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>)=>e.currentTarget.style.backgroundColor='#ffffff'}
          >
            Message Support
          </Link>
        </div>
      )}

      {/* Bottom Actions */}
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
        <button
          onClick={logout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: '#ef4444',
            backgroundColor: 'transparent',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = '#fef2f2';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>🚪</span>
          <span className="sidebar-label">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
