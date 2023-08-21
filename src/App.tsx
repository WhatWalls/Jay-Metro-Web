import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { RefProvider } from "./context/RefContext"
import Landing from './pages/Landing';
import './index.css';

function App() {
  return (
    <RefProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </RefProvider>
  );
}

export default App; 