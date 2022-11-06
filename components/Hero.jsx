import React from 'react';
import Image from 'next/image';
import hero from "../styles/assets/img/hero/algeria-gf464d9a66_1920.jpg"
const Hero = () => {
    return (
        <div className='hero'>
            <div className="overlay">
                <p> Découvrez les richesse culturels des différentes régions Algerienne et leur histoire
                </p>

                <div className="btn"><a href="#Map">Découvrire</a></div>
            </div>
            <Image src={hero} alt="hero" />

        </div>
    );
}

export default Hero;
