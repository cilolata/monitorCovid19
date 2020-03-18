import React from 'react';
import Helmet from 'react-helmet'
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Noticias from './pages/Noticias';
import Footer from './pages/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Helmet title="monitor covid-19" />
      <Header />
      <div className="main">
      <Sidebar />
      <Noticias />
      </div>
      <Footer />
    </div>
  );
}

export default App;
