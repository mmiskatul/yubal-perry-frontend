'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types/auth';
import { 
  LuBuilding2, 
  LuUser, 
  LuContact, 
  LuSparkles, 
  LuCircleCheck, 
  LuChevronRight,
  LuShieldAlert
} from 'react-icons/lu';

export default function SelectRolePage() {
  const { user, isAuthenticated, isLoading, updateRole } = useAuth();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Protect path: must be logged in to choose role
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

  const handleConfirmRole = async () => {
    if (!selectedRole) {
      setError('Please select a clearance tier to proceed.');
      return;
    }

    setError(null);
    setIsUpdating(true);

    try {
      await updateRole(selectedRole);
      router.push('/onboarding');
    } catch (err: any) {
      setError(err.message || 'Failed to update access role. Please try again.');
      setIsUpdating(false);
    }
  };

  // Curated registerable roles configuration
  const signupRoles = [
    {
      role: 'LANDLORD' as Role,
      title: 'Landlord / Portfolio',
      desc: 'List properties, manage portfolios, and track behavioral early warnings.',
      icon: <LuBuilding2 />,
      color: '#0a57e3',
      badge: 'Portfolio Suite',
      bg: 'rgba(10,87,227,0.08)',
      glow: 'rgba(10,87,227,0.3)',
    },
    {
      role: 'TENANT' as Role,
      title: 'Residential Tenant',
      desc: 'Verify daily check-ins, maintain active streaks, and chat with landlords.',
      icon: <LuUser />,
      color: '#10b981',
      badge: 'Resident Portal',
      bg: 'rgba(16,185,129,0.08)',
      glow: 'rgba(16,185,129,0.3)',
    },
    {
      role: 'APPLICANT' as Role,
      title: 'Cycle Applicant',
      desc: 'Enroll in the 7-day integrity cycle program and submit check-in details.',
      icon: <LuContact />,
      color: '#7c3aed',
      badge: '7-Day Cycle',
      bg: 'rgba(124,58,237,0.08)',
      glow: 'rgba(124,58,237,0.3)',
    },
    {
      role: 'AFFILIATE' as Role,
      title: 'Affiliate Partner',
      desc: 'Access your partner link, monitor conversions, and track payouts.',
      icon: <LuSparkles />,
      color: '#f59e0b',
      badge: 'Revenue Share',
      bg: 'rgba(245,158,11,0.08)',
      glow: 'rgba(245,158,11,0.3)',
    },
  ];

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
      {/* Background Blurs */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-150px',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: selectedRole ? `${signupRoles.find(r => r.role === selectedRole)?.color}15` : 'rgba(10, 87, 227, 0.12)',
        filter: 'blur(100px)',
        zIndex: 0,
        transition: 'background-color 0.4s'
      }} />

      {/* Main Container */}
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '820px',
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
        
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '36px' }}>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            Select Access Clearance
          </h1>
          <p style={{
            fontSize: '0.85rem',
            color: '#94a3b8',
            marginTop: '8px',
            fontWeight: 500,
          }}>
            Awesome! Your account is verified. Choose your core clearance role below to proceed to onboarding.
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
            fontSize: '0.8rem',
            textAlign: 'left',
            marginBottom: '24px',
            animation: 'shake 0.3s ease',
          }}>
            <LuShieldAlert style={{ fontSize: '1.2rem', flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Grid Selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          marginBottom: '36px',
        }}>
          {signupRoles.map((item) => {
            const isSelected = selectedRole === item.role;
            return (
              <div
                key={item.role}
                onClick={() => {
                  setSelectedRole(item.role);
                  setError(null);
                }}
                style={{
                  backgroundColor: isSelected ? 'rgba(30, 41, 59, 0.9)' : 'rgba(30, 41, 59, 0.3)',
                  border: '2px solid',
                  borderColor: isSelected ? item.color : 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '24px 18px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isSelected ? `0 8px 24px ${item.glow}` : 'none',
                  position: 'relative',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = `${item.color}50`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Role badge top right */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: isSelected ? `${item.color}25` : 'rgba(255,255,255,0.04)',
                  color: isSelected ? item.color : '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {item.badge}
                </span>

                {/* Role Icon */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: isSelected ? item.color : item.bg,
                  color: isSelected ? '#ffffff' : item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  transition: 'all 0.2s'
                }}>
                  {item.icon}
                </div>

                <div style={{ marginTop: '4px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.725rem', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Selected Indicator Circle */}
                {isSelected && (
                  <span style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    color: item.color,
                    fontSize: '1rem',
                    display: 'flex'
                  }}>
                    <LuCircleCheck />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <button
            onClick={handleConfirmRole}
            disabled={isUpdating || !selectedRole}
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: selectedRole ? signupRoles.find(r => r.role === selectedRole)?.color : '#475569',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: selectedRole ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: selectedRole ? '0 8px 20px rgba(0, 0, 0, 0.15)' : 'none',
              transition: 'all 0.25s',
              opacity: selectedRole ? 1 : 0.4
            }}
          >
            {isUpdating ? (
              <>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#ffffff',
                  animation: 'spin 0.8s linear infinite',
                }} />
                <span>Initializing Portal...</span>
              </>
            ) : (
              <>
                <span>Confirm Role &amp; Onboard</span>
                <LuChevronRight style={{ fontSize: '1.1rem' }} />
              </>
            )}
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
