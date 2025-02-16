import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import ReactionGame from './pages/Games/Reaction/ReactionGame';
import SequenceGame from './pages/Games/Sequence/SequenceGame';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games/reaction' element={<ReactionGame />} />
      <Route path='/games/sequence' element={<SequenceGame />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;