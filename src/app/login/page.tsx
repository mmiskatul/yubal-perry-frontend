'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { 
  LuMail, 
  LuLock, 
  LuArrowRight, 
  LuShieldAlert
} from 'react-icons/lu';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both your email address and password.');
      return;
    }
    
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
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'radial-gradient(ellipse at top, #1e293b, #0f172a)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Blur Spheres */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(10, 87, 227, 0.15)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(124, 58, 237, 0.12)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />

      {/* Main Glassmorphic Panel */}
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '480px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '44px 48px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        zIndex: 10,
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Brand Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            backgroundColor: '#0a57e3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(10, 87, 227, 0.3)',
            marginBottom: '16px',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11L11 13L15 9" stroke="#0a57e3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            Tenant <span style={{ color: '#3b82f6' }}>Integrity™</span>
          </h1>
          <p style={{
            fontSize: '0.85rem',
            color: '#94a3b8',
            marginTop: '8px',
            fontWeight: 500,
          }}>
            Secure Single Sign-On Gateway Portal
          </p>
        </div>

        {/* Error Notification */}
        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            borderRadius: '12px',
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            color: '#fca5a5',
            fontSize: '0.825rem',
            textAlign: 'left',
            marginBottom: '24px',
            animation: 'shake 0.3s ease',
          }}>
            <LuShieldAlert style={{ fontSize: '1.2rem', flexShrink: 0, color: '#ef4444' }} />
            <span>{error}</span>
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{
              fontSize: '0.675rem',
              fontWeight: 800,
              color: '#94a3b8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}>
              EMAIL ADDRESS
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '14px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1rem',
              }}>
                <LuMail />
              </span>
              <input
                type="email"
                placeholder="e.g. landlord@tenantintegrity.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 44px',
                  borderRadius: '12px',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{
                fontSize: '0.675rem',
                fontWeight: 800,
                color: '#94a3b8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                PASSWORD
              </label>
              <a href="#" style={{ fontSize: '0.75rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>
                Forgot Password?
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '14px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1rem',
              }}>
                <LuLock />
              </span>
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 44px',
                  borderRadius: '12px',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Secure Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#0a57e3',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.925rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '12px',
              boxShadow: '0 8px 20px rgba(10, 87, 227, 0.25)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(10, 87, 227, 0.35)';
              e.currentTarget.style.backgroundColor = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(10, 87, 227, 0.25)';
              e.currentTarget.style.backgroundColor = '#0a57e3';
            }}
          >
            {isSubmitting ? (
              <>
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#ffffff',
                  animation: 'spin 0.8s linear infinite',
                }} />
                <span>Verifying Access...</span>
              </>
            ) : (
              <>
                <span>Secure Sign In</span>
                <LuArrowRight style={{ fontSize: '1.1rem' }} />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: '32px 0 24px 0' }} />

        {/* Signup redirection footer link */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
          <span>New to Tenant Integrity?</span>
          <button 
            onClick={() => router.push('/signup')}
            style={{
              background: 'none',
              border: 'none',
              color: '#3b82f6',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e)=>e.currentTarget.style.textDecoration = 'none'}
          >
            Create an Account <LuArrowRight style={{ fontSize: '0.9rem' }} />
          </button>
        </div>
      </div>

      {/* Embedded CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
      `}} />
    </div>
  );
}
