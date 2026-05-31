'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';
import Sidebar from './Sidebar';
import { ROLES_CONFIG } from '@/config/roles';

// Import vector icons
import { LuSearch, LuCircleHelp, LuBell, LuChevronDown } from 'react-icons/lu';

interface DashboardLayoutProps {
  children: React.ReactNode;
  allowedRoles: Role[];
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  allowedRoles,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/login');
      } else if (user && !allowedRoles.includes(user.role)) {
        // Safe redirection if accessing unauthorized paths
        if (user.role === 'SUPER_ADMIN') {
          router.push('/admin/overview');
        } else if (user.role === 'LANDLORD') {
          router.push('/landlord/overview');
        } else if (user.role === 'TENANT') {
          router.push('/tenant/dashboard');
        } else if (user.role === 'AFFILIATE') {
          router.push('/affiliate/referrals');
        } else {
          router.push('/applicant/progress');
        }
      }
    }
  }, [isLoading, isAuthenticated, user, allowedRoles, router]);

  // Loading state with visual feedback
  if (isLoading) {
    return (
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div 
          style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '50%', 
            border: '3px solid var(--border-color)',
            borderTopColor: 'var(--brand-color)',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}} />
      </div>
    );
  }

  // If unauthorized, do not render children (redirect will fire in useEffect)
  if (!isAuthenticated || (user && !allowedRoles.includes(user.role))) {
    return null;
  }

  const roleColor = user ? ROLES_CONFIG[user.role]?.themeColor : '#0a57e3';

  return (
    <div className="app-container">
      <Sidebar />
      
      <main 
        className="main-content animate-fade-in" 
        style={{ 
          position: 'relative', 
          paddingTop: '110px', 
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingBottom: '40px',
          minHeight: '100vh' 
        }}
      >
        {/* Global Top Navigation Header from Screenshots */}
        <header 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            height: '80px', 
            backgroundColor: 'var(--bg-secondary)', 
            borderBottom: '1px solid var(--border-color)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '0 40px',
            zIndex: 90
          }}
        >
          {/* Search bar */}
          <div style={{ display: 'flex', alignItems: 'center', width: '380px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '14px', color: 'var(--text-muted)', fontSize: '1rem', top: '12px', display: 'flex', alignItems: 'center' }}>
              <LuSearch />
            </span>
            <input 
              type="text" 
              placeholder="Search documents, messages, or help..." 
              style={{ 
                width: '100%', 
                padding: '10px 16px 10px 40px', 
                borderRadius: '10px', 
                backgroundColor: 'var(--bg-primary)', 
                border: '1px solid var(--border-color)', 
                fontSize: '0.85rem',
                outline: 'none',
                color: 'var(--text-primary)',
                transition: 'all 0.2s'
              }}
              onFocus={(e)=>e.currentTarget.style.borderColor = 'var(--brand-color)'}
              onBlur={(e)=>e.currentTarget.style.borderColor = 'var(--border-color)'}
            />
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a 
              href={user?.role === 'TENANT' ? '/tenant/support' : user?.role === 'APPLICANT' ? '/applicant/support' : user?.role === 'LANDLORD' ? '/landlord/help' : '#'} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '0.85rem', 
                color: 'var(--text-secondary)', 
                textDecoration: 'none',
                fontWeight: 600
              }}
              onMouseEnter={(e)=>e.currentTarget.style.color='var(--brand-color)'}
              onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}><LuCircleHelp /></span> Help
            </a>

            <div 
              style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
              onClick={() => router.push(
                user?.role === 'TENANT' ? '/tenant/messages' 
                : user?.role === 'APPLICANT' ? '/applicant/messages'
                : '#'
              )}
            >
              <span style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center' }}><LuBell /></span>
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-1px', 
                  right: '-1px', 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ef4444' 
                }} 
              />
            </div>

            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                borderLeft: '1px solid var(--border-color)',
                paddingLeft: '20px',
                cursor: 'pointer'
              }}
              onClick={() => router.push(user?.role === 'TENANT' ? '/tenant/settings' : '/tenant/settings')}
            >
              <div 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  backgroundColor: `${roleColor}15`, 
                  color: roleColor, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 700, 
                  fontSize: '0.85rem',
                  border: `2px solid ${roleColor}` 
                }}
              >
                AJ
              </div>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.2' }}>
                  Alex Johnson
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {user ? ROLES_CONFIG[user.role]?.displayName : ''}
                </span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '4px', display: 'flex', alignItems: 'center' }}>
                <LuChevronDown />
              </span>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
