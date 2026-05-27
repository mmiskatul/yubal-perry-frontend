'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { DEFAULT_ROLE_REDIRECTS } from '@/config/roles';

export default function RootIndexRouter() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated && user) {
        // Logged in: redirect to respective dashboard
        const redirectPath = DEFAULT_ROLE_REDIRECTS[user.role] || '/user/dashboard';
        router.push(redirectPath);
      } else {
        // Not logged in: redirect to login screen
        router.push('/login');
      }
    }
  }, [isLoading, isAuthenticated, user, router]);

  // Premium loading spinner while determining role redirect
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
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          border: '2px solid var(--border-color)',
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
      <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>
        Loading Secure Sandbox Portal...
      </p>
    </div>
  );
}
