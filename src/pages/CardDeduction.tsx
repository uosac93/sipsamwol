import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconCard, IconHome, IconFamily, IconSettings, IconArrowLeft } from '../components/Icons';
import '../styles/CardDeduction.css';

const CardDeduction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="card-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <IconArrowLeft size={18} />
        </button>
        <h1>카드 공제</h1>
        <div style={{ width: 18 }} />
      </header>
      <div className="divider" style={{ marginTop: 24 }} />

      <section style={{ padding: '48px 32px 40px' }}>
        <p className="card-label">공제 한도까지</p>
        <h2 className="card-amount">47<span className="card-unit">만원</span></h2>
        <p className="card-note">체크카드 사용 권장</p>
      </section>

      <div className="divider" />

      <section style={{ padding: '0 32px' }}>
        <div className="card-row">
          <span className="card-row-label">신용카드</span>
          <span className="card-row-value">1,240만원</span>
        </div>
        <div className="card-row">
          <span className="card-row-label">체크카드</span>
          <span className="card-row-value">380만원</span>
        </div>
        <div className="card-row">
          <span className="card-row-label">현금영수증</span>
          <span className="card-row-value">95만원</span>
        </div>
        <div className="card-row" style={{ borderBottom: 'none' }}>
          <span className="card-row-label">25% 기준선</span>
          <span className="card-row-value" style={{ color: 'var(--accent)' }}>달성</span>
        </div>
      </section>

      <nav className="tab-bar">
        <div className="tab" onClick={() => navigate('/')}>
          <IconHome size={18} />
          <span>홈</span>
        </div>
        <div className="tab active">
          <IconCard size={18} />
          <span>공제</span>
        </div>
        <div className="tab" onClick={() => navigate('/family')}>
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

export default CardDeduction;
