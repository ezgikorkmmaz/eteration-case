import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div className="App"> 
    <Header />
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/product/:id/" element={<ProductPage/>}/>
        </Routes>
    </Router>
      </div>
  );
}

export default App;
