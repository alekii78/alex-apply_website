

function Button(){
   let count=0;

   const  handleClick= ()=>{
      alert("you have clicked my button")
      if (count==3) {
         alert("enough clicks ")
      }
   }
return(
   <>
   <button className="button">button work start here  </button> 
<button className="btn" onClick={handleClick}>lecture on oncllick events </button>
</>
);
}
export default Button