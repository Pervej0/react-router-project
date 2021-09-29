import React from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <>
      <section className="container">
        <h1 className="text-center my-4 text-success">Post list</h1>
        <Posts />
      </section>
    </>
  );
};

export default Home;
