import "./style.css";
import { useEffect, useState } from 'react'

function SearchWeather({ city, setCity, setWeather }) {

  const [input, setInput] = useState('')

  const handleClick = (e, input) => {
    e.preventDefault()
    setCity(input)
  }

  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
      .then((response) => response.json())
      .then((response) => setWeather(response.temperature))
      .catch((err) => console.log(err))
  }, [city])

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={(e) => handleClick(e, input)}>
          Search
        </button>
      </div>
    </div>
  );

}

export default SearchWeather;