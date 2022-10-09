import React from "react";
import "./App.css"
import Addtodo from "./componet/Addtodo";


function App() {

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do list</h1>
      </div>
      <div>
       <Addtodo/>
      </div> 
    </div>

  );
}

export default App;
