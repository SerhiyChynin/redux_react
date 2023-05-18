import React from "react";
import { useDispatch, useSelector } from "react-redux";




function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 5})
  }
  
  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 5})
  
}


  return (
    <div >
      <div style={{display: "flex"}}>
        <div style={{fontSize:"3rem"}}>{ cash}</div>
        <button onClick={() => addCash()} >ADD_CASH</button>
        <button onClick={() => getCash()}>GET_CASH</button>
      </div>

    </div>
  );
}

export default App;
