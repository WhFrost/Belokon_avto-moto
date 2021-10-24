import React from 'react';
import styles from './slider.module.scss';
import Button from '../button/button';
import firstSlideStandart from '../../assets/img/desktop-slide-1-1x.jpg';
import firstSlideRetina from '../../assets/img/desktop-slide-1-2x.jpg';

function Slider () {
  const slideDescription = '';

  return (
    <div className={styles['slider']}>
      <div className={styles['slider__active-slide-container']}>
        <img
          srcSet={`${firstSlideStandart} 1x, ${firstSlideRetina} 2x`}
          alt={slideDescription}
        />
      </div>
      <div className={styles['slider__controls']}>
        <Button mod={'button--left'}/>
        <ul className={styles['slider__list']}>
          <li className={styles['slider__item']}>
            <img src={firstSlideStandart} alt={slideDescription} />
          </li>
          <li className={styles['slider__item']}>
            <img src={firstSlideStandart} alt={slideDescription} />
          </li>
          <li className={styles['slider__item']}>
            <img src={firstSlideStandart} alt={slideDescription} />
          </li>
        </ul>
        <Button mod={'button--right'}/>
      </div>
    </div>
  );
}

export default Slider;
