import React, {useState} from "react";

function Colorpicker(){

const[color,setcolor]=useState("#FFFFFF");
const handlecolorchange=(e)=>{
setcolor(e.target.value)
}

    return(<>
    <div className="colorpicker-CONTINER">
<h1> color picker</h1>
<div className="colordisplay" style={{backgroundColor:color}}>
<p>selected color </p>
</div>
<label htmlFor="">select color </label>
<input type="color"value={color} onChange={handlecolorchange}/>
    </div>
    </>)
}
export default Colorpicker