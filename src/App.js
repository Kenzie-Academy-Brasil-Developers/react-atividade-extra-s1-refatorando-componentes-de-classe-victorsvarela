import { useState } from "react";
import "./App.css";
import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from './components/SearchWeather'

function App() {

  const [city, setCity] = useState('Curitiba')
  const [weather, setWeather] = useState('')


  return (
    <div className="App">
      <SearchWeather
        city={city}
        setCity={setCity}
        setWeather={setWeather}
      />
      <DisplayWeather
        city={city}
        weather={weather}
      />
    </div>
  )
}

export default App;