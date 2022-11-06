import React from 'react';
import Image from 'next/image';
import pubimg from '../styles/assets/img/pub/pub.jpg'
import Carousel from './Carousel';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <aside>
                <div className="carousel">
                    <div className="title">
                        <h1>Autre news</h1>
                        <div className="hr" />

                    </div>
                    <div className="container-other-news">
                        <Carousel />
                    </div>
                </div>
                <div className="pub">
                    <div className="title">
                        <h1>Pub</h1>
                        <div className="hr" />
                    </div>
                    <div className="img-pub"> <Image src={pubimg} alt="" /></div>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
