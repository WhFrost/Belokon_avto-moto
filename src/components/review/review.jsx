import React from 'react';
import ReviewProp from '../prop-validation/review.prop';
import styles from './review.module.scss';
import Rating from '../rating/rating';
import {TextualRating} from '../../const';

function Review (props) {
  const {review} = props;
  const {
    author,
    advantages,
    disadvantages,
    comment,
    rating,
    date,
  } = review;

  const getTextRating = (productRating) => {
    switch (productRating) {
      case 1:
        return TextualRating.BAD;
      case 2:
        return TextualRating.NORMAL;
      case 3:
        return TextualRating.GOOD;
      case 4:
        return TextualRating.VERY_GOOD;
      case 5:
        return TextualRating.AWESOME;
      default:
        break;
    }
  };

  return (
    <li className={styles['review__item']}>
      <blockquote className={styles['review__wrapper']}>
        <cite className={styles['review__author']}>
          {author}
        </cite>
        <dl className={styles['review__details-list']}>
          <div className={`${styles['review__details-item']} ${styles['review__details-item--advantages']}`}>
            <dt className={styles['review__details-name']}>
              Достоинства
            </dt>
            <dd className={styles['review__details-value']}>
              {advantages}
            </dd>
          </div>
          <div className={`${styles['review__details-item']} ${styles['review__details-item--disadvantages']}`}>
            <dt className={styles['review__details-name']}>
              Недостатки
            </dt>
            <dd className={styles['review__details-value']}>
              {disadvantages}
            </dd>
          </div>
          <div className={`${styles['review__details-item']} ${styles['review__details-item--comment']}`}>
            <dt className={styles['review__details-name']}>
            Комментарий
            </dt>
            <dd className={styles['review__details-value']}>
              {comment}
            </dd>
          </div>
        </dl>
        <div className={styles['review__rating']}>
          <div className={styles['review__star-rating']}>
            <Rating rating={rating} />
          </div>
          <span className={styles['review__text-rating']}>
            {getTextRating(rating)}
          </span>
        </div>
        <div className={styles['review__meta']}>
          <div className={styles['review__date']}>
            {date}
          </div>
          <span className={styles['review__answer']}>
            Ответить
          </span>
        </div>
      </blockquote>
    </li>
  );
}

Review.propTypes = {
  review: ReviewProp,
};

export default Review;
