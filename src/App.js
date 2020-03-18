import React from 'react';
import Helmet from 'react-helmet'
import Header from './pages/header';
import Sidebar from './pages/sidebar';
import Noticias from './pages/noticias';
import Footer from './pages/footer';
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
