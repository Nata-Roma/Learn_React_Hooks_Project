import React, { useReducer, useState } from 'react';
import CreatePost from './create-post';
import Posts from './posts';

import './styles.css';
import UserBlock from './user-block';

const defaultPosts = [
  { title: 'First', content: 'bla-bla-bla', author: 'Myself' },
  { title: 'Second', content: 'bla-bla', author: 'Myself' }
];

const actions = [
  { type: 'LOGIN', username: 'qw', password: '123' },
  {
    type: 'REGISTER',
    username: 'qw',
    password: '123',
    passwordRepeat: '123'
  },
  { type: 'LOGOUT' },
  {
    type: 'CREATE_POST',
    title: 'First',
    content: 'bla-bla-bla',
    author: 'Myself'
  }
];

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.userName;
    case 'LOGOUT':
      return '';
    default:
      throw new Error();
  }
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      };
      return [newPost, ...state];
    default:
      throw new Error();
  }
};

const App = () => {
  // const [user, setUser] = useState('');
  const [user, dispatchUser] = useReducer(userReducer, '');
  // const [posts, setPosts] = useState(defaultPosts);
  const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);

  return (
    <div className="App">
      <UserBlock dispatch={dispatchUser} user={user} />
      <br />
      {user && (
        <CreatePost user={user} dispatch={dispatchPosts} posts={posts} />
      )}
      <br />
      {user && <Posts posts={posts} />}
    </div>
  );
};

export default App;
