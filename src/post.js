import React, { useContext } from 'react';
import { ThemeContext } from './contexts';

const Post = ({ title, content, author }) => {
  const {secondaryColor} = useContext(ThemeContext);
  return (
    <div style={{ border: '1px solid black' }}>
      <h4>
        <u style={{color: secondaryColor}}>{title}</u>
      </h4>
      <div>{content}</div>
      <br />
      <i>By: {author}</i>
    </div>
  );
};

export default Post;
