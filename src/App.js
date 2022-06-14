import './App.css';
import {Post} from './componentes/Post';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://dummyapi.io/data/v1';
const APP_ID = '62a8b8a72d4b79dca364d318';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/post`, {
          headers: {
              'Content-Type': 'application/json',
              'app-id' : APP_ID
          },
        })
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            setIsLoaded(true);
            setItems(data);
        })
        .catch(err => {
          setIsLoaded(true);
          setError(error);
        })
  }, [])
  
  if (error) {
      return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
      return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>El mejor Blog para tus mascotas</h1>
            {items && items.data.map((item,id) => {
              return (
                <Post
                id = {id}
                autor = {item.owner.firstName + " " +item.owner.lastName}
                fecha = {item.publishDate}
                imagen = {item.image} 
                tags = {item.tags}
                texto ={item.text}/>
              )   
            })}
        </div>
      </div> 
    );
  }
}

export default App;
