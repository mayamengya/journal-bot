import React, { useEffect, useState } from 'react';

import Day from './pages/Day/Day';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isTodaySelected, setIsTodaySelected] = useState(true);

  return (
    <BrowserRouter>
      <div className="app">
        <h1 className='app__title'>Journal GPT</h1>
        <div className='app__day'>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isTodaySelected={isTodaySelected} />

          {/* Routes go here */}
          <Routes>
            <Route path='/' element={<Day isSideBarOpen={isOpen} setIsTodaySelected={setIsTodaySelected} />} />
            <Route path='/:date' element={<Day isSideBarOpen={isOpen} setIsTodaySelected={setIsTodaySelected} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
// 5 emotions: anger, anticipation, joy, sadness, trust, disgust, fear, surprise
