import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';
import FeaturedCities from '../../Components/FeaturedCities/FeaturedCities';
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedHomes from '../../Components/FeaturedHomes/FeaturedHomes';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <FeaturedCities/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedHomes/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
