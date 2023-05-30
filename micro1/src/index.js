import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';


const mount = (el, store) => {
    const root2 = ReactDOM.createRoot(el)
    root2.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

};


const root = document.getElementById('micro1_app');
if (root) {
  mount(root)
}


export { mount, App } ;