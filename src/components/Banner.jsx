
import React from 'react';
import Image_banner from '../image/image_source1.png'
import '../components/banner.scss';
import '../pages/styles.scss';

function Banner() {
    return ( 
        <div className="banner">
            <img className="banner_img" src={Image_banner} alt="Bannière" />
            <span className="banner_title">Chez vous, partout et ailleurs</span>
        </div>
    )
}

export default Banner;