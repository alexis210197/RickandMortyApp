import React from 'react'
import "../styles/listUl.css"
const FilterList = ({suggestedList, setSearchInput}) => {

    const handleClick = id => setSearchInput(id)
        
    

  return (
    <ul className='list__ul'>
        {
        suggestedList?.map(location =>(
            <li className='list__li' onClick={()=>handleClick(location.id)} key=
            {location.id}>{location.name}</li>
        ))
        }
    </ul>
  )
}

export default FilterList