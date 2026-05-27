'use client';

import React, { useState } from 'react';
import {
  LuPencil, LuShield, LuUserPlus, LuChevronRight,
  LuCreditCard, LuCalendar, LuBell, LuCircleCheck, LuTriangleAlert
} from 'react-icons/lu';

export default function LandlordSettingsPage() {
  const [notifs, setNotifs] = useState({
    earlyWarnings: true,
    monitoringUpdates: true,
    weeklySummary: true,
    marketing: false
  });

  return (
    <div className="animate-fade-in" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Setting</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
          Manage your account, preferences and system settings.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* ── 1. Account Information ── */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Account Information</h2>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>View and update your account details.</p>
            </div>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
              onClick={() => alert('Sandbox: Edit Profile')}
            >
              <LuPencil style={{ fontSize: '0.85rem' }} /> Edit Profile
            </button>
          </div>

          {/* Profile Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--border-color)', marginTop: '16px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#0a57e3', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0 }}>
              AJ
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '32px', flex: 1 }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Full Name</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>Alex Johnson</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Email Adress</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>alexjonson@gmail.com</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Role</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Landlord</div>
              </div>
            </div>
          </div>

          {/* Password Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '18px' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Password</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>••••••••••</div>
            </div>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
              onClick={() => alert('Sandbox: Change Password')}
            >
              <LuShield style={{ fontSize: '0.85rem' }} /> Change Password
            </button>
          </div>
        </div>

        {/* ── 2. Properties & Team ── */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Properties &amp; Team</h2>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Manage your properties and team members.</p>
            </div>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
              onClick={() => alert('Sandbox: Invite Property Manager')}
            >
              <LuUserPlus style={{ fontSize: '0.85rem' }} /> Invite Property Manager
            </button>
          </div>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
            {/* Managed Properties count */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border-color)', minWidth: '160px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#e6fbf3', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                🏢
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Managed Properties</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>5</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>Active Properties</div>
              </div>
            </div>

            {/* Team Members */}
            <div style={{ flex: 1 }}>
              {[
                { initials: 'JS', color: '#10b981', bg: '#e6fbf3', name: 'John Smith', detail: 'Assigned to 2 properties' },
                { initials: 'SL', color: '#0a57e3', bg: '#eff6ff', name: 'Sarah Lee', detail: 'Assigned to 1 properties' }
              ].map((member, i, arr) => (
                <div
                  key={i}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border-color)' : 'none', cursor: 'pointer' }}
                  onClick={() => alert(`Sandbox: View ${member.name}`)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: member.bg, color: member.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem' }}>
                      {member.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>{member.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1px' }}>{member.detail}</div>
                    </div>
                  </div>
                  <LuChevronRight style={{ color: 'var(--text-muted)', fontSize: '1rem' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3. Billing ── */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Billing</h2>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '2px' }}>View your subscription and payment details.</p>
            </div>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
              onClick={() => alert('Sandbox: Edit Billing Profile')}
            >
              <LuPencil style={{ fontSize: '0.85rem' }} /> Edit Profile
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>
            {/* Active Subscription */}
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#0a57e3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                  <LuCreditCard />
                </div>
                Active Subscription
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { label: 'Maple Heights A-12-Pre-Tenancy' },
                  { label: 'Lakeview A-02-Monitoring' }
                ].map((s, si) => (
                  <div key={si} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>{s.label}</span>
                    <span style={{ fontSize: '0.625rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#e6fbf3', color: '#10b981' }}>ACTIVE</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Payment Method</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>Visa **** 8545</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Expires 04/2026</div>
            </div>

            {/* Next Billing Date */}
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Next Billing Date</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <LuCalendar style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>June 15, 2024</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '7px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.775rem', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
                onClick={() => alert('Sandbox: Update Payment Method')}
              >
                <LuPencil style={{ fontSize: '0.75rem' }} /> Update Payment Method
              </button>
              <button
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '7px', border: '1.5px solid #fca5a5', backgroundColor: '#fff5f5', color: '#ef4444', fontSize: '0.775rem', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
                onClick={() => alert('Sandbox: Cancel Subscription')}
              >
                🗑 Cancel Subscription
              </button>
            </div>
          </div>
        </div>

        {/* ── 4. Notification ── */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>Notification</h2>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Choose what updates you want to receive.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>
            {/* Left: Email icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                <LuBell />
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>Email Notifications</span>
            </div>

            {/* Middle: checkboxes col 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Notifications</div>
              {[
                { key: 'earlyWarnings', label: 'Early Warning Alerts', desc: 'Get notified about early warning alerts.' },
                { key: 'monitoringUpdates', label: 'Monitoring Updates', desc: 'Recived updatetges during the monitoring period.' }
              ].map((item) => (
                <label key={item.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={notifs[item.key as keyof typeof notifs]}
                    onChange={() => setNotifs(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                    style={{ marginTop: '2px', accentColor: '#0a57e3', width: '14px', height: '14px', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>{item.desc}</div>
                  </div>
                </label>
              ))}
            </div>

            {/* Right: checkboxes col 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '22px' }}>
              {[
                { key: 'weeklySummary', label: 'Weekly Summary', desc: 'Receive a weekly summary of property activity.' },
                { key: 'marketing', label: 'Marketing Updates', desc: 'Recive product updates and news.' }
              ].map((item) => (
                <label key={item.key} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={notifs[item.key as keyof typeof notifs]}
                    onChange={() => setNotifs(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                    style={{ marginTop: '2px', accentColor: '#0a57e3', width: '14px', height: '14px', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>{item.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5. Privacy & Compliance ── */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>Privacy &amp; Complience</h2>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Review our data practices and legal information.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'Behavioral observation only', desc: 'We observe behavior through structured interactions.' },
              { title: 'No credit or background checks', desc: 'we do not perform credit or background checks.' },
              { title: 'Final decisions are yours', desc: 'Final rental decisions remain with the landlord.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <LuCircleCheck style={{ color: '#10b981', fontSize: '1.1rem', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
