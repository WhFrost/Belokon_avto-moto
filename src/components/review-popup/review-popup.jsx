import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './review-popup.module.scss';
import globalStyles from '../app/app.module.scss';
import Rating from '../rating/rating';
import Button from '../button/button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  getReviewAuthor,
  getAdvantages,
  getDisadvantages,
  getRating,
  getComment
} from '../../store/selectors';

function ReviewPopup (props) {
  const {
    name,
    advantages,
    disadvantages,
    popupRating,
    comment,
    onNameChange,
    onAdvantagesChange,
    onDisadvantagesChange,
    onRatingChange,
    onCommentChange,
    onReviewSubmit,
    onPopupClose,
  } = props;

  const [nameInputError, setNameInputError] = useState(false);
  const [commentInputError, setCommentInputError] = useState(false);

  const nameFormFieldClassNames = nameInputError
    ? `${styles['form__field']} ${styles['form__field--name']} ${styles['form__field--error']}`
    : `${styles['form__field']} ${styles['form__field--name']}`;
  const commentFormFieldClassNames = commentInputError
    ? `${styles['form__field']} ${styles['form__field--comment']} ${styles['form__field--error']}`
    : `${styles['form__field']} ${styles['form__field--comment']}`;

  const nameInputClassNames = nameInputError
    ? `${styles['form__input']} ${styles['form__input--name']} ${styles['form__input--error']}`
    : `${styles['form__input']} ${styles['form__input--name']}`;
  const commentInputClassNames = commentInputError
    ? `${styles['form__input']} ${styles['form__input--comment']} ${styles['form__input--error']}`
    : `${styles['form__input']} ${styles['form__input--comment']}`;

  const overlayRef = useRef(null);
  const popupRef  = useRef(null);

  const handleReviewSubmit = (evt) => {
    evt.preventDefault();
    setNameInputError(!name);
    setCommentInputError(!comment);
    if (name && comment) {
      const review = {
        name: name,
        advantages: advantages,
        disadvantages: disadvantages,
        rating: popupRating,
        comment: comment,
      };
      onReviewSubmit(review);
      localStorage.setItem('popupReviewData', JSON.stringify(review));
      onPopupClose();
    }
  };

  const handleKeyPressOnFirstInteractiveElement = (evt, elements) => {
    evt.preventDefault();
    if (evt.shiftKey && evt.key === 'Tab') {
      elements[elements.length - 1].focus();
    } else if (!evt.shiftKey && evt.key === 'Tab') {
      elements[1].focus();
    } else if (evt.key === 'Enter') {
      onPopupClose();
    }
  };

  const handleKeyPressOnLastInteractiveElement = (evt, elements) => {
    evt.preventDefault();
    if (!evt.shiftKey && evt.key === 'Tab') {
      elements[0].focus();
    } else if (evt.shiftKey && evt.key === 'Tab') {
      elements[elements.length - 2].focus();
    } else if (evt.key === 'Enter') {
      onPopupClose(evt);
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const closeOnOverlayClick = (evt) => {
      if (evt.target === overlay) {
        onPopupClose();
      }
    };
    const onPressEsc = (evt) => {
      if (evt.key === 'esc' || evt.key === 'Escape') {
        onPopupClose();
      }
    };

    overlay.addEventListener('click', closeOnOverlayClick);
    window.addEventListener('keydown', onPressEsc);
    return () => {
      overlay.removeEventListener('click', closeOnOverlayClick);
      window.removeEventListener('keydown', onPressEsc);
    };
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const popupReviewData = {
      name,
      advantages,
      disadvantages,
      popupRating,
      comment,
    };
    localStorage.setItem('popupReviewData', JSON.stringify(popupReviewData));
  }, [name, advantages, disadvantages, popupRating, comment]);

  useEffect(() => {
    const interactiveElements = popupRef.current.querySelectorAll(
      'button', 'input', 'textarea', '[tabindex]:not([tabindex=-1])');
    interactiveElements[0].addEventListener('keydown', (evt) =>
      handleKeyPressOnFirstInteractiveElement(evt, interactiveElements),
    );
    interactiveElements[interactiveElements.length - 1].addEventListener(
      'keydown',
      (evt) => handleKeyPressOnLastInteractiveElement(evt, interactiveElements),
    );
    return () => {
      interactiveElements[0].removeEventListener('keydown', (evt) =>
        handleKeyPressOnFirstInteractiveElement(evt, interactiveElements),
      );
      interactiveElements[interactiveElements.length - 1].removeEventListener(
        'keydown',
        (evt) => handleKeyPressOnLastInteractiveElement(evt, interactiveElements),
      );
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles['overlay']} ref={overlayRef}>
      <div className={styles['popup']} ref={popupRef}>
        <h3 className={styles['popup__title']}>
          Оставить отзыв
        </h3>
        <Button
          mod={'button--close'}
          onClick={onPopupClose}
        />
        <form className={`${styles['popup__form']} ${styles['form']}`} action="">
          <div className={styles['form__fields-wrapper']}>
            <div className={nameFormFieldClassNames}>
              <label htmlFor="name" className={globalStyles['visually-hidden']}>
                Введите ваше имя
              </label>
              <input
                type="text"
                className={nameInputClassNames}
                id="name"
                placeholder="Имя"
                required
                autoFocus
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className={styles['form__field']}>
              <label htmlFor="advantages"  className={globalStyles['visually-hidden']}>
                Достоинства модели
              </label>
              <input
                type="text"
                className={styles['form__input']}
                id="advantages"
                placeholder="Достоинства"
                value={advantages}
                onChange={onAdvantagesChange}
              />
            </div>
            <div className={styles['form__field']}>
              <label htmlFor="disadvantages"  className={globalStyles['visually-hidden']}>
                Недостатки модели
              </label>
              <input
                type="text"
                className={styles['form__input']}
                id="disadvantages"
                placeholder="Недостатки"
                value={disadvantages}
                onChange={onDisadvantagesChange}
              />
            </div>
            <div className={styles['form__rating']}>
              <span className={styles['form__rating--view']}>
                Оцените товар:
              </span>
              <Rating
                isChangeble
                rating={popupRating}
                onRatingChange={onRatingChange}
              />
            </div>
            <div className={commentFormFieldClassNames}>
              <label htmlFor="comment"  className={globalStyles['visually-hidden']}>
                Оставьте ваш комментарий
              </label>
              <textarea
                type="text"
                className={commentInputClassNames}
                id="comment"
                placeholder="Комментарий"
                required
                value={comment}
                onChange={onCommentChange}
              />
            </div>
          </div>
          <Button
            text={'Оставить отзыв'}
            mod='button--primary'
            type='submit'
            onClick={handleReviewSubmit}
          />
        </form>
      </div>
    </div>
  );
}

ReviewPopup.propTypes = {
  name: PropTypes.string,
  advantages: PropTypes.string,
  disadvantages: PropTypes.string,
  popupRating: PropTypes.number,
  comment: PropTypes.string,
  onNameChange: PropTypes.func,
  onAdvantagesChange: PropTypes.func,
  onDisadvantagesChange: PropTypes.func,
  onRatingChange: PropTypes.func,
  onCommentChange: PropTypes.func,
  onReviewSubmit: PropTypes.func,
  onPopupClose: PropTypes.func,
};

const mapStateToProps = (state) => ({
  name: getReviewAuthor(state),
  advantages: getAdvantages(state),
  disadvantages: getDisadvantages(state),
  popupRating: getRating(state),
  comment: getComment(state),
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange(evt) {
    dispatch(ActionCreator.setReviewAuthor(evt.target.value));
  },
  onAdvantagesChange(evt) {
    dispatch(ActionCreator.setAdvantages(evt.target.value));
  },
  onDisadvantagesChange(evt) {
    dispatch(ActionCreator.setDisadvantages(evt.target.value));
  },
  onRatingChange(rating) {
    dispatch(ActionCreator.setRating(rating));
  },
  onCommentChange(evt) {
    dispatch(ActionCreator.setComment(evt.target.value));
  },
  onReviewSubmit(data) {
    dispatch(ActionCreator.addReview(data));
    dispatch(ActionCreator.clearData());
  },
  onPopupClose() {
    dispatch(ActionCreator.setPopupViewStatus(false));
    dispatch(ActionCreator.clearData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPopup);
