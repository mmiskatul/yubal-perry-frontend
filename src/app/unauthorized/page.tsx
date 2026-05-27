'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ROLES_CONFIG } from '@/config/roles';

export default function UnauthorizedPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleGoHome = () => {
    if (user) {
      const { DEFAULT_ROLE_REDIRECTS } = require('@/config/roles');
      router.push(DEFAULT_ROLE_REDIRECTS[user.role] || '/');
    } else {
      router.push('/login');
    }
  };

  const roleColor = user ? ROLES_CONFIG[user.role]?.themeColor : '#7c3aed';

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: 'var(--bg-primary)',
        padding: '24px'
      }}
    >
      <div 
        className="glass-card animate-fade-in" 
        style={{ 
          maxWidth: '500px', 
          width: '100%', 
          textAlign: 'center',
          '--role-color': '#ef4444', // Red for errors
          padding: '40px 32px'
        } as React.CSSProperties}
      >
        {/* Warning Icon */}
        <div 
          style={{ 
            width: '72px', 
            height: '72px', 
            borderRadius: '50%', 
            backgroundColor: '#fee2e2', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 24px',
            fontSize: '2.5rem',
            color: '#ef4444'
          }}
        >
          ⚠️
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>
          Access Restricted
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '32px' }}>
          {user ? (
            <>
              You are currently logged in as a <strong style={{ color: roleColor }}>{user.role}</strong>. 
              Your account permissions do not grant access to the requested administrative directory.
            </>
          ) : (
            'You are not authorized to access this resource. Please sign in to verify your access rights.'
          )}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            className="premium-btn premium-btn-primary" 
            style={{ '--btn-color': '#ef4444', '--focus-ring': 'rgba(239, 68, 68, 0.2)' } as React.CSSProperties}
            onClick={handleGoHome}
          >
            Return to Dashboard
          </button>
          
          <button 
            className="premium-btn premium-btn-secondary" 
            onClick={logout}
          >
            Sign Out & Switch Account
          </button>
        </div>
      </div>
    </div>
  );
}
