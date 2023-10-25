import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar';
import Wallets from './components/Wallets';
import Footer from './components/Footer';
import Glossary from './components/Glossary';
import About from './components/About';


function App() {

  return (
      <BrowserRouter>
      <GlobalStyles /> 
        <Navbar />
          <Routes>
            <Route path='/' element={<Wallets />} />
            <Route path='/glossary' element={<Glossary />} />
            <Route path='/about' element={<About />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
