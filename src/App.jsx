import { useState } from 'react'
import spotify_logo from './assets/spotify_logo.png'
import home_logo from './assets/home_logo.png'
import install_logo from './assets/install_logo.png'
import news_logo from './assets/news_logo.png'
import social_logo from './assets/social_logo.png'
import size_up from './assets/size_up.png'
import Allmusic from './Allmusic';
import Onlymusic from './Onlymusic';
import Potcast from './Potcast';
import pl_title from './assets/pl_title.png'
import './App.css'

export default function App() {
  const [page, setPage] = useState('all'); // 현재 화면 상태

  return (
    <div>
      <div className="top-bar">
        <img src={spotify_logo} className='top-spoti-logo'/>
        <img src={home_logo} className='top-home-logo'/>
        <input type='text' placeholder='  어떤 콘텐츠를 감상하고 싶으세요?' className='searcher'/>
        <button className='premium_button'>Premium 둘러보기</button>
        <img src={install_logo} className='top-install-logo'/>
        <img src={news_logo} className='top-news-logo'/>
        <img src={social_logo} className='top-social-logo'/>
        <button className='profile'>현</button>
      </div>

      <div className='library'>
        <h4 className='my-library'>내 라이브러리</h4>
        <button className='create-pl'>+ 만들기</button>
        <img src={size_up} className='size-up-logo'/>
        <div className='category-pl'>플레이리스트</div>
        <div className='pl-list'>
          <img src={pl_title} className='pl-img'/>
          <h4 className='pl-info-name'>내 플레이리스트#1</h4>
          <p className='pl-info-cate'>플레이리스트 · 현준우</p>
        </div>
      </div>

      <div className="main-content">
        {page === 'all' && <Allmusic setPage={setPage} />}
        {page === 'onlymusic' && <Onlymusic setPage={setPage} />}
        {page === 'potcast' && <Potcast setPage={setPage} />}
      </div>


      <div className='music-state'>
      </div>
    </div>
  )
}
