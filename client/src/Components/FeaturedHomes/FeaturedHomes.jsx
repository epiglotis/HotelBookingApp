import React from 'react';
import './FeaturedHomes.scss';
import useFetch from '../../Hooks/useFetch';

const FeaturedHomes = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className='featuredHomes'>
      {loading ? (
        'Loading'
      ) : (
        <>
          {data.map((item) => (
            <div className='featuredHomesItem' key={item._id}>
              <img
                src={item.photos[0]}
                alt=''
                className='featuredHomesImg'
              />
              <span className='featuredHomesName'>{item.name}</span>
              <span className='featuredHomesCity'>
              {item.city}
              </span>
              <span className='featuredHomesPrice'>Starting from {item.cheapestPrice}</span>
              {item.rating && <div className='featuredHomesRating'>
                <button>{data.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedHomes;
