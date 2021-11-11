import React from 'react';
import PropTypes from 'prop-types';
import styles from './reviews.module.scss';
import ReviewProp from '../prop-validation/review.prop';
import Review from '../review/review';
import Button from '../button/button';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {getReviews} from '../../store/selectors';
import {ActionCreator} from '../../store/action';

function Reviews (props) {
  const {reviews, onAddReviewButtonClick} = props;

  const handleAddReviewButtonClick = () => {
    onAddReviewButtonClick(true);
  };

  return (
    <div className={styles['reviews']}>
      <Button
        text={'Оставить отзыв'}
        mod={'button--secondary'}
        onClick={handleAddReviewButtonClick}
      />
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
  onAddReviewButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviewButtonClick(status) {
    dispatch(ActionCreator.setPopupViewStatus(status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
