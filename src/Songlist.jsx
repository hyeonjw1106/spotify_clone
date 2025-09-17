import './App.css';
import symphony from './assets/symphony.png';
import steps from './assets/steps.png';
import tloro from './assets/tloro.png';
import tnhmb from './assets/tnhmb.png';
import thesearch from './assets/thesearch.png';
import sugar from './assets/sugar.png';
import play from './assets/play.png';

export default function Songlist({ songlist }) {
    return (
        <div className='list-div'>
            <p className='song-list'> 재생목록 </p>

            {songlist.length === 0 ? (
                <p className='none-message'>재생할 음악이 없습니다.</p>
            ) : (
                <div>
                    {songlist.map((song) => (
                        <div key={song.id} className='list-songlist'>
                            <img src={song.img} className='list-song-img'/>
                            <p className='list-songlist-song-name'> {song.title} </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
