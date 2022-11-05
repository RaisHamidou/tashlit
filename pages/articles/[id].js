import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import Head from "next/head";
import rehypeRaw from "rehype-raw";

import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";
import articles from "../api/articles";
import { useRouter } from "next/router";
/* import ReactGA from "react-ga4"; */

export async function getStaticProps({ params }) {
  const post = [...Object.values(articles)];

  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const posts = [...Object.values(articles)];
  return {
    paths: posts.map((post) => ({
      params: { id: post.link.toString() },
    })),
    fallback: false,
  };
}

const Article = ({ post }) => {
  /*  ReactGA.initialize("G-7MKNM1FX1N");
  ReactGA.send({ hitType: "pageview", page: `/article/${Post.link}` }); */
  const route = useRouter();
  const query = route.query;

  const Posts = [...Object.values(post)].filter(
    (filter) => filter.link === query.id
  );
  const Post = Posts[0];

  return (
    <>
      <Head>
        <title>{Post.title}</title>
        <meta
          property="og:image"
          content={`http://localhost:3000/api/og-image?https://dzairhistory.xyz/${Post.link}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`http://localhost:3000/article/${Post.link}`}
        />
        <meta name="twitter:title" content={Post.title} />
        <meta name="twitter:description" content={Post.resumer} />
        <meta
          name="twitter:image"
          content={`http://localhost:3000/${Post.img}`}
        />
      </Head>

      <h3 className="subtitle">{Post.categorie}</h3>
      {<h1 className="title-article">{Post.title}</h1>}
      <hr className="title-hr" />

      <section className="container">
        <div className="container-article">
          <article>
            <div className="share-icon">
              <FacebookShareButton
                title={Post.Title}
                url={`https://dzairhistory.xyz/articles/${Post.link}`}
                hashtag={"#AlgerianHeritage"}
                className="fb"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                title={Post.Title}
                url={`https://dzairhistory.xyz/articles/${Post.link}`}
                hashtag={"#AlgerianHeritage"}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            <div className="img-article">
              {<img src={`${Post.img}`} alt={Post.alt} />}
            </div>

            <ReactMarkdown children={Post.body} rehypePlugins={[rehypeRaw]} />
          </article>
        </div>
      </section>
    </>
  );
};

export default Article;
