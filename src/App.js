import {useState} from 'react';
import './App.css';

function App() {
  const [elevation, setElevation] = useState(0);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const apiKey = '';
  //paste your google elevation API key into this string

  const getElev = () => {
    fetch('https://maps.googleapis.com/maps/api/elevation/json?locations='+lat+','+long+'&key='+apiKey)
    .then(response => response.json())
    .then(data => setElevation(Math.round(data.results[0].elevation)))
    .catch(() => setElevation(0))
  }

  return (
    <div className="App">
        <p>This location's elevation is:</p>
        <h1>{elevation===0 ? 'Please enter valid co-ordinates' : elevation+'m'}</h1>
        <div>
          <div>
            <p>Latitude</p>
            <input onChange={event => setLat(event.target.value)} />
          </div>
          <div>
            <p>Longitude</p>
            <input onChange={event => setLong(event.target.value)} />
          </div>
        </div>
        <button onClick={() => getElev()}>Get elevation</button>
    </div>
  );
}

export default App;
