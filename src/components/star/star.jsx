import React from 'react';
import PropTypes from 'prop-types';
import {StarsFillColor, StarsSizes} from '../../const';

function Star (props) {
  const {
    fill = StarsFillColor.INACTIVE,
    width = StarsSizes.WIDTH_SMALL,
    height = StarsSizes.HEIGHT_SMALL,
  } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill={fill} fillOpacity="0.7"/>
    </svg>
  );
}

Star.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Star;
