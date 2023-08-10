// import logo from './logo.svg';
import './App.css';
import React from "react";
import TodoList from './component/TodoList';

// import bulboff from "./blub-off.png";
// import bulbon from "./bulb-on.png";

function App() {

  // const [bulbState, setbulbState]=useState(false)
  // const [imgSrc, setimgSrc]=useState()

  // const handleClick=(e)=>{
  //   e.preventDefault()
  //   if(bulbState){
  //     setbulbState(!bulbState)
  //     setimgSrc(bulboff)
  //   }else{
  //     setbulbState(!bulbState)
  //     setimgSrc(bulbon)
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img onClick={handleClick} src={imgSrc} alt="bulb"  width={450}/> */}
        <TodoList /> 
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       
      </header>
    </div>
  );
}

export default App;
