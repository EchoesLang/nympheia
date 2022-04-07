import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './components/errorpages/Error'
import Intro from './components/introduce/Intro'
import Navbar from './components/navvar/Nav'
import How from './sub-app/howuse/How'
import IntroApp from './sub-app/introduce/IntroApp'
import TutorialApp from './sub-app/tutorial/Tutorial'
import Editor from './sub-app/editor/Editor'

ReactDOM.render(
  <BrowserRouter>
    <div className='main-board'>
      <div className='mainhead'><Navbar></Navbar></div>
      <Routes>
        <Route path='/' element={<Navigate replace to="/nympheia"></Navigate>}></Route>
        <Route path='/nympheia' element={<App />}></Route>
        <Route path='/nympheia/introduce' element={<IntroApp></IntroApp>}></Route>
        <Route path='/nympheia/using' element={<How></How>}></Route>
        <Route path='/nympheia/tutorial' element={<TutorialApp></TutorialApp>}></Route>
        <Route path='/nympheia/editor' element={<Editor></Editor>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
      <div className='bottom'>
        <Intro></Intro>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
