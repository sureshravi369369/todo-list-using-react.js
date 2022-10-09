import React from "react";
import "./Todoitems.css";

function Todoitems(props){

    return(
        <div onClick={()=>props.deleteItems(props.id)}>
       <li>{props.text}</li>
        </div>
    )
}

export default Todoitems;