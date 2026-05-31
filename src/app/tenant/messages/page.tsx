'use client';

import React, { useState } from 'react';

interface MailMessage {
  id: string;
  subject: string;
  sender: string;
  date: string;
  snippet: string;
  unread: boolean;
  timeSent?: string;
  fullBody: string[];
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<MailMessage[]>([
    {
      id: 'msg_001',
      subject: 'Monthly Check-In Reminder',
      sender: 'Tenant Integrity Team',
      date: 'Today',
      timeSent: '9:00 AM',
      snippet: "Don't forget to complete your daily check-in...",
      unread: false,
      fullBody: [
        'Hello Alex,',
        'This is a friendly reminder to complete your daily check-in.',
        'You have 4 days remaining in your current participation window.',
        'Thank you for staying engaged and helping us build a better community together.',
        'Best regards,',
        'The Tenant Integrity Team'
      ]
    },
    {
      id: 'msg_002',
      subject: 'Thank You!',
      sender: 'Tenant Integrity Team',
      date: 'May 3, 2024',
      timeSent: '4:15 PM',
      snippet: 'Thank you for completing your check-ins.',
      unread: true,
      fullBody: [
        'Hello Alex,',
        'We wanted to take a moment to say thank you for completing all 7 of your daily check-ins for the April 2024 participation cycle.',
        'Your consistent participation helps us maintain compliance and integrity benchmarks.',
        'Best regards,',
        'The Tenant Integrity Team'
      ]
    },
    {
      id: 'msg_003',
      subject: 'System Update',
      sender: 'Tenant Integrity Team',
      date: 'Apr 28, 2024',
      timeSent: '11:30 AM',
      snippet: "We've made some updates to improve your...",
      unread: false,
      fullBody: [
        'Hello Alex,',
        "We've updated our dashboard client to introduce smoother page transitions, dynamic circular check-in components, and robust Axios refresh interceptors.",
        'No action is required on your part. Feel free to explore the new settings panels.',
        'Regards,',
        'Development Operations'
      ]
    },
    {
      id: 'msg_004',
      subject: 'We Value Your Feedback',
      sender: 'Tenant Integrity Team',
      date: 'Apr 20, 2024',
      timeSent: '10:00 AM',
      snippet: 'Share your thoughts and help us improve.',
      unread: false,
      fullBody: [
        'Hi Alex,',
        'We want to hear about your experience using Tenant Integrity. Please take 2 minutes to fill out our quick survey.',
        'Your replies help us improve the platform for applicants and tenants alike.',
        'Sincerely,',
        'Customer Experience Team'
      ]
    },
    {
      id: 'msg_005',
      subject: 'Welcome to Tenant Integrity',
      sender: 'Tenant Integrity Team',
      date: 'Apr 15, 2024',
      timeSent: '9:00 AM',
      snippet: "Here's a quick overview to help you get started...",
      unread: false,
      fullBody: [
        'Welcome Alex Johnson!',
        "Your account has been successfully provisioned. You are assigned as a standard Applicant in the Tenant Integrity portal.",
        'Your monthly cycle starts on the 1st of each month. Please make sure to complete all 7 check-ins during your allocated windows.',
        'Welcome aboard!',
        'The Tenant Integrity Support Staff'
      ]
    }
  ]);

  const [activeMessageId, setActiveMessageId] = useState('msg_001');
  const [replyText, setReplyText] = useState('');
  const [threadReplies, setThreadReplies] = useState<Record<string, { sender: string; time: string; text: string }[]>>({});

  const activeMessage = messages.find(m => m.id === activeMessageId) || messages[0];

  const handleSelectMessage = (msgId: string) => {
    setActiveMessageId(msgId);
    setMessages(prev =>
      prev.map(m => m.id === msgId ? { ...m, unread: false } : m)
    );
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newReply = {
      sender: 'Alex Johnson',
      time: 'Just Now',
      text: replyText
    };

    setThreadReplies(prev => ({
      ...prev,
      [activeMessageId]: [...(prev[activeMessageId] || []), newReply]
    }));

    setReplyText('');
  };

  return (
    <div style={{ padding: '0px', height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }} className="animate-fade-in">
      
      {/* Header Title */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          Messages
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Stay informed about important updates and reminders.
        </p>
      </div>

      {/* Double Pane Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', flex: 1, minHeight: '0' }}>
        
        {/* Left Pane: Inbox List */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': 'var(--brand-color)', 
            padding: '0', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            overflow: 'hidden' 
          } as React.CSSProperties}
        >
          {/* Tabs Menu */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', padding: '0 16px' }}>
            <button style={{ background: 'none', border: 'none', borderBottom: '2px solid var(--brand-color)', color: 'var(--brand-color)', fontWeight: 700, padding: '16px 12px', fontSize: '0.875rem', cursor: 'pointer' }}>
              Inbox
            </button>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontWeight: 500, padding: '16px 12px', fontSize: '0.875rem', cursor: 'pointer' }}>
              Sent
            </button>
          </div>

          {/* Search box & filter icon */}
          <div style={{ padding: '16px', display: 'flex', gap: '10px', borderBottom: '1px solid var(--border-color)' }}>
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="premium-input" 
              style={{ padding: '8px 12px', fontSize: '0.8rem' }}
            />
            <button 
              style={{ 
                padding: '8px 10px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'var(--bg-secondary)',
                cursor: 'pointer',
                fontSize: '0.9rem' 
              }}
            >
              🎛️
            </button>
          </div>

          {/* Messages Scrollable List */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {messages.map((msg) => {
              const isActive = msg.id === activeMessageId;
              return (
                <div
                  key={msg.id}
                  onClick={() => handleSelectMessage(msg.id)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--brand-light)' : 'transparent',
                    borderLeft: isActive ? '3.5px solid var(--brand-color)' : '3.5px solid transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: msg.unread || isActive ? 700 : 500, color: 'var(--text-primary)', maxWidth: '75%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {msg.subject}
                    </h4>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{msg.date}</span>
                  </div>
                  <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', maxWidth: '85%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {msg.snippet}
                    </p>
                    {msg.unread && (
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-color)' }} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Messages Footer */}
          <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-color)', cursor: 'pointer' }}>View All Messages ➔</span>
          </div>
        </div>

        {/* Right Pane: Thread Viewport */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': 'var(--brand-color)', 
            padding: '24px 32px',
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            overflow: 'hidden'
          } as React.CSSProperties}
        >
          {/* Thread header */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '18px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {activeMessage.subject}
            </h2>
            
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <div>
                From: <strong style={{ color: 'var(--text-primary)' }}>{activeMessage.sender}</strong>
                <br />
                To: <span style={{ color: 'var(--text-muted)' }}>Alex Johnson</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                {activeMessage.date} at {activeMessage.timeSent || '9:00 AM'}
              </div>
            </div>
          </div>

          {/* Email Body Scroll Area */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', paddingRight: '4px', marginBottom: '16px' }}>
            
            {/* Original Inbound email */}
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
              {activeMessage.fullBody.map((line, i) => (
                <p key={i} style={{ marginBottom: line ? '12px' : '20px' }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Replies thread */}
            {(threadReplies[activeMessage.id] || []).map((reply, i) => (
              <div 
                key={i} 
                className="animate-fade-in"
                style={{ 
                  alignSelf: 'flex-end', 
                  backgroundColor: 'var(--brand-color)', 
                  color: '#ffffff',
                  padding: '16px 20px', 
                  borderRadius: '12px 12px 0 12px', 
                  maxWidth: '80%',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px', display: 'flex', justifySelf: 'center', justifyContent: 'space-between' }}>
                  <span>{reply.sender}</span>
                  <span>{reply.time}</span>
                </div>
                <p>{reply.text}</p>
              </div>
            ))}

          </div>

          {/* Bottom security warning */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.725rem', color: 'var(--text-secondary)', marginBottom: '12px', paddingLeft: '4px' }}>
            <span>🔒</span>
            <span>Messages are private and secure.</span>
          </div>

          {/* Reply input row */}
          <form onSubmit={handleSendReply} style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              placeholder="Write a reply..."
              className="premium-input"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              style={{ flex: 1 }}
            />
            <button 
              type="submit" 
              className="premium-btn premium-btn-primary" 
              style={{ 
                '--btn-color': 'var(--brand-color)', 
                '--focus-ring': 'rgba(10, 87, 227, 0.15)',
                padding: '12px 24px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              } as React.CSSProperties}
            >
              <span>Send</span>
              <span>➔</span>
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
