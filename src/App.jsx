import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar';
import Wallets from './components/Wallets';
import Footer from './components/Footer';
import background from '../src/assets/walletsBackground.png'


function App() {

  return (
      <BrowserRouter>
      <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path='/' element={<Wallets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
