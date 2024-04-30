

function UserGreating(Props){

    if (Props.isLoggedIn) {
      return <h2>WELCOME  {Props.username}</h2>  
    }
    return(
    <>
    <h3> here i am learning  conditonal rendering </h3>
    
    </>
);
}
export default UserGreating