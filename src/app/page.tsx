'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const sources: Record<string, string> = {
    card1: "Source: TransUnion Landlord Survey, highlighting the percentage of independent property owners who experience payment disruption annually.",
    card2: "Source: Internal Revenue Service (IRS) Statistics of Income Division, showing rental property tax filing reports.",
    card3: "Source: Tenant Integrity Systems Internal Platform Performance Metrics, collected from active property managers."
  };

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
      position: 'relative',
      overflowX: 'hidden',
      backgroundImage: 'url(/hero-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Transparent dark gradient overlay covering the whole container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(13, 21, 39, 0.88) 0%, rgba(13, 21, 39, 0.75) 60%, rgba(13, 21, 39, 0.5) 100%)',
          zIndex: 1,
        }}
      />

      {/* Responsive stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 24px;
        }
        .diff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        .how-works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .how-works-card-full {
          grid-column: 1 / span 3;
        }
        .phases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        .quote-banner-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-contact {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-text-col {
            padding-right: 0 !important;
          }
          .fcra-info {
            justify-content: center !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 24px;
          }
          .diff-grid {
            grid-template-columns: 1fr !important;
            gap: 24px;
          }
          .how-works-grid {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
          .how-works-card-full {
            grid-column: span 1 !important;
          }
          .phases-grid {
            grid-template-columns: 1fr !important;
            gap: 24px;
          }
          .quote-banner-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.2fr;
          max-width: 1200px;
          margin: 60px auto;
          background: #000000;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }
        .stop-guessing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          max-width: 1200px;
          margin: 60px auto;
        }
        @media (max-width: 1024px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
          .stop-guessing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <header
        style={{
          position: 'relative',
          zIndex: 100,
          height: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 5%',
          background: 'transparent',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/logo.svg"
            alt="Tenant Integrity Systems"
            style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Nav Links - Rounded Pill Container */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            background: '#ffffff',
            borderRadius: '9999px',
            padding: '10px 28px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          {['Landlords', 'Management', 'Applicants', 'Pre Subscription', 'Login'].map((label) => (
            <Link
              key={label}
              href="/login"
              style={{
                color: '#1e293b',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1e293b';
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link
          href="#"
          className="desktop-contact"
          style={{
            background: '#3182ce',
            color: '#ffffff',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '10px 30px',
            borderRadius: '9999px',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(49, 130, 206, 0.5)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2b6cb0';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#3182ce';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Contact Us
        </Link>

        {/* Hamburger menu button for small screens */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 110,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(13, 21, 39, 0.95)',
              zIndex: 105,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {['Landlords', 'Management', 'Applicants', 'Pre Subscription', 'Login'].map((label) => (
              <Link
                key={label}
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: '#3182ce',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: 700,
                padding: '12px 36px',
                borderRadius: '9999px',
                textDecoration: 'none',
                marginTop: '12px',
              }}
            >
              Contact Us
            </Link>
          </div>
        )}
        </div>
      </header>

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '40px 5% 80px 5%',
        }}
      >
        {/* Hero Content Wrapper */}
        <div
          className="hero-grid"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Text Column */}
          <div className="hero-text-col" style={{ paddingRight: '20px' }}>
            <h1
              style={{
                fontSize: '2.85rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Measure Tenant Behavior<br />
              — Not Just Background.
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#f8fafc',
                lineHeight: 1.4,
                marginBottom: '14px',
              }}
            >
              The #1 reason U.S. landlords lose money isn&apos;t repairs — it&apos;s tenant behavior.
            </p>

            <p
              style={{
                fontSize: '0.88rem',
                color: '#cbd5e1',
                lineHeight: 1.5,
                marginBottom: '12px',
              }}
            >
              Hidden evictions, cash-for-keys exits, stalled payments, and even the IRS data{' '}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                }}
                title="IRS data details"
              >
                i
              </span>{' '}
              showing that 50.5% of rental property filers reported a net tax loss — all of it traces back to daily habits.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '28px',
              }}
            >
              We measure those habits before they cost you thousands.
            </p>

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
              <Link
                href="#"
                style={{
                  background: '#3182ce',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(49, 130, 206, 0.5)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2b6cb0';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3182ce';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See How It Work
              </Link>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.35 }}>
                For Landlords &amp;<br />
                Managers — Before<br />
                Move-In + After Move-In
              </div>
            </div>

            {/* FCRA Alignment Info */}
            <div className="fcra-info" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ fontSize: '1rem', marginTop: '2px' }}>🔒</span>
              <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>FCRA-Aligned</span> Trusted by property owners &amp; managers nationwide.
                <br />
                Objective behavioral screening that reveals real habits before they turn into real losses.
              </p>
            </div>
          </div>

          {/* Right Video Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                border: '4px solid rgba(255, 255, 255, 0.8)',
                aspectRatio: '16/9',
              }}
            >
              <video
                src="/hero-1440p-yPoEuvYM (1).mp4"
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Video Caption */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
              <span style={{ fontSize: '1rem' }}>🎙️</span>
              <span style={{ fontSize: '0.8rem', color: '#ffffff', fontStyle: 'italic', fontWeight: 600, textAlign: 'center', maxWidth: '440px' }}>
                Founder&apos;s Message —{' '}
                <span style={{ fontWeight: 800 }}>Yuval Perry, Building the Behavioral Credit Score for Landlords &amp; Property Managers</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS CARDS SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#f8fafc',
          padding: '80px 5%',
          color: '#1e293b',
          textAlign: 'center',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Card Grid */}
          <div className="stats-grid">
            
            {/* Card 1 */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '40px 24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#1d4ed8' }}>65%</span>
                <button
                  onClick={() => setActiveSource(activeSource === 'card1' ? null : 'card1')}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#dbeafe',
                    border: 'none',
                    color: '#1d4ed8',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Click for source details"
                >
                  i
                </button>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, margin: 0, maxWidth: '280px' }}>
                of U.S. landlords experience late or partial payments
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '40px 24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#1d4ed8' }}>50.5%</span>
                <button
                  onClick={() => setActiveSource(activeSource === 'card2' ? null : 'card2')}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#dbeafe',
                    border: 'none',
                    color: '#1d4ed8',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Click for source details"
                >
                  i
                </button>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, margin: 0, maxWidth: '280px' }}>
                IRS data shows 50.5% of U.S. rental property tax filers reported a net tax loss (often driven by tenant-related costs and instability)
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '40px 24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#1d4ed8' }}>92%</span>
                <button
                  onClick={() => setActiveSource(activeSource === 'card3' ? null : 'card3')}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#dbeafe',
                    border: 'none',
                    color: '#1d4ed8',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Click for source details"
                >
                  i
                </button>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, margin: 0, maxWidth: '280px' }}>
                of users surveyed report higher confidence in tenant selection
              </p>
            </div>

          </div>

          {/* Interactive Source Overlay/Alert banner */}
          {activeSource && (
            <div
              style={{
                background: '#dbeafe',
                border: '1px solid #bfdbfe',
                color: '#1e3a8a',
                borderRadius: '8px',
                padding: '12px 18px',
                fontSize: '0.88rem',
                fontWeight: 600,
                textAlign: 'left',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 10px rgba(29, 78, 216, 0.08)',
              }}
            >
              <span>{sources[activeSource]}</span>
              <button
                onClick={() => setActiveSource(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1e3a8a',
                  fontWeight: 800,
                  cursor: 'pointer',
                  padding: '0 4px',
                }}
              >
                ✕
              </button>
            </div>
          )}

          {/* Source disclaimer */}
          <p style={{ fontSize: '0.825rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: '24px' }}>
            Click the info icons to view source information
          </p>

          {/* CTA Button */}
          <div style={{ marginBottom: '12px' }}>
            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#3182ce',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '14px 44px',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(49, 130, 206, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2b6cb0';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3182ce';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start Screening Smarter
            </Link>
          </div>

          {/* Subtext */}
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
            Works for both vacant properties and existing tenants
          </p>

        </div>
      </section>

      {/* ═══════════════════ COMPARISON SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '80px 5%',
          color: '#1e293b',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Section Header */}
          <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', marginBottom: '8px', lineHeight: 1.4 }}>
            Here&apos;s why landlords and managers across the U.S. are switching to<br />
            behavior-based screening
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 40px 0', letterSpacing: '-0.02em' }}>
            What Makes This Different
          </h2>

          {/* Cards Grid */}
          <div className="diff-grid" style={{ textAlign: 'left' }}>
            
            {/* Traditional Screening Card */}
            <div
              style={{
                background: '#fef2f2',
                borderLeft: '4px solid #ef4444',
                borderRadius: '12px',
                padding: '40px 32px',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.02)',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#991b1b', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.25rem' }}>✕</span> Traditional Screening
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "Focuses on credit and background only",
                  "Misses payment delay patterns and habitual late payers",
                  "Leaves you guessing",
                  "One-time background check"
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.98rem', color: '#7f1d1d', fontWeight: 500 }}>
                    <span style={{ color: '#ef4444', fontWeight: 800, userSelect: 'none' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tenant Integrity Systems Card */}
            <div
              style={{
                background: '#f0fdf4',
                borderLeft: '4px solid #10b981',
                borderRadius: '12px',
                padding: '40px 32px',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.02)',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#065f46', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.25rem' }}>✓</span> Tenant Integrity Systems™
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "Measures real behavior in 7 days",
                  "Detects consistency and responsibility through action",
                  "Gives you early data to act before problems grow",
                  "Ongoing behavior visibility after move-in"
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.98rem', color: '#064e3b', fontWeight: 500 }}>
                    <span style={{ color: '#10b981', fontWeight: 800, userSelect: 'none' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════ STORY SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#f8fafc',
          padding: '80px 5%',
          color: '#1e293b',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'left' }}>
          
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '32px' }}>
            {/* SVG Chat Bubble Icon with dots */}
            <div style={{ flexShrink: 0, marginTop: '4px' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.5186 20 9.12379 19.655 7.89311 19.049L3 20.5L4.5 15.8C3.55523 14.582 3 13.1118 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" fill="#93c5fd" stroke="#3182ce" strokeWidth="2.5" strokeLinejoin="round"/>
                <circle cx="8" cy="11.5" r="1.5" fill="#3182ce"/>
                <circle cx="12" cy="11.5" r="1.5" fill="#3182ce"/>
                <circle cx="16" cy="11.5" r="1.5" fill="#3182ce"/>
              </svg>
            </div>
            <div>
              <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.2, letterSpacing: '-0.025em' }}>
                Background checks only show part of the story.
              </h2>
              <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: '#475569', margin: '6px 0 0 0' }}>
                (and that&apos;s why thousands of landlords keep getting surprised.)
              </p>
            </div>
          </div>

          {/* Story Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.02rem', color: '#334155', lineHeight: 1.7, marginBottom: '40px' }}>
            <p style={{ margin: 0 }}>
              They don&apos;t reveal the applicants who pay late every month, who split rent into multiple payments, or who exit through informal agreements before an eviction ever appears on record, to avoid an official eviction record.
            </p>
            <p style={{ margin: 0 }}>
              Some even promise to &ldquo;catch up after their tax refund&rdquo; — but by then, months of rent are already gone.
            </p>
            <p style={{ margin: 0 }}>
              In many cases, these quiet &ldquo;cash-for-keys&rdquo; exits, or &ldquo;just-in-time&rdquo; payments create major losses that never appear on any background report.
            </p>
            <p style={{ margin: 0 }}>
              That&apos;s the hidden side of property management no credit report can show — and exactly why we built <strong>Tenant Integrity Systems™</strong> to measure real behavior before it costs you.
            </p>
          </div>

          {/* Button Row */}
          <div style={{ textAlign: 'center' }}>
            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#3182ce',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '14px 44px',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(49, 130, 206, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2b6cb0';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3182ce';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              See How It Works
            </Link>
          </div>

        </div>
      </section>
      {/* ═══════════════════ PROBLEM BOX SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '60px 5%',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Blue Card */}
          <div
            style={{
              background: '#3182ce',
              borderRadius: '16px',
              padding: '48px 48px',
              boxShadow: '0 10px 30px rgba(49, 130, 206, 0.25)',
              textAlign: 'left',
            }}
          >
            <h2 style={{ fontSize: '2.3rem', fontWeight: 800, margin: '0 0 24px 0', letterSpacing: '-0.025em' }}>
              The Problem Every Landlord Faces
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '1.05rem', lineHeight: 1.6, opacity: 0.95 }}>
              <p style={{ margin: 0 }}>
                Every landlord knows the story — the applicant who looked perfect on paper... until they moved in.
              </p>
              <p style={{ margin: 0 }}>
                Then come the late payments.
              </p>
              <p style={{ margin: 0 }}>
                The excuses. &ldquo;I&apos;ll pay next week.&rdquo;
              </p>
              <p style={{ margin: 0 }}>
                Suddenly, the same person who smiled through the lease signing becomes a financial risk.
              </p>
              <p style={{ margin: 0 }}>
                The truth? <strong>Credit reports don&apos;t show behavior.</strong>
              </p>
              <p style={{ margin: 0 }}>
                They show the past — not how someone will treat you and your property tomorrow.
              </p>
              <p style={{ margin: 0 }}>
                That&apos;s why we built <strong>Tenant Integrity Systems™</strong> —
              </p>
              <p style={{ margin: 0 }}>
                to give landlords the missing piece of the puzzle:
              </p>
              <p style={{ margin: 0, fontWeight: 700, background: 'rgba(255,255,255,0.12)', padding: '6px 12px', borderRadius: '6px', alignSelf: 'flex-start' }}>
                real-time behavioral insight before move-in — while you still have the power to choose
              </p>
              <p style={{ margin: '8px 0 0 0' }}>
                That&apos;s exactly why landlords now measure behavior before approval — not after problems begin.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ FOUNDER'S MESSAGE SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '80px 5%',
          color: '#1e293b',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Block: Bio text & button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <h2
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#0f172a',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Founder&apos;s Message
            </h2>
            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#1e293b',
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              &ldquo;I built this system because I was tired of guessing who to trust.&rdquo;
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1rem', color: '#334155', lineHeight: 1.6 }}>
              <p style={{ margin: 0 }}>
                I&apos;ve been a landlord for years — and I kept seeing the same story play out.
              </p>
              <p style={{ margin: 0 }}>
                Applicants who say all the right things, pass every background check... and then start paying late or dodging messages.
              </p>
              <p style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>
                After two decades studying human behavior and managing rental portfolios, I realized something simple but powerful: Reliability always follows patterns — small, repeatable actions that never show up on paper.
              </p>
              <p style={{ margin: 0 }}>
                That insight became <strong>Tenant Integrity Systems™</strong>— a system that measures consistency, timing, communication, response, and moral integrity in real time, showing who will act fairly and responsibly once they hold the power — before those patterns turn into losses.
              </p>
            </div>

            <div style={{ marginTop: '8px' }}>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Yuval Perry</p>
              <p style={{ margin: '2px 0 8px 0', fontSize: '0.9rem', fontWeight: 600, color: '#64748b' }}>Founder, RTO Funding LLC</p>
              <p style={{ margin: 0, fontSize: '0.95rem', fontStyle: 'italic', color: '#475569' }}>
                &ldquo;Behavior doesn&apos;t lie. When you measure it, you see who people truly are.&rdquo;
              </p>
            </div>

            <div style={{ marginTop: '12px' }}>
              <Link
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#3182ce',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  padding: '12px 36px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(49, 130, 206, 0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2b6cb0';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3182ce';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right Block: Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
              }}
            >
              <img
                src="/image.png"
                alt="Yuval Perry - Founder"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '80px 5%',
          color: '#1e293b',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0', letterSpacing: '-0.025em' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '1.05rem', fontWeight: 500, color: '#475569', maxWidth: '800px', margin: '0 auto 48px auto', lineHeight: 1.5 }}>
            Protects property owners legally — objective, automated, and Fair Housing–safe
            <br />
            screening that removes guesswork and reduces liability.
          </p>

          <div className="how-works-grid">
            
            {/* Card 01 */}
            <div
              style={{
                background: '#3182ce',
                borderRadius: '16px',
                padding: '36px 32px',
                boxShadow: '0 8px 30px rgba(49, 130, 206, 0.15)',
                color: '#ffffff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1, opacity: 0.95 }}>01</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>Invite Your Applicant</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                Send your applicant a simple link. No downloads, no setup — they complete
                everything online. Applicants see this as part of a modern screening
                process — not a test.
              </p>
            </div>

            {/* Card 02 */}
            <div
              style={{
                background: '#3182ce',
                borderRadius: '16px',
                padding: '36px 32px',
                boxShadow: '0 8px 30px rgba(49, 130, 206, 0.15)',
                color: '#ffffff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1, opacity: 0.95 }}>02</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>7-Day Integrity Assessment</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                The applicant completes short 2–3 minute daily actions for one week — showing how
                they follow through, communicate, and meet expectations. Short daily actions
                reveal real follow-through — something background checks can&apos;t show.
              </p>
            </div>

            {/* Card 03 */}
            <div
              style={{
                background: '#3182ce',
                borderRadius: '16px',
                padding: '36px 32px',
                boxShadow: '0 8px 30px rgba(49, 130, 206, 0.15)',
                color: '#ffffff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1, opacity: 0.95 }}>03</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>Get the Report</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                After 7 days, you receive a Tenant Integrity Report™ with clear insights and a
                Behavioral Reliability Summary — no guesswork, just documented behavior.
              </p>
            </div>

            {/* Card 04 */}
            <div
              className="how-works-card-full"
              style={{
                background: '#3182ce',
                borderRadius: '16px',
                padding: '36px 32px',
                boxShadow: '0 8px 30px rgba(49, 130, 206, 0.15)',
                color: '#ffffff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1, opacity: 0.95 }}>04</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>Keep Stability After Move-In</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                Continue with Monthly Integrity Shield™ to document cooperation, communication,
                and consistency — helping you catch small issues before they become big problems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════ BONUS UPGRADE & TWO PHASES SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#f8fafc',
          padding: '60px 5% 80px 5%',
          color: '#1e293b',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Dash-bordered Bonus Upgrade Box */}
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto 48px auto',
              border: '2px dashed #3182ce',
              borderRadius: '12px',
              padding: '32px 24px',
              background: '#ffffff',
              boxShadow: '0 4px 12px rgba(49, 130, 206, 0.03)',
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#3182ce',
                margin: '0 0 16px 0',
                letterSpacing: '-0.01em',
              }}
            >
              Bonus Upgrade
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
              We&apos;ve expanded your license —
              <br />
              you can now assess up to <strong>10 applicants per property within 30 days</strong>,
              <br />
              with <strong>no hidden or recurring fees</strong>.
            </p>
          </div>

          {/* Two Phases Headers */}
          <div style={{ marginTop: '24px' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#3182ce',
                margin: '0 0 8px 0',
              }}
            >
              Two Phases. One Integrity System.
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#64748b', fontWeight: 500, margin: 0 }}>
              Evaluate before move-in. Reinforce after move-in.
            </p>
          </div>

          {/* Side-by-Side Phase Cards Grid */}
          <div className="phases-grid">
            
            {/* Left Card: Before Move-In */}
            <div
              style={{
                background: '#3182ce',
                borderRadius: '16px',
                padding: '40px 32px',
                boxShadow: '0 10px 30px rgba(49, 130, 206, 0.15)',
                color: '#ffffff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>Before Move-In</h3>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.25)', margin: '-8px 0 4px 0' }} />
              
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>The 7-Day Integrity Assessment™</h4>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                See who they really are — before you hand over the keys.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.95 }}>
                <p style={{ margin: 0 }}>
                  Traditional checks only show numbers. The <strong>Integrity Assessment™</strong> reveals how applicants handle <strong>responsibility, timing, communication, and moral choice</strong> before they hold the power — showing who will act fairly once the lease is signed.
                </p>
                <p style={{ margin: 0 }}>
                  Each applicant completes a short, 2–3 minute daily task for 7 days. The system tracks consistency and real-time response, giving you clear behavioral data — not just background history.
                </p>
              </div>

              {/* Checkbox features list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
                {[
                  "Quick daily insights — no downloads or setup",
                  "Full behavioral summary in 7 days",
                  "Clear pass / fail / review outcome"
                ].map((text, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '4px', background: '#22c55e', color: '#ffffff', fontSize: '0.8rem', fontWeight: 800 }}>✓</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: '8px 0 0 0', opacity: 0.95 }}>
                You&apos;ll see how they <em>follow through</em> before they move in — saving months of future risk.
              </p>

              <div style={{ marginTop: '16px' }}>
                <Link
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#000000',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    border: '1px solid #3b82f6',
                    boxShadow: '0 0 16px rgba(59, 130, 246, 0.5)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(59, 130, 246, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(59, 130, 246, 0.5)';
                  }}
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right Card: After Move-In */}
            <div
              style={{
                background: '#3182ce',
                borderRadius: '16px',
                padding: '40px 32px',
                boxShadow: '0 10px 30px rgba(49, 130, 206, 0.15)',
                color: '#ffffff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>After Move-In</h3>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.25)', margin: '-8px 0 4px 0' }} />
              
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>The Monthly Integrity Shield™</h4>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                Keep trust active — and your rent protected.
              </p>

              {/* Quote block */}
              <div
                style={{
                  borderLeft: '3px solid rgba(255,255,255,0.4)',
                  paddingLeft: '14px',
                  margin: '4px 0',
                  fontSize: '0.925rem',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Trust doesn&apos;t last on its own — it needs small, consistent actions to stay strong.&rdquo;
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.95 }}>
                <p style={{ margin: 0 }}>
                  The <strong>Monthly Integrity Shield™</strong> keeps tenants engaged and accountable through a 7-day mini-process each month — measuring <strong>consistency, communication, response, and moral integrity</strong> in real time.
                </p>
                <p style={{ margin: 0 }}>
                  Each step takes just <strong>2–3 minutes</strong> — but is intentionally built to <strong>influence mindset and behavior</strong>, helping tenants <strong>internalize responsibility</strong> through short daily reflections and micro-actions.
                </p>
                <p style={{ margin: 0 }}>
                  This keeps good habits alive long after the lease is signed.
                </p>
              </div>

              {/* Checkbox features list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '4px' }}>
                {[
                  "<strong>Integrity Discount:</strong> Tenants who complete the process keep their rent discount active — a reward for reliability, not a price reduction.",
                  "<strong>Auto-Pause & Recovery:</strong> If participation stops, the discount pauses automatically. Tenants get <strong>3 days</strong> to regain it through a quick reactivation link.",
                  "<strong>Ongoing Insight:</strong> Between cycles, the system runs light check-ins — keeping behavioral trust visible all month."
                ].map((htmlText, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', lineHeight: 1.45 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '4px', background: '#22c55e', color: '#ffffff', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span dangerouslySetInnerHTML={{ __html: htmlText }} />
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: '8px 0 0 0', opacity: 0.95 }}>
                You&apos;ll be the first to know when reliability starts to change — <strong>before it becomes a payment problem.</strong>
              </p>

              <div style={{ marginTop: '16px' }}>
                <Link
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#000000',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    border: '1px solid #3b82f6',
                    boxShadow: '0 0 16px rgba(59, 130, 246, 0.5)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(59, 130, 246, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(59, 130, 246, 0.5)';
                  }}
                >
                  See How It Works
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════ QUOTE BANNER SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '60px 5% 100px 5%',
        }}
      >
        <div className="quote-banner-grid">
          {/* Left Column: Quote Text Card */}
          <div
            style={{
              background: '#3182ce',
              color: '#ffffff',
              padding: '60px 48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <blockquote
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                fontStyle: 'italic',
                lineHeight: 1.5,
                margin: '0 0 24px 0',
                letterSpacing: '-0.01em',
              }}
            >
              &ldquo;Built by landlords, for landlords and property managers — because integrity starts with behavior.&rdquo;
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <cite style={{ fontSize: '1rem', fontWeight: 800, fontStyle: 'normal' }}>
                — Yuval Perry
              </cite>
              <span style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 600 }}>
                Founder, Tenant Integrity Systems™
              </span>
              <span style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 600 }}>
                Behavior-Based Risk Screening for Landlords
              </span>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div style={{ position: 'relative', minHeight: '320px' }}>
            <img
              src="/speaking-BIcdhW2J.jpg"
              alt="Yuval Perry talking on phone"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '60px 5% 100px 5%',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div className="faq-grid">
          {/* Left Column: Image with card below */}
          <div style={{ background: '#ffffff', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
              <img
                src="/faq-man.png"
                alt="Landlord asking questions"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
            {/* White Card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '24px 28px',
                border: '1px solid #cbd5e1',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div style={{ flex: 1, textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                  Questions about screening or monitoring? We&apos;ll respond by email within 24 hours.
                </p>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'center' }}>
                <Link
                  href="#"
                  style={{
                    background: '#000000',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    padding: '10px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginBottom: '6px',
                  }}
                >
                  Contact Us
                </Link>
                <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>
                  For landlords and
                  <br />
                  property managers only
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark FAQ lists */}
          <div
            style={{
              background: '#0a0f1d',
              padding: '60px 48px',
              color: '#ffffff',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '32px',
            }}
          >
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 24px 0', letterSpacing: '-0.02em' }}>
                Frequently asked questions ?
              </h2>

              {/* FAQ Accordion List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  {
                    q: "Can a property owner deny me based on a phone call or personal impression?",
                    a: "No. Tenant Integrity Systems™ provides an objective, standardized 7-day assessment flow designed to prevent non-compliant subjective profiling and ensure actions map directly to Fair Housing standards."
                  },
                  {
                    q: "Can a tenant memorize the answers if they use the system more than once?",
                    a: "The system utilizes dynamic scenario variations and randomized questions that evaluate behavior, consistency, and response latency in real-time, making memorization ineffective."
                  },
                  {
                    q: "Where do landlord loss statistics come from?",
                    a: "Our statistics are gathered from industry benchmarks, including the TransUnion Landlord Survey, IRS Statistics of Income filings, and internal aggregate data audited across active properties."
                  },
                  {
                    q: "What happens after the 7-day process?",
                    a: "Upon completion, a detailed Tenant Integrity Report™ compiling metrics on communication, punctuality, and follow-through is generated and shared with the property manager."
                  },
                  {
                    q: "Can I cancel the Monthly Shield?",
                    a: "Yes. The Monthly Integrity Shield™ operates on a month-to-month subscription that can be paused or canceled instantly from your settings dashboard without fees."
                  },
                  {
                    q: "Is this legal under Fair Housing and screening laws?",
                    a: "Absolutely. Tenant Integrity Systems™ is built from the ground up to align with FCRA and Fair Housing laws by offering objective, equal-criteria behavioral analysis."
                  },
                  {
                    q: "Who can see the applicant's behavioral data?",
                    a: "Only the requesting landlord or property manager and the authorized applicant hold access privileges to review the generated behavioral reports."
                  }
                ].map((item, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      style={{
                        background: '#3182ce',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.925rem',
                          cursor: 'pointer',
                          outline: 'none',
                        }}
                      >
                        <span>{item.q}</span>
                        <span style={{ fontSize: '1.1rem', marginLeft: '12px', display: 'flex', alignItems: 'center' }}>
                          {isOpen ? '▲' : '▼'}
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div
                          style={{
                            padding: '0 20px 18px 20px',
                            fontSize: '0.875rem',
                            lineHeight: 1.5,
                            color: 'rgba(255, 255, 255, 0.9)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                            paddingTop: '14px',
                          }}
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom info section */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 10px 0' }}>Didn&apos;t find your answer?</h4>
              
              <div style={{ fontSize: '0.825rem', opacity: 0.8, lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <p style={{ margin: 0 }}>
                  For technical questions about using the platform, contact support — email response within 24 hours.
                </p>
                <p style={{ margin: 0 }}>
                  Detailed explanations about screening, monitoring, and optional VIP services are provided inside the sales pages and checkout process.
                </p>
                <p style={{ margin: 0 }}>
                  Support is provided by email. We do not provide legal advice.
                </p>
              </div>

              <Link
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#3182ce',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  padding: '12px 36px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(49, 130, 206, 0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2b6cb0';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3182ce';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STOP GUESSING SECTION ═══════════════════ */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          padding: '60px 5% 100px 5%',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div className="stop-guessing-grid">
          {/* Left Column: Information Card */}
          <div
            style={{
              background: '#3182ce',
              color: '#ffffff',
              padding: '60px 48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <h2
              style={{
                fontSize: '2.3rem',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#ffffff',
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Stop Guessing &mdash; Start Knowing
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px', opacity: 0.95 }}>
              <p style={{ margin: 0 }}>
                Because credit doesn&apos;t tell you who they really are &mdash; behavior does.
              </p>
              <p style={{ margin: 0 }}>
                Tenant Integrity Systems™ helps you see how applicants actually behave &mdash; before move-in.
              </p>
            </div>
            
            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#000000',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: 700,
                padding: '12px 32px',
                borderRadius: '9999px',
                textDecoration: 'none',
                border: '1px solid #3b82f6',
                boxShadow: '0 0 16px rgba(59, 130, 246, 0.5)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(59, 130, 246, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(59, 130, 246, 0.5)';
              }}
            >
              See How Tenant Integrity Works
            </Link>
          </div>

          {/* Right Column: Handshake Image */}
          <div style={{ position: 'relative', minHeight: '360px' }}>
            <img
              src="/handshake-C91XWzau.jpg"
              alt="Landlord and tenant shaking hands"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer
        style={{
          background: '#3182ce',
          color: '#ffffff',
          padding: '60px 5% 40px 5%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          
          {/* Logo & Sub-Brand block */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img
              src="/logo.svg"
              alt="Tenant Integrity Systems"
              style={{ height: '68px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0, opacity: 0.9, letterSpacing: '0.05em' }}>
              RTO Funding LLC - The Human Side of Screening
            </p>
          </div>

          {/* Help & Support block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.95rem' }}>
            <p style={{ margin: 0 }}>
              Need help faster? Check our FAQ first.
            </p>
            <p style={{ margin: 0, fontWeight: 700 }}>
              Support: <a href="mailto:help@tenantintegrity.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>help@tenantintegrity.com</a>
            </p>
            <p style={{ margin: 0, fontSize: '0.88rem', opacity: 0.9 }}>
              We reply personally within 24 hours, Monday-Friday.
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.85, fontStyle: 'italic' }}>
              (For data security, all inquiries are handled via email.)
            </p>
          </div>

          {/* Compliance & Trust Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', opacity: 0.95 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>
              Objective, measurable, Fair Housing–safe screening for all applicants
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '0.85rem' }}>
              <span>🛡️ FCRA Compliant</span>
              <span>💫 U.S. Property Owner Verified</span>
              <span>🔒 Secure Payment via Stripe</span>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {['facebook', 'youtube', 'linkedin'].map((platform, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: '#3182ce',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {platform === 'facebook' && 'f'}
                {platform === 'youtube' && 'y'}
                {platform === 'linkedin' && 'in'}
              </a>
            ))}
          </div>

          {/* Admin portal button */}
          <Link
            href="/admin/overview"
            style={{
              background: '#1d4ed8',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(29, 78, 216, 0.3)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1e40af'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#1d4ed8'}
          >
            <span>👤</span> Admin
          </Link>

          {/* Separator line */}
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '12px 0' }} />

          {/* Legal disclaimers & copyright */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.75rem', opacity: 0.85, lineHeight: 1.5, maxWidth: '800px' }}>
            <p style={{ margin: 0 }}>
              &copy; 2020–2026 RTO Funding LLC — Licensed use of <strong>Tenant Integrity Systems™</strong>
            </p>
            <p style={{ margin: 0 }}>
              Authorized use by registered property owners, managers, and approved tenants only.
              <br />
              All rights reserved.
            </p>
            <p style={{ margin: 0 }}>
              Tenant Integrity Systems™ applies the same behavioral criteria to all applicants.
              <br />
              Approval is based solely on measurable participation — ensuring fully objective, Fair Housing-compliant screening.
            </p>
          </div>

        </div>
      </footer>

      {/* ═══════════════════ FLOATING HELP WIDGET ═══════════════════ */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', alignItems: 'center', gap: '12px' }}>
        {helpOpen && (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              width: '240px',
              color: '#1e293b',
            }}
          >
            <h4 style={{ fontWeight: 700, margin: '0 0 6px 0', fontSize: '0.9rem' }}>Need Help?</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>
              Our support team is available to assist you. Ask us anything about tenant screening!
            </p>
          </div>
        )}
        <button
          onClick={() => setHelpOpen(!helpOpen)}
          style={{
            background: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 20px',
            fontSize: '0.88rem',
            fontWeight: 700,
            color: '#3182ce',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          Need Help?
        </button>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '8px',
            background: '#153e75',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          {/* Custom book/profile icon matching the image */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
