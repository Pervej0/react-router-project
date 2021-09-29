import React from "react";
import { Link } from "react-router-dom";

const Post = (porps) => {
  const { title, id } = porps.post;
  return (
    <div className="border border-success my-2 p-3 rounded">
      <p className="text-secondary fw-bold">Id: {id}</p>
      <h4 className="text-dark fw-semibold mb-3">{title}</h4>
      <Link
        to={`/post/${id}`}
        className="nav-link fw-bold py-2 px-3 border rounded d-inline-block text-uppercase"
      >
        See More
      </Link>
    </div>
  );
};

export default Post;
