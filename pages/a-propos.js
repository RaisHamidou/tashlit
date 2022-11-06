import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Head from "next/head";
import ReactGA from "react-ga4";
import Link from "next/link";
const Apropos = () => {
  ReactGA.initialize("G-7MKNM1FX1N");
  ReactGA.send("pageview");

  return (
    <div className="aPropos">
      <Head>
        <title> A propos </title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426518773218222"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header />
      <h2 className="title-category">A propos</h2>
      <hr className="title-hr" />
      <div className="container">
        <div className="container-article">
          <article>
            <h1>Qui somme nous ?</h1>
            <p className="firstP">
              Dzair History a pour objectif de partager l'histoire et la culture
              Algérienne avec les Algériens avant tout, pour qu'ils puissent se
              réapproprier leurs histoires, mais aussi pour tous ceux qui
              voudraient découvrir l'histoire et la culture Algérienne.
            </p>
            <br />
            <p>
              Notre site a pour ambition de référencer tout le patrimoine
              matériel et immatériel de l'histoire et la culture Algérienne.
            </p>
            <br />
            <p>
              Si vous rencontrez une erreur ou un problème ou si vous souhaitez
              tout simplement nous soumettre des idées, nous serons tés heureux
              de lire vos messages, pour cela vous pouvez nous contacter{" "}
              <Link href="/contact">ici</Link>. J'espère que vous prendrez
              plaisir à découvrir notre histoire et à visiter notre site.
            </p>
          </article>
        </div>

        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Apropos;
