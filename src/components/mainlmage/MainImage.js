import './MainImage.css'
import Image from './main_character_small.png'

function MainImage() {
    return (
        <div>
            <img src={Image} className='Main-Image'></img>
        </div>
    )
}

export default MainImage;