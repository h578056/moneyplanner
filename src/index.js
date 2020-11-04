import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BudsjettApp from './budsjettplanlegger/BudsjettApp.js'
import BudsjettApp2 from './budsjettplanlegger/BudsjettApp2.js'
// import App from './App';
import * as serviceWorker from './serviceWorker';
  ReactDOM.render(
    <div>
      <BudsjettApp2/>
    </div>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
