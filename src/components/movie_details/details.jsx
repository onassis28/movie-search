/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './details.css';

const Details = ({ title, year, released, awards, country, writer, click }) => {
  return (
    /* eslint-disable-next-line react/jsx-no-comment-textnodes */
    <div className="card__details">
      <div onClick={click} className="carddetails__container">
        <div className="carddetails__items">
          <p>Title: {title}</p>
          <p> Year: {year}</p>
          <p> Released: {released}</p>
          <p> Awards: {awards}</p>
          <p> Country: {country}</p>
          <p> Writer: {writer}</p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
  awards: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  click: PropTypes.string.isRequired,
};

export default Details;
