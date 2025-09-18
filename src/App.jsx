import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TopBar from './TopBar';
import Library from './Library';
import Allmusic from './Allmusic';
import Onlymusic from './Onlymusic';
import Potcast from './Potcast';
import Playlist from './Playlist';
import Songlist from './Songlist';
import Premium from './Premium';
import './App.css';

export default function App() {
  const [songlist, setSonglist] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Premium 페이지는 완전히 별도 레이아웃 */}
        <Route path="/premium" element={<Premium />} />

        {/* 기본 레이아웃 */}
        <Route
          path="/*"
          element={
            <div>
              <TopBar setSonglist={setSonglist} />
              <Library />
              <Songlist songlist={songlist} />

              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Allmusic />} />
                  <Route path="/onlymusic" element={<Onlymusic />} />
                  <Route path="/potcast" element={<Potcast />} />
                  <Route
                    path="/playlist"
                    element={<Playlist setSonglist={setSonglist} />}
                  />
                </Routes>
              </div>

              <div className="music-state"></div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}