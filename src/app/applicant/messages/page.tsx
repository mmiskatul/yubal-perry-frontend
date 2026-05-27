'use client';

import React, { useState } from 'react';

// Import Lucide React Icons
import { LuSearch, LuSlidersHorizontal, LuInfo, LuPaperclip, LuSend, LuLock, LuCheckCheck } from 'react-icons/lu';

interface ChatMessage {
  id: string;
  sender: 'SUPPORT' | 'USER';
  text: string;
  time: string;
}

interface ChatThread {
  id: string;
  title: string;
  lastSnippet: string;
  time: string;
  unread: boolean;
  messages: ChatMessage[];
}

export default function MessagesPage() {
  const [threads, setThreads] = useState<ChatThread[]>([
    {
      id: 'thread_001',
      title: 'Tenant Support',
      lastSnippet: 'Hi Alex! How can we help you today?',
      time: '10:30 AM',
      unread: true,
      messages: [
        { id: 'm1', sender: 'SUPPORT', text: 'Hi Alex! How can we help you today?', time: '10:30 AM' },
        { id: 'm2', sender: 'USER', text: 'Hi, I have a question about my next check-in.', time: '10:31 AM' },
        { id: 'm3', sender: 'SUPPORT', text: "Sure! I'd be happy to help. Your next check-in (Day 4) will become available tomorrow. You'll receive a notification when it's ready.", time: '10:32 AM' },
        { id: 'm4', sender: 'USER', text: 'Great, thank you!', time: '10:33 AM' }
      ]
    },
    {
      id: 'thread_002',
      title: 'Tenant Support',
      lastSnippet: 'Your document has been received and is under review.',
      time: 'Yesterday',
      unread: false,
      messages: [
        { id: 'm10', sender: 'SUPPORT', text: 'Hello Alex! We wanted to confirm that your background identity document verification was successful.', time: '9:15 AM' },
        { id: 'm11', sender: 'SUPPORT', text: 'Your document has been received and is under review.', time: '11:30 AM' }
      ]
    },
    {
      id: 'thread_003',
      title: 'Tenant Support',
      lastSnippet: 'Welcome to the Tenant Integrity participation process! If you...',
      time: 'May 3',
      unread: false,
      messages: [
        { id: 'm20', sender: 'SUPPORT', text: 'Welcome to the Tenant Integrity participation process! If you have any inquiries, feel free to file them directly in this inbox thread.', time: '10:00 AM' }
      ]
    }
  ]);

  const [activeThreadId, setActiveThreadId] = useState('thread_001');
  const [textInput, setTextInput] = useState('');

  const activeThread = threads.find(t => t.id === activeThreadId) || threads[0];

  const handleSelectThread = (threadId: string) => {
    setActiveThreadId(threadId);
    setThreads(prev =>
      prev.map(t => t.id === threadId ? { ...t, unread: false } : t)
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const newMsg: ChatMessage = {
      id: `m_user_${Date.now()}`,
      sender: 'USER',
      text: textInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setThreads(prev =>
      prev.map(t => {
        if (t.id === activeThreadId) {
          return {
            ...t,
            lastSnippet: textInput,
            time: 'Just Now',
            messages: [...t.messages, newMsg]
          };
        }
        return t;
      })
    );

    setTextInput('');
  };

  return (
    <div style={{ padding: '0px', height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }} className="animate-fade-in">
      
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          Messages
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Communicate with our support team.
        </p>
      </div>

      {/* Info Alert Box */}
      <div 
        style={{ 
          padding: '12px 18px', 
          borderRadius: '10px', 
          backgroundColor: '#f3f8ff', 
          border: '1px solid #dbebff', 
          color: '#1e3a8a', 
          fontSize: '0.825rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}
      >
        <span style={{ fontSize: '1rem', color: '#0a57e3', display: 'flex' }}><LuInfo /></span>
        <span>All conversations are with the <strong style={{ color: '#0a57e3' }}>Tenant Integrity Support Team</strong>. We typically respond within 24 hours.</span>
      </div>

      {/* Double Pane */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', flex: 1, minHeight: '0' }}>
        
        {/* Left Pane: Inbox List */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '0', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            overflow: 'hidden' 
          } as React.CSSProperties}
        >
          {/* Search row */}
          <div style={{ padding: '16px', display: 'flex', gap: '10px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex' }}><LuSearch /></span>
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="premium-input" 
                style={{ padding: '8px 12px 8px 36px', fontSize: '0.8rem' }}
              />
            </div>
            <button 
              style={{ 
                padding: '8px 10px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'var(--bg-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-secondary)'
              }}
            >
              <LuSlidersHorizontal />
            </button>
          </div>

          {/* Threads List */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {threads.map((t) => {
              const isActive = t.id === activeThreadId;
              return (
                <div
                  key={t.id}
                  onClick={() => handleSelectThread(t.id)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    backgroundColor: isActive ? '#f0f6ff' : 'transparent',
                    borderLeft: isActive ? '3.5px solid #0a57e3' : '3.5px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.2s'
                  }}
                >
                  {/* Purple TS circle */}
                  <div 
                    style={{ 
                      width: '38px', 
                      height: '38px', 
                      borderRadius: '50%', 
                      backgroundColor: '#a78bfa', // Purple
                      color: '#ffffff', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: 700, 
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}
                  >
                    TS
                  </div>

                  <div style={{ flex: 1, minWidth: '0' }}>
                    <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: t.unread || isActive ? 700 : 500, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {t.title}
                      </h4>
                      <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>{t.time}</span>
                    </div>
                    <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '85%' }}>
                        {t.lastSnippet}
                      </p>
                      {t.unread && (
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0a57e3', flexShrink: 0 }} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* List count footer */}
          <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Viewing 1-{threads.length} of {threads.length} conversations
          </div>
        </div>

        {/* Right Pane: Message Area */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '0',
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            overflow: 'hidden'
          } as React.CSSProperties}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#a78bfa', color: '#fff', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>
                TS
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>{activeThread.title}</h4>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', fontWeight: 500 }}>We typically respond within 24 hours.</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Displaying support desk clearances & SLAs')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <LuInfo /> Details
            </button>
          </div>

          {/* Chat scroll body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ textAlign: 'center', margin: '8px 0 16px' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: 'var(--bg-primary)', padding: '4px 10px', borderRadius: '6px' }}>
                Today
              </span>
            </div>

            {activeThread.messages.map((m) => {
              const isSupport = m.sender === 'SUPPORT';
              return (
                <div 
                  key={m.id} 
                  style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    alignSelf: isSupport ? 'flex-start' : 'flex-end',
                    maxWidth: '75%',
                    alignItems: 'flex-start'
                  }}
                >
                  {isSupport && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#a78bfa', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>
                      TS
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: isSupport ? 'flex-start' : 'flex-end' }}>
                    <div 
                      style={{ 
                        padding: '12px 16px', 
                        borderRadius: isSupport ? '0 12px 12px 12px' : '12px 12px 0 12px',
                        backgroundColor: isSupport ? '#f1f5f9' : '#0a57e3',
                        color: isSupport ? 'var(--text-primary)' : '#ffffff',
                        fontSize: '0.85rem',
                        lineHeight: '1.5',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      {m.text}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      <span>{m.time}</span>
                      {!isSupport && (
                        <span style={{ color: '#0a57e3', display: 'flex', alignItems: 'center' }}><LuCheckCheck /></span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct message disclaimer */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.725rem', color: 'var(--text-secondary)', padding: '0 24px', marginBottom: '8px' }}>
            <LuLock />
            <span>Your messages are private and secure. This conversation is only with our support team.</span>
          </div>

          {/* Reply input row */}
          <form onSubmit={handleSendMessage} style={{ padding: '0 24px 24px 24px', display: 'flex', gap: '12px', borderTop: 'none' }}>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '14px', color: 'var(--text-muted)', fontSize: '1.1rem', cursor: 'pointer', display: 'flex' }} onClick={()=>alert('Trigger document attachment sandbox upload')}><LuPaperclip /></span>
              <input
                type="text"
                placeholder="Type your message..."
                className="premium-input"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                style={{ width: '100%', padding: '12px 16px 12px 42px' }}
              />
            </div>
            
            <button 
              type="submit" 
              className="premium-btn premium-btn-primary" 
              style={{ 
                '--btn-color': '#0a57e3', 
                '--focus-ring': 'rgba(10, 87, 227, 0.15)',
                padding: '12px 24px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              } as React.CSSProperties}
            >
              <span>Send</span>
              <LuSend />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
