
import React from 'react';
import Image_banner_about from '../image/image_source2.png'
import '../components/banner.scss';
import '../pages/styles.scss';

function Banner() {
    return ( 
        <div className="banner">
            <img className="banner_img" src={Image_banner_about} alt="Bannière" />
        </div>
    )
}

export default Banner;