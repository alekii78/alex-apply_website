

function Profilepic(){
const imageurl='./src/assets/image1.jpg';
const handleclick=()=>{
    alert('awesome')
}
const hidetask=(e)=>{
    e.target.style.display="none"
}
return(
<>
<img src={imageurl} onClick={handleclick}  onDoubleClick={hidetask}height={200}></img>
</>
);
}
export default Profilepic