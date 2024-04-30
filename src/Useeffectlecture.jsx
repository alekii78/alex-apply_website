
import React,{useState,useEffect} from "react";

function Useeffectlecture(){

const [count,setcount]=useState(0);

useEffect(()=>{
    document.title=`count : ${count}`;
},[count])
function addcount(){
    setcount(c=>c+1)
}
    return(
        <>
       <b> <p>use effect lecture starts here </p></b>
<p>count : {count}</p>
<button onClick={addcount}>add</button>

        </>
    )
}
export default Useeffectlecture