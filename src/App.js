import React from "react";
import { useDispatch, useSelector } from "react-redux";




function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  
}


  return (
    <div >
      <div style={{display: "flex"}}>
        <div style={{fontSize:"3rem"}}>{ cash} $ </div>
        <button onClick={() => addCash(Number(prompt()))} >ADD_CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET_CASH</button>
      </div>

    </div>
  );
}

export default App;
