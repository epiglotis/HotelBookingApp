import "./FeaturedCities.scss"

import React from 'react'

function FeaturedCities() {
  return (
    <div className="featuredCities">
        <div className="featuredItem">
           <img src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o=" alt="" className="featuredImg" />
           <div className="featuredTitles">
            <h1>Roma</h1>
            <h2>123 Properties</h2>
           </div>
        </div>
        <div className="featuredItem">
           <img src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=" alt="" className="featuredImg" />
           <div className="featuredTitles">
            <h1>Paris</h1>
            <h2>532 Properties</h2>
           </div>
        </div>
        <div className="featuredItem">
           <img src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o=" alt="" className="featuredImg" />
           <div className="featuredTitles">
            <h1>Amsterdam</h1>
            <h2>533 Properties</h2>
           </div>
        </div>
    </div>
  )
}

export default FeaturedCities