import React,{useState} from "react"

function Handleonchange(){
const[name,setName]=useState()
const handlechanges=(e)=>{
    setName(e.target.value)
}



    return(<>
    <div>
        <input type="text"value={name}
        onChange={handlechanges} />
        <p>Name :{name} </p>
    </div>
    </>)
}
export  default Handleonchange