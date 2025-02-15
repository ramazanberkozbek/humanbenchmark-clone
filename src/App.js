import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import ReactionGame from './pages/Games/Reaction/ReactionGame';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games/reaction' element={<ReactionGame />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;