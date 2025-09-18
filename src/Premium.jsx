import './App.css'

export default function Premium() {
    return (
    <div>
        <div className='premium-div'>
            <h2 className='premium-message'>Premium 개인 요금제로 최고<br/>의 음악 서비스를 경험하세요.</h2>
            <p className='premium-viral'>Spotify 프리미엄에서 끊김없이 음악을 즐겨보세요. 요금은  ₩10,900(부가세 별도)<br/>부터 시작합니다. 언제든지 해지 가능합니다.</p>
            <button className='premium-start-but'> <b>Premium</b> 개인 시작하기 </button>
            <button className='premium-show-but'> 모든 요금제 보기 </button>
        </div>

        <div className='pay-system-div'>
            <h2 className='pay-system-viral'>어떤 상황에도 합리적인 요금제</h2>
            <p>Premium 요금제를 선택하고 휴대폰, 스피커 및 기타 기기에서 제한없이 광고 없는 음악<br/>을 들으세요. 다양한 방법으로 요금을 결제하세요. 언제든지 해지 가능합니다.</p>
        </div>
    </div>
    )
}