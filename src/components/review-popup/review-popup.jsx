import React from 'react';
import styles from './review-popup.module.scss';
import globalStyles from '../app/app.module.scss';
import Rating from '../rating/rating';
import Button from '../button/button';

function ReviewPopup () {
  return (
    <div className={styles['overlay']}>
      <div className={styles['popup']}>
        <h3 className={styles['popup__title']}>
          Оставить отзыв
        </h3>
        <Button mod={'button--close'} />
        <form className={`${styles['popup__form']} ${styles['form']}`} action="">
          <div className={styles['form__fields-wrapper']}>
            <div className={`${styles['form__field']} ${styles['form__field--name']}`}>
              <label htmlFor="name" className={globalStyles['visually-hidden']}>
                Введите ваше имя
              </label>
              <input
                type="text"
                className={`${styles['form__input']} ${styles['form__input--name']}`}
                id="name"
                placeholder="Имя"
                required
                autoFocus
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
              />
            </div>
            <div className={styles['form__rating']}>
              <span className={styles['form__rating--view']}>
                Оцените товар:
              </span>
              <Rating />
            </div>
            <div className={`${styles['form__field']} ${styles['form__field--comment']}`}>
              <label htmlFor="comment"  className={globalStyles['visually-hidden']}>
                Оставьте ваш комментарий
              </label>
              <textarea
                type="text"
                className={`${styles['form__input']} ${styles['form__input--comment']}`}
                id="comment"
                placeholder="Комментарий"
                required
              />
            </div>
          </div>
          <Button text={'Оставить отзыв'} mod='button--primary' type='submit' />
        </form>
      </div>
    </div>
  );
}

export default ReviewPopup;
