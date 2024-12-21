import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;