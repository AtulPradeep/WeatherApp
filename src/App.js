import React, { useState , useEffect } from 'react';
import './App.css';

const api = {
  key: "5085bd714496c68fd9b8f64f43b8b1c1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
const[city,setCity] = useState('');
const[temp,setTemp] = useState("");
const[feels,setfeels] = useState("");
const [query, setQuery] = useState('');
const [input,setInput] =useState("");

const getData =async (qs="hannover")=>{
  const response = await fetch(`${api.base}weather?q=${qs}&units=metric&APPID=${api.key}`);
  const weathers = await response.json();
  const city = weathers.name;
  const temp = weathers.main.temp;
  const fe = weathers.main.feels_like;
  console.log(weathers);


  setCity(city);
  setTemp(temp);
  setfeels(fe);
}
useEffect(() => {
  getData();
 
  },[]);

  const handlesubmit =(e)=>{
    e.preventDefault();
    setQuery(input);
    let qs = input;
    getData(qs);
  }
const onChange =(e)=>{
  e.preventDefault();
  setInput(e.target.value);
}

 return (
    <div className="App">
      <div className ="weather-box">
     <h1>{city}</h1>
     <h2>{Math.round(temp)}° </h2>

     <h6>Feels like : {Math.round(feels)}° </h6>
     </div>
     <form onSubmit ={handlesubmit} >
     <input 
            type="text"
            className="search-bar"
            placeholder="Enter city name"
            onChange={onChange}
            value={input}
            
         
         />
         
    </form>


     
  </div>
  );
  }
  

export default App;
