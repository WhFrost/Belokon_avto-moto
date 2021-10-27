import React from 'react';
import styles from './product-info.module.scss';
import MainFeatures from '../main-features/main-features';
import Button from '../button/button';

function ProductInfo () {
  return (
    <div className={styles['product-card']}>
      <h1 className={styles['product-card__title']}>
        Марпех 11
      </h1>
      <MainFeatures />
      <div className={styles['product-card__price-wrapper']}>
        <span className={styles['product-card__new-price']}>2 300 000 ₽</span>
        <span className={styles['product-card__old-price']}>2 400 000 ₽</span>
      </div>
      <div className={styles['product-card__button-wrapper']}>
        <Button text='оставить заявку' mod='button--primary'/>
        <Button text='В КРЕДИТ ОТ 11 000 ₽' mod='button--secondary'/>
      </div>
    </div>
  );
}

export default ProductInfo;
