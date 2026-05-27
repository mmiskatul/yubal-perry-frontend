'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';

// Import Lucide React Icons
import { 
  LuCalendar, 
  LuCircleCheck, 
  LuLock, 
  LuThumbsUp, 
  LuThumbsDown, 
  LuChevronLeft,
  LuUser,
  LuUsers,
  LuBell
} from 'react-icons/lu';

interface ArticleDetails {
  id: string;
  title: string;
  subtitle?: string;
  introText: React.ReactNode;
  contentType: 'steps' | 'blue-box' | 'list-rows' | 'double-boxes';
  steps?: {
    icon: 'calendar' | 'check' | 'user' | 'users' | 'bell';
    title: string;
    description: string;
  }[];
  blueBox?: {
    icon: 'check' | 'bell';
    title: string;
    bullets?: string[];
    text?: string;
  };
  listRows?: {
    icon: 'user' | 'users';
    title: string;
    description: string;
  }[];
  doubleBoxes?: {
    icon: 'bell' | 'check';
    title: string;
    bullets?: string[];
    text?: string;
  }[];
  bottomText?: React.ReactNode;
}

const articleDataMap: Record<string, ArticleDetails> = {
  'process': {
    id: 'process',
    title: 'What is the Tenant Integrity 7-day participation process?',
    subtitle: "Here's how it works:",
    introText: <span>The Tenant Integrity 7-day participation process is a simple and secure way for us to get to know you better.</span>,
    contentType: 'steps',
    steps: [
      {
        icon: 'calendar',
        title: '1. Complete daily check-ins',
        description: "For 7 days, you'll answer a few short questions each day. You have until midnight of the same day you receive the text message from us. You do not need to reply at the same time each day."
      },
      {
        icon: 'check',
        title: "2. You'll know when you're done",
        description: 'After 7 days, you\'ll see a confirmation that your participation is complete.'
      }
    ]
  },
  'daily-checkins': {
    id: 'daily-checkins',
    title: 'Why do I need to complete daily check-ins?',
    subtitle: "Here's how it works:",
    introText: (
      <span>
        Daily check-ins help you stay connected to the program and get the support you need.<br/>
        By completing a few quick questions each day, you help us:
      </span>
    ),
    contentType: 'steps',
    steps: [
      {
        icon: 'check',
        title: 'Keep you safe and supported',
        description: 'We can let you know if we see something that may need your attention.'
      },
      {
        icon: 'calendar',
        title: 'Meet program requirements',
        description: 'Completing check-ins is part of the program.'
      }
    ],
    bottomText: <span>It only takes 2–3 minutes a day.</span>
  },
  'checkin-duration': {
    id: 'checkin-duration',
    title: 'How long does each check-in take?',
    introText: (
      <span>
        Each daily check-in is quick and easy.<br/>
        It usually takes about <span style={{ color: '#0a57e3', fontWeight: 700 }}>2–3 minutes</span> to complete.<br/>
        You\'ll answer a few short questions about how you\'re doing.<br/>
        Your time matters, and we\'ve designed the check-in to be fast and convenient.
      </span>
    ),
    contentType: 'blue-box',
    blueBox: {
      icon: 'check',
      title: 'In just 2–3 minutes, you can:',
      bullets: [
        "Let us know how you're doing",
        'Get the support you need',
        'Stay connected to the program'
      ]
    },
    bottomText: <span>You can complete your check-in anytime before midnight on the day you receive the text message from us.</span>
  },
  'data-privacy': {
    id: 'data-privacy',
    title: 'Who can see my information?',
    introText: (
      <span>
        Your privacy is important to us. Your information is private and securely maintained.<br/>
        Only the following people can see your information:
      </span>
    ),
    contentType: 'list-rows',
    listRows: [
      {
        icon: 'users',
        title: 'Our support team',
        description: 'They can see your answers to help and support you.'
      },
      {
        icon: 'user',
        title: 'The property manager / landlord',
        description: 'They can see your information to manage your participation in the program.'
      }
    ],
    bottomText: (
      <span>
        We never share your information with anyone else.<br/>
        If you have any questions about your privacy,{' '}
        <Link href="/applicant/messages" style={{ color: '#0a57e3', fontWeight: 700, textDecoration: 'none' }} onMouseEnter={(e)=>e.currentTarget.style.textDecoration='underline'} onMouseLeave={(e)=>e.currentTarget.style.textDecoration='none'}>
          please contact our support team
        </Link>.
      </span>
    )
  },
  'missed-checkins': {
    id: 'missed-checkins',
    title: 'What happens if I miss a check-in?',
    introText: (
      <span>
        If you miss a daily check-in and don\'t complete it by midnight on the same day, it will be marked as missed.<br/>
        Missing check-ins may affect your participation in the program.<br/>
        If you\'re having trouble, contact our support team, we\'re here to help.
      </span>
    ),
    contentType: 'double-boxes',
    doubleBoxes: [
      {
        icon: 'bell',
        title: "Didn't get a text message?",
        text: 'If you did not receive a text message, check your email. It could be in your Spam, Promotions, or other folders.'
      },
      {
        icon: 'bell',
        title: 'Tips to avoid missing a check-in:',
        bullets: [
          'Complete your check-in before midnight.',
          'If you did not get a text message, check your email. It could be in your Spam, Promotions, or other folders.',
          'Contact support if you need assistance.'
        ]
      }
    ]
  }
};

export default function ArticleDetailPage({ params }: { params: Promise<{ article: string }> }) {
  const unwrappedParams = use(params);
  const articleId = unwrappedParams.article;
  const [voted, setVoted] = useState<'YES' | 'NO' | null>(null);

  const data = articleDataMap[articleId] || articleDataMap['process'];

  // Helper to map icon identifier to vector Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar': return <LuCalendar />;
      case 'check': return <LuCircleCheck />;
      case 'user': return <LuUser />;
      case 'users': return <LuUsers />;
      case 'bell': return <LuBell />;
      default: return <LuCircleCheck />;
    }
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Back button */}
      <div style={{ marginBottom: '24px' }}>
        <Link 
          href="/applicant/support" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: '0.9rem', 
            fontWeight: 700, 
            color: '#0a57e3', 
            textDecoration: 'none' 
          }}
        >
          <LuChevronLeft /> Back to Help & Support
        </Link>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: '16px' }}>
        {data.title}
      </h1>
      
      {/* Intro Text */}
      <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.65', textAlign: 'left' }}>
        {data.introText}
      </div>

      {/* Main Grid content: Main Info (Left) and Lock Callout (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '32px', alignItems: 'start', marginBottom: '32px' }}>
        
        {/* Left Side: Custom layouts based on contentType */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', textAlign: 'left' }}>
          
          {/* Subtitle if configured */}
          {data.subtitle && (
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
              {data.subtitle}
            </h3>
          )}

          {/* Render 'steps' schema (e.g. FAQ 1 and 2 step guides) */}
          {data.contentType === 'steps' && data.steps && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {data.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div 
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      backgroundColor: '#eff6ff', 
                      color: '#0a57e3', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.3rem',
                      flexShrink: 0 
                    }}
                  >
                    {renderIcon(step.icon)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Render 'blue-box' schema (e.g. FAQ 3 list cards) */}
          {data.contentType === 'blue-box' && data.blueBox && (
            <div 
              style={{ 
                padding: '24px 32px', 
                backgroundColor: '#eff6ff', 
                border: '1px solid #dbebff', 
                borderRadius: '12px', 
                display: 'flex', 
                gap: '20px', 
                alignItems: 'flex-start' 
              }}
            >
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ffffff', 
                  color: '#0a57e3', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.2rem',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {renderIcon(data.blueBox.icon)}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '12px' }}>
                  {data.blueBox.title}
                </h4>
                {data.blueBox.bullets && (
                  <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {data.blueBox.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: '0.825rem', color: '#1e3a8a', fontWeight: 500, lineHeight: '1.5' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Render 'list-rows' schema (e.g. FAQ 4 data transparency) */}
          {data.contentType === 'list-rows' && data.listRows && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {data.listRows.map((row, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '50%', 
                      backgroundColor: '#eff6ff', 
                      color: '#0a57e3', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.2rem',
                      flexShrink: 0 
                    }}
                  >
                    {renderIcon(row.icon)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {row.title}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Render 'double-boxes' schema (e.g. FAQ 5 missed checklists reminder blocks) */}
          {data.contentType === 'double-boxes' && data.doubleBoxes && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {data.doubleBoxes.map((box, i) => (
                <div 
                  key={i}
                  style={{ 
                    padding: '24px 32px', 
                    backgroundColor: '#eff6ff', 
                    border: '1px solid #dbebff', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    gap: '20px', 
                    alignItems: 'flex-start' 
                  }}
                >
                  <div 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      backgroundColor: '#ffffff', 
                      color: '#0a57e3', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {renderIcon(box.icon)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e3a8a', marginBottom: box.bullets ? '12px' : '6px' }}>
                      {box.title}
                    </h4>
                    {box.text && (
                      <p style={{ fontSize: '0.825rem', color: '#1e3a8a', fontWeight: 500, lineHeight: '1.6' }}>
                        {box.text}
                      </p>
                    )}
                    {box.bullets && (
                      <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {box.bullets.map((bullet, idx) => (
                          <li key={idx} style={{ fontSize: '0.825rem', color: '#1e3a8a', fontWeight: 500, lineHeight: '1.5' }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Text/Tips inside main pane if set */}
          {data.bottomText && (
            <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.6' }}>
              {data.bottomText}
            </div>
          )}

        </div>

        {/* Right Side: Security Privacy locked box (Consistent across all FAQ detail pages) */}
        <div 
          style={{ 
            backgroundColor: '#ffffff', 
            border: '1.5px solid var(--border-color)', 
            borderRadius: '16px', 
            padding: '32px 24px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                backgroundColor: '#eff6ff', 
                color: '#0a57e3', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.15rem',
                flexShrink: 0
              }}
            >
              <LuLock />
            </div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: '1.4' }}>
              Your information is private and securely maintained.
            </h4>
          </div>

          <div style={{ height: '1.5px', backgroundColor: 'var(--border-color)', width: '100%' }} />

          <div>
            <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              We respect your privacy and never share your information.
            </h5>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Only our <span style={{ color: '#0a57e3', fontWeight: 600 }}>support team</span> and the <span style={{ color: '#0a57e3', fontWeight: 600 }}>property manager / landlord</span> can see your information.
            </p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%', margin: '48px 0 32px' }} />

      {/* Helpful Vote widget */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          Was this review helpful?
        </span>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setVoted('YES')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1.5px solid',
              borderColor: voted === 'YES' ? '#0a57e3' : 'var(--border-color)',
              backgroundColor: voted === 'YES' ? '#eff6ff' : '#ffffff',
              color: voted === 'YES' ? '#0a57e3' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <LuThumbsUp /> Yes
          </button>
          <button
            onClick={() => setVoted('NO')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1.5px solid',
              borderColor: voted === 'NO' ? '#ef4444' : 'var(--border-color)',
              backgroundColor: voted === 'NO' ? '#fef2f2' : '#ffffff',
              color: voted === 'NO' ? '#ef4444' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <LuThumbsDown /> No
          </button>
        </div>
      </div>

    </div>
  );
}
