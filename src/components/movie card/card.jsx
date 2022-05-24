/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './card.css';
import PropTypes from 'prop-types';

import Details from '../movie_details/Details';

const card = ({ term, poster, title, year }) => {
  const [data, setData] = useState(undefined);

  const [show, setShow] = useState(true);
  const handledetails = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);

    fetch(`http://www.omdbapi.com/?i=${term}&apikey=d31e74bc`)
      .then((response) => response.json())
      .then((dat) => {
        setData(dat);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    return setShow((prev) => !prev);
  };
  return show ? (
    <div className="card">
      <div className="card__container">
        <div className="card__items">
          <div>
            <img
              onClick={handledetails}
              src={poster === 'N/A' ? '' : poster}
              alt="movie poster"
            />
          </div>
          <p>Title: {title}</p>
          <p> Year: {year}</p>
        </div>
      </div>
    </div>
  ) : data ? (
    <Details
      title={data.Title}
      writer={data.Writer}
      country={data.Country}
      awards={data.Awards}
      released={data.Released}
      year={data.Year}
      click={handleClick}
    />
  ) : (
    <h1>Loading...</h1>
  );
};
card.propTypes = {
  term: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default card;
