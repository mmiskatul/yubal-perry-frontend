'use client';

import React, { useState } from 'react';
import { 
  LuLayoutDashboard, 
  LuClock, 
  LuActivity, 
  LuShieldAlert, 
  LuCalendar, 
  LuPlus, 
  LuChevronRight, 
  LuHouse, 
  LuFileText, 
  LuBuilding, 
  LuCircleCheck, 
  LuInfo,
  LuSlidersHorizontal
} from 'react-icons/lu';

export default function LandlordOverviewPage() {
  // Active demo state matching the 4 screenshots!
  const [activeState, setActiveState] = useState<1 | 2 | 3 | 4>(1);
  const [activePropertyFilter, setActivePropertyFilter] = useState<'all' | 'vacant' | 'occupied' | 'action'>('all');

  const preTenancyList = [
    { name: 'Maple Heights A-12', address: '123 Maple Street', cycle: 'Day 3 of 7', status: 'Active', color: 'var(--brand-color)', bg: '#eff6ff', avatar: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=80&q=80' },
    { name: 'Riverside Apt 402', address: '45 Temecula Drive', cycle: 'Day 5 of 7', status: 'Active', color: 'var(--brand-color)', bg: '#eff6ff', avatar: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=80&q=80' },
    { name: 'Grand Plaza 6A', address: '8 Grand Plaza', cycle: 'Day 7 of 7', status: 'Completed', color: 'var(--color-user)', bg: '#e6fbf3', avatar: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=80&q=80' },
    { name: 'Oak Ridge Tower', address: 'Grand Plaza 6A', cycle: 'Day 7 of 7', status: 'Completed', color: 'var(--color-user)', bg: '#e6fbf3', avatar: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=80&q=80' }
  ];

  const warnings = [
    { name: 'Marcus Villanueva', change: 'Participation dropped from 82% to 68%', desc: 'Immediate Attention Required', color: '#ef4444', bg: '#fff5f5', border: '#fee2e2', initials: 'MV' },
    { name: 'Elena Rossi', change: 'Integrity Score dropped from 98 to 74', desc: 'Monitor Closely', color: 'var(--color-support)', bg: '#fffbeb', border: '#fef3c7', initials: 'ER' }
  ];

  const recentActivities = [
    { text: 'Oak Ridge Tower monitoring is active', time: 'Today 10:30 AM', type: 'success' },
    { text: 'Grand Plaza 6A completed pre-tenancy process', time: 'Yesterday 4:15 PM', type: 'info' },
    { text: 'Riverside Apt 402 has an early warning', time: 'Yesterday 9:20 AM', type: 'warning' }
  ];

  // Properties table matching Screenshot 3
  const propertiesData = [
    { name: 'Maple Heights A-12', type: 'Vacant', status: 'Not Started', steps: [true, false, false], btnText: 'Start Pre-Tenancy' },
    { name: 'Lakeview A-02', type: 'Occupied', status: 'Not Started', steps: [true, true, false], btnText: 'Add Tenant Details' },
    { name: 'Oakridge D-01', type: 'Vacant', status: 'Active', steps: [true, true, true], btnText: 'View Progress' }
  ];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Sandbox Selector Bar - Toggle between the 4 screen setups */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-primary)',
          border: '1.5px dashed var(--border-color)',
          borderRadius: '12px',
          padding: '12px 20px',
          marginBottom: '24px'
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          💡 LANDLORD DASHBOARD MOCK PREVIEWS (TABS):
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 1, label: '1. Vacant/Add Property' },
            { id: 2, label: '2. Add Tenant Details' },
            { id: 3, label: '3. Setup Required Grid' },
            { id: 4, label: '4. Pre-Tenancy Observe' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveState(tab.id as any)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.725rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: activeState === tab.id ? 'var(--brand-color)' : 'var(--border-color)',
                backgroundColor: activeState === tab.id ? 'var(--brand-color)' : 'var(--bg-secondary)',
                color: activeState === tab.id ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Purple Header Panel Cards based on Active State */}
      <div style={{ marginBottom: '32px' }}>
        {activeState === 1 && (
          <div 
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
              borderRadius: '16px',
              padding: '24px 32px',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                <LuBuilding />
              </div>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Get Started with Tenant Observation</h2>
                <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>Add a property and choose whether it is vacant or occupied</p>
              </div>
            </div>
            <button 
              className="premium-btn" 
              style={{ backgroundColor: 'var(--bg-secondary)', color: '#7c3aed', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.825rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              onClick={() => alert('sandbox action: Add a vacant/occupied property')}
            >
              Add Property <LuChevronRight />
            </button>
          </div>
        )}

        {activeState === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div 
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                borderRadius: '16px',
                padding: '24px 32px',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <LuPlus />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Add Your Tenant Details</h2>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>You've added your property. Now add your tenant details to start the monitoring process.</p>
                </div>
              </div>
              <button 
                className="premium-btn" 
                style={{ backgroundColor: 'var(--bg-secondary)', color: '#7c3aed', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.825rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                onClick={() => alert('sandbox action: Add tenant credentials')}
              >
                Add Tenant Details <LuChevronRight />
              </button>
            </div>

            {/* Stepper Progress bar matching Screenshot 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px 24px', boxShadow: 'var(--shadow-sm)' }}>
              {[
                { step: '1', title: 'Add Tenant Details', desc: 'Add tenant names, contact details, and occupancy logs.', status: 'Not Started', active: true },
                { step: '2', title: 'Activate Monitoring', desc: 'Trigger initial check-in scheduling cycles.', status: 'Not Started', active: false },
                { step: '3', title: 'Monitoring Active', desc: 'Observe ongoing daily integrity metrics.', status: 'Not Started', active: false }
              ].map((s, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left', opacity: s.active ? 1 : 0.65 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: s.active ? '#10b981' : '#e2e8f0', color: s.active ? '#ffffff' : 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>
                    {s.step}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{s.title}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.3' }}>{s.desc}</p>
                    <span style={{ fontSize: '0.675rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginTop: '6px' }}>● {s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeState === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Split Purple banner header matching Screenshot 3 */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                borderRadius: '16px',
                padding: '24px 32px',
                color: '#ffffff',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr',
                gap: '24px',
                alignItems: 'center',
                boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <LuBuilding />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>You Have Properties That Require Setup</h2>
                  <p style={{ fontSize: '0.8rem', opacity: 0.9, marginTop: '4px' }}>Start the setup process for each property.</p>
                </div>
              </div>

              {/* Action Column 1 */}
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                <div>
                  <strong style={{ fontSize: '1.25rem', display: 'block', fontWeight: 800 }}>2</strong>
                  <span style={{ fontSize: '0.725rem', opacity: 0.8 }}>Vacant Properties</span>
                </div>
                <button 
                  style={{ backgroundColor: 'var(--bg-secondary)', color: '#7c3aed', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem', fontWeight: 700, cursor: 'pointer' }}
                  onClick={() => alert('Start pre-tenancy onboarding')}
                >
                  Start Pre-Tenancy &rarr;
                </button>
              </div>

              {/* Action Column 2 */}
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                <div>
                  <strong style={{ fontSize: '1.25rem', display: 'block', fontWeight: 800 }}>1</strong>
                  <span style={{ fontSize: '0.725rem', opacity: 0.8 }}>Occupied Properties</span>
                </div>
                <button 
                  style={{ backgroundColor: 'var(--bg-secondary)', color: '#7c3aed', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem', fontWeight: 700, cursor: 'pointer' }}
                  onClick={() => alert('Start tenant details settings')}
                >
                  Set Up Monitoring &rarr;
                </button>
              </div>
            </div>

            {/* Properties Grid Table matching Screenshot 3 */}
            <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 0', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
              <div style={{ padding: '0 24px 16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Your Properties (3)</h3>
                
                {/* Filter tabs */}
                <div style={{ display: 'flex', gap: '4px', backgroundColor: 'var(--bg-primary)', padding: '3px', borderRadius: '8px' }}>
                  {['all', 'vacant', 'occupied', 'action'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActivePropertyFilter(filter as any)}
                      style={{
                        padding: '4px 10px',
                        border: 'none',
                        backgroundColor: activePropertyFilter === filter ? '#ffffff' : 'transparent',
                        color: activePropertyFilter === filter ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        textTransform: 'capitalize'
                      }}
                    >
                      {filter} {filter === 'all' ? '(3)' : filter === 'vacant' ? '(2)' : filter === 'occupied' ? '(1)' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table Body */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', padding: '12px 24px', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)', fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <div style={{ flex: 1.5 }}>Property</div>
                  <div style={{ flex: 0.8 }}>Type</div>
                  <div style={{ flex: 1 }}>Status</div>
                  <div style={{ flex: 1.5 }}>Setup Progress</div>
                  <div style={{ flex: 1, textAlign: 'right' }}>Actions</div>
                </div>

                {propertiesData.map((prop, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '16px 24px',
                      borderBottom: idx === propertiesData.length - 1 ? 'none' : '1px solid var(--border-color)',
                      fontSize: '0.8rem'
                    }}
                  >
                    {/* Name */}
                    <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}><LuHouse /></div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{prop.name}</strong>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>123 Mock Lane</span>
                      </div>
                    </div>

                    {/* Type badge */}
                    <div style={{ flex: 0.8 }}>
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: prop.type === 'Vacant' ? 'var(--color-guest-light)' : 'var(--color-user-light)', color: prop.type === 'Vacant' ? 'var(--text-secondary)' : 'var(--color-user)', fontWeight: 700 }}>
                        {prop.type}
                      </span>
                    </div>

                    {/* Status badge */}
                    <div style={{ flex: 1, fontWeight: 600, color: prop.status === 'Active' ? 'var(--brand-color)' : 'var(--text-muted)' }}>
                      ● {prop.status}
                    </div>

                    {/* Stepper circles */}
                    <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {[1, 2, 3].map((step) => {
                        const done = prop.steps[step - 1];
                        return (
                          <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                            <span 
                              style={{ 
                                width: '20px', 
                                height: '20px', 
                                borderRadius: '50%', 
                                backgroundColor: done ? 'var(--color-user)' : 'var(--border-color)', 
                                color: done ? '#ffffff' : 'var(--text-muted)', 
                                fontSize: '0.675rem', 
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {done ? '✓' : step}
                            </span>
                            {step < 3 && <div style={{ width: '20px', height: '1.5px', backgroundColor: 'var(--border-color)' }} />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Button */}
                    <div style={{ flex: 1, textAlign: 'right' }}>
                      <button 
                        className={`premium-btn ${prop.btnText === 'Start Pre-Tenancy' ? 'premium-btn-primary' : 'premium-btn-secondary'}`}
                        style={{ '--btn-color': 'var(--brand-color)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem', fontWeight: 700 } as React.CSSProperties}
                        onClick={() => alert(`sandbox action: ${prop.btnText}`)}
                      >
                        {prop.btnText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeState === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div 
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                borderRadius: '16px',
                padding: '24px 32px',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <LuBuilding />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Start Observing Your Next Tenant</h2>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>Add an applicant to begin the 7-day behavior.</p>
                </div>
              </div>
              <button 
                className="premium-btn" 
                style={{ backgroundColor: 'var(--bg-secondary)', color: '#7c3aed', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.825rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                onClick={() => alert('sandbox action: Add a pre-tenancy applicant')}
              >
                Add an Applicant <LuChevronRight />
              </button>
            </div>

            {/* Stepper Progress bar matching Screenshot 4 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px 24px', boxShadow: 'var(--shadow-sm)' }}>
              {[
                { step: '1', title: 'Start Pre-Tenancy Process', desc: 'Configure pre-tenancy parameters and check-in times.', status: 'Not Started', active: true },
                { step: '2', title: 'Pre-Tenancy Active', desc: 'Collect daily check-ins for the 7-day streak cycle.', status: 'Not Started', active: false },
                { step: '3', title: 'Pre-Tenancy Complete', desc: 'Review completed behaviors and integrity logs.', status: 'Not Started', active: false }
              ].map((s, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left', opacity: s.active ? 1 : 0.65 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: s.active ? '#10b981' : '#e2e8f0', color: s.active ? '#ffffff' : 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>
                    {s.step}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{s.title}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.3' }}>{s.desc}</p>
                    <span style={{ fontSize: '0.675rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginTop: '6px' }}>● {s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Core section: Behavioral Overview */}
      <div 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 32px',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'left',
          marginBottom: '32px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Behavioral Overview</h3>
          <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginLeft: '4px' }}>See how your tenants behavior is classified</span>
        </div>

        {/* 3 Overview cards matching screenshots */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {/* Card 1: Requires Attention */}
          <div style={{ border: '1px solid var(--color-alert-border)', borderRadius: '10px', padding: '20px', backgroundColor: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ef4444', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ⚠ Requires Attention
              </h4>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.4' }}>
                Behavioral changes detected that may require your attention.
              </p>
            </div>
            <button 
              className="premium-btn" 
              style={{ backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.725rem', fontWeight: 700, width: '100%', cursor: 'pointer' }}
              onClick={() => alert('Review properties with early warnings')}
            >
              Review Now
            </button>
          </div>

          {/* Card 2: Monitor */}
          <div style={{ border: '1px solid var(--color-support-border)', borderRadius: '10px', padding: '20px', backgroundColor: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-support)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  ● Monitor
                </h4>
                <span style={{ fontSize: '0.625rem', fontWeight: 700, backgroundColor: 'var(--color-support-light)', color: '#b45309', padding: '2px 8px', borderRadius: '4px' }}>26 Tenants</span>
              </div>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.4' }}>
                Some changes in behavior observed, continuous monitoring.
              </p>
            </div>
            <button 
              className="premium-btn" 
              style={{ backgroundColor: 'var(--color-support-light)', color: '#b45309', border: '1px solid var(--color-support-border)', borderRadius: '6px', padding: '6px 12px', fontSize: '0.725rem', fontWeight: 700, width: '100%', cursor: 'pointer' }}
              onClick={() => alert('View monitored tenant list')}
            >
              Monitor &gt;
            </button>
          </div>

          {/* Card 3: Stable */}
          <div style={{ border: '1px solid #c6f6e5', borderRadius: '10px', padding: '20px', backgroundColor: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '140px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-user)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  ✓ Stable
                </h4>
                <span style={{ fontSize: '0.625rem', fontWeight: 700, backgroundColor: 'var(--color-user-light)', color: '#047857', padding: '2px 8px', borderRadius: '4px' }}>154 Tenants</span>
              </div>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.4' }}>
                Consistent behavior and engagement over time.
              </p>
            </div>
            <button 
              className="premium-btn" 
              style={{ backgroundColor: 'var(--color-user-light)', color: '#047857', border: '1px solid var(--color-user-border)', borderRadius: '6px', padding: '6px 12px', fontSize: '0.725rem', fontWeight: 700, width: '100%', cursor: 'pointer' }}
              onClick={() => alert('View stable tenant list')}
            >
              View All &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Middle Double Pane: Pre-Tenancy Process & Early Warning Center */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Pre-Tenancy Process listing */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Pre-Tenancy Process</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Applicants in the 7-day behavior process before tenant selection</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {preTenancyList.map((row, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundImage: `url(${row.avatar})`, backgroundSize: 'cover', border: '1px solid var(--border-color)' }} />
                  <div>
                    <h4 style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>{row.name}</h4>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>{row.address}</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 500 }}>{row.cycle}</span>
                  <span style={{ fontSize: '0.675rem', padding: '3px 10px', borderRadius: '6px', backgroundColor: row.bg, color: row.color, fontWeight: 700 }}>
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Early Warning Center Card */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Early Warning Center</h3>
            <a href="#" style={{ fontSize: '0.75rem', color: 'var(--brand-color)', fontWeight: 700, textDecoration: 'none' }} onClick={()=>alert('View all warnings logs')}>View All</a>
          </div>

          {/* Featured Warning block */}
          <div style={{ border: '1.5px solid var(--border-color)', borderRadius: '12px', padding: '16px', display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ width: '70px', height: '56px', borderRadius: '8px', backgroundImage: 'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&q=80)', backgroundSize: 'cover' }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>Lakeview A-02</h4>
                <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)', fontWeight: 700 }}>Occupied/Healthy</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px', display: 'block' }}>458 Oak Avenue</span>
            </div>
          </div>

          {/* Metric rows checklist matching early warnings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'PARTICIPATION', val: '88% Stable', color: 'var(--color-user)', bg: '#e6fbf3' },
              { label: 'RESPONSE TIMING', val: 'On Time', color: 'var(--brand-color)', bg: '#eff6ff' },
              { label: 'COMMUNICATION', val: 'Good', color: 'var(--brand-color)', bg: '#eff6ff' }
            ].map((row, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '12px 14px', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '8px',
                  cursor: 'pointer' 
                }}
                onClick={()=>alert(`Metric context: ${row.label}`)}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{row.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: row.bg, color: row.color, fontWeight: 700 }}>{row.val}</span>
                  <LuChevronRight style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} />
                </div>
              </div>
            ))}
          </div>
          
          <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '16px', textAlign: 'center' }}>
            ⓘ Data reflects ongoing behavior and engagement patterns.
          </span>
        </div>

      </div>

      {/* Second warnings alert row */}
      <div 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 32px',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'left',
          marginBottom: '32px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Early Warning Center</h3>
            <p style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Behavioral changes observed that may require your attention</p>
          </div>
          <a href="#" style={{ fontSize: '0.75rem', color: 'var(--brand-color)', fontWeight: 700, textDecoration: 'none' }} onClick={()=>alert('View all warnings logs')}>View All</a>
        </div>

        {/* 2 Warning cards matching Screenshot 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {warnings.map((w, idx) => (
            <div 
              key={idx}
              style={{
                border: `1.5px solid ${w.border}`,
                borderRadius: '12px',
                padding: '16px 20px',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: w.bg, color: w.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                {w.initials}
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.825rem', color: 'var(--text-primary)' }}>{w.name}</strong>
                  <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>Today</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginTop: '4px' }}>
                  {w.change}
                </span>
                <span style={{ fontSize: '0.675rem', fontWeight: 700, color: w.color, display: 'inline-block', padding: '2px 8px', borderRadius: '4px', backgroundColor: `${w.color}15`, marginTop: '8px' }}>
                  {w.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <LuInfo /> Warnings are sent only when significant drops occur.
        </p>
      </div>

      {/* Main Portfolio Grid System matching Screenshot 1 */}
      <div 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 0',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'left',
          marginBottom: '32px'
        }}
      >
        <div style={{ padding: '0 32px 16px 32px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Portfolio Overview</h3>
            <p style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Key status and actions across your properties</p>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }} onClick={()=>alert('Definitions walkthrough guide')}>
            <LuInfo /> How to read this
          </button>
        </div>

        {/* Horizontal colored metrics row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '24px 32px' }}>
          {[
            { title: 'Total Properties', count: '3', desc: 'All properties you manage', color: 'var(--color-user)', bg: '#e6fbf3', border: '#a7f3d0', icon: <LuHouse /> },
            { title: 'Pre-Tenancy', count: '1', desc: 'Properties preparing for new tenants', color: 'var(--brand-color)', bg: '#eff6ff', border: '#bfdbfe', icon: <LuClock /> },
            { title: 'Active Monitoring', count: '2', desc: 'Properties with active tenants includes 1 requiring attention', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', icon: <LuActivity /> },
            { title: 'Requires Attention', count: '1', desc: 'Of the 2 active properties (early warning)', color: '#ef4444', bg: '#fff5f5', border: '#fca5a5', icon: <LuShieldAlert /> }
          ].map((card, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: card.bg,
                border: `1px solid ${card.border}`,
                borderRadius: '10px',
                padding: '16px 20px',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: card.color }}>
                <span style={{ fontSize: '1.15rem' }}>{card.icon}</span>
                <strong style={{ fontSize: '1.5rem', fontWeight: 800 }}>{card.count}</strong>
              </div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: card.color, marginTop: '12px' }}>{card.title}</h4>
              <p style={{ fontSize: '0.675rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.3' }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Properties Requiring Action grid panel */}
        <div style={{ padding: '0 32px 24px 32px' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
            Properties Requiring Action <span style={{ color: 'var(--brand-color)', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer' }} onClick={()=>alert('Trigger checklist details')}>(Next Steps)</span>
          </h4>
          <p style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Overview of your properties and the recommended steps.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: '1 Property in Pre-Tenancy', sub: 'Preparing for new tenants', status: 'Pre-Tenancy', btn: 'Continue Setup', color: 'var(--brand-color)', disabled: false },
              { label: '2 Properties with Active Tenants', sub: 'We are monitoring tenant behavior', status: 'Active Monitoring (includes 1 requiring attention)', btn: 'View Properties', color: '#7c3aed', disabled: false },
              { label: '1 Property Requiring Attention', sub: 'Has an early warning that needs review', status: 'Requires Attention (included in Active Monitoring)', btn: 'View Alert', color: '#ef4444', disabled: false },
              { label: '0 Vacant Properties', sub: 'No active tenants', status: 'Vacant', btn: 'No Action Needed', color: 'var(--text-muted)', disabled: true }
            ].map((row, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: row.color }} />
                  <div>
                    <strong style={{ fontSize: '0.825rem', color: 'var(--text-primary)', display: 'block' }}>{row.label}</strong>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px', display: 'block' }}>{row.sub}</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>● {row.status}</span>
                  <button 
                    className={`premium-btn ${row.disabled ? '' : row.btn === 'View Alert' ? 'premium-btn-secondary' : 'premium-btn-primary'}`}
                    style={{ 
                      '--btn-color': row.color, 
                      padding: '8px 16px', 
                      borderRadius: '6px', 
                      fontSize: '0.725rem', 
                      fontWeight: 700, 
                      opacity: row.disabled ? 0.4 : 1,
                      cursor: row.disabled ? 'not-allowed' : 'pointer'
                    } as React.CSSProperties}
                    disabled={row.disabled}
                    onClick={() => alert(`sandbox action: ${row.btn}`)}
                  >
                    {row.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginTop: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
            Total: 3 properties | 1 Pre-Tenancy | 2 Active (1 requiring attention) | 1 Requires Attention (subset of active) | 0 Vacant
          </span>
        </div>

      </div>

      {/* Bottom section: Recent Activity & What does this mean? columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        
        {/* Recent Activity */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Recent Activity</h3>
          <p style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Latest updates across your portfolio.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {recentActivities.map((act, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: act.type === 'warning' ? '#ef4444' : act.type === 'info' ? 'var(--brand-color)' : 'var(--color-user)' }} />
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>{act.text}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>{act.time}</span>
                  </div>
                </div>
                <LuChevronRight style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} />
              </div>
            ))}
          </div>
          
          <button 
            style={{ background: 'none', border: 'none', color: 'var(--brand-color)', fontSize: '0.775rem', fontWeight: 700, marginTop: '20px', cursor: 'pointer', textDecoration: 'none' }}
            onClick={()=>alert('Displaying complete activity listings')}
          >
            View All Properties
          </button>
        </div>

        {/* Definitions block: What does this mean? */}
        <div style={{ backgroundColor: 'var(--color-support-light)', border: '1px solid var(--color-support-border)', borderRadius: '12px', padding: '28px 32px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#b45309', marginBottom: '16px' }}>What does this mean?</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'Pre-Tenancy (1)', text: 'Properties preparing for new tenants.', color: 'var(--brand-color)', bg: '#eff6ff' },
              { title: 'Active Monitoring (2)', text: 'Properties with active tenants and are currently being monitored.', highlight: 'Includes 1 requiring attention', color: '#7c3aed', bg: '#f5f3ff' },
              { title: 'Requires Attention (1)', text: 'These properties have an early warning and need your review. Included in Active Monitoring.', color: '#ef4444', bg: '#fff5f5' },
              { title: 'Total Properties (3)', text: 'The total includes all properties in every status (occupied & vacant).', color: 'var(--color-user)', bg: '#e6fbf3' }
            ].map((def, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: def.bg, color: def.color, fontSize: '0.675rem' }}><LuInfo /></span>
                <div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: def.color }}>{def.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: '#78350f', marginTop: '2px', lineHeight: '1.4' }}>{def.text}</p>
                  {def.highlight && (
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, backgroundColor: 'var(--color-support-light)', color: '#b45309', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginTop: '4px' }}>
                      {def.highlight}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
