import React, { useState } from 'react';

const THEMES = [
  { id: 1, primaryColor: 'deepskyblue', secondaryColor: 'coral' },
  { id: 2, primaryColor: 'orchid', secondaryColor: 'mediumseagreen' },
  { id: 3, primaryColor: 'darkslategray', secondaryColor: 'slategrey' }
];

const ThemeItem = ({ theme, active, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        paddingLeft: 8,
        fontWeight: active ? 'bold' : 'normal'
      }}
    >
      <span style={{ color: theme.primaryColor }}>Primary</span> /
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
};

const ChangeTheme = ({ theme, setTheme }) => {
  const isActive = (t) => {
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  };
  const [themes, setThemes] = useState([]);

  return (
    <div>
      Change theme:
      {THEMES.map((t, index) => (
        <ThemeItem
          key={`theme-${index}`}
          theme={t}
          active={isActive(t)}
          onClick={() => setTheme(t)}
        />
      ))}
    </div>
  );
};

export default ChangeTheme;
