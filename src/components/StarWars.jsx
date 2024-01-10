import React, { useState, useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const FilmsStarWars = () => {
  const [films, setFilms] = useState([]);
  const API_URL = 'https://www.omdbapi.com/?apikey=20d5dec8&s=star-wars';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Errore nella chiamata API');
        }

        const data = await response.json();

        
        if (data.Search) {
          setFilms(data.Search);
        } else {
          console.error('Dati non validi ricevuti dalla chiamata API:', data);
        }
      } catch (error) {
        console.error('Errore nella chiamata API:', error);
      }
    };

    fetchData();
  }, [API_URL]);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const renderCarouselItems = () => {
    const chunkedFilms = chunkArray(films, 6);

    return chunkedFilms.map((filmGroup, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex justify-content-start">
          {filmGroup.map((film, subIndex) => (
            <div key={subIndex} className="text-center">
              <Image src={film.Poster} alt={film.Title} fluid />
              <div className="mt-2">
                <h6 className='text-white'>{film.Title}</h6>
                <p className='text-white'>Anno di uscita: {film.Year}</p>
              </div>
            </div>
          ))}
        </div>
      </Carousel.Item>
    ));
  };

  return <Carousel>{renderCarouselItems()}</Carousel>;
};

export default FilmsStarWars;