import React from 'react';
import PropTypes from 'prop-types';
import ProductProp from '../prop-validation/product.prop';
import ReviewProp from '../prop-validation/review.prop';
import styles from './product.module.scss';
import globalStyles from '../app/app.module.scss';
import Slider from '../slider/slider';
import ProductInfo from '../product-info/product-info';
import AdditionalProductInfo from '../additional-product-info/additional-product-info';

function ProductCard (props) {
  const {product, reviews} = props;
  const {photos} = product;

  return (
    <section className={styles['product']}>
      <div className={`${styles['product__wrapper']} ${globalStyles['container']}`}>
        <Slider photos={photos}/>
        <ProductInfo product={product}/>
        <AdditionalProductInfo product={product} reviews={reviews}/>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  product: ProductProp,
  reviews: PropTypes.arrayOf(ReviewProp),
};


export default ProductCard;
