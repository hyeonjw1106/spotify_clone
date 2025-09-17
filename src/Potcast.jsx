import './App.css';

export default function Potcast({ setPage }) {
  return (
    <div className='music-div'>
      <button 
        className='all-potcast'
        onClick={() => setPage('all')}
      >
        모두
      </button>
      <button 
        className='only-music-potcast'
        onClick={() => setPage('onlymusic')}
      >
        음악
      </button>
      <button className='potcast-potcast'>팟캐스트</button>
    </div>
  );
}