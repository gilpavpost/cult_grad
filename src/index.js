import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import AboutPage from './components/About';
import Header from './components/Header';
ReactDOM.render(
  <React.StrictMode>
          <BrowserRouter>        

      <Route path="/" component = {Header} />  
       <Route exact path="/" component={App} />        
       <Route exact path="/about" component={AboutPage} /> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
