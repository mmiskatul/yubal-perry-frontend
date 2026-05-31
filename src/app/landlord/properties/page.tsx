'use client';

import React, { useState } from 'react';
import { LuPlus, LuEllipsisVertical, LuClock, LuFileText, LuActivity } from 'react-icons/lu';

const properties = [
  {
    id: 1,
    name: 'Maple Heights A-12',
    address: '123 Maple Street',
    status: 'VACANT', statuscolor: 'var(--text-secondary)', statusBg: 'var(--color-guest-light)',
    image: '🏡',
    section: 'Pre-Tenancy',
    sectionDetail: 'Not started',
    sectionIcon: <LuClock />,
    sectioncolor: 'var(--text-muted)',
    actionLabel: 'Start Pre-Tenancy Process',
    actioncolor: 'var(--brand-color)',
    actionIcon: '▷',
    actionStyle: 'outline'
  },
  {
    id: 2,
    name: 'Riverside Apt 402',
    address: '45 Riverwalk Drive',
    status: 'VACANT', statuscolor: 'var(--text-secondary)', statusBg: 'var(--color-guest-light)',
    image: '🏊',
    section: 'Pre-Tenancy',
    sectionDetail: 'Day 3 of 7 · Active',
    sectionProgress: 43,
    sectionProgresscolor: 'var(--brand-color)',
    sectionIcon: null,
    sectioncolor: 'var(--brand-color)',
    actionLabel: 'View Progress',
    actioncolor: 'var(--brand-color)',
    actionIcon: '📄',
    actionStyle: 'outline'
  },
  {
    id: 3,
    name: 'Grand Plaza 6A',
    address: '789 Grand Plaza',
    status: 'OCCUPIED', statuscolor: 'var(--color-user)', statusBg: 'var(--color-user-light)',
    image: '🏙️',
    section: 'Monitoring',
    sectionDetail: 'Participation: 68%\nTrend: Slight Decline',
    sectionIcon: <LuActivity />,
    sectioncolor: 'var(--color-support)',
    actionLabel: 'View Monitoring',
    actioncolor: 'var(--brand-color)',
    actionIcon: '📈',
    actionStyle: 'outline'
  },
  {
    id: 4,
    name: 'Grand Plaza 6A',
    address: '789 Grand Plaza',
    status: 'VACANT', statuscolor: 'var(--text-secondary)', statusBg: 'var(--color-guest-light)',
    image: '🏙️',
    section: 'Pre-Tenancy',
    sectionDetail: 'Completed',
    sectionIcon: null,
    sectioncolor: 'var(--color-user)',
    sectionCompleted: true,
    actionLabel: 'View Report',
    actioncolor: 'var(--brand-color)',
    actionIcon: '📄',
    actionStyle: 'outline'
  },
  {
    id: 5,
    name: 'Maple Heights A-12',
    address: '123 Maple Street',
    status: 'OCCUPIED', statuscolor: 'var(--color-user)', statusBg: 'var(--color-user-light)',
    image: '🏡',
    section: 'Monitoring',
    sectionDetail: 'Participation: 82%\nTrend: Stable ···',
    sectionIcon: <LuActivity />,
    sectioncolor: 'var(--color-user)',
    actionLabel: 'View Monitoring',
    actioncolor: 'var(--brand-color)',
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
      statuscolor: newType === 'Occupied' ? 'var(--color-user)' : 'var(--text-secondary)',
      statusBg: newType === 'Occupied' ? 'var(--color-user-light)' : 'var(--color-guest-light)',
      image: '🏠',
      section: 'Pre-Tenancy',
      sectionDetail: 'Not started',
      sectionIcon: <LuClock />,
      sectioncolor: 'var(--text-muted)',
      actionLabel: 'Start Pre-Tenancy Process',
      actioncolor: 'var(--brand-color)',
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
          style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--brand-color)', color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => setIsAddOpen(true)}
        >
          <LuPlus /> + Add Property
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginBottom: '28px', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {[
          { icon: '🏢', label: 'Total Properties', value: propList.length, iconBg: 'var(--brand-light)' },
          { icon: '🔴', label: 'Vacant', value: propList.filter(p => p.status === 'VACANT').length, iconBg: 'var(--color-alert-light)' },
          { icon: '👥', label: 'Occupied', value: propList.filter(p => p.status === 'OCCUPIED').length, iconBg: 'var(--color-user-light)' },
          { icon: '📋', label: 'Under Review', value: 1, iconBg: 'var(--color-support-light)' }
        ].map((c, i) => (
          <div key={i} style={{ padding: '20px 24px', borderRight: i < 3 ? '1px solid var(--border-color)' : 'none', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
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
          <div key={prop.id * 100 + i} style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
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
                <span style={{ fontSize: '0.625rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: prop.statusBg, color: prop.statuscolor, border: `1px solid ${prop.statuscolor}20`, letterSpacing: '0.05em', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                  {prop.status}
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginBottom: '12px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>{prop.section}</div>

                {/* Section detail */}
                {prop.sectionCompleted ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-user)' }}>●</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-user)' }}>Completed</span>
                  </div>
                ) : prop.sectionProgress !== undefined ? (
                  <div>
                    <div style={{ fontSize: '0.775rem', color: prop.sectioncolor, fontWeight: 600, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <LuClock style={{ fontSize: '0.8rem' }} /> {prop.sectionDetail}
                    </div>
                    <div style={{ height: '5px', borderRadius: '3px', backgroundColor: 'var(--border-color)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${prop.sectionProgress}%`, borderRadius: '3px', backgroundColor: prop.sectionProgresscolor || 'var(--brand-color)' }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ fontSize: '0.775rem', color: prop.sectioncolor, display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
                style={{ width: '100%', padding: '9px 16px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--brand-color)', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brand-color)'; e.currentTarget.style.backgroundColor = 'var(--brand-light)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; }}
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
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', padding: '32px', width: '480px', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', position: 'relative', textAlign: 'left' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Add New Property</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Enter property details to add it to your portfolio.</p>
            <button style={{ position: 'absolute', right: '24px', top: '24px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => setIsAddOpen(false)}>×</button>

            <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>PROPERTY NAME *</label>
            <input type="text" placeholder="e.g. Maple Heights A-12" value={newName} onChange={e => setNewName(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', marginBottom: '20px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
              onFocus={e => e.currentTarget.style.borderColor = 'var(--brand-color)'}
              onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            />

            <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>OCCUPANCY *</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {(['Occupied', 'Vacant'] as const).map((type) => (
                <button key={type} onClick={() => setNewType(type)} style={{ padding: '14px', borderRadius: '10px', border: `1.5px solid ${newType === type ? 'var(--brand-color)' : 'var(--border-color)'}`, backgroundColor: newType === type ? 'var(--brand-light)' : 'var(--bg-secondary)', color: newType === type ? 'var(--brand-color)' : 'var(--text-secondary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>
                  {type === 'Occupied' ? '👥 ' : '🏠 '}{type}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }} onClick={() => setIsAddOpen(false)}>Cancel</button>
              <button style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--brand-color)', color: '#ffffff', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 700 }} onClick={handleAdd}>Add Property</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
