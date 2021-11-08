import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './rating.module.scss';
import {nanoid} from 'nanoid';
import Star from '../star/star';
import {STARS_COUNT, StarsFillColor, StarsSizes} from '../../const';
import {connect} from 'react-redux';
import {getRating} from '../../store/selectors';
import {ActionCreator} from '../../store/action';

function Rating (props) {
  const {
    rating,
    popupRating,
    onRatingChange,
    isChangeble = false,
  } = props;

  const [hover, setHover] = useState(popupRating);

  const handleRatingButtonClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div className={styles['rating']}>
      {
        new Array(STARS_COUNT).fill('').map((item, index) =>
          isChangeble
            ?
            (
              <button
                key={nanoid()}
                type='button'
                className={styles['rating__item']}
                onClick={() => handleRatingButtonClick(index)}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(0)}
              >
                <Star
                  width={StarsSizes.WIDTH_BIG}
                  height={StarsSizes.HEIGHT_BIG}
                  fill={
                    index < hover || index <= popupRating - 1
                      ? StarsFillColor.ACTIVE
                      : StarsFillColor.INACTIVE
                  }
                />
              </button>
            )
            :
            (
              <Star key={nanoid()} fill={
                index <= rating - 1
                  ? StarsFillColor.ACTIVE
                  : StarsFillColor.INACTIVE
              }
              />),
        )
      }
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
  popupRating: PropTypes.number,
  onRatingChange: PropTypes.func,
  isChangeble: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  popupRating: getRating(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRatingChange(rating) {
    dispatch(ActionCreator.setRating(rating));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
