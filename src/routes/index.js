
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from '../App';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);



const Rotas = () => (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
  </Routes>
</BrowserRouter>
);

export default Rotas;