import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import AboutMe from './component/AboutMe';
import UpdatePage from './component/UpdatePage';



function App() {
 

 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AboutMe/>} />
        <Route path='/romanahramenya1411089' element={<UpdatePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
