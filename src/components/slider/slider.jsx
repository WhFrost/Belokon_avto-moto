import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.scss';
import {nanoid} from 'nanoid';
import Button from '../button/button';

function Slider (props) {
  const {photos} = props;
  const [activeSlide, setActiveSlide] = useState(photos[0]);
  const {
    srcSlide,
    srcSlideRetina,
    alt,
  } = activeSlide;

  return (
    <div className={styles['slider']}>
      <div className={styles['slider__active-slide-container']}>
        <img
          srcSet={`${srcSlide} 1x, ${srcSlideRetina} 2x`}
          alt={alt}
        />
      </div>
      <div className={styles['slider__controls']}>
        <Button
          mod={'button--left'}
          onClick={() => {
            const currentIndex = photos.indexOf(activeSlide);
            setActiveSlide(
              currentIndex === 0 ? photos[currentIndex] : photos[currentIndex - 1],
            );
          }}
          disabled={photos.indexOf(activeSlide) === 0}
        />
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
        <Button
          mod={'button--right'}
          onClick={() => {
            const currentIndex = photos.indexOf(activeSlide);
            setActiveSlide(
              currentIndex === photos.length - 1 ? photos[currentIndex] : photos[currentIndex + 1],
            );
          }}
          disabled={photos.indexOf(activeSlide) === photos.length - 1}
        />
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
