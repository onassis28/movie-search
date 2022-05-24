/* eslint-disable no-unused-expressions */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import './header.css';
import { BsSearch } from 'react-icons/bs';
import Card from '../movie card/card';

const Header = () => {
  const [search, setSearch] = useState('avengers');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  /* const handleChange = (e) => setSearch(e.target.value); */
  const handleChange = (e) => {
    setSearch(e.target.value);
    const timeOut = setTimeout(() => {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=d31e74bc`)
        .then((response) => response.json())
        .then((dat) => {
          if (dat.Error) {
            throw Error('Cant find the movie with the search term ');
          } else {
            setError(null);
            setData(dat.Search);
            clearTimeout(timeOut);
          }
        })
        .catch((err) => setError(err.message));
    }, 2000);
  };

  const handleClick = (e) => {
    e.preventDefault();

    fetch(`http://www.omdbapi.com/?s=${search}&apikey=d31e74bc`)
      .then((response) => response.json())
      .then((dat) => {
        if (dat.Error) {
          throw Error('Cant find the movie with the search term ');
        }

        setError(null);
        setData(dat.Search);
      })
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=d31e74bc`)
      .then((response) => response.json())
      .then((dat) => {
        if (dat.Error) {
          throw Error('this is bad');
        }

        setData(dat.Search);
      });
  }, []);

  const dataRender = data.map((item) => {
    return (
      <Card
        key={item.imdbID}
        term={item.imdbID}
        year={item.Year}
        poster={item.Poster}
        title={item.Title}
      />
    );
  });

  return (
    <>
      <div className="header__container">
        <h1>Movie Search </h1>
        <div className="search__container">
          {' '}
          <i>
            <BsSearch className="icon__header" />
          </i>
          <input
            onChange={handleChange}
            className="input__header"
            type="text"
            placeholder="Search"
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      {error ? (
        <h1>Cant find the movie with the search term</h1>
      ) : (
        <section className="dataRender">{dataRender}</section>
      )}
    </>
  );
};

export default Header;
