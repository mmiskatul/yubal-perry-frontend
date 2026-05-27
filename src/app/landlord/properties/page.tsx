'use client';

import React, { useState } from 'react';
import {
  LuPlus,
  LuHouse,
  LuCircleCheck,
  LuClock,
  LuActivity,
  LuTriangleAlert,
  LuEye,
  LuSettings,
  LuInfo
} from 'react-icons/lu';

const properties = [
  {
    id: 1,
    name: 'Maple Heights A-12',
    address: '123 Maple Street, Austin TX 78701',
    type: 'Residential',
    occupancy: 'Occupied',
    tenant: 'Amara Okafor',
    status: 'Active Monitoring',
    integrityScore: 88,
    setupStep: 3,
    setupTotal: 3,
    statusColor: '#10b981',
    statusBg: '#e6fbf3'
  },
  {
    id: 2,
    name: 'Lakeview A-02',
    address: '458 Oak Avenue, Austin TX 78702',
    type: 'Residential',
    occupancy: 'Occupied',
    tenant: 'Marcus Villanueva',
    status: 'Requires Attention',
    integrityScore: 68,
    setupStep: 3,
    setupTotal: 3,
    statusColor: '#ef4444',
    statusBg: '#fff5f5'
  },
  {
    id: 3,
    name: 'Grand Plaza 6A',
    address: '8 Grand Plaza, Austin TX 78703',
    type: 'Residential',
    occupancy: 'Pre-Tenancy',
    tenant: 'Carlos Rivera',
    status: 'Pre-Tenancy Active',
    integrityScore: 76,
    setupStep: 2,
    setupTotal: 3,
    statusColor: '#0a57e3',
    statusBg: '#eff6ff'
  },
  {
    id: 4,
    name: 'Oak Ridge Tower 3B',
    address: '10 Ridge Blvd, Austin TX 78704',
    type: 'Residential',
    occupancy: 'Vacant',
    tenant: null,
    status: 'Vacant',
    integrityScore: null,
    setupStep: 0,
    setupTotal: 3,
    statusColor: 'var(--text-muted)',
    statusBg: '#f1f5f9'
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
      type: 'Residential',
      occupancy: newType,
      tenant: null,
      status: newType === 'Occupied' ? 'Setup Required' : 'Vacant',
      integrityScore: null,
      setupStep: 0,
      setupTotal: 3,
      statusColor: '#f59e0b',
      statusBg: '#fffbeb'
    }]);
    setIsAddOpen(false);
    setNewName('');
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Properties</h1>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Manage and configure all your properties in one place
            </p>
          </div>
          <button
            className="premium-btn premium-btn-primary"
            style={{ '--btn-color': '#7c3aed', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' } as React.CSSProperties}
            onClick={() => setIsAddOpen(true)}
          >
            <LuPlus /> Add Property
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {[
            { label: 'Total Properties', value: propList.length.toString(), icon: <LuHouse />, color: '#0a57e3', bg: '#eff6ff' },
            { label: 'Active Monitoring', value: propList.filter(p => p.status.includes('Monitoring') || p.status === 'Requires Attention').length.toString(), icon: <LuActivity />, color: '#7c3aed', bg: '#f5f3ff' },
            { label: 'Pre-Tenancy', value: propList.filter(p => p.occupancy === 'Pre-Tenancy').length.toString(), icon: <LuClock />, color: '#0a57e3', bg: '#eff6ff' },
            { label: 'Vacant', value: propList.filter(p => p.occupancy === 'Vacant').length.toString(), icon: <LuTriangleAlert />, color: '#f59e0b', bg: '#fffbeb' }
          ].map((c, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.label}</span>
                <span style={{ fontSize: '1.1rem', color: c.color, display: 'flex', padding: '6px', backgroundColor: c.bg, borderRadius: '8px' }}>{c.icon}</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{c.value}</h2>
            </div>
          ))}
        </div>

        {/* Properties Table */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          {/* Table Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.8fr 1.2fr 1fr 1.2fr 1fr', gap: '0', padding: '12px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)', fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <div>Property</div>
            <div>Type</div>
            <div>Status</div>
            <div>Score</div>
            <div>Setup Progress</div>
            <div style={{ textAlign: 'right' }}>Actions</div>
          </div>

          {propList.map((prop, idx) => (
            <div
              key={idx}
              style={{ display: 'grid', gridTemplateColumns: '2fr 0.8fr 1.2fr 1fr 1.2fr 1fr', alignItems: 'center', padding: '18px 24px', borderBottom: idx < propList.length - 1 ? '1px solid var(--border-color)' : 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: prop.statusBg, color: prop.statusColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  <LuHouse />
                </div>
                <div>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block' }}>{prop.name}</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{prop.address}</span>
                </div>
              </div>

              {/* Occupancy */}
              <div>
                <span style={{ fontSize: '0.725rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: prop.occupancy === 'Occupied' ? '#e6fbf3' : prop.occupancy === 'Pre-Tenancy' ? '#eff6ff' : '#f1f5f9', color: prop.occupancy === 'Occupied' ? '#10b981' : prop.occupancy === 'Pre-Tenancy' ? '#0a57e3' : 'var(--text-muted)', fontWeight: 700 }}>
                  {prop.occupancy}
                </span>
              </div>

              {/* Status */}
              <div>
                <span style={{ fontSize: '0.725rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: prop.statusBg, color: prop.statusColor, fontWeight: 700 }}>
                  {prop.status}
                </span>
              </div>

              {/* Score */}
              <div style={{ textAlign: 'left' }}>
                {prop.integrityScore !== null ? (
                  <strong style={{ fontSize: '1.1rem', color: prop.statusColor, fontWeight: 800 }}>{prop.integrityScore}</strong>
                ) : (
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>—</span>
                )}
              </div>

              {/* Setup Progress */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {[1, 2, 3].map((step) => {
                  const done = step <= prop.setupStep;
                  return (
                    <React.Fragment key={step}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: done ? '#10b981' : '#e2e8f0', color: done ? '#ffffff' : 'var(--text-muted)', fontSize: '0.675rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        {done ? '✓' : step}
                      </span>
                      {step < 3 && <div style={{ width: '14px', height: '1.5px', backgroundColor: done && step < prop.setupStep ? '#10b981' : '#e2e8f0' }} />}
                    </React.Fragment>
                  );
                })}
                <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', marginLeft: '4px' }}>
                  {prop.setupStep}/{prop.setupTotal}
                </span>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                <button className="premium-btn premium-btn-secondary" style={{ padding: '6px 10px', borderRadius: '6px', fontSize: '0.725rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onClick={() => alert(`Sandbox: View property ${prop.name}`)}>
                  <LuEye />
                </button>
                <button className="premium-btn premium-btn-secondary" style={{ padding: '6px 10px', borderRadius: '6px', fontSize: '0.725rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onClick={() => alert(`Sandbox: Configure property ${prop.name}`)}>
                  <LuSettings />
                </button>
                {prop.occupancy === 'Vacant' && (
                  <button className="premium-btn premium-btn-primary" style={{ '--btn-color': '#7c3aed', padding: '6px 12px', borderRadius: '6px', fontSize: '0.725rem', fontWeight: 700 } as React.CSSProperties}
                    onClick={() => alert(`Sandbox: Start pre-tenancy for ${prop.name}`)}>
                    Start
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Property Modal */}
        {isAddOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setIsAddOpen(false)}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', width: '480px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', position: 'relative', textAlign: 'left' }} onClick={e => e.stopPropagation()}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>Add New Property</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Choose whether this property is currently occupied or vacant.</p>
              <button style={{ position: 'absolute', right: '24px', top: '24px', background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => setIsAddOpen(false)}>×</button>

              <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PROPERTY NAME *</label>
              <input type="text" placeholder="e.g. Maple Heights A-12" value={newName} onChange={e => setNewName(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.825rem', marginTop: '6px', marginBottom: '20px', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.currentTarget.style.borderColor = '#0a57e3'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
              />

              <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>OCCUPANCY TYPE *</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                {(['Occupied', 'Vacant'] as const).map((type) => (
                  <button key={type} onClick={() => setNewType(type)} style={{ padding: '16px', borderRadius: '10px', border: `1.5px solid ${newType === type ? '#7c3aed' : 'var(--border-color)'}`, backgroundColor: newType === type ? '#f5f3ff' : '#ffffff', color: newType === type ? '#7c3aed' : 'var(--text-secondary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>
                    {type === 'Occupied' ? '👥 ' : '🏠 '}{type}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="premium-btn premium-btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: '8px', fontSize: '0.85rem' }} onClick={() => setIsAddOpen(false)}>Cancel</button>
                <button className="premium-btn premium-btn-primary" style={{ '--btn-color': '#7c3aed', flex: 1, padding: '10px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700 } as React.CSSProperties} onClick={handleAdd}>Add Property</button>
              </div>
            </div>
          </div>
        )}

    </div>
  );
}
