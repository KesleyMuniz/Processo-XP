import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as Page from './Pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page.Login />} />
        <Route path="/Registration" element={<Page.Registration />} />
      </Routes>
    </div>
  );
}

export default App;
