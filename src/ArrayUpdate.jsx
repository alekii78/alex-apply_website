import React,{useState} from "react";

function ArrayUpdate(){

const [cars,setcars]=useState([]);
const [caryear,setcaryear]=useState(new Date().getFullYear());
const  [carmodel,setcarmodel]=useState("");
const [carmake,setcarmake]=useState(" ");

function addcar(){
    const newcar={
        year: caryear,
        make:carmake,
        model:carmodel};
    setcars(c => [...c,newcar]);
    setcaryear(new Date().getFullYear());
    setcarmake("");
    setcarmodel("");
}
function removecar(index){

setcars(c=>c.filter((element,i) =>i !==index ))

}
function yearchange(event){
setcaryear(event.target.value);
}
function  makechange(event){
setcarmake(event.target.value)
}
function modelchange(event){
setcarmodel(event.target.value);
}


    return(
        <>
        <div>
<h2>
    list of car objects
</h2>
<ul>
{
    cars.map((car,index) =>
    <li key={index}onClick={()=>removecar(index)}>
      {car.year}{car.model}{car.make}
    </li>)
}
</ul>
<input type="number" value={caryear} onChange={yearchange}/>
<input type="text"value={carmake} onChange={makechange}
placeholder="enter car make" />
<input type="text" value={carmodel} onChange={modelchange}
placeholder="enter car model " />
<button onClick={addcar} >Add car</button>
        </div>
        </>
    )
}
export default ArrayUpdate