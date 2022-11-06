import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import url_api from './config';


import Image from 'next/image';
import api from "../pages/api/articles"
const LastPost = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true)

            const response = await axios.get(`${url_api}/api/articles`,
                {
                    method: "GET",
                    headers: {
                        'Accept': 'Application/json'
                    }
                })

            setPosts(response.data)
            setLoading(false)


        }
        loadPost()
    }, [])


    return (
        <>
            <div className='last-article' >
                <div className="title">
                    <h1> Dernier article</h1>
                    <div className="hr" />
                </div>
                <div className="container-card">
                    {loading ? "" : [...Object.values(posts)].slice(Math.max([...Object.values(posts)].length - 5, 0)).sort((a, b) => b.id - a.id).map((post) => {
                        return (
                            <Link key={post.link} href={`/articles/${post.link}`}>
                                <div className="card">
                                    <img layout='fill' src={post.img} alt={post.alt} />
                                    <div className="overlay">
                                        <div className="label">
                                            <h5>{post.categorie}</h5>
                                        </div>
                                        <p>{post.title}... </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default LastPost;
