
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
// import React from 'react'

// function handleClick() {
//   let randomNum = Math.floor(Math.random() * 9) + 1;  // Math.random() generates a random number between 0 and 1 //math.floor() rounds the number to the nearest integer
//   console.log(randomNum);
//   let UserInput = prompt('Guess the number between 1 and 9');
//   alert(UserInput == randomNum ? 'Good Work , You are Lucky Today' : 'Not matched, the Random number was ' + randomNum)
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Task: Add a button and handle a Click Event</h1>
//       <button onClick={handleClick}>Guess the Number between 1 and  9</button>
//     </div>
//   )
// }

// export default App



//Using of HOOKs in React
// import Child from './Child';
// import React, { useState } from 'react'
// import RegisterForm from './RegisterForm';
// import TextInputWithFocusButton from './TextInputWithFocusButton';

// const App = () => {
//   // const date = new Date();
//   // console.log(date.toLocaleTimeString())
//   const [inputValue,setValue]= useState("Type Here");
//   const handleChange =(e) =>{
//     setValue(e.target.value);
//   }
//   return (
//     <div>
//       <h1>Present Time is </h1>
      
//       <input value={inputValue} onChange={handleChange} />
//       You Typed : {inputValue};
//       <Child message={inputValue}/>
//       <button onClick={()=>setValue("Type Here")}>Reset</button>

// <div>
//       {/* RegisterForm */}
//      <RegisterForm/> </div>

//      <TextInputWithFocusButton />
//       </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'
import Fruits from './Fruits/Fruits'
import FruitsCounter from './Fruits/FruitsCounter'

const App = () => {
  // const fruits =([      
  const [fruits] =useState([   //useState is a hook that allows you to have state variables in functional components
    {id:1,fruitName:'Apple'},
    {id:2,fruitName:'Banana'},
    {id:3,fruitName:'Orange'},
    {id:4,fruitName:'Grapes'},
    {id:5,fruitName:'Pineapple'},
  ]);
  return (
    <div>
      <h1>Where Should State Go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </div>
  )
}

export default App
