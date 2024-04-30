import React,{useState} from "react";

function UsestateInObject(){

    const[car,setcar]=useState({
        year:2024,
        make:"ford",
        model:"harrier"
    })

    function handleyearchange(event){
        setcar(car=>({...car,year:event.target.value}));
    }

    function handlemakechange(event){
        setcar(car=>({...car,make:event.target.value}));
    }
    
    function handlemodelchange(event){
        setcar(car=>({...car,model:event.target.value}));
    }



    return(
        <>
        <div>
<input type="number"  value={car.year} onChange={handleyearchange}/><br />
<input type="text" onChange={handlemakechange} value={car.make}/><br />
<input type="text"  value={car.model}onChange={handlemodelchange}
/><br />
<p>your favorite car is :year{car.year}<br/>make :{car.make}<br/>model:{car.model}</p>
        </div>
        </>
    )
}
export default UsestateInObject