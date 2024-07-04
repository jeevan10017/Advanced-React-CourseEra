// App.js
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Switch from './switch';
import './switch/styles.css';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>Theme Switcher</h1>
      <Switch />
    </div>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
