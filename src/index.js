import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';


const render = state => {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App matrix={state.matrix.start} valuesData={state.values} errors={state.errors} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
store.subscribe(render); // передаем функцию в store
render(store.getState());


reportWebVitals();