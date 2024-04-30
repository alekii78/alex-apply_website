import React,{useState,useEffect} from "react";

function Digitalclock(){

const [time,settime]=useState(new Date());

useEffect(()=>{
const intervalid=setInterval(()=>{
    settime(new Date());
},1000);
return()=>{
    clearInterval(intervalid);
}
},[]);

function formatTime(){
    let hrs=time.getHours();
    const minutes=time.getMinutes();
    const seconds =time.getSeconds();
    const meridin= hrs >= 12 ? "pm":"Am";
    hrs=hrs%12 ||12;
return`${padzero(hrs)} :${padzero(minutes)} : ${padzero(seconds)}:${meridin}`;

}

function padzero(number){
return (number<10 ? "0":"") + number

}

return(
    <>
    <div className="clockcontainer">
<div className="clock">
<span> {formatTime()}</span>
<span></span>
</div>
    </div>
    </>
)

}
export default Digitalclock