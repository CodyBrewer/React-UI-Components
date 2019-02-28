import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Footer from './components/FooterComponents/Footer';
import CardContainer from './components/CardComponents/CardContainer';
const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
