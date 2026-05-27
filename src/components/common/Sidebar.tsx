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
  const { user, logout, checkPermission } = useAuth();

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
      { label: 'Client Hub', href: '/user/dashboard', icon: '🏠' },
      { label: 'My Profile', href: '/user/profile', icon: '👤' },
      { label: 'Support Inbox', href: '/user/tickets', icon: '🎫' },
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
        <img 
          src={user.avatarUrl} 
          alt={user.name} 
          style={{ width: '40px', height: '40px', borderRadius: '50%', border: `2px solid ${roleColor}` }} 
        />
        <div style={{ overflow: 'hidden' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {user.name}
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
            {user.role}
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', paddingLeft: '8px', marginBottom: '4px' }}>
          Navigation
        </span>
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
                color: isActive ? '#fff' : 'var(--text-secondary)',
                backgroundColor: isActive ? roleColor : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? `0 4px 12px ${roleColor}30` : 'none',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--border-color)';
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
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
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
