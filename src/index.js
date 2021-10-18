import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';



  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App state={store.getState()} />
    </BrowserRouter>,
    document.getElementById('root')
  );


reportWebVitals();
