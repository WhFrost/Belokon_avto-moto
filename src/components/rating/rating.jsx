import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import Star from '../star/star';
import {STARS_COUNT, StarsFillColor} from '../../const';

function Rating (props) {
  const {rating} = props;

  return (
    <div>
      {
        new Array(STARS_COUNT).fill('').map((item) => (
          <Star key={nanoid()} fill={
            item <= rating - 1
              ? StarsFillColor.ACTIVE
              : StarsFillColor.INACTIVE
          }
          />
        ))
      }
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
