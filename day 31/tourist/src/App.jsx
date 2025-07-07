import React from 'react'
import TouristPlace from './Components/TouristPlace';
import goa from './images/goa.avif'
import manali from './images/manali.avif'
import kerala from './images/kerala.avif'
import jaipur from './images/jaipur.avif'
import './App.css'
const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: goa,
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: manali,
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: kerala,
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: jaipur,
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];

const App = () => {
  return (
    <div className='card'>
      {
        touristPlaces.map((x)=>(
          <TouristPlace place={x.placeName} desc={x.desc} img={x.img} visit={x.whenToVisit} ratings={x.ratings} price={x.price} />
        ))
      }
      {/* <TouristPlace/> */}
    </div>
  )
}

export default App