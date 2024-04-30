import React,{useState} from "react"

function MyComponent(){
const[name,setName]=useState();

const updateName=()=>{
setName("Alex");} 
return(<>
<div>
    <p>Name :{name}</p>
    <button onClick={updateName}>
        setName
    </button>
</div>

</>);

}
export default MyComponent