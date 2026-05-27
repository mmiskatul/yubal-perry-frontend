'use client';

import React, { useState } from 'react';
import {
  LuUser,
  LuBell,
  LuShield,
  LuMail,
  LuSmartphone,
  LuCircleCheck,
  LuSettings,
  LuBuilding
} from 'react-icons/lu';

export default function LandlordSettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');

  // Profile state
  const [name, setName] = useState('Alex Johnson');
  const [email, setEmail] = useState('alex.johnson@email.com');
  const [phone, setPhone] = useState('(512) 555-0198');
  const [company, setCompany] = useState('AJ Property Group');
  const [saved, setSaved] = useState(false);

  // Notification toggles
  const [notifs, setNotifs] = useState({
    earlyWarnings: true,
    integrityDrops: true,
    checkInReminders: false,
    monthlyReports: true,
    smsAlerts: false
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <LuUser /> },
    { id: 'notifications', label: 'Notifications', icon: <LuBell /> },
    { id: 'security', label: 'Security', icon: <LuShield /> }
  ] as const;

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Settings</h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Manage your account preferences and notification settings
          </p>
        </div>

        {/* Layout: Tabs + Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px', alignItems: 'start' }}>

          {/* Tab Sidebar */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '8px', boxShadow: 'var(--shadow-sm)' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeTab === tab.id ? '#f5f3ff' : 'transparent',
                  color: activeTab === tab.id ? '#7c3aed' : 'var(--text-secondary)',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  marginBottom: '2px'
                }}
              >
                <span style={{ fontSize: '1rem', display: 'flex' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '28px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Profile Settings</h3>
                <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>Update your personal details and company information.</p>

                {/* Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem', border: '3px solid #7c3aed' }}>
                    AJ
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.925rem', color: 'var(--text-primary)', display: 'block' }}>{name}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Landlord · Member since Mar 2025</span>
                  </div>
                  <button className="premium-btn premium-btn-secondary" style={{ marginLeft: 'auto', padding: '8px 16px', borderRadius: '8px', fontSize: '0.775rem' }} onClick={() => alert('Sandbox: Change profile photo')}>
                    Change Photo
                  </button>
                </div>

                {/* Form Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>FULL NAME</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => e.currentTarget.style.borderColor = '#7c3aed'} onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>COMPANY NAME</label>
                    <input type="text" value={company} onChange={e => setCompany(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => e.currentTarget.style.borderColor = '#7c3aed'} onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>EMAIL ADDRESS</label>
                    <div style={{ position: 'relative' }}>
                      <LuMail style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--text-muted)', fontSize: '0.9rem' }} />
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px 14px 10px 38px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#7c3aed'} onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>PHONE NUMBER</label>
                    <div style={{ position: 'relative' }}>
                      <LuSmartphone style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--text-muted)', fontSize: '0.9rem' }} />
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', padding: '10px 14px 10px 38px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#7c3aed'} onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                  <button className="premium-btn premium-btn-primary" style={{ '--btn-color': '#7c3aed', padding: '10px 24px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' } as React.CSSProperties} onClick={handleSave}>
                    {saved ? <><LuCircleCheck /> Saved!</> : 'Save Changes'}
                  </button>
                  <button className="premium-btn premium-btn-secondary" style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem' }} onClick={() => alert('Sandbox: Cancel changes')}>Cancel</button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Notification Preferences</h3>
                <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>Choose how you receive alerts and updates.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { key: 'earlyWarnings', label: 'Early Warnings', desc: 'Alert when a tenant shows behavioral risk signals', icon: <LuBell /> },
                    { key: 'integrityDrops', label: 'Integrity Score Drops', desc: 'Notify when a tenant score drops more than 10 points', icon: <LuShield /> },
                    { key: 'checkInReminders', label: 'Check-In Reminders', desc: 'Daily summary of tenant check-in activity', icon: <LuSettings /> },
                    { key: 'monthlyReports', label: 'Monthly Reports', desc: 'Automatically receive PDF reports each month', icon: <LuMail /> },
                    { key: 'smsAlerts', label: 'SMS Alerts', desc: 'Receive critical alerts via text message', icon: <LuSmartphone /> }
                  ].map((item, i, arr) => (
                    <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                          {item.icon}
                        </div>
                        <div>
                          <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block' }}>{item.label}</strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.desc}</span>
                        </div>
                      </div>
                      {/* Toggle */}
                      <div
                        onClick={() => setNotifs(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                        style={{ width: '46px', height: '26px', borderRadius: '13px', backgroundColor: notifs[item.key as keyof typeof notifs] ? '#7c3aed' : '#e2e8f0', cursor: 'pointer', position: 'relative', transition: 'background-color 0.2s', flexShrink: 0 }}
                      >
                        <div style={{ position: 'absolute', top: '3px', left: notifs[item.key as keyof typeof notifs] ? '23px' : '3px', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 0.2s' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Security Settings</h3>
                <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>Manage your account security and access controls.</p>

                {/* Password Change */}
                <div style={{ marginBottom: '28px', padding: '20px', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <LuShield style={{ color: '#7c3aed' }} /> Password
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                    {['Current Password', 'New Password', 'Confirm New Password'].map((label, i) => (
                      <div key={i}>
                        <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>{label}</label>
                        <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', outline: 'none', boxSizing: 'border-box' }}
                          onFocus={e => e.currentTarget.style.borderColor = '#7c3aed'} onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                      </div>
                    ))}
                  </div>
                  <button className="premium-btn premium-btn-primary" style={{ '--btn-color': '#7c3aed', padding: '9px 20px', borderRadius: '8px', fontSize: '0.825rem', fontWeight: 700 } as React.CSSProperties} onClick={() => alert('Sandbox: Update password')}>
                    Update Password
                  </button>
                </div>

                {/* 2FA */}
                <div style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#e6fbf3', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                      <LuSmartphone />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block' }}>Two-Factor Authentication</strong>
                      <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>✓ Enabled</span>
                    </div>
                  </div>
                  <button className="premium-btn premium-btn-secondary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.775rem' }} onClick={() => alert('Sandbox: Manage 2FA')}>
                    Manage
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

    </div>
  );
}
