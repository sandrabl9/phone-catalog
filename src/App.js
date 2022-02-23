import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import PhoneListContainer from './components/PhoneListContainer'; 


function App() {

  const [phones, setPhones] = useState([]);

  const initialUrl = "http://localhost:3001/api/phones/"

  const fetchPhones = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPhones(data))
    .catch(error => console.log(error))

  };

  useEffect(() => {
    fetchPhones(initialUrl);

  }, []);

  return (
    <div>
    <Navbar/>

    <PhoneListContainer phones={phones} />

    </div>
  );
}

export default App;
