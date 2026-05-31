'use client';

import React, { useState } from 'react';
import {
  LuInfo, LuTriangleAlert, LuClock, LuRefreshCw, LuMessageSquare,
  LuCircleCheck, LuCalendar
} from 'react-icons/lu';

// SVG 7-day trend line (downward from ~80% → ~25%)
function TrendLine() {
  const points = [
    { x: 0, y: 20 },   // Mon ~80%
    { x: 40, y: 28 },  // Tue ~72%
    { x: 80, y: 38 },  // Wed ~62%
    { x: 120, y: 48 }, // Thu ~52%
    { x: 160, y: 58 }, // Fri ~42%
    { x: 200, y: 68 }, // Sat ~32%
    { x: 240, y: 76 }, // Sun ~24%
  ];
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L 240 100 L 0 100 Z`;
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div>
      <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>7-Day Trend</div>
      <svg width="260" height="120" viewBox="0 0 260 120">
        {/* Y axis labels */}
        {[100, 75, 50, 25, 0].map((v, i) => (
          <g key={i}>
            <text x="0" y={i * 22 + 4} style={{ fontSize: '9px', fill: 'var(--text-muted)' }}>{v}%</text>
            <line x1="26" y1={i * 22} x2="252" y2={i * 22} stroke="var(--border-color)" strokeWidth="1" />
          </g>
        ))}
        {/* Area fill */}
        <path d={areaD.replace(/(\d+) (\d+)/g, (_, x, y) => `${parseInt(x) + 26} ${y}`)} fill="rgba(249,115,22,0.08)" />
        {/* Line */}
        <path d={points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x + 26} ${p.y}`).join(' ')} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dots */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x + 26} cy={p.y} r="3.5" fill="#f97316" stroke="var(--bg-secondary)" strokeWidth="1.5" />
        ))}
        {/* X axis labels */}
        {labels.map((l, i) => (
          <text key={i} x={i * 40 + 26} y="115" textAnchor="middle" style={{ fontSize: '9px', fill: 'var(--text-muted)' }}>{l}</text>
        ))}
      </svg>
    </div>
  );
}

export default function LandlordWarningsPage() {
  const [reviewed, setReviewed] = useState(false);

  return (
    <div className="animate-fade-in" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', textAlign: 'left' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Early Warning</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            We&apos;ve detected significant changes in tenant behavior that may require your attention.
          </p>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '8px', whiteSpace: 'nowrap' }}>
          <LuInfo style={{ fontSize: '0.85rem' }} /> DATA AS OF TODAY, 9:00 AM
        </div>
      </div>

      {/* Alert Banner */}
      <div style={{ backgroundColor: 'var(--color-support-light)', border: '1px solid var(--color-support-border)', borderRadius: '10px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-support-light)', color: 'var(--color-support)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
            <LuTriangleAlert />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>Significant Change Detected</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>1 tenant showing a sharp decline in engagement</div>
          </div>
        </div>
        <button
          style={{ padding: '8px 18px', borderRadius: '8px', border: '1.5px solid var(--color-support-border)', backgroundColor: 'var(--bg-secondary)', color: 'var(--color-support)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}
          onClick={() => alert('Sandbox: View all warnings')}
        >
          View All Warnings <LuTriangleAlert style={{ fontSize: '0.85rem' }} />
        </button>
      </div>

      {/* Featured Tenant Card */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px 28px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
        {/* Tenant Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
              👤
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>James Miller</h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Unit 402 • 2yr Tenant</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'var(--color-alert-light)', border: '1.5px solid var(--color-alert-border)', borderRadius: '8px' }}>
            <LuTriangleAlert style={{ color: '#ef4444', fontSize: '0.95rem' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ef4444' }}>Sharp Decline Detected</span>
          </div>
        </div>

        {/* 3-Column Data Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>

          {/* Participation Rate */}
          <div style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '10px', padding: '20px' }}>
            <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>PARTICIPATION RATE (30D)</div>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>72%</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 700 }}>↓ 12%</span>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>from 84%</span>
            </div>
            {/* Bar */}
            <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#e2e8f0', marginBottom: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '72%', borderRadius: '4px', backgroundColor: '#f97316' }} />
            </div>
            <div style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>Down over the last 7 days</div>
          </div>

          {/* Behavioural Signals */}
          <div style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '10px', padding: '20px' }}>
            <div style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>Recent Behavioural Signals</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <LuClock />, signal: 'Response Timing', value: 'Slower', color: 'var(--color-support)', why: 'Slower responses May Indicate Lower Engagement.' },
                { icon: <LuRefreshCw />, signal: 'Follow -through', value: 'Partial', color: 'var(--color-support)', why: 'Incomplete follow-through can signal hesitance or uncertainty.' },
                { icon: <LuMessageSquare />, signal: 'Communication', value: 'Reduced', color: '#ef4444', why: 'Reduced Communication may lead to misunderstanding.' }
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '2px', flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{s.signal}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)', lineHeight: '1.3', marginTop: '2px' }}>
                      <span style={{ fontWeight: 700 }}>Why Its Matters</span><br />{s.why}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7-Day Trend Chart */}
          <div style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '10px', padding: '20px' }}>
            <TrendLine />
          </div>
        </div>
      </div>

      {/* Insight Box */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
          💡
        </div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>Insight</div>
          <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Payment behaviour and engagement have declined since Oct 12</div>
        </div>
      </div>

      {/* Recommended Actions */}
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Based on these behavioral signals, you may want to:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>

          {/* Schedule Review */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <button
              style={{ width: '100%', padding: '12px 20px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--brand-color)', color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}
              onClick={() => alert('Sandbox: Schedule Review with James Miller')}
            >
              <LuCalendar /> Schedule Review
            </button>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '4px' }}>Intent:</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '10px' }}>Take a structured, deliberate step to evaluate the situation.</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '4px' }}>When to use:</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>When the change is significant or requires a deeper review.</div>
            </div>
          </div>

          {/* Check In With Tenant */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <button
              style={{ width: '100%', padding: '12px 20px', borderRadius: '8px', border: '1.5px solid var(--color-admin-border)', backgroundColor: 'var(--bg-secondary)', color: 'var(--color-admin)', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}
              onClick={() => alert('Sandbox: Check In With James Miller')}
            >
              <LuMessageSquare /> Check In With Tenant
            </button>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '4px' }}>Intent:</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '10px' }}>Start a quick conversation to understand what&apos;s happening.</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '4px' }}>When to use:</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>When the change is early, unclear, or you want initial context.</div>
            </div>
          </div>

          {/* What Happens Next */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '20px', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>What Happens Next ?</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {[
                'Send a message or schedule a time',
                'Document the Interaction',
                'Track changes & Progress',
                'Reassess if needed'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <LuCircleCheck style={{ color: 'var(--color-user)', fontSize: '0.95rem', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
            <button
              onClick={() => setReviewed(true)}
              style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1.5px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', ...(reviewed ? { backgroundColor: 'var(--color-user-light)', borderColor: 'var(--color-user-border)', color: 'var(--color-user)' } : {}) }}
            >
              <LuCircleCheck style={{ fontSize: '0.9rem', color: reviewed ? 'var(--color-user)' : 'var(--text-muted)' }} />
              {reviewed ? 'Marked as Reviewed ✓' : 'Mark as Reviewed'}
            </button>
          </div>

        </div>
      </div>

      {/* Footer Note */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', backgroundColor: 'var(--brand-alert-bg)', border: '1px solid var(--brand-alert-border)', borderRadius: '8px' }}>
        <LuInfo style={{ color: 'var(--brand-color)', fontSize: '1rem', flexShrink: 0 }} />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>These alerts are based on recent behavioral changes. Review the trends and take action if needed.</span>
      </div>
    </div>
  );
}
