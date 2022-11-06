import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import rehypeRaw from "rehype-raw";
import url_api from "../../components/config";
import axios from "axios";
import articles from "../api/articles";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

import { useRouter } from "next/router";
/* import ReactGA from "react-ga4"; */

const Article = ({ }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const res = await axios.get(`${url_api}/api/articles`, {
        method: "GET",
        headers: {
          accept: "Application/json",
        },
      });
      setPosts(res.data);
      setLoading(false);
    };
    load();
  }, []);

  /*  ReactGA.initialize("G-7MKNM1FX1N");
  ReactGA.send({ hitType: "pageview", page: `/article/${Post.link}` }); */
  const route = useRouter();
  const query = route.query;

  const Posts = loading
    ? ""
    : [...Object.values(posts)].filter((filter) => filter.link === query.id);
  const Post = Posts[0];

  return (
    <>
      <Head>
        <title>{loading ? "" : Post.title}</title>
        <meta
          property="og:image"
          content={`${url_api}${loading ? "" : Post.img}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`${url_api}/article/${loading ? "" : Post.link}`}
        />
        <meta name="twitter:title" content={loading ? "" : Post.title} />
        <meta
          name="twitter:description"
          content={loading ? "" : Post.resumer}
        />
        <meta
          name="twitter:image"
          content={`${url_api}${loading ? "" : Post.img}`}
        />

        {/*  Primary Meta Tags */}
        <title>Meta Tags — Preview, Edit and Generate</title>
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/*  Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <Header />
      <h3 className="subtitle">{loading ? "" : Post.categorie}</h3>
      {<h1 className="title-article">{loading ? "" : Post.title}</h1>}
      <hr className="title-hr" />

      <section className="container">
        <div className="container-article">
          <article>
            <div className="share-icon">
              <FacebookShareButton
                title={loading ? "" : Post.Title}
                url={`https://dzairhistory.xyz/articles/${loading ? "" : Post.link
                  }`}
                hashtag={"#AlgerianHeritage"}
                className="fb"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                title={loading ? "" : Post.title}
                url={`https://dzairhistory.xyz/articles/${loading ? "" : Post.link
                  }`}
                hashtag={"#AlgerianHeritage"}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            <div className="img-article">
              {
                <img
                  src={`${loading ? "" : Post.img}`}
                  alt={loading ? "" : Post.alt}
                />
              }
            </div>

            <ReactMarkdown
              children={loading ? "" : Post.body}
              rehypePlugins={[rehypeRaw]}
            />
          </article>
        </div>
        <Sidebar />
      </section>
      <Footer />
    </>
  );
};

export default Article;
/* export async function getStaticProps({ params }) {
  const post = await fetch(`${url_api}/api/articles`).then((r) => r.json());

  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const posts = await fetch(`${url_api}/api/articles`).then((r) => r.json());
  return {
    paths: posts.map((post) => ({
      params: { id: post.link.toString() },
    })),
    fallback: false,
  };
} */

/* export async function getStaticProps({ params }) {
  const posts = [...Object.values(articles)];
  const post = await fetch("../api/articles").then((r) => r.json());

  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const Posts = await [...Object.values(articles)];
  const posts = await fetch("../api/articles").then((r) => r.json());
  return {
    paths: posts.map((post) => ({
      params: { id: post.link.toString() },
    })),
    fallback: false,
  };
} */
