import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import styles from './main-features.module.scss';

function MainFeatures (props) {
  const {mainFeatures} = props;

  return (
    <ul className={styles['main-features__list']}>

      {
        mainFeatures.map((feature) => (
          <li
            className={`${styles['main-features__item']} ${styles[`main-features__item--${feature.featureType}`]}`}
            key={nanoid()}
          >
            {feature.value}
          </li>
        ))
      }

    </ul>
  );
}

MainFeatures.propTypes = {
  mainFeatures: PropTypes.arrayOf(PropTypes.shape({
    featureType: PropTypes.string,
    value: PropTypes.string,
  })),
};

export default MainFeatures;
