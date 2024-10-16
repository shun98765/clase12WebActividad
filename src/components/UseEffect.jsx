import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  // Se define como un arreglo ya que es un objeto "[]"
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Se llama al objeto
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type/3');
        const result = await response.json();
        setData(result.pokemon);
      } catch (error) {
        console.error('ERROR AL CARGAR LOS DATOS: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <hr />
      <div>UseEffect</div>
      <h1>Datos Obtenidos:</h1>
      <ul>
        {data.map((item) => (
          <li>
            <strong>Nombre: {item.pokemon.name}</strong>
            <p>Url: {item.pokemon.url}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffect;
