import React,{useReducer} from 'react'
import "../Styles/style.css"

const Counter = () => {
  function reducer(state,action){
  //  if(action.x === 'increment'){
  //   return state+1;
  //  }
  //  if(action.x === 'decrement'){
  //   return state - 1;
  // }
  // if(action.x === 'reset'){
  //   return 0;
  // }
    switch(action){
      case "increment": return state + 1;
      case "decrement": return state - 1;
      case "reset": return 0;
      default: return state;
    }
  }
  let [count,dispatch] = useReducer(reducer,0);
  
    
  return (
    <div>
      {count}
      <br />
      <button onClick = {() => dispatch("increment")}>Increment</button>
      <button onClick = {() => dispatch("decrement")}>Decrement</button>
      <button onClick = {() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Counter

