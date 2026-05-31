'use client';

import React, { use } from 'react';
import Link from 'next/link';

// Import high-fidelity vector icons from React Icons Lucide library
import { 
  LuCalendar, 
  LuCircleCheck, 
  LuUser, 
  LuClock, 
  LuLock, 
  LuChevronLeft
} from 'react-icons/lu';

interface DayDetails {
  day: number;
  date: string;
  timestamp: string;
  question: string;
  response: string;
  submittedOn: string;
  submittedAt: string;
}

const dayDetailsMap: Record<number, DayDetails> = {
  1: {
    day: 1,
    date: 'May 3, 2024',
    timestamp: 'May 3, 2024 at 10:14 AM',
    question: 'What is your primary goal for participating in this tenant integrity process?',
    response: 'I want to demonstrate my track record of timely payments and establish a transparent, positive relationship with my future landlord right from the start.',
    submittedOn: 'May 3, 2024',
    submittedAt: '10:14 AM'
  },
  2: {
    day: 2,
    date: 'May 4, 2024',
    timestamp: 'May 4, 2024 at 7:42 PM',
    question: 'How has your communication experience been so far?',
    response: 'Everything has been clear and easy. I appreciate the timely responses and helpful information.',
    submittedOn: 'May 4, 2024',
    submittedAt: '7:42 PM'
  },
  3: {
    day: 3,
    date: 'May 5, 2024',
    timestamp: 'May 5, 2024 at 2:15 PM',
    question: 'Do you have any comments or suggestions regarding the verification layout?',
    response: 'The layout is very clean and easy to navigate on both mobile and desktop. The daily SMS reminders are also super helpful.',
    submittedOn: 'May 5, 2024',
    submittedAt: '2:15 PM'
  }
};

const getDayDetails = (dayNum: number): DayDetails => {
  if (dayDetailsMap[dayNum]) {
    return dayDetailsMap[dayNum];
  }
  // Dynamic fallback for any day beyond 3
  return {
    day: dayNum,
    date: `May ${2 + dayNum}, 2024`,
    timestamp: `May ${2 + dayNum}, 2024 at 12:00 PM`,
    question: `Daily check-in reflection question for Day ${dayNum}.`,
    response: `Standard verification check-in complete. Daily logs and status reports submitted for Day ${dayNum}.`,
    submittedOn: `May ${2 + dayNum}, 2024`,
    submittedAt: '12:00 PM'
  };
};

export default function DynamicDayDetailsPage({ params }: { params: Promise<{ day: string }> }) {
  const unwrappedParams = use(params);
  const rawDay = unwrappedParams.day; // e.g. "day-2" or "1" or "2" or "3"
  
  // Extract numerical day number (e.g. "day-2" parses to 2, "3" parses to 3)
  const dayNumber = parseInt(rawDay.replace(/\D/g, '')) || 2;
  const data = getDayDetails(dayNumber);

  // Status mapping for the 7-day checklist progress
  const totalDays = 7;
  const completedDays = [1, 2, 3]; // Days 1, 2, and 3 are completed

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Back to Progress */}
      <div style={{ marginBottom: '24px' }}>
        <Link 
          href="/applicant/progress" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: '0.9rem', 
            fontWeight: 700, 
            color: 'var(--brand-color)', 
            textDecoration: 'none' 
          }}
        >
          <LuChevronLeft /> Back to My Progress
        </Link>
      </div>

      {/* Header bar: Dynamic Title + Completed badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.035em' }}>
            Day {data.day} Details
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Review your check-in from Day {data.day} of the 7-day participation process.
          </p>
        </div>

        {/* Double-Check Completed Badge (No Background Pill, Exactly matching Screenshot) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
          <span 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-user)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            <LuCircleCheck style={{ fontSize: '1.15rem' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 800 }}>✓</span> Completed
            </span>
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            {data.timestamp}
          </span>
        </div>
      </div>

      {/* Day Timeline Row Card (No connector lines, clean white card) */}
      <div 
        style={{ 
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 32px',
          marginBottom: '24px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          
          {Array.from({ length: totalDays }, (_, i) => {
            const currentDayNum = i + 1;
            const isCurrentPageDay = currentDayNum === data.day;
            const isCompleted = completedDays.includes(currentDayNum);

            return (
              <div 
                key={currentDayNum} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  flex: 1 
                }}
              >
                {isCurrentPageDay ? (
                  /* Active Day Selection highlighted in blue */
                  <div 
                    style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--brand-color)', 
                      color: '#fff', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: 800, 
                      fontSize: '0.75rem', 
                      boxShadow: '0 0 0 3px rgba(10, 87, 227, 0.15)' 
                    }}
                  >
                    {currentDayNum}
                  </div>
                ) : isCompleted ? (
                  /* Completed Day marked with a green checkmark */
                  <div 
                    style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundcolor: 'var(--color-user)', 
                      color: '#fff', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: 800, 
                      fontSize: '0.75rem' 
                    }}
                  >
                    ✓
                  </div>
                ) : (
                  /* Upcoming Day represented as an outline */
                  <div 
                    style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--bg-secondary)', 
                      border: '1.5px solid var(--border-color)', 
                      color: 'var(--text-muted)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: 600, 
                      fontSize: '0.75rem' 
                    }}
                  >
                    {currentDayNum}
                  </div>
                )}
                <span 
                  style={{ 
                    fontSize: '0.7rem', 
                    color: isCurrentPageDay ? 'var(--text-primary)' : 'var(--text-secondary)', 
                    marginTop: '8px', 
                    fontWeight: isCurrentPageDay ? 700 : 500 
                  }}
                >
                  Day {currentDayNum}
                </span>
              </div>
            );
          })}

        </div>
      </div>

      {/* Main cards stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Card 1: Daily Check-In (Simple white card, no top color strip) */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '8px', 
                backgroundColor: '#f0f7ff', 
                color: 'var(--brand-color)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.2rem',
                flexShrink: 0
              }}
            >
              <LuCalendar />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Daily Check-In</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Here's the question we asked on Day {data.day}.
              </p>
            </div>
          </div>
          
          {/* Question Box */}
          <div 
            style={{ 
              padding: '18px 24px', 
              backgroundColor: 'var(--bg-primary)', 
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
              Question
            </span>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '6px' }}>
              {data.question}
            </h4>
          </div>
        </div>

        {/* Card 2: Your Response */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '8px', 
                backgroundColor: '#f0f7ff', 
                color: 'var(--brand-color)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.2rem',
                flexShrink: 0
              }}
            >
              <LuUser />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Your Response</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Your response on Day {data.day}.
              </p>
            </div>
          </div>

          {/* Response Container (with light-blue background and green vertical stripes) */}
          <div 
            style={{ 
              padding: '20px 24px', 
              backgroundColor: '#f0f7ff', 
              border: '1px solid var(--brand-alert-border)',
              borderRadius: '10px',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}
          >
            {/* Green vertical double stripes (‖ quote marker) */}
            <div 
              style={{ 
                display: 'flex', 
                gap: '2px', 
                color: 'var(--color-user)', 
                fontSize: '1.1rem', 
                fontWeight: 900, 
                lineHeight: '1.3', 
                marginRight: '4px',
                userSelect: 'none' 
              }}
            >
              <span>▮▮</span>
            </div>
            
            <p style={{ fontSize: '0.925rem', fontWeight: 500, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {data.response}
            </p>
          </div>
        </div>

        {/* Card 3: Submission Details */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '8px', 
                backgroundColor: '#f0f7ff', 
                color: 'var(--brand-color)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.2rem',
                flexShrink: 0
              }}
            >
              <LuClock />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>Submission Details</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                When you submitted your check-in.
              </p>
            </div>
          </div>

          {/* Details Rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Submitted On */}
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '14px 0', 
                borderBottom: '1px solid var(--border-color)' 
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Submitted On</span>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 700 }}>{data.submittedOn}</strong>
            </div>

            {/* Submitted At */}
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '14px 0 4px 0' 
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Submitted At</span>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 700 }}>{data.submittedAt}</strong>
            </div>

          </div>
        </div>

        {/* Card 4: Secure Lock Banner */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-color)',
            borderRadius: '16px',
            padding: '24px 32px',
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
              backgroundColor: 'var(--brand-light)', 
              color: 'var(--brand-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '1.25rem',
              flexShrink: 0
            }}
          >
            <LuLock />
          </div>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Your information is private and secure.
            </h4>
            <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
              Your data is used only for application review and is never shared.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
