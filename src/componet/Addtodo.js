import React, { useState } from "react";

import Inputtodo from "./Inputtodo";
import Todoitems from "./Todoitems";

function Addtodo(){

    const[items,setItems]=useState([])
    
    const addItems=(input)=>{
        setItems([...items,input])
    
    }

    console.log(items);
    const deleteItems=(id)=>{
        setItems(()=>{
            return items.filter((value,index)=>{
                return index !==id
            });
        });;
    }
    return(
        <div>
        <Inputtodo addItems={addItems} />
        <div>
            <ul>
                {
                    items.map((value,index)=>{
                        return(<Todoitems key={index} text={value} deleteItems={deleteItems} id={index}/>)
                    })
                }
            </ul>
        </div>
        </div>
    )
}
export default Addtodo;