'use client';

import React, { useState } from 'react';
import { LuPlus, LuEllipsisVertical, LuClock, LuFileText, LuActivity } from 'react-icons/lu';

const properties = [
  {
    id: 1,
    name: 'Maple Heights A-12',
    address: '123 Maple Street',
    status: 'VACANT', statusColor: '#64748b', statusBg: '#f1f5f9',
    image: '🏡',
    section: 'Pre-Tenancy',
    sectionDetail: 'Not started',
    sectionIcon: <LuClock />,
    sectionColor: '#94a3b8',
    actionLabel: 'Start Pre-Tenancy Process',
    actionColor: '#0a57e3',
    actionIcon: '▷',
    actionStyle: 'outline'
  },
  {
    id: 2,
    name: 'Riverside Apt 402',
    address: '45 Riverwalk Drive',
    status: 'VACANT', statusColor: '#64748b', statusBg: '#f1f5f9',
    image: '🏊',
    section: 'Pre-Tenancy',
    sectionDetail: 'Day 3 of 7 · Active',
    sectionProgress: 43,
    sectionProgressColor: '#0a57e3',
    sectionIcon: null,
    sectionColor: '#0a57e3',
    actionLabel: 'View Progress',
    actionColor: '#0a57e3',
    actionIcon: '📄',
    actionStyle: 'outline'
  },
  {
    id: 3,
    name: 'Grand Plaza 6A',
    address: '789 Grand Plaza',
    status: 'OCCUPIED', statusColor: '#10b981', statusBg: '#e6fbf3',
    image: '🏙️',
    section: 'Monitoring',
    sectionDetail: 'Participation: 68%\nTrend: Slight Decline',
    sectionIcon: <LuActivity />,
    sectionColor: '#f59e0b',
    actionLabel: 'View Monitoring',
    actionColor: '#0a57e3',
    actionIcon: '📈',
    actionStyle: 'outline'
  },
  {
    id: 4,
    name: 'Grand Plaza 6A',
    address: '789 Grand Plaza',
    status: 'VACANT', statusColor: '#64748b', statusBg: '#f1f5f9',
    image: '🏙️',
    section: 'Pre-Tenancy',
    sectionDetail: 'Completed',
    sectionIcon: null,
    sectionColor: '#10b981',
    sectionCompleted: true,
    actionLabel: 'View Report',
    actionColor: '#0a57e3',
    actionIcon: '📄',
    actionStyle: 'outline'
  },
  {
    id: 5,
    name: 'Maple Heights A-12',
    address: '123 Maple Street',
    status: 'OCCUPIED', statusColor: '#10b981', statusBg: '#e6fbf3',
    image: '🏡',
    section: 'Monitoring',
    sectionDetail: 'Participation: 82%\nTrend: Stable ···',
    sectionIcon: <LuActivity />,
    sectionColor: '#10b981',
    actionLabel: 'View Monitoring',
    actionColor: '#0a57e3',
    actionIcon: '📈',
    actionStyle: 'outline'
  }
];

export default function LandlordPropertiesPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState<'Occupied' | 'Vacant'>('Occupied');
  const [propList, setPropList] = useState(properties);

  const handleAdd = () => {
    if (!newName.trim()) return;
    setPropList([...propList, {
      id: propList.length + 1,
      name: newName.trim(),
      address: 'Address to be confirmed',
      status: newType === 'Occupied' ? 'OCCUPIED' : 'VACANT',
      statusColor: newType === 'Occupied' ? '#10b981' : '#64748b',
      statusBg: newType === 'Occupied' ? '#e6fbf3' : '#f1f5f9',
      image: '🏠',
      section: 'Pre-Tenancy',
      sectionDetail: 'Not started',
      sectionIcon: <LuClock />,
      sectionColor: '#94a3b8',
      actionLabel: 'Start Pre-Tenancy Process',
      actionColor: '#0a57e3',
      actionIcon: '▷',
      actionStyle: 'outline'
    }]);
    setIsAddOpen(false);
    setNewName('');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', textAlign: 'left' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Properties</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Manage your properties and track their current status.
          </p>
        </div>
        <button
          style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#0a57e3', color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => setIsAddOpen(true)}
        >
          <LuPlus /> + Add Property
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginBottom: '28px', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {[
          { icon: '🏢', label: 'Total Properties', value: propList.length, iconBg: '#eff6ff' },
          { icon: '🔴', label: 'Vacant', value: propList.filter(p => p.status === 'VACANT').length, iconBg: '#fff5f5' },
          { icon: '👥', label: 'Occupied', value: propList.filter(p => p.status === 'OCCUPIED').length, iconBg: '#e6fbf3' },
          { icon: '📋', label: 'Under Review', value: 1, iconBg: '#fffbeb' }
        ].map((c, i) => (
          <div key={i} style={{ padding: '20px 24px', borderRight: i < 3 ? '1px solid var(--border-color)' : 'none', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: c.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{c.icon}</div>
            <div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '2px' }}>{c.label}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{c.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Property Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {propList.map((prop, i) => (
          <div key={prop.id * 100 + i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
            {/* Property Image */}
            <div style={{ height: '130px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', position: 'relative' }}>
              {prop.image}
              {/* More button */}
              <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '6px', padding: '4px 6px', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                onClick={() => alert(`Sandbox: More options for ${prop.name}`)}>
                <LuEllipsisVertical style={{ fontSize: '1rem' }} />
              </button>
            </div>

            {/* Card Body */}
            <div style={{ padding: '16px 18px' }}>
              {/* Name + address + badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.925rem', fontWeight: 800, color: 'var(--text-primary)' }}>{prop.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{prop.address}</div>
                </div>
                <span style={{ fontSize: '0.625rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: prop.statusBg, color: prop.statusColor, border: `1px solid ${prop.statusColor}20`, letterSpacing: '0.05em', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                  {prop.status}
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginBottom: '12px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>{prop.section}</div>

                {/* Section detail */}
                {prop.sectionCompleted ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#10b981' }}>●</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10b981' }}>Completed</span>
                  </div>
                ) : prop.sectionProgress !== undefined ? (
                  <div>
                    <div style={{ fontSize: '0.775rem', color: prop.sectionColor, fontWeight: 600, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <LuClock style={{ fontSize: '0.8rem' }} /> {prop.sectionDetail}
                    </div>
                    <div style={{ height: '5px', borderRadius: '3px', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${prop.sectionProgress}%`, borderRadius: '3px', backgroundColor: prop.sectionProgressColor || '#0a57e3' }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ fontSize: '0.775rem', color: prop.sectionColor, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {prop.sectionDetail.split('\n').map((line, li) => (
                      <div key={li} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        {li === 0 && prop.sectionIcon && <span style={{ fontSize: '0.8rem' }}>{prop.sectionIcon}</span>}
                        <span style={{ fontWeight: li === 0 ? 600 : 500 }}>{line}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                style={{ width: '100%', padding: '9px 16px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: '#ffffff', color: '#0a57e3', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a57e3'; e.currentTarget.style.backgroundColor = '#eff6ff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.backgroundColor = '#ffffff'; }}
                onClick={() => alert(`Sandbox: ${prop.actionLabel} — ${prop.name}`)}
              >
                {prop.actionIcon} {prop.actionLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Property Modal */}
      {isAddOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.45)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setIsAddOpen(false)}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', width: '480px', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', position: 'relative', textAlign: 'left' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Add New Property</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Enter property details to add it to your portfolio.</p>
            <button style={{ position: 'absolute', right: '24px', top: '24px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => setIsAddOpen(false)}>×</button>

            <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>PROPERTY NAME *</label>
            <input type="text" placeholder="e.g. Maple Heights A-12" value={newName} onChange={e => setNewName(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', marginBottom: '20px', outline: 'none', boxSizing: 'border-box' }}
              onFocus={e => e.currentTarget.style.borderColor = '#0a57e3'}
              onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            />

            <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>OCCUPANCY *</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {(['Occupied', 'Vacant'] as const).map((type) => (
                <button key={type} onClick={() => setNewType(type)} style={{ padding: '14px', borderRadius: '10px', border: `1.5px solid ${newType === type ? '#0a57e3' : 'var(--border-color)'}`, backgroundColor: newType === type ? '#eff6ff' : '#ffffff', color: newType === type ? '#0a57e3' : 'var(--text-secondary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>
                  {type === 'Occupied' ? '👥 ' : '🏠 '}{type}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: '#ffffff', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }} onClick={() => setIsAddOpen(false)}>Cancel</button>
              <button style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: '#0a57e3', color: '#ffffff', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 700 }} onClick={handleAdd}>Add Property</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
