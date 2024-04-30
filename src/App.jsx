import Header from "./Header.jsx"
import  Tile from "./Tile"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Props from "./Props.jsx";
import UserGreating from "./UserGreating.jsx";
import List from "./List.jsx";
import Profilepic from "./Profilepic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import Handleonchange from "./Handleonchange.jsx";
import Colorpicker from "./Colorpicker.jsx";
import Updaterfunction from "./Updaterfunction.jsx";
import UsestateInObject from "./UsestateInObject.jsx";
import UpdateState from "./UpdateState.jsx";
import ArrayUpdate from "./ArrayUpdate.jsx";
import Todolist from "./Todolist.jsx";
import Useeffectlecture from "./Useeffectlecture.jsx";
import Digitalclock from "./Digitalclock.jsx";
import ComponentB from "./ComponentB.jsx";
import ComponentA from "./ComponentA.jsx";
import Stopwatch from "./Stopwatch.jsx";







function App() {
 

  return (
    <>
      <Header/>
      <Tile/>
     <Footer/>
     <Food/>
     <Card/>
     <Card/>
     <Card/>
     <Button/>
     <Props name="mirii" age={20} />
     <UserGreating isLoggedIn={true} username="Alex"/>
     <List/>
     <Profilepic/>
     <MyComponent/>
     <Counter/>
     <Handleonchange/>
     <Colorpicker/>
     <Updaterfunction/>
     <UsestateInObject/>
     <UpdateState/>
     <ArrayUpdate/>
     <Todolist/>
     <Useeffectlecture/>
     <Stopwatch/>
     <Digitalclock/>
     <ComponentA/>
     <ComponentB/>
     <Stopwatch/>
    </>
  );
}

export default App
