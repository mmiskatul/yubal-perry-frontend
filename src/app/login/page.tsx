'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f8fafc',
      fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    }}>
      {/* ═══════════════════ MAIN CONTENT / SIGN IN FORM ═══════════════════ */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
      }}>
        <div style={{
          maxWidth: '460px',
          width: '100%',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 32px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
          border: '1px solid #e2e8f0',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'left', marginBottom: '28px' }}>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>Sign in</h1>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Don&apos;t have an account?{' '}
              <Link href="/signup" style={{ color: '#e57373', textDecoration: 'none', fontWeight: 700 }}>
                Create now
              </Link>
            </p>
          </div>

          {/* Error Notification */}
          {error && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#ef4444',
              fontSize: '0.875rem',
              textAlign: 'left',
              marginBottom: '20px',
              fontWeight: 500,
            }}>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* E-mail */}
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Password */}
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 48px 12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#64748b', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
                Remember me
              </label>
              <Link href="#" style={{ color: '#0f172a', textDecoration: 'underline', fontWeight: 700, marginLeft: 'auto' }}>
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#ec8c99',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: '10px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e57c8a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ec8c99'}
            >
              {isSubmitting ? 'Signing In...' : 'Sign in'}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '28px 0 20px 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
            <span style={{ padding: '0 12px', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>OR</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
          </div>

          {/* Social Sign-In Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Google */}
            <button
              onClick={() => router.push('/select-role')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#334155',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Facebook */}
            <button
              onClick={() => router.push('/select-role')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#334155',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer
        style={{
          background: '#3182ce',
          color: '#ffffff',
          padding: '60px 5% 40px 5%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          
          {/* Logo & Sub-Brand block */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img
              src="/logo.svg"
              alt="Tenant Integrity Systems"
              style={{ height: '68px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0, opacity: 0.9, letterSpacing: '0.05em' }}>
              RTO Funding LLC - The Human Side of Screening
            </p>
          </div>

          {/* Help & Support block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.95rem' }}>
            <p style={{ margin: 0 }}>
              Need help faster? Check our FAQ first.
            </p>
            <p style={{ margin: 0, fontWeight: 700 }}>
              Support: <a href="mailto:help@tenantintegrity.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>help@tenantintegrity.com</a>
            </p>
            <p style={{ margin: 0, fontSize: '0.88rem', opacity: 0.9 }}>
              We reply personally within 24 hours, Monday-Friday.
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.85, fontStyle: 'italic' }}>
              (For data security, all inquiries are handled via email.)
            </p>
          </div>

          {/* Compliance & Trust Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', opacity: 0.95 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>
              Objective, measurable, Fair Housing–safe screening for all applicants
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '0.85rem' }}>
              <span>🛡️ FCRA Compliant</span>
              <span>💫 U.S. Property Owner Verified</span>
              <span>🔒 Secure Payment via Stripe</span>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {['facebook', 'youtube', 'linkedin'].map((platform, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: '#3182ce',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {platform === 'facebook' && 'f'}
                {platform === 'youtube' && 'y'}
                {platform === 'linkedin' && 'in'}
              </a>
            ))}
          </div>

          {/* Admin portal button */}
          <Link
            href="/admin/overview"
            style={{
              background: '#1d4ed8',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(29, 78, 216, 0.3)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1e40af'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#1d4ed8'}
          >
            <span>👤</span> Admin
          </Link>

          {/* Separator line */}
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '12px 0' }} />

          {/* Legal disclaimers & copyright */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.75rem', opacity: 0.85, lineHeight: 1.5, maxWidth: '800px' }}>
            <p style={{ margin: 0 }}>
              &copy; 2020–2026 RTO Funding LLC — Licensed use of <strong>Tenant Integrity Systems™</strong>
            </p>
            <p style={{ margin: 0 }}>
              Authorized use by registered property owners, managers, and approved tenants only.
              <br />
              All rights reserved.
            </p>
            <p style={{ margin: 0 }}>
              Tenant Integrity Systems™ applies the same behavioral criteria to all applicants.
              <br />
              Approval is based solely on measurable participation — ensuring fully objective, Fair Housing-compliant screening.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
