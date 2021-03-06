import React from 'react';
import ProductProp from '../prop-validation/product.prop';
import styles from './product.module.scss';
import globalStyles from '../app/app.module.scss';
import Slider from '../slider/slider';
import ProductInfo from '../product-info/product-info';
import AdditionalProductInfo from '../additional-product-info/additional-product-info';

function Product (props) {
  const {product} = props;
  const {photos} = product;

  return (
    <section className={styles['product']}>
      <div className={`${styles['product__wrapper']} ${globalStyles['container']}`}>
        <Slider photos={photos}/>
        <ProductInfo product={product}/>
        <AdditionalProductInfo product={product}/>
      </div>
    </section>
  );
}

Product.propTypes = {
  product: ProductProp,
};


export default Product;
