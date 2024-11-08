/* Counter */
import React from "react";
import { useState } from "react";

function Counter() {
  let [counter , setCounter] = useState(0);

   const addValue = () => {
    console.log("Increment clicked",counter);
    setCounter(counter+1);
   }  

   const subValue =() => {
    console.log("Decrementer clicked" , counter);
    setCounter(counter-1);
    
   }
  return(
    <>
    <h3>Counter</h3>
    <h5>Current Value : {counter}</h5>
    <button onClick={addValue}>Increment</button>
    <br />
    <hr/>
    <button onClick={subValue}>Decrement</button>
    
    </>
  )
}

export default Counter;
