import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Page from './pages';
import GlobalStyle from './assets/css/styleGlobal';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Page.Login />} />
        <Route path="/Registration" element={<Page.Registration />} />
        <Route path="/Stocks" element={<Page.Stocks />} />
        <Route path="/Account" element={<Page.Account />} />
        <Route path="/Profile" element={<Page.Profile />} />
      </Routes>
    </div>
  );
}

export default App;
