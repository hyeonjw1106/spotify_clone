import './App.css';

export default function Onlymusic({ setPage }) {
  return (
    <div className='music-div'>
      <button 
        className='all-onlymusic'
        onClick={() => setPage('all')}
      >
        모두
      </button>
      <button className='only-music-onlymusic'>음악</button>
      <button 
        className='potcast-onlymusic'
        onClick={() => setPage('potcast')}
      >
        팟캐스트
      </button>
    </div>
  );
}