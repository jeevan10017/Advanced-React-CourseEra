
// import React, { useEffect } from 'react';
// import { ThemeProvider, useTheme } from './ThemeContext';
// import Switch from './switch';
// import './switch/styles.css';
// import Heading from './Heading';

// const App = () => {
//   const { theme } = useTheme();

//   useEffect(() => {
//     document.body.className = theme;  // document.body.className is used to change the theme of the body
//   }, [theme]);  // whenever theme changes useEffect will be called

//   return (
//     <div>
//       <h1>Theme Switcher</h1>
//       <Switch />
//       <Heading firstName="Jeevan" lastName="Kumar" />
//       <Heading firstName="Any name other than Bob" />
//     </div>
//   );
// };

// const ThemedApp = () => (
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
// );

// export default ThemedApp;
import React from 'react'

function handleClick() {
  let randomNum = Math.floor(Math.random() * 9) + 1;  // Math.random() generates a random number between 0 and 1 //math.floor() rounds the number to the nearest integer
  console.log(randomNum);
  let UserInput = prompt('Guess the number between 1 and 9');
  alert(UserInput == randomNum ? 'Good Work , You are Lucky Today' : 'Not matched, the Random number was ' + randomNum)
}

const App = () => {
  return (
    <div>
      <h1>Task: Add a button and handle a Click Event</h1>
      <button onClick={handleClick}>Guess the Number between 1 and  9</button>
    </div>
  )
}

export default App