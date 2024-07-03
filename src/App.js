import "./App.css";

const LoggedInUser =() =>{
  return (
    <p>
      Welcome <span className="Username"></span>
    </p>
  );
};


const Header =()=>{
  return (
    <header>
      <h1>Blog App</h1>
      <LoggedInUser />
    </header>
  );
};


const Page =()=>{
  return (
    <div>
      <h1>What is Lorem, ipsum dolor.?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis consequuntur iusto laborum amet voluptatibus vero veritatis in iste accusamus numquam est sint excepturi, architecto ducimus modi obcaecati itaque dignissimos explicabo fugit, quisquam tempora dolor at, delectus soluta. Architecto, laudantium inventore enim consequuntur cupiditate dolores, aliquid vitae officia expedita obcaecati, nihil provident ab a ea est modi voluptatum veniam cum cumque quas dolorum. Reprehenderit ipsum excepturi iusto, quisquam ea, culpa, dignissimos quaerat soluta voluptas odio esse eveniet neque minus mollitia quidem sunt molestiae illum sed dolor. Dolorem adipisci vero minima a deserunt laudantium reiciendis saepe fuga nam rem, ea tempora ipsam nihil asperiores consectetur ad odit! Eligendi incidunt labore officiis voluptas numquam. Veniam atque corporis totam rem facere alias magnam fugiat, eligendi explicabo dignissimos.</p>
   <p>Written By </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}


function Root(){
  return <App />;
}

export default Root;