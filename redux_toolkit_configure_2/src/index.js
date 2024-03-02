import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import  subject_1Reducer from './Slice/subject_1Slice';
import  subject_2Reducer from './Slice/subject_2Slice';
import  subject_3Reducer from './Slice/subject_3Slice';
import { Provider } from 'react-redux';

const store = configureStore({
     reducer : {
        subject_1 : subject_1Reducer,
        subject_2 : subject_2Reducer,
        subject_3 : subject_3Reducer,
     }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
