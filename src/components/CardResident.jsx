import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../styles/cardInfo.css"

const CardResident = ({url}) => {

    const [resident, setResident] = useState()

    useEffect(()=> {
        axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(resident);

  return (
    <div className='card'>
        <header className='card__header'>
            <div className='card__img'>
            <img src={resident?.image} alt="" />
            </div>
            <div className='card__container-status'>
                <div className='card__circle-status'></div>
                <span className='card__status'>{resident?.status}</span>
            </div>
        </header>
        <section className='card__body'>
            <h3 className='card__name'>{resident?.name}</h3>
            <ul className='card__list'>
                <li className='card__item'><span className='card__span'>Species: </span>{resident?.species}</li>
                <li className='card__item'><span className='card__span'>Origin: </span>{resident?.origin.name}</li>
                <li className='card__item'><span className='card__span'>Episodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </section>
    </div>
  )
}

export default CardResident