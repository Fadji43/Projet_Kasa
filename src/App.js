import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Housing from './pages/Housing';
import About from './pages/About';

function App() {
  return (
      <div>
        <Route path="/" component={Home} />
        <Route path="/error" component={Error} />
        <Route path="/housing" component={Housing} />
        <Route path="/about" component={About} />
      </div>
    
  );
}

export default App;
