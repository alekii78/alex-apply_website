import React,{useState} from "react";

function UpdateState(){

    const[foods,setfoods]= useState(["apple","bananas"])

    function handleAddfood(){
        const newfood=document.getElementById('foodinput').value;
        document.getElementById("foodinput").value =" ";
        setfoods(f=>[...f,newfood])
    }
    function handleRemovefood(index){
setfoods(foods.filter((_,i)=>i !==index));
    }
    return(
        <>
        <div>
            <h2>list of foods </h2>
            <ul>
            
                {foods.map((food,index) =>
                 <li key={index} onClick={()=>handleRemovefood(index)}>
                    {food}</li>)}
            </ul>
            <input type="text" id="foodinput"placeholder="enter food name"/>
            <button onClick={handleAddfood}>add food </button>
              </div>
        </>
    )
}
export default UpdateState 