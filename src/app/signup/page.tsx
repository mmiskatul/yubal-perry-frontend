'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { 
  LuUser, 
  LuMail, 
  LuLock, 
  LuChevronRight,
  LuShieldCheck, 
  LuArrowRight
} from 'react-icons/lu';

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      await signup(name, email, password);
    } catch (err: any) {
      setError(err.message || 'Registration failed. Try a different email.');
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      background: 'radial-gradient(ellipse at top, #1e293b, #0f172a)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Blur Spheres */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(10, 87, 227, 0.12)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(16, 185, 129, 0.1)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />

      {/* Glassmorphic Panel */}
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '520px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '40px 44px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        zIndex: 10,
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Brand Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            backgroundColor: '#0a57e3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(10, 87, 227, 0.25)',
            marginBottom: '16px',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11L11 13L15 9" stroke="#0a57e3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            Create Your Account
          </h1>
          <p style={{
            fontSize: '0.825rem',
            color: '#94a3b8',
            marginTop: '8px',
            fontWeight: 500,
          }}>
            Register below to initiate the secure tenant behavioral verification cycle.
          </p>
        </div>

        {/* Error notification */}
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
            <LuShieldCheck style={{ fontSize: '1.2rem', flexShrink: 0, color: '#ef4444' }} />
            <span>{error}</span>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          
          {/* Full Name */}
          <div>
            <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>
              FULL NAME *
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                <LuUser />
              </span>
              <input
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '10px',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>
              EMAIL ADDRESS *
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                <LuMail />
              </span>
              <input
                type="email"
                required
                placeholder="e.g. alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '10px',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>
              PASSWORD *
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                <LuLock />
              </span>
              <input
                type="password"
                required
                placeholder="Minimum 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '10px',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '12px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '14px 28px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#0a57e3',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 20px rgba(10, 87, 227, 0.25)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0a57e3';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#ffffff',
                    animation: 'spin 0.8s linear infinite',
                  }} />
                  <span>Registering Credentials...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <LuChevronRight style={{ fontSize: '1.1rem' }} />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Back to Sign In Redirect */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          margin: '32px 0 0 0',
          fontSize: '0.85rem',
          color: '#94a3b8',
        }}>
          <span>Already have an account?</span>
          <button
            onClick={() => router.push('/login')}
            style={{
              background: 'none',
              border: 'none',
              color: '#3b82f6',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.85rem',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e)=>e.currentTarget.style.textDecoration = 'none'}
          >
            Sign In Here
          </button>
        </div>
      </div>

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
