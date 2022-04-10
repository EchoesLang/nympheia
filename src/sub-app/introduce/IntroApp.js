import './IntroApp.css'
import MainImage from '../../components/mainlmage/MainImage';

function IntroApp() {
    return (
        <div className="Introduce-App">
            <header className="Introduce-App-header">
                <p>소개</p>
                <MainImage></MainImage>
            </header>
        </div>
    )
}

export default IntroApp;