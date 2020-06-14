import React, {useState} from 'react';
import './App.css';
import './Room.css';

function Room() {
    //const state = useState (true);    
    // console.log("State = ", state);

    function updateLit () {

      console.log("Button Clicked")
      setLit (!isLit);
    }

    function updateAge () {

      console.log("Button Clicked")
      setAge (++age);
    }



    let [isLit,setLit] = useState(false); 
    let [age, setAge] = useState (23);



    return ( 
    
    <div className={`room ${isLit ? "lit" : "dark"}`}>
    This room is : {isLit? "lit" : "dark"} 
    <br/>
    Age : {age}
    <br/>
    <button onClick={updateLit}>Toggle Light</button>
    <br/>
    <button onClick={updateAge}>Increase Age</button>
    
    
    </div>
  );
}  

export default Room;