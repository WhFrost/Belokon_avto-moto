import React from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.scss';
import {nanoid} from 'nanoid';
import Button from '../button/button';

function Slider (props) {
  const {photos} = props;
  const {
    srcSlide,
    srcSlideRetina,
    alt,
  } = photos[0];

  return (
    <div className={styles['slider']}>
      <div className={styles['slider__active-slide-container']}>
        <img
          srcSet={`${srcSlide} 1x, ${srcSlideRetina} 2x`}
          alt={alt}
        />
      </div>
      <div className={styles['slider__controls']}>
        <Button mod={'button--left'}/>
        <ul className={styles['slider__list']}>

          {
            photos.map((photo) => (
              <li className={styles['slider__item']} key={nanoid()}>
                <img
                  srcSet={`${photo.srcPreviewSlide} 1x, ${photo.srcPreviewSlideRetina} 2x`}
                  alt={photo.alt}
                />
              </li>),
            )
          }
        </ul>
        <Button mod={'button--right'}/>
      </div>
    </div>
  );
}

Slider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    srcSlide: PropTypes.string,
    srcSlideRetina: PropTypes.string,
    srcPreviewSlide: PropTypes.string,
    srcPreviewSlideRetina: PropTypes.string,
    alt: PropTypes.string,
  })),
};

export default Slider;
