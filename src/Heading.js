import React from 'react'
function Heading(props) {

    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        color: "red",
    }
   const darkModeOn = false;
   const darkMode = <h1>DarkMode is On</h1>
   const LightMode = <h1>LightMode is On</h1>
    const onChange = () => {
    darkModeOn = !darkModeOn;
    if(darkModeOn){
        console.log("darkModeOn")
    }
    else{console.log("LightModeOn")}}
    
    return (
        <div>
        <h1>Heading</h1>
        {darkModeOn ? darkMode : LightMode}
        <button onClick={onChange}> Click Me</button>
        <div style={bag}>
            {props.firstName}
        </div>
        </div>
    )
}
export default Heading