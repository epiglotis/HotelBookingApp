import useFetch from '../../Hooks/useFetch';
import './FeaturedCities.scss';

import React from 'react';

function FeaturedCities() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  

  return (
    <div className='featuredCities'>
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className='featuredItem'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o='
              alt=''
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o='
              alt=''
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o='
              alt=''
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>London</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FeaturedCities;
