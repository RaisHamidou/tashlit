import React, { useEffect, useState } from 'react';

import axios from 'axios'

import Link from 'next/link';
import Image from 'next/image';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pubimg from '../styles/assets/img/pub/pub.jpg'
import "swiper/css/bundle";
import url_api from './config';
const Carousel = () => {
    SwiperCore.use(Autoplay)
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            setLoading(true)

            const response = await axios.get(`${url_api}/api/articles`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'Application/json'
                    }
                })
            setPosts(response.data)
            setLoading(false)
        }
        load()
    }, [])



    const ramdomPost = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    const Posts = ramdomPost(loading ? "" : Object.values(posts), 4)

    return (


        <Swiper
            /* centeredSlides={true} */
            slidesPerView={'auto'}
            spaceBetween={10}
            autoplay={{ delay: 5000 }}
            breakpoints={{
                375: {
                    //width: 1024,
                    slidesPerView: 1
                },
                320: {
                    //width: 1024,
                    slidesPerView: 1
                },
                425: {
                    //width: 1024,
                    slidesPerView: 1
                },
                768: {
                    //width: 1024,
                    slidesPerView: 2
                },

                1024: {

                    slidesPerView: 2,


                },
                1440: {

                    slidesPerView: 'auto'

                }
            }}
            className="my-carousel">

            {
                Posts.map(post => <SwiperSlide className='slides' key={post.id} >
                    <Link href={`/article/${post.link}`}>
                        <div className="overlay">
                            <div className="label">
                                <h5 suppressHydrationWarning >{post.categorie}</h5>
                            </div>
                            <p suppressHydrationWarning > {post.title}...</p>
                        </div>
                    </Link>
                    <img src={post.img} alt={post.alt} />
                </SwiperSlide>)
            }

        </Swiper >



    );
}

export default Carousel;
