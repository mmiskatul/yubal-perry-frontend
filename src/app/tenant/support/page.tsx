'use client';

import React from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const topics = [
    { title: 'Check-Ins', desc: 'Learn how check-ins work and how to stay on track each month.', icon: '📅', color: 'var(--brand-light)', fontColor: 'var(--brand-color)' },
    { title: 'Privacy & Security', desc: 'Your information is private and secure.', icon: '🔒', color: 'var(--color-user-light)', fontColor: 'var(--color-user)' },
    { title: 'Notifications', desc: 'Manage your reminders and notification preferences.', icon: '🔔', color: 'var(--color-support-light)', fontColor: 'var(--color-support)' },
    { title: 'Account & Settings', desc: 'Update your account information and preferences.', icon: '👤', color: 'var(--color-alert-light)', fontColor: '#ef4444' },
  ];

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      {/* Header Title */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          Help & Support
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Find answers and get support from our team.
        </p>
      </div>

      {/* How we can help Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Support team dispatch */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': 'var(--brand-color)', 
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          } as React.CSSProperties}
        >
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', color: 'var(--brand-color)' }}>
            💬
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Message our support team</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.4', marginBottom: '16px' }}>
              Send us a message and we'll get back to you as soon as possible.
            </p>
            <Link 
              href="/tenant/messages" 
              className="premium-btn premium-btn-primary" 
              style={{ '--btn-color': 'var(--brand-color)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.8rem', textDecoration: 'none' } as React.CSSProperties}
            >
              Send Message
            </Link>
          </div>
        </div>

        {/* SLA Ticker */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': 'var(--brand-color)', 
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          } as React.CSSProperties}
        >
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', color: 'var(--brand-color)' }}>
            🕒
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>We typically respond within 24 hours</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.4' }}>
              Our team replies within 24 hours on business days (Monday – Friday).
            </p>
          </div>
        </div>

      </div>

      {/* Popular Help Topics */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>Popular Help Topics</h3>
          <a href="#" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-color)', textDecoration: 'none' }}>
            View All Articles
          </a>
        </div>

        {/* Topic Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {topics.map((topic, i) => (
            <div 
              key={i} 
              className="glass-card" 
              style={{ 
                '--role-color': topic.fontColor, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                padding: '24px',
                minHeight: '200px'
              } as React.CSSProperties}
              onMouseEnter={(e)=>e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e)=>e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: topic.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: topic.fontColor, marginBottom: '16px' }}>
                  {topic.icon}
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {topic.title}
                </h4>
                <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  {topic.desc}
                </p>
              </div>

              <div style={{ marginTop: '16px' }}>
                <a href="#" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-color)', textDecoration: 'none' }}>
                  View Article ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Messages box */}
      <div className="glass-card" style={{ '--role-color': 'var(--brand-color)' } as React.CSSProperties}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>Recent Messages</h3>
          <Link href="/tenant/messages" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-color)', textDecoration: 'none' }}>
            Go to Messages
          </Link>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
          View your recent conversations with our support team. You have no unread direct messages outside check-in logs.
        </p>
      </div>

    </div>
  );
}
