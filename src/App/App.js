import React from 'react';
import logo from '../logo.svg';
import './App.css';
import AddFacture from '../Components/AddFacture/AddFacture';
import FactureList from '../Components/FactureList/FactureList';
import { FactureProvider } from '../Context/FactureContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div className="factures-container">
      <FactureProvider>
      <AddFacture/>
      <FactureList/>
      </FactureProvider>
      </div>
    </div>
  );
}

export default App;
