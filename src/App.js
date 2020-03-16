import React from 'react';
import './App.css';
import Main from './pages/main';
import Noticias from './pages/noticias';
import Footer from './pages/footer';
import Header from './pages/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      <Main />
      <Noticias />
      </div>
      <Footer />
    </div>
  );
}

export default App;
