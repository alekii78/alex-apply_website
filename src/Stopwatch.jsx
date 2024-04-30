import React,{useState,useRef,useEffect} from "react"

function Stopwatch(){
const [isrunning,setrunning]=useState(false);
const [elapsedtime,setelapsedtime]=useState(0);
const intervalidref=useRef(null);
const starttimeref=useRef(0);


useEffect(()=>{
if (isrunning) {
    intervalidref.current=setInterval(()=>{
        setelapsedtime(Date.now()-starttimeref.current)
    },10);
}
return()=>{
    clearInterval(intervalidref.current)
}
},[isrunning]);



function start(){ 
setrunning(true)
starttimeref.current=Date.now()-elapsedtime;
}
function stop(){
setrunning(false);
}
function reset(){
setelapsedtime(0)
setrunning(false)
}
function formattime(){

let hours=Math.floor(elapsedtime/(1000*60*60));
let minutes=Math.floor(elapsedtime/(1000*60)%60);
let seconds=Math.floor(elapsedtime/(1000)%60)
let milliseconds=Math.floor(elapsedtime/(1000)%10)

    return`hours  ${hours}: minutes${minutes}: seconds${seconds}: 
    milliseconds${milliseconds}`
}
    return(<>
    <div className="stopwatch">
    <h1>STOPWATCH</h1>
<div className="display">
{formattime()}
</div>
<div className="controls">
    <button onClick={start}className="start-button">start</button>
    <button className="stop-button " onClick={stop}>stop</button>
    <button className="reset-button"onClick={reset}>reset</button>
</div>
    </div>
    </>)
}
export default Stopwatch