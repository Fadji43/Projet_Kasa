import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error'
import Housing from './pages/Housing';
import About from './pages/About';
import './pages/styles.scss'

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/housing/:id" element={<Housing></Housing>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/*" element={<Error></Error>} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
