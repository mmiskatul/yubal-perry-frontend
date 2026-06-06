'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ROLES_CONFIG } from '@/config/roles';

// Import high-fidelity vector icons from React Icons Lucide library
import { 
  LuLayoutDashboard, 
  LuCalendar, 
  LuMessageSquare, 
  LuCircleHelp, 
  LuSettings, 
  LuClipboardPen, 
  LuRefreshCw,
  LuLogOut,
  LuPhoneCall,
  LuPuzzle,
  LuUsers,
  LuPenLine,
  LuActivity,
  LuShieldAlert,
  LuFileText,
  LuCreditCard,
  LuClock
} from 'react-icons/lu';

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (!user) return null;

  const roleInfo = ROLES_CONFIG[user.role];
  const roleColor = roleInfo?.themeColor || '#0a57e3';

  // Dynamic menu items mapped by role utilizing React Icons
  const menuItems: Record<string, MenuItem[]> = {
    SUPER_ADMIN: [
      { label: 'Overview', href: '/admin/overview', icon: <LuLayoutDashboard /> },
      { label: 'Integration', href: '/admin/integration', icon: <LuPuzzle /> },
      { label: 'Roles & Permissions', href: '/admin/roles', icon: <LuUsers /> },
      { label: 'Task Management', href: '/admin/tasks', icon: <LuClipboardPen /> },
      { label: 'Text Editor', href: '/admin/editor', icon: <LuPenLine /> },
    ],
    LANDLORD: [
      { label: 'Overview', href: '/landlord/overview', icon: <LuLayoutDashboard /> },
      { label: 'Pre-Tenancy', href: '/landlord/pre-tenancy', icon: <LuClock /> },
      { label: 'Monitoring', href: '/landlord/monitoring', icon: <LuActivity /> },
      { label: 'Behavioral Risk', href: '/landlord/risk', icon: <LuShieldAlert /> },
      { label: 'Early Warnings', href: '/landlord/warnings', icon: <LuClipboardPen /> },
      { label: 'Properties', href: '/landlord/properties', icon: <LuLayoutDashboard /> },
      { label: 'Reports', href: '/landlord/reports', icon: <LuFileText /> },
      { label: 'Subscriptions', href: '/landlord/subscriptions', icon: <LuCreditCard /> },
      { label: 'Settings', href: '/landlord/settings', icon: <LuSettings /> },
      { label: 'Help', href: '/landlord/help', icon: <LuCircleHelp /> },
    ],
    TENANT: [
      { label: 'My Dashboard', href: '/tenant/dashboard', icon: <LuLayoutDashboard /> },
      { label: 'My Check-Ins', href: '/tenant/check-ins', icon: <LuCalendar /> },
      { label: 'Messages', href: '/tenant/messages', icon: <LuMessageSquare /> },
      { label: 'Help & Support', href: '/tenant/support', icon: <LuCircleHelp /> },
      { label: 'Settings', href: '/tenant/settings', icon: <LuSettings /> },
    ],
    APPLICANT: [
      { label: 'My Participation', href: '/applicant/participation', icon: <LuClipboardPen /> },
      { label: 'My Progress', href: '/applicant/progress', icon: <LuRefreshCw /> },
      { label: 'Messages', href: '/applicant/messages', icon: <LuMessageSquare /> },
      { label: 'Help & Support', href: '/applicant/support', icon: <LuCircleHelp /> },
    ],
    AFFILIATE: [
      { label: 'Referrals', href: '/affiliate/referrals', icon: <LuUsers /> },
      { label: 'Commissions', href: '/affiliate/commissions', icon: <LuCreditCard /> },
      { label: 'Pay out', href: '/affiliate/payouts', icon: <LuFileText /> },
    ],
  };

  const currentMenu = menuItems[user.role] || [];

  return (
    <aside className="sidebar" style={{ '--role-color': roleColor } as React.CSSProperties}>
      {/* Brand logo section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', paddingLeft: '8px' }}>
        <img src="/logo.svg" alt="Tenant Integrity" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
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
          AJ
        </div>
        <div style={{ overflow: 'hidden' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Alex Johnson
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
            {user.role === 'SUPER_ADMIN' ? 'Super Admin' : user.role === 'TENANT' ? 'Tenant' : user.role === 'LANDLORD' ? 'Landlord' : user.role === 'APPLICANT' ? 'Applicant' : 'Affiliate'}
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {currentMenu.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
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
              <span 
                style={{ 
                  fontSize: '1.25rem', 
                  color: isActive ? roleColor : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {item.icon}
              </span>
              <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Custom Info Card for User (Need Help widget) */}
      <div 
        style={{ 
          padding: '16px', 
          borderRadius: '12px', 
          backgroundColor: 'var(--brand-alert-bg)', 
          border: '1px solid var(--brand-alert-border)',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.25rem', color: 'var(--brand-color)', display: 'flex', marginTop: '2px' }}>
            <LuPhoneCall />
          </span>
          <div>
            <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-alert-text)' }}>Need help?</h5>
            <p style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.3' }}>
              Our support team is here for you.
            </p>
          </div>
        </div>
        <Link
          href={user.role === 'TENANT' ? '/tenant/support' : '/applicant/support'}
          style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            border: '1px solid var(--brand-color)', 
            color: 'var(--brand-color)',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '8px 12px',
            borderRadius: '8px',
            textDecoration: 'none',
            textAlign: 'center',
            display: 'block',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>)=>e.currentTarget.style.backgroundColor = 'var(--brand-light)'}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>)=>e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
        >
          {user.role === 'TENANT' ? 'Message Support' : 'Contact Support'}
        </Link>
      </div>

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
            e.currentTarget.style.backgroundColor = 'var(--color-alert-light)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
            <LuLogOut />
          </span>
          <span className="sidebar-label">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
