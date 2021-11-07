import React from 'react';
import PropTypes from 'prop-types';
import styles from './reviews.module.scss';
import ReviewProp from '../prop-validation/review.prop';
import Review from '../review/review';
import Button from '../button/button';
import {nanoid} from 'nanoid';

function Reviews (props) {
  const {reviews} = props;

  return (
    <div className={styles['reviews']}>
      <Button text={'Оставить отзыв'} mod={'button--secondary'}/>
      <ul className={styles['reviews__list']}>
        {
          reviews.map((review) => (
            <Review key={nanoid()} review={review}/>
          ))
        }
      </ul>

    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewProp),
};

export default Reviews;
