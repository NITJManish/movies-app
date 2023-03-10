import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducer'

const store=createStore(movies);
console.log('store',store);
console.log('STATE',store.getState());
console.log('before state',store.getState());

store.dispatch({
  type:'ADD_MOVIES',
  movies:[{name:'superman'}]
});

console.log('after state',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

