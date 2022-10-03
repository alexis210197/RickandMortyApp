import React from 'react'
import "../styles/locationInfo.css"
const LocationInfo = ({location}) => {



  return (
    <div className='card__info'>
        <ul className='card__info-ul col'>
            <li><h2 className='card__info-name'><span>Name: </span>{location?.name}</h2></li>
            <li className='card__info-li col' ><span>Type: </span>{location?.type}</li>
            <li className='card__info-li col'><span>Dimension: </span>{location?.dimension}</li>
            <li className='card__info-li col'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo