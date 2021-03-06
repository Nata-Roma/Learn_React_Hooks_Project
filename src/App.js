import React, { useEffect, useReducer, useState } from 'react';
import ChangeTheme from './change-theme';
import { StateContext, ThemeContext } from './contexts';
import CreatePost from './create-post';
import Header from './header';
import Posts from './posts';
import appReducer from './reducers';

import './styles.css';
import UserBlock from './user-block';

const defaultPosts = [
  { id: 'first', title: 'First', content: 'bla-bla-bla', author: 'Myself' },
  { id: 'second', title: 'Second', content: 'bla-bla', author: 'Myself' }
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

const App = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatchUser] = useReducer(userReducer, '');
  // const [posts, setPosts] = useState(defaultPosts);
  // const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);

  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: defaultPosts
  });

  const { user } = state;

  const [theme, setTheme] = useState({
    id: 1,
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  });

  useEffect(() => {
    if (user) {
      document.title = `${user} React Hooks Blog`;
    } else {
      document.title = `React Hooks Blog`;
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBlock />
          <br />
          {user && <CreatePost />}
          <br />
          {user && <Posts />}
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
