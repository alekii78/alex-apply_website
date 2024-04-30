



function List(){
    const fruits =['apples','orange','lemon','banana','coconut','pineaple']
    const listitems=fruits.map(fruits=> <li>fruit</li>);
    
   
    return(
    <>
 <h3>showing list of items</h3>
    <ul>{listitems}</ul></>);
}
export default List