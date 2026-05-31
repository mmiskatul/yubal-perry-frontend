'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootIndexRouter() {
  const router = useRouter();

  useEffect(() => {
    router.push('/tenant/dashboard');
  }, [router]);

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
      <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>
        Loading Tenant Portal...
      </p>
    </div>
  );
}
