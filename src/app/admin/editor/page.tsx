'use client';

import React, { useState } from 'react';

// Import vector icons from React Icons Lu library
import { LuHeading, LuPenTool, LuCheck } from 'react-icons/lu';

interface ContentBlock {
  id: string;
  label: string;
  content: string;
}

export default function AdminEditorPage() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    {
      id: 'b1',
      label: 'HERO HEADER',
      content: 'Measure Tenant Behavior — Not Just Background.'
    },
    {
      id: 'b2',
      label: 'HERO SUBHEADER',
      content: "The #1 reason U.S. landlords lose money isn't repairs — it's tenant behavior."
    },
    {
      id: 'b3',
      label: 'HERO PARAGRAPH',
      content: 'Hidden evictions, cash-for-keys exits, stalled payments, and even the IRS data... showing that 50.4% of rental property firms reported a net loss... all of it goes back to behavior. We measure those habits before they cost you thousands.'
    },
    {
      id: 'b4',
      label: 'HERO OTHER TEXT',
      content: 'FCRA Aligned. Trusted by property owners & managers nationwide. Objective behavioral screening that reveals real habits before they turn into real losses.'
    },
    {
      id: 'b5',
      label: 'PRIMARY CTA LABEL',
      content: 'See How It Works'
    },
    {
      id: 'b6',
      label: 'PRIMARY CTA LINK',
      content: 'Start Screening Smarter'
    },
    {
      id: 'b7',
      label: "FOUNDER'S MESSAGE (SHORT)",
      content: 'I built this system because I was tired of guessing who to trust.'
    },
    {
      id: 'b8',
      label: "FOUNDER'S MESSAGE (LONG)",
      content: "I've been a landlord for years — and I've seen every story play out. Applicants who say all the right things, pass every background check... and then start playing box-office dodging messages. After two decades studying human behavior and managing a small portfolio... I realized something simple but powerful: Reliability always follows patterns — small, repeatable actions that never show up on paper. That's why I created Tenant Integrity Systems™ — a system that measures consistency, caring, communication, response and more integrity in real-time, showing who will act fairly and responsibly once they hold the keys — before those patterns turn into losses."
    }
  ]);

  const handleTextChange = (id: string, newText: string) => {
    setBlocks(prev =>
      prev.map(b => b.id === id ? { ...b, content: newText } : b)
    );
  };

  const handleSaveBlock = (label: string) => {
    alert(`Content changes saved successfully for block: ${label}!`);
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
          Edit Content
        </h1>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Edit the blocks that appear on your primary landing page.
        </p>
      </div>

      {/* Editor stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {blocks.map((block) => (
          <div 
            key={block.id}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '24px 32px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}
          >
            {/* Block identifier tag label */}
            <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>
              {block.label}
            </span>

            {/* WYSIWYG style Rich text editor panel header bar */}
            <div 
              style={{
                border: '1px solid var(--border-color)',
                borderBottom: 'none',
                borderRadius: '8px 8px 0 0',
                padding: '8px 16px',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              {/* Bold control button */}
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={()=>alert('sandbox logic: Set selection bold')}
              >
                B
              </button>

              {/* Italic control button */}
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={()=>alert('sandbox logic: Set selection italic')}
              >
                I
              </button>

              {/* Paragraph marker Pilcrow symbol control button */}
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600
                }}
                onClick={()=>alert('sandbox logic: Insert paragraph break symbol')}
              >
                ¶
              </button>
            </div>

            {/* Custom styled Content textarea */}
            <textarea
              className="premium-input"
              value={block.content}
              onChange={(e) => handleTextChange(block.id, e.target.value)}
              style={{
                width: '100%',
                minHeight: block.id === 'b8' ? '180px' : block.id === 'b3' ? '120px' : '75px',
                padding: '16px',
                borderRadius: '0 0 8px 8px',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                color: 'var(--text-primary)'
              }}
              onFocus={(e)=>e.currentTarget.style.borderColor = '#0a57e3'}
              onBlur={(e)=>e.currentTarget.style.borderColor = 'var(--border-color)'}
            />

            {/* Cancel & Save control actions (flat gray/blue text buttons exactly matching screenshot) */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '16px' }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e)=>e.currentTarget.style.color='var(--text-primary)'}
                onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-muted)'}
                onClick={()=>alert('Changes cancelled')}
              >
                Cancel
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  color: 'var(--brand-color)',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e)=>e.currentTarget.style.opacity='0.8'}
                onMouseLeave={(e)=>e.currentTarget.style.opacity='1'}
                onClick={() => handleSaveBlock(block.label)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
