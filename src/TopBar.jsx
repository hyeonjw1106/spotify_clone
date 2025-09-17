import React from 'react';
import spotify_logo from './assets/spotify_logo.png';
import home_logo from './assets/home_logo.png';
import install_logo from './assets/install_logo.png';
import news_logo from './assets/news_logo.png';
import social_logo from './assets/social_logo.png';
import './App.css';

export default function TopBar({ setPage, setSonglist }) {
  return (
    <div className="top-bar">
      <img src={spotify_logo} className='top-spoti-logo'/>
      <img 
        src={home_logo} 
        className='top-home-logo'
        onClick={() => {
          setPage('all');       // Allmusic 렌더링
          setSonglist([]);      // 재생목록 초기화
        }}
        style={{ cursor: 'pointer' }}
      />
      <input type='text' placeholder='  어떤 콘텐츠를 감상하고 싶으세요?' className='searcher'/>
      <button className='premium_button'>Premium 둘러보기</button>
      <img src={install_logo} className='top-install-logo'/>
      <img src={news_logo} className='top-news-logo'/>
      <img src={social_logo} className='top-social-logo'/>
      <button className='profile'>현</button>
    </div>
  );
}

