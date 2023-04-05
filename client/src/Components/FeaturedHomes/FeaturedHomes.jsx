import React from 'react';
import './FeaturedHomes.scss';

const FeaturedHomes = () => {
  return (
    <div className='featuredHomes'>
      <div className='featuredHomesItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt=''
          className='featuredHomesImg'
        />
        <span className='featuredHomesName'>Aparthotel Stare Miasto</span>
        <span className='featuredHomesCity'>Old Town, Poland, Kraków</span>
        <span className='featuredHomesPrice'>Starting from $100</span>
        <div className='featuredHomesRating'>
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='featuredHomesItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1'
          alt=''
          className='featuredHomesImg'
        />
        <span className='featuredHomesName'>7Seasons Apartments Budapest</span>
        <span className='featuredHomesCity'>06. Terézváros, Hungary, Budapest</span>
        <span className='featuredHomesPrice'>Starting from $100</span>
        <div className='featuredHomesRating'>
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='featuredHomesItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1'
          alt=''
          className='featuredHomesImg'
        />
        <span className='featuredHomesName'>Oriente Palace Apartments</span>
        <span className='featuredHomesCity'>Madrid City Center, Spain, Madrid</span>
        <span className='featuredHomesPrice'>Starting from $65</span>
        <div className='featuredHomesRating'>
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='featuredHomesItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1'
          alt=''
          className='featuredHomesImg'
        />
        <span className='featuredHomesName'>Cheval Three Quays at The Tower of London</span>
        <span className='featuredHomesCity'>City of London, United Kingdom, London</span>
        <span className='featuredHomesPrice'>Starting from $1000</span>
        <div className='featuredHomesRating'>
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHomes;
