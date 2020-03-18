import React from "react";
import Helmet from "react-helmet";
import Header from "./pages/header";
import Sidebar from "./pages/Sidebar";
import Noticias from "./pages/noticias";
import Footer from "./pages/footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Helmet title="monitor covid-19">
        <meta property="og:site_name" content="Monitor Covid19" />
        <meta
          property="og:title"
          content="Monitor do Covid19 com dados estatísticos da OMS além de notícias"
        />
        <meta property="og:image" content="covid.jpg"></meta>
        <meta property="og:type" content="article" />
      </Helmet>
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
