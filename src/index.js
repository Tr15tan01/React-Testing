import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/conter';
import NavBar from './components/navigation';
import ToDo from './components/todo';
import ReducerComponent from './components/reducer';
import ReduxComponent from './components/redux';
import ReduxToolkitComponent from './components/redux-toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route exact path="/todo" element={<ToDo />} />
        <Route exact path="/reducer" element={<ReducerComponent />} />
        <Route exact path="/redux" element={<ReduxComponent />} />
        <Route exact path="/toolkit" element={<ReduxToolkitComponent />} />
        <Route exact path="/" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
