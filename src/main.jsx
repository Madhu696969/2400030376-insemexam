import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './Product'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>}/>
    </Routes>

  </Router>
  
)
