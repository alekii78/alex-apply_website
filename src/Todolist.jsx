import React,{useState} from "react";


function Todolist() {
   const[tasks,settasks]=useState(["eat","walk"])
    const [newtask,setnewtask]=useState("")

    function handleinputchange(event){
        setnewtask(event.target.value)
    }
    function addtask(){
       
        if (newtask.trim() !=="") {
            settasks(t=>[...t,newtask]);
            setnewtask("");  
        }
    }
    function deletetask(index){
const  updatedtasks=tasks.filter((element,i)=>i !==index);
settasks(updatedtasks);

    }
    function movetaskup(index){

        if (index>0) {
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index -1]] =
            [updatedtasks[index -1],updatedtasks[index]];
            settasks(updatedtasks);

        }
    }
    function movetaskdown(index){
        
        if (index<tasks.length-1) {
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index +1]] =
            [updatedtasks[index +1],updatedtasks[index]];
            settasks(updatedtasks);

        }
    }
    return(<>
    <div className="to-do-list">
        <h1>to do list lecture</h1>
        <div>
            <input type="text"
            placeholder="enter a task "
            value={newtask}
            onChange={handleinputchange} />
            <button className="add-button"
            onClick={addtask}>
                add
            </button>
        </div>
        <ol>
            {
              tasks.map((task,index)=>
            <li key={index}>
                {task}
<span className="text">{tasks}</span>
<button className="delete-button"
onClick={()=>deletetask(index)}
>delete</button>
<button className="move-button"
onClick={()=>movetaskup(index)}
>move-up</button>
<button className="move-down"
onClick={()=>movetaskdown(index)}
>move-down</button>
            </li>)  
            }
        </ol>
    </div>

    </>);
}
export default Todolist