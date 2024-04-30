import React,{useState} from "react";


function Updaterfunction(){

const [counter,setcounter]=useState(0);
const update=()=>{
    setcounter(counter=>counter+1)
}
return(
    <>
    <div>
        <button onClick  ={update}>
           counter
        </button>
        <p>counter{counter}</p>
    </div>
    </>
)
}
export default Updaterfunction