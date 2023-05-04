import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [temp, setTemp] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async() => {
        try {
            const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
            console.log(res)
            setLon(res.data.results[0].longitude)
            setLat(res.data.results[0].latitude)
           
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
  }, [city])

const handleSubmit = (e) => {
    e.preventDefault();
    
    const fetchTemp = async() => {
        try {
            const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true`)
            console.log("temp",res)
            setTemp(res.data.current_weather.temperature)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
 
   fetchTemp()
}

  return (
    <div>
      <form action=""  onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="sumbit">Go</button>
      </form>

      <div>
        {
            loading? <h3>please enter a city name</h3>
        :
        <h3> Temperature in {city} is {temp}  </h3>
        }
      </div>
    </div>
  );
};

export default Weather;
