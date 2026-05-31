'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { 
  LuMailCheck, 
  LuShieldAlert, 
  LuSparkles, 
  LuArrowRight, 
  LuRefreshCw 
} from 'react-icons/lu';

export default function VerifyEmailPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [code, setCode] = useState<string[]>(new Array(6).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState<string | null>(null);
  
  // Refs for each input box to handle seamless shifting focus
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Protect path: must be logged in to verify
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading || !user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#0f172a' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', borderTopColor: '#3b82f6', animation: 'spin 1s linear infinite' }} />
        <style dangerouslySetInnerHTML={{__html: `@keyframes spin { to { transform: rotate(360deg); } }`}} />
      </div>
    );
  }

  // Handle number input and focus shifting forward
  const handleChange = (value: string, idx: number) => {
    if (isNaN(Number(value))) return; // restrict to digits only

    const newCode = [...code];
    // Keep only last char if they type multiple
    newCode[idx] = value.slice(-1);
    setCode(newCode);

    // Shift focus to next input box if a value is typed
    if (value && idx < 5) {
      inputRefs[idx + 1].current?.focus();
    }
  };

  // Handle backspace and focus shifting backward
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !code[idx] && idx > 0) {
      inputRefs[idx - 1].current?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const joinedCode = code.join('');

    if (joinedCode.length < 6) {
      setError('Please enter all 6 digits of the verification code.');
      return;
    }

    setError(null);
    setIsVerifying(true);

    setTimeout(() => {
      // Mock code bypass
      if (joinedCode === '123456') {
        setIsVerifying(false);
        router.push('/select-role');
      } else {
        setError('Verification failed. Sandbox clearance code is 123456.');
        setIsVerifying(false);
        // Shake animation reset trigger
        setCode(new Array(6).fill(''));
        inputRefs[0].current?.focus();
      }
    }, 1000);
  };

  const handleResend = () => {
    setIsResending(true);
    setError(null);
    setResendMessage(null);
    
    setTimeout(() => {
      setIsResending(false);
      setResendMessage('Verification code resent successfully! (Sandbox code remains: 123456)');
      // Auto fade message
      setTimeout(() => setResendMessage(null), 5000);
    }, 1200);
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
      {/* Dynamic Background Mesh */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(59, 130, 246, 0.12)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />

      {/* Main Verification Panel */}
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '520px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '40px 48px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        zIndex: 10,
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Header Icon */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            color: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            marginBottom: '16px',
          }}>
            <LuMailCheck />
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
            Verify Your Email
          </h2>
          <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '8px', lineHeight: '1.4' }}>
            We've sent a 6-digit verification code to <strong style={{ color: '#f8fafc' }}>{user.email}</strong>.
          </p>
        </div>

        {/* Sandbox Instruction Tip */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          color: '#f59e0b',
          fontSize: '0.75rem',
          fontWeight: 700,
          marginBottom: '28px',
        }}>
          <LuSparkles />
          <span>Clearance Bypass Code: <strong style={{ textDecoration: 'underline' }}>123456</strong></span>
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
            fontSize: '0.8rem',
            textAlign: 'left',
            marginBottom: '24px',
            animation: 'shake 0.3s ease',
          }}>
            <LuShieldAlert style={{ fontSize: '1.2rem', flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Resend success toast message */}
        {resendMessage && (
          <div style={{
            padding: '12px 16px',
            borderRadius: '12px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#a7f3d0',
            fontSize: '0.8rem',
            textAlign: 'left',
            marginBottom: '24px',
          }}>
            {resendMessage}
          </div>
        )}

        {/* 6 Digit Input Form */}
        <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Digit Inputs Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '12px',
          }}>
            {code.map((digit, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                disabled={isVerifying}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '12px',
                  backgroundColor: '#1e293b',
                  border: '2px solid rgba(255,255,255,0.06)',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  textAlign: 'center',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            ))}
          </div>

          {/* Verification Trigger Button */}
          <button
            type="submit"
            disabled={isVerifying}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
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
            {isVerifying ? (
              <>
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#ffffff',
                  animation: 'spin 0.8s linear infinite',
                }} />
                <span>Auditing Verification Code...</span>
              </>
            ) : (
              <>
                <span>Confirm Verification</span>
                <LuArrowRight style={{ fontSize: '1.1rem' }} />
              </>
            )}
          </button>
        </form>

        {/* Resend & Secondary actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '20px',
        }}>
          <button
            onClick={handleResend}
            disabled={isResending || isVerifying}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.color='#f8fafc'}
            onMouseLeave={(e)=>e.currentTarget.style.color='#94a3b8'}
          >
            <LuRefreshCw style={{ animation: isResending ? 'spin 1s linear infinite' : 'none' }} />
            <span>Resend Verification Code</span>
          </button>

          <button
            onClick={() => router.push('/login')}
            style={{
              background: 'none',
              border: 'none',
              color: '#3b82f6',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.textDecoration='underline'}
            onMouseLeave={(e)=>e.currentTarget.style.textDecoration='none'}
          >
            Back to Sign In
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
