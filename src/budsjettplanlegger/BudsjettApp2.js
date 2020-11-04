import React from 'react'; // { useState, useEffect } 
// import sessionStorage from 'utils/sessionStorage.utils';
import UseLocalStorage from './UseLocalStorage.js'
import './budsjettApp.css';



const BudsjettApp2=() =>{
  const valueList = [
    {description: 'Amount added per click', amount: 100},
    {description: 'Submitted Amount', amount: ' No value'},
    {description: 'Amount left to divide', amount: ' No Value left'},
    {description: 'Food', amount: ' No money for food'},
    {description: 'Rent', amount: ' No money for rent'},
    {description: 'Div', amount: ' No money for div things'},
    {description: 'Buffer', amount: ' No money for unexpected expenses'}
  ];
  const [storedName, setUsername] = UseLocalStorage("valueList", valueList);
  let money='';
  const onChange = event => {
    money= event.target.value;
  }
  const showAmount=()=>{
    const valueListNew=storedName;
    valueListNew[1].amount= money;
    valueListNew[2].amount=money;
    setUsername(valueListNew);
  } 
  const incValue=(prop)=>{
    if(isNaN(Number(storedName[prop].amount))){
      storedName[prop].amount=0;
    }
    if(Number(storedName[1].amount)>=Number(storedName[2].amount) && Number(storedName[2].amount)>=Number(storedName[0].amount)){
      storedName[prop].amount=storedName[prop].amount+storedName[0].amount;
      storedName[2].amount=storedName[2].amount-storedName[0].amount;
    }
    const vL=storedName;
    setUsername([...vL]);
  }

  const decValue=(prop)=>{
   const vL=storedName;
     if(Number(storedName[2].amount)<=Number(storedName[1].amount)-Number(storedName[0].amount) && Number(storedName[prop].amount)>=Number(storedName[0].amount)){
      const oldVal=storedName[prop].amount
      const isNan=isNaN(Number(oldVal))
      if(isNan){
        return
      }else{
        vL[prop].amount=Number(oldVal)-Number(storedName[0].amount)
        vL[2].amount=Number(vL[2].amount)+Number(storedName[0].amount)
        setUsername([...vL]);
      }
    }
  }
  let newRow='';
  const onNewCat=(e)=>{
    newRow=e.target.value;
    console.log(newRow)
  }
  const handleClick=()=>{
    console.log(newRow)
    if(newRow!==''){
    newRow= {description: newRow, amount: 'no money for this yet'} 
    const vL=storedName;
    console.log(vL)
    vL.push(newRow);
    setUsername(vL);
    }
  }
  const inClick=()=>{
    storedName[0].amount=storedName[0].amount +50;
    const vL=storedName;
    setUsername([...vL])
  }
  const decClick=()=>{
      if( Number(storedName[0].amount)>=100){
      storedName[0].amount=storedName[0].amount -50;
      const vL=storedName;
      setUsername([...vL])
    }
  }
  const deleteValues=()=>{
    setUsername(valueList);
  }
    return (
        <div>
            <div className="container">
              <div className="Wrapper">
                <h1 className="Title">MONEY PLANNER</h1>
                <div className="Input">
                  <div className="margin">
                  <form onSubmit={showAmount}>
                  <input type="number" onChange={(e) => onChange(e)} className="Input-text" placeholder="Your amount"/>
                  <input type='submit' className="submitInText1" onClick={showAmount}/>
                  <input type="text" onChange={(e) => onNewCat(e)} className="Input-text2" placeholder="New category"/>
                  <input type='submit' className="submitInText2" onClick={handleClick}/>
                  </form>
                </div>
                  <div className="whiteText spacing">
                  <button placeholder="+" className="spacingButton" onClick={() => inClick()}>+</button><button placeholder="-" className="spacingButton" onClick={() => decClick()}>-</button>
                  {storedName[0].description}: {storedName[0].amount} 
                  <hr/>
                    <p>{storedName[1].description}: {storedName[1].amount}</p>
                    <hr/>
                    <p>{storedName[2].description}: {storedName[2].amount}</p>
                    <hr/>
                    {storedName.map((item, num) => {
                      if(num>2){ 
                        return (<p key={num}> {item.description}: {item.amount} <button placeholder="+" className="spacingButton" onClick={() => incValue(num)}>+</button><button placeholder="-" className="spacingButton" onClick={() => decValue(num)}>-</button></p> );
                      }
                    })}
                    <button className="btnReset "onClick={deleteValues}>Reset Planner</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )    
}
export default BudsjettApp2;