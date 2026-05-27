'use client';

import React, { useState } from 'react';

export default function SettingsPage() {
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const [fullName, setFullName] = useState('Alex Johnson');
  const [email, setEmail] = useState('alex.johnson@email.com');
  const [phone, setPhone] = useState('(512) 555-0198');

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      {/* Header Title */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          Settings
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Manage your account, notifications, and privacy preferences.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Account & Profile */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '32px'
          } as React.CSSProperties}
        >
          {/* Left section descriptor */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#0a57e3' }}>
              👤
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>Account & Profile</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
                View and update your personal information.
              </p>
            </div>
          </div>

          {/* Right section details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Full Name */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</span>
                {isEditingName ? (
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                    onBlur={()=>setIsEditingName(false)}
                    className="premium-input"
                    style={{ marginTop: '6px', maxWidth: '240px', padding: '6px 10px', fontSize: '0.85rem' }}
                    autoFocus
                  />
                ) : (
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>{fullName}</p>
                )}
              </div>
              <button 
                onClick={()=>setIsEditingName(!isEditingName)}
                style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.75rem', fontWeight: 700, color: '#0a57e3', cursor: 'pointer' }}
              >
                {isEditingName ? 'Save' : 'Edit'}
              </button>
            </div>

            {/* Email Address */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</span>
                {isEditingEmail ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    onBlur={()=>setIsEditingEmail(false)}
                    className="premium-input"
                    style={{ marginTop: '6px', maxWidth: '240px', padding: '6px 10px', fontSize: '0.85rem' }}
                    autoFocus
                  />
                ) : (
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>{email}</p>
                )}
              </div>
              <button 
                onClick={()=>setIsEditingEmail(!isEditingEmail)}
                style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.75rem', fontWeight: 700, color: '#0a57e3', cursor: 'pointer' }}
              >
                {isEditingEmail ? 'Save' : 'Edit'}
              </button>
            </div>

            {/* Phone Number */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Number</span>
                {isEditingPhone ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    onBlur={()=>setIsEditingPhone(false)}
                    className="premium-input"
                    style={{ marginTop: '6px', maxWidth: '240px', padding: '6px 10px', fontSize: '0.85rem' }}
                    autoFocus
                  />
                ) : (
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>{phone}</p>
                )}
              </div>
              <button 
                onClick={()=>setIsEditingPhone(!isEditingPhone)}
                style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.75rem', fontWeight: 700, color: '#0a57e3', cursor: 'pointer' }}
              >
                {isEditingPhone ? 'Save' : 'Edit'}
              </button>
            </div>

          </div>
        </div>

        {/* Notifications */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '32px'
          } as React.CSSProperties}
        >
          {/* Left section descriptor */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#0a57e3' }}>
              🔔
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>Notifications</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
                Choose how and when you want to be notified.
              </p>
            </div>
          </div>

          {/* Right section details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* SMS Toggle */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>SMS Notifications</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Receive text message updates and reminders.</p>
              </div>
              
              {/* Toggle Switch */}
              <div 
                onClick={()=>setSmsNotifications(!smsNotifications)}
                style={{
                  width: '46px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: smsNotifications ? '#0a57e3' : '#cbd5e1',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'background-color 0.2s'
                }}
              >
                <div 
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: '3px',
                    left: smsNotifications ? '25px' : '3px',
                    transition: 'left 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </div>

            {/* Email Toggle */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>Email Notifications</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Receive email updates and reminders.</p>
              </div>
              
              {/* Toggle Switch */}
              <div 
                onClick={()=>setEmailNotifications(!emailNotifications)}
                style={{
                  width: '46px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: emailNotifications ? '#0a57e3' : '#cbd5e1',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'background-color 0.2s'
                }}
              >
                <div 
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: '3px',
                    left: emailNotifications ? '25px' : '3px',
                    transition: 'left 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Privacy & Security */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '32px'
          } as React.CSSProperties}
        >
          {/* Left section descriptor */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#0a57e3' }}>
              🛡️
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>Privacy & Security</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
                Manage your password and privacy settings.
              </p>
            </div>
          </div>

          {/* Right section details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Password */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>Password</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Last updated on May 12, 2024</p>
              </div>
              <button 
                onClick={()=>alert('Change password modal triggered')}
                style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.75rem', fontWeight: 700, color: '#0a57e3', cursor: 'pointer' }}
              >
                Edit
              </button>
            </div>

            {/* Privacy Information */}
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>Privacy Information</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>View how your data is used and protected.</p>
              </div>
              <button 
                onClick={()=>alert('Displaying data privacy standards')}
                style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.75rem', fontWeight: 700, color: '#0a57e3', cursor: 'pointer' }}
              >
                View
              </button>
            </div>

          </div>
        </div>

        {/* Connected Property */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '32px'
          } as React.CSSProperties}
        >
          {/* Left section descriptor */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#0a57e3' }}>
              🏢
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>Connected Property</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
                This is the property you're currently connected to.
              </p>
            </div>
          </div>

          {/* Right section details */}
          <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>Sunset Apartments</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>123 Main Street<br/>Austin, TX 78701</p>
            </div>
            <button 
              onClick={()=>alert('Sunset Apartments tenant directory opened')}
              style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.75rem', fontWeight: 700, color: '#0a57e3', cursor: 'pointer' }}
            >
              View
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
