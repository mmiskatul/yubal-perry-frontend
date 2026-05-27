'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';
import Sidebar from './Sidebar';

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
        router.push('/unauthorized');
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
            borderTopColor: '#7c3aed',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}} />
        <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.025em' }}>
          Authorizing Session...
        </p>
      </div>
    );
  }

  // If unauthorized, do not render children (redirect will fire in useEffect)
  if (!isAuthenticated || (user && !allowedRoles.includes(user.role))) {
    return null;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content animate-fade-in">
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
