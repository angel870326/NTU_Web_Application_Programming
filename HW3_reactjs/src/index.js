import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './style.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Artwork from './Artwork';
import Video from './Video';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Artwork />
    <Video />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
