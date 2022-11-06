import Head from "next/head";

import "swiper/css/bundle";
import React from "react";

import LastPost from "../components/LastPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Secondsection from "../components/SecondSection";

import Sidebar from "../components/SideBar";
import url_api from "../components/config";
export default function Home({}) {
  /*  const { search } = typeof window !== "undefined" && window.location; */

  /* const query = new URLSearchParams(search).get("search");
  const searchArray = [...Object.values(post)].filter((filtre) =>
    filtre.attributes.Title.includes(query)
  ); */
  return (
    <div>
      {/*  <Helmet>
        <title> Dzair History </title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
          crossorigin="anonymous"
        ></script>
      </Helmet> */}
      <Header />

      {/* {query ? (
        <>
          <h2 className="title-category">Recherche</h2>
          <div className="container">
            <div className="result">
              <p className="title-search">
                Resultat de recherche pour <span>{query}</span> :{" "}
              </p>
              <div className="container-result">
                {searchArray.map((post, key) => (
                  <div className="card-result" key={key}>
                    <img src={post.img} alt={post.alt} />
                    <div className="overlay">
                      <h5 className="label">{post.categorie}</h5>
                      <p>{post.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Sidebar />
          </div>
        </>
      ) : ( */}
      <>
        <Hero />
        <LastPost />
        <Secondsection />
      </>
      {/* )} */}
      <Footer />
    </div>
  );
}
/* export async function getStaticPaths() {
  const posts = await fetch(`${url_api}/api/articles`).then((r) => r.json());
  return {
    paths: posts.map((post) => ({
      params: { id: post.link.toString() },
    })),
    fallback: false,
  };
}
 */
