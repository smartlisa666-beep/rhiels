import React, { useState } from 'react';
import { 
  Calendar, 
  Bell, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  FileText, 
  Sparkles,
  ChevronRight,
  User,
  MoreVertical
} from 'lucide-react';

// 디자인 시스템 토큰 (가이드 기준)
const C = {
  surface: '#FFFFFF',
  surfaceAlt: '#F8F9FA',
  bg: '#F3F4F6',
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  text: '#111827',
  textSec: '#6B7280',
  textTer: '#9CA3AF',
  accent: '#00F0FF', // 플랫폼 포인트 컬러 (틸/시안 느낌)
  primary: '#4F46E5', // 메인 액션 컬러
};

const Jarvis = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: C.bg,
      fontFamily: '"Pretendard", sans-serif',
      color: C.text,
      padding: '24px 28px',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        maxWidth: '1200px',
        margin: '0 auto 24px auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            <Sparkles size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>자비스 (AI 비서)</h1>
            <p style={{ fontSize: '0.9rem', color: C.textSec, margin: '2px 0 0 0' }}>선생님의 남은 업무를 똑똑하게 챙겨드릴게요.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            display: 'flex',
            gap: '6px',
            alignItems: 'center'
          }}>
            <Bell size={16} /> 알림 (3)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }}>
        
        {/* Left Column (Main Dashboard) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* AI Briefing Card */}
          <section style={{
            background: C.surface,
            borderRadius: '16px',
            padding: '24px',
            border: `1px solid ${C.border}`,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color={C.primary} /> 오늘의 AI 브리핑
            </h2>
            <div style={{
              background: C.surfaceAlt,
              padding: '16px',
              borderRadius: '12px',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: C.text
            }}>
              "선생님, 오늘 <strong>3교시 끝나고 학부모 상담(김민수 학생 어머니)</strong>이 예정되어 있습니다. 어제 요약해둔 <span style={{color: C.primary, cursor: 'pointer', textDecoration: 'underline'}}>상담 자가진단표</span>를 미리 확인하시겠어요? 그리고 금요일까지 제출해야 하는 <strong>방과후 학교 운영 기안</strong>의 초안을 제가 작성해볼까요?"
            </div>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <button style={{
                background: C.primary,
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>기안 초안 작성하기</button>
              <button style={{
                background: '#fff',
                color: C.text,
                border: `1px solid ${C.border}`,
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>상담 자료 열기</button>
            </div>
          </section>

          {/* Task List */}
          <section style={{
            background: C.surface,
            borderRadius: '16px',
            padding: '24px',
            border: `1px solid ${C.border}`
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
              할 일 목록
              <button style={{ background: 'none', border: 'none', color: C.textSec, cursor: 'pointer', fontSize: '0.9rem' }}>전체보기</button>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: '수학 단원평가 채점 및 나이스 입력', time: '오늘까지', urgent: true },
                { title: '김민수 학부모 상담', time: '13:00 - 13:30', urgent: false },
                { title: '방과후 학교 운영 기안 제출', time: '금요일까지', urgent: false }
              ].map((task, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px',
                  border: `1px solid ${C.borderLight}`,
                  borderRadius: '12px',
                  background: task.urgent ? '#FEF2F2' : C.surface
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: task.urgent ? '#EF4444' : C.textTer }}>
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: C.text, marginBottom: '4px' }}>{task.title}</div>
                      <div style={{ fontSize: '0.85rem', color: C.textSec, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} /> {task.time}
                      </div>
                    </div>
                  </div>
                  <MoreVertical size={18} color={C.textTer} style={{ cursor: 'pointer' }} />
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column (Upcoming Schedule & Assist) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Mini Calendar / Schedule */}
          <section style={{
            background: C.surface,
            borderRadius: '16px',
            padding: '24px',
            border: `1px solid ${C.border}`
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={20} /> 시간표
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { period: '1교시', subject: '국어', current: false },
                { period: '2교시', subject: '수학', current: true },
                { period: '3교시', subject: '공강 (업무처리)', current: false },
                { period: '4교시', subject: '사회', current: false },
              ].map((cls, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  background: cls.current ? '#EEF2FF' : C.surfaceAlt,
                  borderLeft: cls.current ? `4px solid ${C.primary}` : '4px solid transparent'
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', width: '60px', color: cls.current ? C.primary : C.textSec }}>
                    {cls.period}
                  </span>
                  <span style={{ fontWeight: '600', color: C.text }}>{cls.subject}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick AI Tools */}
          <section style={{
            background: 'linear-gradient(180deg, #111827 0%, #1F2937 100%)',
            borderRadius: '16px',
            padding: '24px',
            color: '#fff'
          }}>
             <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', color: '#fff' }}>
              빠른 비서 액션
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '16px',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <MessageSquare size={24} style={{ marginBottom: '8px', color: C.accent }} />
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>학부모 알림장</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '16px',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <FileText size={24} style={{ marginBottom: '8px', color: C.accent }} />
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>공문 초안</div>
              </div>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
};

export default Jarvis;
