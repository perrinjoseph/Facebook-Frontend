import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Components/StateProvider';
import { initialValue, reducer } from './Components/reducer';
//How I choose to do this is first create the store in the index. js here, and then 
//store the actions and reducers in individual files. 
//creating the store COMES FROM REDUX

ReactDOM.render(
  
  <React.StrictMode>
    <StateProvider initialValue={initialValue} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
