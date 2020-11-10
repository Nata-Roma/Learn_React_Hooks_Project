import React from 'react';

const Post = ({ title, content, author }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <h4>
        <u>{title}</u>
      </h4>
      <div>{content}</div>
      <br />
      <i>By: {author}</i>
    </div>
  );
};

export default Post;
