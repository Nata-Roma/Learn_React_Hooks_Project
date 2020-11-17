import React from 'react';

export const ThemeContext = React.createContext({
  id: 1,
  primaryColor: 'deepskyblue',
  secondaryColor: 'coral'
});

export const StateContext = React.createContext({
  state: {},
  dispatch: () => {}
});
