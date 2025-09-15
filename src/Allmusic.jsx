import './App.css';

export default function Allmusic({ setPage }) {
  return (
    <div className='music-div'>
      <button className='all'>모두</button>
      <button 
        className='only-music' 
        onClick={() => setPage('onlymusic')}
      >
        음악
      </button>
      <button 
        className='potcast'
        onClick={() => setPage('potcast')}
      >
        팟캐스트
      </button>
    </div>
  );
}
