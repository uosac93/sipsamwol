import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconCard, IconHome, IconFamily, IconSettings, IconArrowLeft, IconArrowRight } from '../components/Icons';
import '../styles/FamilyOptimize.css';

const FamilyOptimize: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="family-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <IconArrowLeft size={18} />
        </button>
        <h1>최적화</h1>
        <div style={{ width: 18 }} />
      </header>
      <div className="divider" style={{ marginTop: 24 }} />

      <section className="list-section" style={{ padding: '0 32px' }}>
        <div className="list-item" style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
          <div className="list-content">
            <div className="list-title" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>의료비 명의 변경</div>
            <div className="list-sub" style={{ fontSize: 11, color: 'var(--text-secondary)' }}>배우자 명의 전환 권장</div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>+38만</div>
        </div>

        <div className="list-item" style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
          <div className="list-content">
            <div className="list-title" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>주택담보대출 명의</div>
            <div className="list-sub" style={{ fontSize: 11, color: 'var(--text-secondary)' }}>본인 명의로 변경 권장</div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>+8.5만</div>
        </div>

        <div className="list-item" style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
          <div className="list-content">
            <div className="list-title" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>세대주 설정</div>
            <div className="list-sub" style={{ fontSize: 11, color: 'var(--text-secondary)' }}>현재 최적</div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>유지</div>
        </div>

        <div className="list-item" style={{ padding: '24px 0' }}>
          <div className="list-content">
            <div className="list-title" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>부양가족 등록</div>
            <div className="list-sub" style={{ fontSize: 11, color: 'var(--text-secondary)' }}>아버지 등록 시 기본공제 150만</div>
          </div>
          <IconArrowRight size={12} color="rgba(255,255,255,0.1)" />
        </div>
      </section>

      <nav className="tab-bar">
        <div className="tab" onClick={() => navigate('/')}>
          <IconHome size={18} />
          <span>홈</span>
        </div>
        <div className="tab" onClick={() => navigate('/card')}>
          <IconCard size={18} />
          <span>공제</span>
        </div>
        <div className="tab active">
          <IconFamily size={18} />
          <span>최적화</span>
        </div>
        <div className="tab">
          <IconSettings size={18} />
          <span>설정</span>
        </div>
      </nav>
    </div>
  );
};

export default FamilyOptimize;
