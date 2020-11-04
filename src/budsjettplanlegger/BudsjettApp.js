import React, { useState, useEffect } from 'react';
// import sessionStorage from 'utils/sessionStorage.utils';
import './budsjettApp.css';
// this works as intended, but is made in avery awful way
const useStateWithLocalStorage=localStorageKey=>{
  const [value, setValue] = useState(
    localStorage.getItem('myValueInLocalStorage') || '',
  );
  useEffect(()=>{
    localStorage.setItem('myValueInLocalStorage', value)
  },[value]);
  return [value, setValue]
}
const useStateWithLocalStorageLeft=localStorageKey=>{
  const [valueLeft, setValueLeft] = useState(
    localStorage.getItem('valueLeft') || '',
  );
  useEffect(()=>{
    localStorage.setItem('valueLeft', valueLeft);
  },[valueLeft]);
  return [valueLeft, setValueLeft]
}
const useStateWithLocalStorageFood=localStorageKey=>{
  const [valueFood, setValueFood] = useState(
    localStorage.getItem('valueFood') || '',
  );
  useEffect(()=>{
    localStorage.setItem('valueFood', valueFood);
  },[valueFood]);
  return [valueFood, setValueFood]
}
const useStateWithLocalStorageRent=localStorageKey=>{
  const [valueRent, setValueRent] = useState(
    localStorage.getItem('valueRent') || '',
  );
  useEffect(()=>{
    localStorage.setItem('valueRent', valueRent);
  },[valueRent]);
  return [valueRent, setValueRent]
}
const useStateWithLocalStorageDiv=localStorageKey=>{
  const [valueDiv, setValueDiv] = useState(
    localStorage.getItem('valueDiv') || '',
  );
  useEffect(()=>{
    localStorage.setItem('valueDiv', valueDiv);
  },[valueDiv]);
  return [valueDiv, setValueDiv]
}
const useStateWithLocalStorageUE=localStorageKey=>{
  const [valueUE, setValueUE] = useState(
    localStorage.getItem('valueUE') || '',
  );
  useEffect(()=>{
    localStorage.setItem('valueUE', valueUE);
  },[valueUE]);
  return [valueUE, setValueUE]
}
// localStorage.setItem('myValueLeftInLocalStorage', valueLeft)
const BudsjettApp= () =>{ /////////////////////////////////////////////////////// Ikke ferdig med å lagre hver kategori til state
  const [value, setValue]=useStateWithLocalStorage('myValueInLocalStorage');
  const onChange = event => setValue(event.target.value);
  const[valueLeft, setValueLeft]=useStateWithLocalStorageLeft('valueLeft');
  const[valueFood, setValueFood]=useStateWithLocalStorageFood('valueFood');
  const[valueRent, setValueRent]=useStateWithLocalStorageRent('valueRent');
  const[valueDiv, setValueDiv]=useStateWithLocalStorageDiv('valueDiv')
  const[valueUE, setValueUE]=useStateWithLocalStorageUE('valueUE')
  const showAmount=(e)=>{ // ubrukt per nå
    setValueLeft(value)
  }
  const incAmountFood=()=>{
    if(valueLeft>=100){
      setValueFood(Number(valueFood)+100);
      setValueLeft(Number(valueLeft)-100);
    }
  }
  const decAmountFood=()=>{
    if(Number(valueFood)>=100 && Number(valueLeft)<500){
      setValueFood(Number(valueFood)-100)
      setValueLeft(Number(valueLeft)+100);
    }
  }
  const incAmountRent=()=>{
    if(valueLeft>=100){
      setValueRent(Number(valueRent)+100);
      setValueLeft(Number(valueLeft)-100);
    }
  }
  const decAmountRent=()=>{
    if(Number(valueRent)>=100 && Number(valueLeft)<500){
      setValueRent(Number(valueRent)-100)
      setValueLeft(Number(valueLeft)+100);
    }
  }
  const incAmountDiv=()=>{
    if(valueLeft>=100){
      setValueDiv(Number(valueDiv)+100);
      setValueLeft(Number(valueLeft)-100);
    }
  }
  const decAmountDiv=()=>{
    if(Number(valueDiv)>=100 && Number(valueLeft)<500){
      setValueDiv(Number(valueDiv)-100)
      setValueLeft(Number(valueLeft)+100);
    }
  }
  const incAmountUE=()=>{
    if(valueLeft>=100){
      setValueUE(Number(valueUE)+100);
      setValueLeft(Number(valueLeft)-100);
    }
  }
  const decAmountUE=()=>{
    if(Number(valueUE)>=100 && Number(valueLeft)<500){
      setValueUE(Number(valueUE)-100)
      setValueLeft(Number(valueLeft)+100);
    }
  }
  const emptyMP=()=>{ // tømmer alle state ved click
    setValueFood('');
    setValueRent('');
    setValueUE('');
    setValueDiv('');
    setValueLeft('');
    setValue('');
  }
  /*
  useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
    localStorage.setItem('ValueLeftInLocalStorage', valueLeft);
    localStorage.setItem('ValueFood', valueFood);
    localStorage.setItem('ValueRent', valueRent);
    localStorage.setItem('ValueUE', valueUE);
    localStorage.setItem('ValueDiv', valueDiv);
    
  }, [value, valueLeft]);
*/ 
    return (
        <div>
            <div className="container">
              <div className="Wrapper">
                <h1 className="Title">MONEY PLANNER</h1>
                <div className="Input">
                  <form onSubmit={showAmount}>
                  <input type="number" value={value} onChange={onChange} className="Input-text" placeholder="Your amount"/>
                  <label className="Input-label centerLabel">Your budget for a time period</label>
                  <input type='submit'/>
                  </form>
                  <div className="whiteText">
                    <p>Submitted Amount: {value}</p>
                    Amount left to divide: {valueLeft} 
                    <br/>
                    <hr/>
                    Food: {valueFood} <button placeholder="+" className="spacingButton" onClick={incAmountFood}>+</button><button placeholder="-" className="spacingButton" onClick={decAmountFood}>-</button> 
                    <br/>
                    <hr/>
                    Rent: {valueRent} <button placeholder="+" className="spacingButton" onClick={incAmountRent}>+</button><button placeholder="-" className="spacingButton" onClick={decAmountRent}>-</button> 
                    <br/>
                    <hr/>
                    Div: {valueDiv}<button placeholder="+" className="spacingButton" onClick={incAmountDiv}>+</button><button placeholder="-" className="spacingButton" onClick={decAmountDiv}>-</button> 
                    <br/>
                    <hr/>
                    Unforseen expenses: {valueUE} <button placeholder="+" className="spacingButton" onClick={incAmountUE}>+</button><button placeholder="-" className="spacingButton" onClick={decAmountUE}>-</button> 
                    <br/>
                    <hr/>
                    <br/>
                    <button onClick={emptyMP}>Empty Money planner</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )    
}
export default BudsjettApp;