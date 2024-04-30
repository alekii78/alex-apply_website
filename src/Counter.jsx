import React,{useState} from "react";

function Counter(){

const[count,setCunt]=useState(0);
const increment=()=>{
    setCunt(count +1)
}

const decrement=()=>{
    setCunt(count -1)
}

const reset =()=>{
setCunt( count * 0);
}


    return(
        <>
        <div className="countercontainer">
            <p className="countdisplay">
                {count}
            </p>
            <button className="counterbutton" onClick={decrement}>
                decrement
            </button>
            <button className="counterbutton" onClick={increment}>
                increment
            </button>
            
            <button className="counterbutton" onClick={reset}>
             reset
            </button>
            
        </div>
        </>
    );
}
export default Counter