'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Import high-fidelity vector icons from React Icons Lucide library
import { 
  LuCircleHelp, 
  LuMessageSquare, 
  LuClock, 
  LuLock, 
  LuShieldCheck, 
  LuChevronDown, 
  LuChevronUp
} from 'react-icons/lu';

interface FAQItem {
  question: string;
  answer: string;
  link?: string;
  linkLabel?: string;
}

export default function ApplicantSupportPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is the Tenant Integrity 7-day participation process?',
      answer: 'The Tenant Integrity 7-day participation process is a simple and secure way for us to get to know you better. For 7 days, you\'ll answer a few short questions each day regarding your communication, habits, and status.',
      link: '/applicant/support/process',
      linkLabel: 'Read Full Process details'
    },
    {
      question: 'Why do I need to complete daily check-ins?',
      answer: 'Daily check-ins help establish a consistent, reliable communication history during the 7-day review period. This helps demonstrate your commitment and helps property managers / landlords verify your participation profile.',
      link: '/applicant/support/daily-checkins',
      linkLabel: 'Read Full Article'
    },
    {
      question: 'How long does each check-in take?',
      answer: 'Each check-in is designed to be extremely quick and simple, taking only 1 to 2 minutes. You\'ll answer a few simple questions regarding your day, communication, or status.',
      link: '/applicant/support/checkin-duration',
      linkLabel: 'Read Full Article'
    },
    {
      question: 'What happens if I miss a check-in?',
      answer: 'If you miss a daily check-in, you have until midnight to complete it. Missing check-ins or completing them late may impact your overall progress score or delay your participation completion status.',
      link: '/applicant/support/missed-checkins',
      linkLabel: 'Read Full Article'
    },
    {
      question: 'Who can see my information?',
      answer: 'Your participation data is strictly private and securely maintained. Only our dedicated support team and your property manager / landlord have access to review your submitted information. We never sell or share your data with unauthorized third parties.',
      link: '/applicant/support/data-privacy',
      linkLabel: 'Read Full Article'
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Top Header Bar */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          Help & Support
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Find answers to common questions or get in touch with our support team.
        </p>
      </div>

      {/* Main Grid Layout: FAQ (Left) and Contact Card (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '32px', marginBottom: '32px', alignItems: 'start' }}>
        
        {/* Left Side: Frequently Asked Questions */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '32px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px' 
          } as React.CSSProperties}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
            <span style={{ fontSize: '1.35rem', color: '#0a57e3', display: 'flex' }}><LuCircleHelp /></span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div 
                  key={index}
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: isExpanded ? '#f8fafc' : '#ffffff',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => handleToggle(index)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      outline: 'none'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: isExpanded ? 700 : 600, 
                        color: isExpanded ? '#0a57e3' : 'var(--text-primary)',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {faq.question}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '1.1rem', 
                        color: isExpanded ? '#0a57e3' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isExpanded ? <LuChevronUp /> : <LuChevronDown />}
                    </span>
                  </button>

                  {/* Accordion Content Body */}
                  <div
                    style={{
                      maxHeight: isExpanded ? '500px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      padding: isExpanded ? '0 24px 20px 24px' : '0 24px'
                    }}
                  >
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <div style={{ marginTop: '12px' }}>
                        <Link 
                          href={faq.link} 
                          style={{ 
                            fontSize: '0.8rem', 
                            fontWeight: 700, 
                            color: '#0a57e3', 
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                          onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >
                          {faq.linkLabel || 'Learn More'} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Accordion Footer Link */}
          <div 
            style={{ 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '20px', 
              fontSize: '0.825rem', 
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Still have a question?</span>
            <Link 
              href="/applicant/messages" 
              style={{ 
                color: '#0a57e3', 
                fontWeight: 700, 
                textDecoration: 'none' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Contact our support team.
            </Link>
          </div>
        </div>

        {/* Right Side: Contact Support Info Card */}
        <div 
          className="glass-card" 
          style={{ 
            '--role-color': '#0a57e3', 
            padding: '32px 24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            backgroundColor: '#ffffff'
          } as React.CSSProperties}
        >
          {/* Card Header Title and bubble icon */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
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
                fontSize: '1.25rem' 
              }}
            >
              <LuMessageSquare />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Contact Support
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.4' }}>
                Our support team is here to help with any questions you may have.
              </p>
            </div>
          </div>

          {/* Action button */}
          <Link 
            href="/applicant/messages"
            className="premium-btn premium-btn-primary"
            style={{ 
              '--btn-color': '#0a57e3', 
              '--focus-ring': 'rgba(10, 87, 227, 0.15)',
              padding: '12px 20px', 
              borderRadius: '8px', 
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              textAlign: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            } as React.CSSProperties}
          >
            <LuMessageSquare /> Send a Message
          </Link>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }} />

          {/* Responsive Info Checkpoints */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', color: '#0a57e3', display: 'flex' }}><LuClock /></span>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                We typically respond within 24 hours.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', color: '#0a57e3', display: 'flex' }}><LuLock /></span>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Your conversations are private and secure.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Card: Privacy Shield callout */}
      <div 
        style={{ 
          padding: '24px 32px', 
          backgroundColor: '#ffffff',
          border: '1.5px solid var(--border-color)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
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
            fontSize: '1.2rem',
            flexShrink: 0
          }}
        >
          <LuShieldCheck />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Your participation information is private and securely maintained.
          </h4>
          <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
            We respect your privacy and never share your information. Only authorized managers and support members can view your profile data.
          </p>
        </div>
      </div>

    </div>
  );
}
