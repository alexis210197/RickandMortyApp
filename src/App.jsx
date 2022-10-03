import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import ErrorScreen from "./components/ErrorScreen"

function App() {
  //Para guardar una locacion
  const [location, setLocation] = useState()
  //Para guardar informacion del input y hacer la peticion cuando se hace submit
  const [searchInput, setSearchInput] = useState("")
  //Para guardar las sugerencias de la api
  const [suggestedList, setSuggestedList] = useState()
  //Para indicar si hay error o no
  const [hasError, setHasError] = useState(false)
  

  useEffect(()=>{
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput
    }
     
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)})
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }


  const handleChangle = e => {
    if(e.target.value === ""){
      return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
    axios.get(URL)
    .then(res => setSuggestedList(res.data.results))
    .catch(err=> console.log(err))
  }
  
  

  return (
    <div className="App">
      <div className='header'>
        {/* <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video> */}
      <h1 className='header__title'>Rick And Morty</h1>
      <form onSubmit={handleSubmit}>
        <input 
        className='input'
        id="idLocation"
        placeholder='Enter another number from 1 to 126' 
        type="text" 
        onChange={handleChangle}
        />
        
        <FilterList 
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>
      </div>
      {
        hasError ?
        <ErrorScreen />
        :
        <>
      
      <LocationInfo 
      location = {location}
      />
      <div className='card-container'>
      {
        location?.residents.map(url =>(
          <CardResident 
          key={url}
          url = {url}
          />
        ))
      }
      </div>
      </>
    }
    </div>
  )
}

export default App
