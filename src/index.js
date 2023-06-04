import React from 'react';
import { createRoot } from 'react-dom/client'; // Update import statement
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // Update createRoot function
  <Provider store={store}>
    <App />
  </Provider>
);

// Optional: If you have any web vitals reporting, you can keep the existing code
reportWebVitals();


