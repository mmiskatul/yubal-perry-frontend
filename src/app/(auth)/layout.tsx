'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { DEFAULT_ROLE_REDIRECTS } from '@/config/roles';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      // If already logged in, redirect directly to dashboard
      const redirectPath = DEFAULT_ROLE_REDIRECTS[user.role] || '/';
      router.push(redirectPath);
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading) {
    return (
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div 
          style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            border: '2px solid var(--border-color)',
            borderTopColor: '#7c3aed',
            animation: 'spin 1s linear infinite'
          }}
        />
        <style dangerouslySetInnerHTML={{__html: `@keyframes spin { to { transform: rotate(360deg); } }`}} />
      </div>
    );
  }

  // Prevent flash of login screen before redirect
  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
