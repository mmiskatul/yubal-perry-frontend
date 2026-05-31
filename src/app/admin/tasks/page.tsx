'use client';

import React from 'react';

// Import vector icons from React Icons Lu library
import { 
  LuInfo, 
  LuTriangleAlert, 
  LuPlus, 
  LuCalendar, 
  LuFileText, 
  LuClock, 
  LuCircleCheck, 
  LuCirclePlay, 
  LuCircleX, 
  LuSquarePen, 
  LuEye, 
  LuSend,
  LuUserPlus
} from 'react-icons/lu';

export default function AdminTasksPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [customAlert, setCustomAlert] = React.useState<{
    title: string;
    message: string;
    type: 'success' | 'warning' | 'info';
  } | null>(null);
  
  // Form fields
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskQuestion, setTaskQuestion] = React.useState('');
  const [taskPurpose, setTaskPurpose] = React.useState('');
  const [stage, setStage] = React.useState('Stage 2 - Check-In Cycle');
  const [dayInCycle, setDayInCycle] = React.useState(1);
  const [totalDays, setTotalDays] = React.useState(7);
  const [deadline, setDeadline] = React.useState('By 5:00 PM today');
  const [priority, setPriority] = React.useState('Medium');

  const [dispatchList, setDispatchList] = React.useState([
    { time: '9:00 AM', title: 'Welcome Assessment', desc: '124 Tenants | Stage 1 | Schedule', status: 'COMPLETED', color: 'var(--color-user)', bg: '#e6fbf3', icon: <LuCircleCheck /> },
    { time: '11:30 AM', title: 'Residency Verification', desc: '42 Tenants | Stage 2 | Trigger', status: 'RUNNING', color: 'var(--brand-color)', bg: '#eff6ff', icon: <LuCirclePlay /> },
    { time: '1:45 PM', title: 'Manual Validation Flow', desc: '18 Tenants | Stage 2 | Manual', status: 'FAILED', color: '#ef4444', bg: '#fef2f2', icon: <LuCircleX /> }
  ]);

  const handleDispatch = () => {
    const newTask = {
      time: deadline === 'By 5:00 PM today' ? '5:00 PM' : '9:00 PM',
      title: taskTitle || 'azcaecsac',
      desc: `0 Tenants | ${stage.split(' - ')[0]} | Schedule`,
      status: 'RUNNING',
      color: 'var(--brand-color)',
      bg: '#eff6ff',
      icon: <LuCirclePlay />
    };
    setDispatchList([newTask, ...dispatchList]);
    const dispatchedTitle = taskTitle || 'azcaecsac';
    setIsCreateModalOpen(false);
    
    // Reset form fields
    setTaskTitle('');
    setTaskQuestion('');
    setTaskPurpose('');
    setCurrentStep(1);
    
    setCustomAlert({
      title: 'Task Dispatched',
      message: `Behavioral check-in task "${dispatchedTitle}" has been dispatched to selected tenants successfully!`,
      type: 'success'
    });
  };

  const renderTabs = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '0px', marginBottom: '24px' }}>
        
        {/* Tab 1: Task Content */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          paddingBottom: '12px', 
          borderBottom: currentStep === 1 ? '2px solid var(--brand-color)' : '2px solid transparent',
          color: currentStep === 1 ? 'var(--brand-color)' : currentStep > 1 ? 'var(--color-user)' : 'var(--text-muted)',
          fontWeight: 700,
          fontSize: '0.85rem'
        }}>
          {currentStep > 1 ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--color-user)', color: '#ffffff', fontSize: '0.675rem' }}><LuCircleCheck /></span>
          ) : (
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--brand-color)', color: '#ffffff', fontSize: '0.725rem' }}>1</span>
          )}
          <span>Task Content</span>
        </div>

        {/* Tab 2: Settings */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          paddingBottom: '12px', 
          borderBottom: currentStep === 2 ? '2px solid var(--brand-color)' : '2px solid transparent',
          color: currentStep === 2 ? 'var(--brand-color)' : currentStep > 2 ? 'var(--color-user)' : 'var(--text-muted)',
          fontWeight: 700,
          fontSize: '0.85rem'
        }}>
          {currentStep > 2 ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--color-user)', color: '#ffffff', fontSize: '0.675rem' }}><LuCircleCheck /></span>
          ) : (
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              backgroundColor: currentStep === 2 ? 'var(--brand-color)' : 'var(--border-color)', 
              color: currentStep === 2 ? '#ffffff' : 'var(--text-muted)', 
              fontSize: '0.725rem' 
            }}>2</span>
          )}
          <span>Settings</span>
        </div>

        {/* Tab 3: Assign Tenants */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          paddingBottom: '12px', 
          borderBottom: currentStep === 3 ? '2px solid var(--brand-color)' : '2px solid transparent',
          color: currentStep === 3 ? 'var(--brand-color)' : 'var(--text-muted)',
          fontWeight: 700,
          fontSize: '0.85rem'
        }}>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '20px', 
            height: '20px', 
            borderRadius: '50%', 
            backgroundColor: currentStep === 3 ? 'var(--brand-color)' : 'var(--border-color)', 
            color: currentStep === 3 ? '#ffffff' : 'var(--text-muted)', 
            fontSize: '0.725rem' 
          }}>3</span>
          <span>Assign Tenants</span>
        </div>

      </div>
    );
  };

  const renderProgressDots = () => {
    return (
      <div style={{ display: 'flex', gap: '6px' }}>
        <span style={{ 
          width: '24px', 
          height: '4px', 
          borderRadius: '2px', 
          backgroundColor: currentStep >= 1 ? (currentStep > 1 ? 'var(--color-user)' : 'var(--brand-color)') : 'var(--border-color)' 
        }} />
        <span style={{ 
          width: '24px', 
          height: '4px', 
          borderRadius: '2px', 
          backgroundColor: currentStep >= 2 ? (currentStep > 2 ? 'var(--color-user)' : 'var(--brand-color)') : 'var(--border-color)' 
        }} />
        <span style={{ 
          width: '24px', 
          height: '4px', 
          borderRadius: '2px', 
          backgroundColor: currentStep >= 3 ? 'var(--brand-color)' : 'var(--border-color)' 
        }} />
      </div>
    );
  };

  return (
    <div style={{ padding: '0px' }} className="animate-fade-in">
      
      {/* Page Header with Add Task action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Task Management
          </h1>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Configure behavioural assessment logic and operational task flows.
          </p>
        </div>

        <button 
          className="premium-btn premium-btn-primary"
          style={{ 
            '--btn-color': 'var(--brand-color)', 
            '--focus-ring': 'rgba(10, 87, 227, 0.15)',
            padding: '10px 20px', 
            borderRadius: '8px', 
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          } as React.CSSProperties}
          onClick={() => {
            setCurrentStep(1);
            setIsCreateModalOpen(true);
          }}
        >
          <LuPlus /> Add New Task
        </button>
      </div>

      {/* Grid: 4 Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        
        {/* Active Schedules */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', position: 'relative' }}>
          <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Active Schedules
          </span>
          <span style={{ position: 'absolute', right: '20px', top: '20px', color: 'var(--text-muted)', fontSize: '1rem', cursor: 'pointer' }}><LuInfo /></span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px 0' }}>
            24 <span style={{ fontSize: '0.8rem', color: 'var(--color-user)', fontWeight: 700, marginLeft: '4px' }}>+2 New</span>
          </h2>
        </div>

        {/* Dispatched Today */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', position: 'relative' }}>
          <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Dispatched Today
          </span>
          <span style={{ position: 'absolute', right: '20px', top: '20px', color: 'var(--text-muted)', fontSize: '1rem', cursor: 'pointer' }}><LuInfo /></span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px 0' }}>
            1,284 <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', fontWeight: 500, marginLeft: '2px' }}>Across 12 Tenants</span>
          </h2>
        </div>

        {/* Pending Review */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', position: 'relative' }}>
          <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Pending Review
          </span>
          <span style={{ position: 'absolute', right: '20px', top: '20px', color: 'var(--text-muted)', fontSize: '1rem', cursor: 'pointer' }}><LuInfo /></span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px 0' }}>
            12 <span style={{ fontSize: '0.75rem', color: 'var(--brand-color)', fontWeight: 700, marginLeft: '4px' }}>Priority</span>
          </h2>
        </div>

        {/* Completion Rate (Alert state) */}
        <div style={{ backgroundColor: 'var(--color-alert-light)', border: '1px solid var(--color-alert-border)', borderRadius: '12px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', position: 'relative' }}>
          <span style={{ fontSize: '0.675rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Completion Rate
          </span>
          <span style={{ position: 'absolute', right: '20px', top: '20px', color: '#ef4444', fontSize: '1rem' }}><LuTriangleAlert /></span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', margin: '8px 0 4px 0' }}>
            68% <span style={{ fontSize: '0.725rem', color: '#ef4444', fontWeight: 600, marginLeft: '2px' }}>Below Threshold</span>
          </h2>
          <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontWeight: 700, display: 'inline-block', marginTop: '2px' }}>
            ⚠ Critical Action Needed
          </span>
        </div>

      </div>

      {/* Main Content Layout: Card Info (Left) and Today's Dispatch (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '24px', marginBottom: '32px', alignItems: 'start' }}>
        
        {/* Left Card: Morning Routine Details */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-color)',
            borderTop: '4px solid var(--brand-color)', // Blue top indicator bar matching Screenshot
            borderRadius: '0 0 12px 12px',
            padding: '28px 32px',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'left'
          }}
        >
          {/* Card Header row with badges */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Morning Routine Check-In</h3>
              <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', fontWeight: 700 }}>In Progress</span>
              <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--color-user-light)', color: 'var(--color-user)', fontWeight: 700 }}>Scoring Impact</span>
            </div>
            
            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.1rem' }} onClick={()=>alert('Dismissed details')}>×</button>
          </div>

          {/* Mini attributes list badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.725rem', padding: '3px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', fontWeight: 600 }}>Stage 2 - Check-In Cycle</span>
            <span style={{ fontSize: '0.725rem', padding: '3px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><LuCalendar /> Day 1 of 7</span>
            <span style={{ fontSize: '0.725rem', padding: '3px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><LuFileText /> Text Response</span>
            <span style={{ fontSize: '0.725rem', padding: '3px 8px', borderRadius: '6px', backgroundColor: 'var(--color-alert-light)', color: '#ef4444', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444' }} /> High Priority</span>
            <span style={{ fontSize: '0.725rem', padding: '3px 8px', color: 'var(--text-muted)', fontWeight: 500 }}>Created Apr 7, 2026</span>
          </div>

          {/* Inner Question and details frame */}
          <div 
            style={{ 
              padding: '24px', 
              backgroundColor: 'var(--bg-primary)', 
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              marginBottom: '24px'
            }}
          >
            <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
              Tenant Question
            </span>
            <blockquote style={{ fontSize: '0.9rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--text-primary)', marginTop: '8px', lineHeight: '1.6' }}>
              "Describe your typical morning routine in the lobby area. Which services do you use most frequently between 7:00 AM and 9:00 AM?"
            </blockquote>
            
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LuInfo /> This helps us understand peak usage times and improve service scheduling.
            </p>

            <span style={{ fontSize: '#0.75rem', fontWeight: 700, color: 'var(--color-support)', marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <LuClock /> Deadline: By 5:00 PM today
            </span>
          </div>

          {/* Assigned Tenants section */}
          <div style={{ marginBottom: '28px' }}>
            <h5 style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Assigned to 3 Tenant(s)
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Greenfield Residences – Unit 3A', 'Skyline Properties – Unit 7B', 'Harbor View Estates – Unit 12C'].map((tag, i) => (
                <span key={i} style={{ fontSize: '0.75rem', padding: '4px 12px', borderRadius: '6px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-color)', fontWeight: 700 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card action triggers */}
          <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
            <button 
              className="premium-btn premium-btn-primary" 
              style={{ '--btn-color': 'var(--brand-color)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', gap: '6px' } as React.CSSProperties}
              onClick={()=>alert('Edit workflow logical parameters')}
            >
              <LuSquarePen /> Edit Task
            </button>
            <button 
              className="premium-btn premium-btn-secondary" 
              style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.75rem', display: 'inline-flex', gap: '6px' }}
              onClick={()=>alert('Display submitted response summaries')}
            >
              <LuEye /> View Responses
            </button>
            <button 
              className="premium-btn premium-btn-secondary" 
              style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.75rem', display: 'inline-flex', gap: '6px' }}
              onClick={()=>alert('Modify target tenant dispatch criteria')}
            >
              <LuSend /> Modify Dispatch
            </button>
          </div>

        </div>

        {/* Right Card: Today's Dispatch Status pipeline logs */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px 0',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'left'
          }}
        >
          {/* Header row with Dispatch summary */}
          <div style={{ padding: '0 24px 16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <LuSend style={{ fontSize: '1rem', color: 'var(--brand-color)' }} /> Today's Dispatch
            </h4>
            <a href="#" style={{ fontSize: '0.75rem', color: 'var(--brand-color)', fontWeight: 700, textDecoration: 'none' }} onClick={()=>alert('Sandbox details pipeline index logs')}>View All</a>
          </div>

          {/* List of dispatches */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px 0 24px', gap: '16px' }}>
            {dispatchList.map((d, i) => (
              <div 
                key={i}
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '16px 20px',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--brand-color)', display: 'block' }}>{d.time}</span>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>{d.title}</h4>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px', display: 'block' }}>{d.desc}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{ fontSize: '1.2rem', color: d.color, display: 'flex' }}>{d.icon}</span>
                  <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: d.bg, color: d.color, fontWeight: 700 }}>
                    {d.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'left',
          opacity: 0.85
        }}
      >
        <div style={{ flex: 1.5 }}>
          {/* Tag labels */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '0.05em' }}>DRAFT</span>
            <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '0.05em' }}>PSYCHOMETRIC</span>
          </div>
          
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-muted)' }}>Cognitive Load Pilot v2</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Experimental logic for measuring completion fatigue in Stage 3 users.
          </p>
        </div>

        {/* Grayed-out metrics grid */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', fontSize: '0.725rem', paddingRight: '32px' }}>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>ASSIGNED</span>
            <strong style={{ fontSize: '1rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>0</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>COMPLETION</span>
            <strong style={{ fontSize: '1rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>0%</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>DROP-OFF</span>
            <strong style={{ fontSize: '1rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>0%</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>AVG TIME</span>
            <strong style={{ fontSize: '1rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>--</strong>
          </div>
        </div>

        {/* Action triggers */}
        <button 
          className="premium-btn premium-btn-secondary"
          style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '0.8rem', opacity: 0.5, cursor: 'not-allowed' }}
          disabled
        >
          Edit Draft
        </button>
      </div>

      {/* Create Tenant Check-In Task Modal Overlay */}
      {isCreateModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCreateModalOpen(false)}>
          <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="modal-header" style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Create Tenant Check-In Task
              </h3>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                This task will appear in the tenant's "My Tasks" portal
              </p>
              <button 
                style={{ 
                  position: 'absolute', 
                  right: '32px', 
                  top: '32px', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer', 
                  fontSize: '1.25rem', 
                  color: 'var(--text-muted)',
                  fontWeight: 300
                }}
                onClick={() => setIsCreateModalOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {renderTabs()}
              
              {/* Step 1: Task Content */}
              {currentStep === 1 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--brand-light)', border: '1px solid var(--brand-alert-border)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
                    <span style={{ color: 'var(--brand-color)', display: 'flex', fontSize: '1rem' }}><LuInfo /></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--brand-alert-text)', lineHeight: '1.4', textAlign: 'left' }}>
                      The <strong>Task Title</strong> and <strong>Question</strong> will appear exactly as written in the tenant's portal.
                    </span>
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      TASK TITLE <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      className="modal-input" 
                      placeholder="e.g. 'Morning Routine Check-In'"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                    />

                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      TASK QUESTION <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea 
                      className="modal-textarea" 
                      placeholder='e.g. "Describe your typical morning routine in the lobby area. Which services do you use most frequently between 7:00 AM and 9:00 AM?"'
                      value={taskQuestion}
                      onChange={(e) => setTaskQuestion(e.target.value)}
                    />

                    <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      WHY THIS MATTERS [Purpose] <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      className="modal-input" 
                      placeholder='e.g. "This helps us understand peak usage times and improve service scheduling."'
                      value={taskPurpose}
                      onChange={(e) => setTaskPurpose(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Settings */}
              {currentStep === 2 && (
                <div style={{ textAlign: 'left' }}>
                  <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STAGE</label>
                  <div style={{ position: 'relative', marginTop: '6px', marginBottom: '16px' }}>
                    <select className="modal-select" value={stage} onChange={(e) => setStage(e.target.value)}>
                      <option>Stage 2 - Check-In Cycle</option>
                      <option>Stage 1 - Onboarding</option>
                      <option>Stage 3 - Exit</option>
                    </select>
                  </div>

                  <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>INTEGRITY CYCLE CONFIGURATION</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', marginTop: '6px', marginBottom: '20px' }}>
                    <div>
                      <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Day in Cycle</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input type="number" className="modal-input" style={{ width: '60px', marginBottom: 0 }} value={dayInCycle} onChange={(e) => setDayInCycle(parseInt(e.target.value) || 1)} />
                        <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>of</span>
                        <input type="number" className="modal-input" style={{ width: '60px', marginBottom: 0 }} value={totalDays} onChange={(e) => setTotalDays(parseInt(e.target.value) || 1)} />
                        <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>days</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '6px' }}>
                        Tenant will see: <span style={{ color: 'var(--brand-color)', fontWeight: 600 }}>Day {dayInCycle} of {totalDays}</span>
                      </span>
                    </div>
                    
                    <div>
                      <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Deadline</span>
                      <div style={{ position: 'relative' }}>
                        <select className="modal-select" style={{ paddingLeft: '36px' }} value={deadline} onChange={(e) => setDeadline(e.target.value)}>
                          <option>By 5:00 PM today</option>
                          <option>By 9:00 PM today</option>
                          <option>By 12:00 PM tomorrow</option>
                        </select>
                        <span style={{ position: 'absolute', left: '12px', top: '23px', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex' }}><LuClock /></span>
                      </div>
                    </div>
                  </div>

                  <label style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>PRIORITY</label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {['High', 'Medium', 'Low'].map((p) => {
                      let activeStyle = {};
                      if (priority === p) {
                        if (p === 'High') {
                          activeStyle = { border: '1.5px solid #ef4444', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' };
                        } else if (p === 'Medium') {
                          activeStyle = { border: '1.5px solid #eab308', color: '#eab308', backgroundColor: 'rgba(234, 179, 8, 0.1)' };
                        } else {
                          activeStyle = { border: '1.5px solid #10b981', color: 'var(--color-user)', backgroundColor: 'rgba(16, 185, 129, 0.1)' };
                        }
                      }
                      return (
                        <button 
                          key={p} 
                          type="button" 
                          className="priority-btn" 
                          style={activeStyle}
                          onClick={() => setPriority(p)}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Assign Tenants */}
              {currentStep === 3 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--color-user-light)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
                    <span style={{ color: 'var(--color-user)', display: 'flex', fontSize: '1.1rem' }}><LuUserPlus /></span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)', lineHeight: '1.4', textAlign: 'left' }}>
                      Task <strong>"{taskTitle || 'azcaecsac'}"</strong> will be sent to selected tenants' portals immediately upon creation.
                    </span>
                  </div>

                  <div style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '10px', backgroundColor: 'var(--bg-secondary)', textAlign: 'left' }}>
                    <span style={{ fontSize: '0.675rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                      TASK SUMMARY
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { label: 'Title', value: taskTitle || 'azcaecsac' },
                        { label: 'Stage', value: stage },
                        { label: 'Cycle', value: `Day ${dayInCycle} of ${totalDays}` },
                        { label: 'Deadline', value: deadline },
                        { label: 'Response Type', value: 'Long Text Response' },
                        { 
                          label: 'Priority', 
                          value: priority, 
                          color: priority === 'High' ? '#ef4444' : priority === 'Medium' ? '#f59e0b' : '#10b981',
                          weight: '700'
                        },
                        { label: 'Scoring Impact', value: 'Yes' },
                        { label: 'Tenants', value: '0 tenant(s)' }
                      ].map((row, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem' }}>
                          <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{row.label}</span>
                          <span style={{ color: row.color || 'var(--text-primary)', fontWeight: row.weight || '600' }}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              {currentStep === 1 ? (
                <button 
                  type="button"
                  className="premium-btn premium-btn-secondary"
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem' }}
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </button>
              ) : (
                <button 
                  type="button"
                  className="premium-btn premium-btn-secondary"
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem' }}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  ← Back
                </button>
              )}

              {renderProgressDots()}

              {currentStep < 3 ? (
                <button 
                  type="button"
                  className="premium-btn premium-btn-primary"
                  style={{ '--btn-color': 'var(--brand-color)', padding: '8px 20px', borderRadius: '6px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' } as React.CSSProperties}
                  onClick={() => {
                    if (currentStep === 1 && !taskTitle.trim()) {
                      setCustomAlert({
                        title: 'Missing Information',
                        message: 'Please provide a Task Title before proceeding.',
                        type: 'warning'
                      });
                      return;
                    }
                    setCurrentStep(currentStep + 1);
                  }}
                >
                  Next →
                </button>
              ) : (
                <button 
                  type="button"
                  className="premium-btn premium-btn-primary"
                  style={{ '--btn-color': 'var(--brand-color)', padding: '8px 20px', borderRadius: '6px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' } as React.CSSProperties}
                  onClick={handleDispatch}
                >
                  <LuSend style={{ fontSize: '0.85rem' }} /> Dispatch Task
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Wizard Modal Styles */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        .modal-content {
          background-color: var(--bg-secondary);
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          width: 580px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          animation: slideUp 0.2s ease;
          border: 1px solid var(--border-color);
        }
        .modal-header {
          padding: 32px 32px 16px 32px;
          position: relative;
        }
        .modal-body {
          padding: 0 32px 24px 32px;
          overflow-y: auto;
          flex: 1;
        }
        .modal-footer {
          padding: 20px 32px 32px 32px;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.825rem;
          color: var(--text-primary);
          margin-top: 6px;
          margin-bottom: 16px;
          outline: none;
          background-color: var(--bg-primary);
        }
        .modal-input:focus {
          border-color: var(--brand-color);
          box-shadow: 0 0 0 3px var(--focus-ring);
        }
        .modal-textarea {
          width: 100%;
          height: 100px;
          padding: 10px 14px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.825rem;
          color: var(--text-primary);
          margin-top: 6px;
          margin-bottom: 16px;
          outline: none;
          resize: none;
          background-color: var(--bg-primary);
        }
        .modal-textarea:focus {
          border-color: var(--brand-color);
          box-shadow: 0 0 0 3px var(--focus-ring);
        }
        .modal-select {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.825rem;
          color: var(--text-primary);
          margin-top: 6px;
          margin-bottom: 16px;
          outline: none;
          background-color: var(--bg-primary);
          cursor: pointer;
        }
        .modal-select:focus {
          border-color: var(--brand-color);
          box-shadow: 0 0 0 3px var(--focus-ring);
        }
        .priority-btn {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
        }
        .priority-btn:hover {
          background-color: var(--bg-primary);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Custom Centered Alert Modal */}
      {customAlert && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setCustomAlert(null)}
        >
          <div 
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '16px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              width: '420px',
              padding: '32px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              animation: 'slideUp 0.2s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              backgroundColor: customAlert.type === 'success' ? 'var(--color-user-light)' : customAlert.type === 'warning' ? 'var(--color-support-light)' : 'var(--brand-light)', 
              color: customAlert.type === 'success' ? 'var(--color-user)' : customAlert.type === 'warning' ? 'var(--color-support)' : 'var(--brand-color)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '1.75rem', 
              marginBottom: '20px' 
            }}>
              {customAlert.type === 'success' ? <LuCircleCheck /> : customAlert.type === 'warning' ? <LuTriangleAlert /> : <LuInfo />}
            </div>
            
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              {customAlert.title}
            </h4>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '24px' }}>
              {customAlert.message}
            </p>
            
            <button 
              type="button"
              className="premium-btn premium-btn-primary"
              style={{ '--btn-color': 'var(--brand-color)', padding: '10px 24px', borderRadius: '8px', fontSize: '0.825rem', width: '100%', fontWeight: 700 } as React.CSSProperties}
              onClick={() => setCustomAlert(null)}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
