import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PostList = ({ posts }) => {
  return (
    <ul className="post-lists">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};

export default PostList;
