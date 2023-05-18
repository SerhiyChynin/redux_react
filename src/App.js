import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "./store/customerReducers";
import { fetchCustomers } from "./asyncAction/customers";




function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id })
  }
  const removeCustomerB = (customers) => {
    dispatch({ type: "REMOVE_CUSTOMERS_BTN",  payload: customers})
  }


  return (
    <div style={{textAlign:'center'}}>
      <div style={{display: "flex", flexFlow: "column"}}>
        <div style={{fontSize:"3rem"}}>{ cash} $ </div>

        </div>
        <div style={{display: "flex", justifyContent: 'center'}}>
        <button style={{width:200, marginTop: 10}} onClick={() => addCash(Number(prompt()))} >ADD_CASH</button>
        <button style={{width:200, marginTop: 10}} onClick={() => getCash(Number(prompt()))}>GET_CASH</button>
      </div>
      <hr />
      <div style={{marginBottom: 10 }}>
        <button style={{width:200, marginTop: 10}} onClick={() => addCustomer(prompt())}>ADD_CUSTOMER</button>
        <button style={{width:200, marginTop: 10}} onClick={() => removeCustomerB(prompt())}>REMOVE_CUSTOMER</button>
        <button style={{width:200, marginTop: 10}} onClick={() => dispatch(fetchCustomers())}>GET CUSTOMER FROM DB</button>
      </div>
      {customers.length > 0 ?
        <div style={{display:'flex', flexFlow: 'column'}}>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)}
            style={{
              width: '40%', fontSize: "2rem", marginTop: '5px',
              border: '1px solid black', margin: 'auto', marginBottom: 5
            }} key={customer.id}>
              {customer.name}
              
            </div>
            )}
            <hr />
        </div>
        :
        <div style={{fontSize:"2rem", marginTop: '10px'}}>
          Клиенты отсутсвуют
        </div>
        }
    </div>
  );
}

export default App;
