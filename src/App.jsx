import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Food_item from './component/Food_item';
import Restaurant_1_item from './component/Restaurant_1_item';
import Restaurant_2_item from './component/Restaurant_2_item';
import Info from './component/Info';
import Footer from './component/Footer';
import Login from './component/Login';
import { createRoot } from "react-dom/client";
import Header2 from './component/Header2';


function App() {
  const [showHeader2, setShowHeader2] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 1200; 

    if (scrollY > threshold) {
      setShowHeader2(true);
    } else {
      setShowHeader2(false);
    }
  };
  return (
    <>
      {showHeader2 ? <Header2 /> : <Header />}
      <Banner />
      <Food_item />
      <Restaurant_1_item />
      <Restaurant_2_item />
      <Info />
      <Footer />
    </>
  );
}

export default App;
