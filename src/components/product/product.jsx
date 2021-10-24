import React from 'react';
import styles from './product.module.scss';
import globalStyles from '../app/app.module.scss';
import Slider from '../slider/slider';

function ProductCard () {
  return (
    <section className={styles['product']}>
      <div className={`${styles['product__wrapper']} ${globalStyles['container']}`}>
        <Slider />
      </div>
    </section>
  );
}

export default ProductCard;
