import { useState } from 'react';
import TopBar from './TopBar';
import Library from './Library';
import Allmusic from './Allmusic';
import Onlymusic from './Onlymusic';
import Potcast from './Potcast';
import Playlist from './Playlist';
import Songlist from './Songlist';
import './App.css';

export default function App() {
  const [page, setPage] = useState('all');
  const [songlist, setSonglist] = useState([]);

  return (
    <div>
      {/* setSonglist 내려줌 */}
      <TopBar setPage={setPage} setSonglist={setSonglist} />
      <Library setPage={setPage}/>
      
      <Songlist songlist={songlist} />

      <div className="main-content">
        {page === 'all' && <Allmusic setPage={setPage} />}
        {page === 'onlymusic' && <Onlymusic setPage={setPage} />}
        {page === 'potcast' && <Potcast setPage={setPage} />}
        {page === 'playlist' && <Playlist setSonglist={setSonglist} />}
      </div>

      <div className='music-state'></div>
    </div>
  );
}
