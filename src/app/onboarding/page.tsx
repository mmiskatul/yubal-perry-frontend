'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { DEFAULT_ROLE_REDIRECTS } from '@/config/roles';
import { 
  LuUser, 
  LuPhone, 
  LuBuilding, 
  LuMapPin, 
  LuSparkles, 
  LuCheck, 
  LuChevronRight,
  LuChevronLeft,
  LuFileCheck,
  LuCalendar,
  LuDollarSign,
  LuMail
} from 'react-icons/lu';

export default function OnboardingPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Dynamic state values collected during onboarding
  const [phone, setPhone] = useState('');
  
  // Landlord inputs
  const [companyName, setCompanyName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertyOccupancy, setPropertyOccupancy] = useState<'Occupied' | 'Vacant'>('Occupied');

  // Tenant inputs
  const [landlordEmail, setLandlordEmail] = useState('');
  const [leaseStart, setLeaseStart] = useState('');
  const [rentAmount, setRentAmount] = useState('');
  const [notifFreq, setNotifFreq] = useState<'daily' | 'weekly'>('daily');

  // Applicant inputs
  const [inviteCode, setInviteCode] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [idMockNumber, setIdMockNumber] = useState('');

  // Affiliate inputs
  const [promoChannel, setPromoChannel] = useState('');
  const [affiliateTag, setAffiliateTag] = useState('');
  const [stripeConnected, setStripeConnected] = useState(false);

  // Loading control for final redirect
  const [isFinishing, setIsFinishing] = useState(false);

  // Enforce authentication & bypass admins or guests
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || !user) {
        router.push('/login');
      } else if (user.role === 'SUPER_ADMIN') {
        // Admins skip onboarding
        router.push(DEFAULT_ROLE_REDIRECTS.SUPER_ADMIN);
      }
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

  // Get theme colors and config based on active role
  const roleThemes = {
    LANDLORD: { color: '#0a57e3', label: 'Landlord Portfolio Setup', bgGlow: 'rgba(10,87,227,0.15)' },
    TENANT: { color: '#10b981', label: 'Tenant Check-In Activation', bgGlow: 'rgba(16,185,129,0.15)' },
    APPLICANT: { color: '#7c3aed', label: '7-Day Program Verification', bgGlow: 'rgba(124,58,237,0.15)' },
    AFFILIATE: { color: '#f59e0b', label: 'Affiliate Partner Linkage', bgGlow: 'rgba(245,158,11,0.15)' },
    SUPER_ADMIN: { color: '#7c3aed', label: 'Admin Access', bgGlow: 'rgba(124,58,237,0.15)' },
    GUEST: { color: '#6b7280', label: 'Visitor Onboarding', bgGlow: 'rgba(107,114,128,0.15)' }
  };

  const activeTheme = roleThemes[user.role as keyof typeof roleThemes] || roleThemes.LANDLORD;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    setIsFinishing(true);
    setTimeout(() => {
      // Complete onboarding and redirect to the default role route!
      const targetPath = DEFAULT_ROLE_REDIRECTS[user.role];
      router.push(targetPath);
    }, 1500); // gorgeous completion delay
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
      {/* Dynamic Glow Sphere matching the role */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        borderRadius: '50%',
        background: activeTheme.bgGlow,
        filter: 'blur(120px)',
        zIndex: 0,
      }} />

      {/* Main Glass Panel */}
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '680px',
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
      }}>
        
        {/* Onboarding Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '20px' }}>
          <div>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              color: activeTheme.color,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: `${activeTheme.color}15`,
              marginBottom: '6px'
            }}>
              {activeTheme.label}
            </span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Welcome, {user.name.split(' ')[0]}!
            </h2>
          </div>

          {/* Stepper indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: step >= s ? activeTheme.color : 'rgba(255,255,255,0.04)',
                  color: step >= s ? '#ffffff' : '#64748b',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: step === s ? `2px solid #ffffff` : 'none',
                }}
              >
                {step > s ? <LuCheck style={{ fontSize: '0.8rem' }} /> : s}
              </div>
            ))}
          </div>
        </div>

        {/* ── STEP 1: Basic Profile Details ── */}
        {step === 1 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Step 1: Complete Account Profile
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: '1.4' }}>
              Let's customize your profile. These details are used to set up your primary contact clearance in the sandbox engine.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '8px' }}>
              {/* Phone Number */}
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Contact Phone Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                    <LuPhone />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. (512) 555-0198"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

              {/* Dynamic Field 1 */}
              {user.role === 'LANDLORD' && (
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Company / Portfolio Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                      <LuBuilding />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. Paramount Rental Holdings"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
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
              )}

              {user.role === 'TENANT' && (
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Landlord's Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                      <LuMail />
                    </span>
                    <input
                      type="email"
                      placeholder="e.g. landlord@tenantintegrity.com"
                      value={landlordEmail}
                      onChange={(e) => setLandlordEmail(e.target.value)}
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
              )}

              {user.role === 'APPLICANT' && (
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Cycle Invitation Code *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                      <LuSparkles />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. INV-2026-X"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
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
              )}

              {user.role === 'AFFILIATE' && (
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Primary Marketing Channel *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '16px', top: '13px', color: '#64748b', display: 'flex', fontSize: '0.95rem' }}>
                      <LuSparkles />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. PropTech Review Blog, Real Estate Podcast"
                      value={promoChannel}
                      onChange={(e) => setPromoChannel(e.target.value)}
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
              )}
            </div>
          </div>
        )}

        {/* ── STEP 2: Custom Role Details ── */}
        {step === 2 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Step 2: Role Configuration Details
            </h3>
            
            {/* LANDLORD WORKFLOW */}
            {user.role === 'LANDLORD' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  Enter details to set up your very first managed property. You can add more later in the portal.
                </p>

                <div>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    First Property Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maple Heights A-12"
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#ffffff', fontSize: '0.825rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Property Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '11px', color: '#64748b', display: 'flex' }}><LuMapPin /></span>
                    <input
                      type="text"
                      placeholder="e.g. 123 Maple Street, Austin TX"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#ffffff', fontSize: '0.825rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
                    Initial Occupancy Type
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {['Occupied', 'Vacant'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPropertyOccupancy(type as any)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: `1.5px solid ${propertyOccupancy === type ? activeTheme.color : 'rgba(255,255,255,0.05)'}`,
                          backgroundColor: propertyOccupancy === type ? `${activeTheme.color}15` : 'rgba(30,41,59,0.3)',
                          color: propertyOccupancy === type ? activeTheme.color : '#94a3b8',
                          fontWeight: 700,
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          transition: 'all 0.2s',
                        }}
                      >
                        {type === 'Occupied' ? '👥 Occupied' : '🏠 Vacant'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TENANT WORKFLOW */}
            {user.role === 'TENANT' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  Submit details of your lease. This allows your landlord to link your monitoring score streaks properly.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                      Lease Start Date
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '11px', color: '#64748b', display: 'flex' }}><LuCalendar /></span>
                      <input
                        type="date"
                        value={leaseStart}
                        onChange={(e) => setLeaseStart(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px 10px 34px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#ffffff', fontSize: '0.8rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                      Monthly Rent Amount ($)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '11px', color: '#64748b', display: 'flex' }}><LuDollarSign /></span>
                      <input
                        type="number"
                        placeholder="e.g. 1850"
                        value={rentAmount}
                        onChange={(e) => setRentAmount(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px 10px 34px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#ffffff', fontSize: '0.8rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
                    Check-In Streaks Reminder Frequency
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {['daily', 'weekly'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setNotifFreq(f as any)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: `1.5px solid ${notifFreq === f ? activeTheme.color : 'rgba(255,255,255,0.05)'}`,
                          backgroundColor: notifFreq === f ? `${activeTheme.color}15` : 'rgba(30,41,59,0.3)',
                          color: notifFreq === f ? activeTheme.color : '#94a3b8',
                          fontWeight: 700,
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {f === 'daily' ? '🔔 Daily Alert' : '📅 Weekly Summary'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* APPLICANT WORKFLOW */}
            {user.role === 'APPLICANT' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  Activate your behavioral screening checklist by consenting to the sandbox safety guidelines.
                </p>

                <div>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Mock Identity / License Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. TX-DL-9854721"
                    value={idMockNumber}
                    onChange={(e) => setIdMockNumber(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#ffffff', fontSize: '0.825rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{
                  padding: '16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(124,58,237,0.06)',
                  border: '1px solid rgba(124,58,237,0.15)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}>
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: activeTheme.color, cursor: 'pointer' }}
                  />
                  <div>
                    <h5 style={{ fontSize: '0.775rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>7-Day Integrity Program Consent</h5>
                    <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px', lineHeight: '1.4' }}>
                      I agree to answer daily check-ins transparently, acknowledge that participation metrics are shared with my landlord, and authorize program auditing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* AFFILIATE WORKFLOW */}
            {user.role === 'AFFILIATE' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  Link your promotional account details to immediately generate your partner commission link.
                </p>

                <div>
                  <label style={{ fontSize: '0.725rem', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Custom Referral Code / Tag Handle *
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.08)', borderRight: 'none', padding: '10px 14px', borderRadius: '8px 0 0 8px', fontSize: '0.8rem' }}>
                      ref/
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. alexj"
                      value={affiliateTag}
                      onChange={(e) => setAffiliateTag(e.target.value)}
                      style={{ flex: 1, padding: '10px 14px', borderRadius: '0 8px 8px 0', backgroundColor: '#1e293b', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#ffffff', fontSize: '0.825rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(30,41,59,0.4)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: stripeConnected ? '#10b981' : '#eff6ff', color: stripeConnected ? '#ffffff' : '#0a57e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, paddingLeft: '8px' }}>
                      💳
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Stripe Connect Node</h5>
                      <p style={{ fontSize: '0.675rem', color: '#94a3b8', marginTop: '2px' }}>
                        {stripeConnected ? '✅ Active Connection linked' : 'Configure Stripe Connect Mock'}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStripeConnected(!stripeConnected)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: stripeConnected ? 'rgba(16,185,129,0.15)' : activeTheme.color,
                      color: stripeConnected ? '#10b981' : '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {stripeConnected ? 'Disconnect' : 'Connect Stripe'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── STEP 3: Setup Complete Celebration ── */}
        {step === 3 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
            {/* Visual celebration block */}
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              backgroundColor: `${activeTheme.color}20`,
              border: `2px dashed ${activeTheme.color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              color: activeTheme.color,
              animation: 'bounce 2.5s infinite',
              marginBottom: '8px',
            }}>
              <LuFileCheck />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Onboarding Complete!
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', margin: 0, maxWidth: '440px', lineHeight: '1.5' }}>
              Your clearance profile is fully configured in the mock database. Let's redirect you straight into the dashboard to explore!
            </p>

            {/* Quick Summary Review Card */}
            <div style={{
              width: '100%',
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '14px',
              padding: '16px 20px',
              textAlign: 'left',
              marginTop: '8px',
              fontSize: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
                <span style={{ color: '#64748b' }}>Cleared User</span>
                <strong style={{ color: '#ffffff' }}>{user.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '8px' }}>
                <span style={{ color: '#64748b' }}>Email Handle</span>
                <strong style={{ color: '#ffffff' }}>{user.email}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Security Clearance</span>
                <span style={{ color: activeTheme.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.725rem' }}>
                  {user.role} Verified
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── ACTION CONTROLS ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
        }}>
          {/* Back button */}
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1 || isFinishing}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: 'transparent',
              color: step === 1 ? '#64748b' : '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: step === 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
              opacity: step === 1 ? 0.3 : 1
            }}
          >
            <LuChevronLeft /> Back
          </button>

          {/* Next / Finish button */}
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTheme.color,
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: `0 4px 14px ${activeTheme.color}30`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e)=>e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e)=>e.currentTarget.style.opacity = '1'}
            >
              Continue <LuChevronRight />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              disabled={isFinishing}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTheme.color,
                color: '#ffffff',
                fontSize: '0.825rem',
                fontWeight: 800,
                cursor: isFinishing ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: `0 6px 18px ${activeTheme.color}35`,
                transition: 'all 0.2s',
              }}
            >
              {isFinishing ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderTopColor: '#ffffff',
                    animation: 'spin 0.6s linear infinite'
                  }} />
                  <span>Loading Secure Session...</span>
                </>
              ) : (
                <>
                  <span>Initialize Dashboard Session</span>
                  <LuSparkles />
                </>
              )}
            </button>
          )}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}} />
    </div>
  );
}
