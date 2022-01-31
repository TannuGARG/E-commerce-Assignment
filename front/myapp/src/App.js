import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Productview from './components/post/post';
import Cartview from './components/Addtocart/cart';
function App() {
  return (
    <div className="wrapper">
    
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Productview />} />
          <Route path="/addtocart" element={<Cartview />} />

        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;