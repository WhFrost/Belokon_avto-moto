import React from 'react';
import styles from './main-features.module.scss';

function MainFeatures () {
  return (
    <ul className={styles['main-features__list']}>
      <li className={`${styles['main-features__item']} ${styles['main-features__item--fuel']}`}>
        бензин
      </li>
      <li className={`${styles['main-features__item']} ${styles['main-features__item--fuel']}`}>
        бензин
      </li>
    </ul>
  );
}

export default MainFeatures;
