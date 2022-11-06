import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import url_api from "../components/config";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import CardPost from "../components/CardPost";
const Histoire = () => {
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
  let Posts = loading
    ? ""
    : [...Object.values(posts)].filter(
        (filtre) => filtre.categorie === "Histoire"
      );

  console.log(Posts);
  return (
    <div>
      <Header />
      <h2 className="title-category">Catégorie : Histoire</h2>
      <div className="container">
        <div className="container-category">
          {loading
            ? ""
            : Posts.sort((a, b) => b.id - a.id).map((post, key) => (
                <CardPost post={post} key={post.id} />
              ))}
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Histoire;

/* export async function getStaticProps() {
  const posts = await fetch(`${url_api}/api/articles`).then((r) => r.json());
  return {
    props: {
      posts,
    },
  };
} */
