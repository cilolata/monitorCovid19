import React from 'react';
import './App.css';
import api from './services/api';
import Main from './pages/main';
import Noticias from './pages/noticias';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Main />
      <Noticias />
      <div className="footer">
      <Footer />

      </div>
    </div>
  );
}

export default App;
