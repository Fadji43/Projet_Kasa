//image paysage avec titre 

function Banner() {
    return ( 
        <div className="banner">
            <img className="banner__img" src={image} alt="Bannière" />
            <div className="banner__sombre"></div>
            <span className="banner__title">Chez vous, partout et ailleurs</span>
        </div>
    )
}

export default Banner;