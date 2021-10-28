import React from 'react';
import ProductProp from '../prop-validation/product.prop';
import styles from './product-info.module.scss';
import MainFeatures from '../main-features/main-features';
import Button from '../button/button';

function ProductInfo (props) {
  const {product} = props;
  const {productName, newPrice, oldPrice, mainFeatures} = product;
  return (
    <div className={styles['product-card']}>
      <h1 className={styles['product-card__title']}>
        {productName}
      </h1>
      <MainFeatures mainFeatures={mainFeatures}/>
      <div className={styles['product-card__price-wrapper']}>
        <span className={styles['product-card__new-price']}>{newPrice}</span>
        <span className={styles['product-card__old-price']}>{oldPrice}</span>
      </div>
      <div className={styles['product-card__button-wrapper']}>
        <Button text='оставить заявку' mod='button--primary'/>
        <Button text='В КРЕДИТ ОТ 11 000 ₽' mod='button--secondary'/>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: ProductProp,
};

export default ProductInfo;
