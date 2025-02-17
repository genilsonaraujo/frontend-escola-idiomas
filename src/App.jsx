import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './componentes/ListaProduto';
import ListaSaida from './componentes/ListaSaida';
import Fornecedor from './componentes/Fornecedor';
import Contato from './componentes/Contato';
import Home from './componentes/Home'; // Home já com os cards
import Navbar from './componentes/Navbar.jsx';
import Login from './componentes/login.jsx';
import ProtectedRoute from './componentes/ProtectedRoute';
import Dashboard from './componentes/dashboard.jsx'; 
import CurvaABCDashboard from './componentes/CurvaABCDashboard.jsx';
import PortalAluno from './componentes/PortalAluno.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página inicial com os cards */}
          
          <Route path="/portal" element={<PortalAluno />} />

          <Route path="/produtos" element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          } />
          <Route path="/saidas" element={
            <ProtectedRoute>
              <ListaSaida />
            </ProtectedRoute>
          } />
          <Route path="/fornecedor" element={<Fornecedor />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

