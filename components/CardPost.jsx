import React from 'react';
import Link from 'next/link';


import Image from 'next/image';


const CardPost = ({ post }) => {




    return (

        <div className="card-article">
            <div className="article-img"><img layout='fill' src={post.img} alt={post.alt} /></div>
            <div className="container">
                <div className="title">
                    <h2>{post.title}</h2>
                </div>
                <div className="content">
                    <p>{post.resumer}</p> <Link href={`/articles/${post.link}`}>Lire la suite</Link>
                </div>
            </div>

        </div>

    );
}

export default CardPost;
