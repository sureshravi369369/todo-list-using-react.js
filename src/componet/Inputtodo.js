import React, { useState }  from "react";
import "./Inputtodo.css"

function Inputtodo(props){
       const[input,setInput]=useState("")
       
       const handleChange=(event)=>{
            setInput(event.target.value);
       }
        
       let handlesubmit=(event)=>{
          event.preventDefault();
           props.addItems(input)  
           setInput("")
       }
      
    return(
           <form>
             <input type="text" placeholder="add list" onChange={handleChange} value={input}/>
             <button onClick={handlesubmit}>
                <span>add</span>
             </button>
           </form>
    )
}

export default Inputtodo;