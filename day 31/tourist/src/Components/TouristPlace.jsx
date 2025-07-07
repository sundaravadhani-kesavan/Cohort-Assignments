import React from 'react'

const TouristPlace = ({place, desc, img, visit, ratings, price}) => {
  return (
    <div className='container'>
     <div className="innerContainer">
       <img src={img} alt="" className='card-img'/>
       {visit=="Winter"?<a className='visitIn winter'>Visit in {visit}</a>:<a className='visitIn summer'>Visit in {visit}</a>}
        
        {price<=12000?<a className='priceType cheap'>Cheaper</a>:
        <a className='priceType expense'>Expensive</a>}
     
     </div>
     <div className="content">
        <h3 className='mb'>{place}</h3>
        <p className='mb'>{desc}</p>
        <a className='rating'>{ratings}*</a>
     </div>
    </div>
  )
}

export default TouristPlace