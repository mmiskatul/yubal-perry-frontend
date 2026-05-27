'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';
import { ROLES_CONFIG } from '@/config/roles';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role>('ADMIN');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Preset demo accounts to help test roles easily
  const demoAccounts = [
    { label: 'Admin Access', role: 'ADMIN' as Role, email: 'admin@daber.com', desc: 'Manage system settings & users' },
    { label: 'Manager Access', role: 'MANAGER' as Role, email: 'manager@daber.com', desc: 'Review audits & operations' },
    { label: 'User Access', role: 'USER' as Role, email: 'user@daber.com', desc: 'Standard customer tools' },
    { label: 'Support Access', role: 'SUPPORT' as Role, email: 'support@daber.com', desc: 'Handle support ticket desks' },
  ];

  const handleQuickSelect = (account: typeof demoAccounts[0]) => {
    setEmail(account.email);
    setPassword('••••••••');
    setSelectedRole(account.role);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      await login(email, selectedRole);
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeThemeColor = ROLES_CONFIG[selectedRole]?.themeColor || '#7c3aed';

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: 'var(--bg-primary)',
        padding: '24px',
        background: 'radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 40%)'
      }}
    >
      <div 
        className="glass-card animate-fade-in" 
        style={{ 
          maxWidth: '850px', 
          width: '100%', 
          padding: '0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '520px',
          borderRadius: 'var(--radius-lg)',
          '--role-color': activeThemeColor
        } as React.CSSProperties}
      >
        
        {/* Left Side: Standard Login Form */}
        <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: activeThemeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>D</div>
            <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>Daber<span style={{ color: activeThemeColor }}>Portal</span></span>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Welcome back
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px' }}>
            Sign in to access your role-specific dashboard resources.
          </p>

          {error && (
            <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', color: '#ef4444', fontSize: '0.8rem', fontWeight: 500, marginBottom: '16px' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Email Address
              </label>
              <input 
                type="email" 
                className="premium-input" 
                placeholder="you@company.com" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                style={{ '--focus-color': activeThemeColor } as React.CSSProperties}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                  Password
                </label>
                <a href="#" style={{ fontSize: '0.75rem', color: activeThemeColor, textDecoration: 'none', fontWeight: 500 }}>Forgot password?</a>
              </div>
              <input 
                type="password" 
                className="premium-input" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ '--focus-color': activeThemeColor } as React.CSSProperties}
              />
            </div>

            {/* Hidden / Internal Role Selector based on form inputs */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Sign In Scope / Role Access
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as Role)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="ADMIN">System Administrator</option>
                <option value="MANAGER">Operations Manager</option>
                <option value="SUPPORT">Support Specialist</option>
                <option value="USER">Standard User (Customer)</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="premium-btn premium-btn-primary" 
              disabled={isSubmitting}
              style={{ 
                '--btn-color': activeThemeColor, 
                '--focus-ring': `${activeThemeColor}40`,
                marginTop: '12px',
                position: 'relative'
              } as React.CSSProperties}
            >
              {isSubmitting ? (
                <>
                  <div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.6s linear infinite', marginRight: '8px' }} />
                  Processing...
                </>
              ) : 'Authenticate Access'}
            </button>
          </form>
        </div>

        {/* Right Side: Quick Demo Accounts Selector */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-primary)', 
            borderLeft: '1px solid var(--border-color)',
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: activeThemeColor, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', display: 'block' }}>
            Sandbox Portal Testing
          </span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Instant Role Selector
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '24px', lineHeight: '1.4' }}>
            Click a preset below to prefill standard credentials and test role-based dashboards instantly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {demoAccounts.map((account) => {
              const info = ROLES_CONFIG[account.role];
              const color = info?.themeColor || '#7c3aed';
              const isSelected = selectedRole === account.role && email === account.email;

              return (
                <div
                  key={account.role}
                  onClick={() => handleQuickSelect(account)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1.5px solid',
                    borderColor: isSelected ? color : 'var(--border-color)',
                    backgroundColor: isSelected ? `${color}08` : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isSelected ? `0 4px 10px ${color}10` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {account.label}
                    </h4>
                    <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {account.desc}
                    </p>
                  </div>
                  <span 
                    className="role-badge"
                    style={{ 
                      '--badge-bg': `${color}15`, 
                      '--badge-color': color,
                      fontSize: '0.6rem',
                      padding: '2px 8px'
                    } as React.CSSProperties}
                  >
                    {account.role}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}} />

      </div>
    </div>
  );
}
