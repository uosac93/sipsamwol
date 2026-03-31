import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconCard, IconHome, IconFamily, IconSettings, IconArrowRight } from '../components/Icons';
import '../styles/Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="header">
        <span className="logo">십삼월</span>
      </div>

      <section className="hero">
        <h1 className="hero-title">
          올해 연말정산,<br />
          <span className="accent">더 받을 수 있어요.</span>
        </h1>
        <p className="hero-sub">지금 3가지를 바꾸면 절세할 수 있어요.</p>
      </section>

      <section className="amount-section">
        <div className="amount-value">+127,000<span className="amount-unit">원</span></div>
        <p className="amount-label">추가 절세 가능 금액</p>
      </section>

      <div className="card-group">
        <h2 className="card-group-label">지금 바꾸세요</h2>
        <div className="card-list">
          <div className="card-item" onClick={() => navigate('/card')}>
            <div className="card-body">
              <div className="card-title">체크카드로 전환</div>
              <div className="card-desc">47만원 더 사용하면 한도 달성</div>
            </div>
            <span className="card-right positive">+5.2만</span>
            <IconArrowRight size={16} color="#d2d2d7" />
          </div>

          <div className="card-item" onClick={() => navigate('/family')}>
            <div className="card-body">
              <div className="card-title">의료비 명의 변경</div>
              <div className="card-desc">배우자 명의로 전환</div>
            </div>
            <span className="card-right positive">+3.8만</span>
            <IconArrowRight size={16} color="#d2d2d7" />
          </div>

          <div className="card-item">
            <div className="card-body">
              <div className="card-title">연금저축 추가 납입</div>
              <div className="card-desc">342만원 여유</div>
            </div>
            <span className="card-right positive">+3.7만</span>
            <IconArrowRight size={16} color="#d2d2d7" />
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card-list">
          <div className="card-item" onClick={() => navigate('/family')}>
            <div className="card-body">
              <div className="card-title">세대주 설정</div>
              <div className="card-desc">현재 최적 상태</div>
            </div>
            <span className="card-right neutral">유지</span>
          </div>
        </div>
      </div>

      <div className="tip-section">
        <div className="tip-card">
          <p className="tip-label">이번 달 팁</p>
          <p className="tip-text">신용카드 25% 기준선을 넘었어요. 남은 기간은 체크카드를 사용하세요.</p>
        </div>
      </div>

      <nav className="tab-bar">
        <div className="tab active">
          <IconHome size={22} />
          <span>홈</span>
        </div>
        <div className="tab" onClick={() => navigate('/card')}>
          <IconCard size={22} />
          <span>공제</span>
        </div>
        <div className="tab" onClick={() => navigate('/family')}>
          <IconFamily size={22} />
          <span>최적화</span>
        </div>
        <div className="tab">
          <IconSettings size={22} />
          <span>설정</span>
        </div>
      </nav>
    </div>
  );
};

export default Home;
