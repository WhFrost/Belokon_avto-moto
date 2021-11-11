import React from 'react';
import styles from './product-tech-info.module.scss';
import ProductProp from '../prop-validation/product.prop';
import {nanoid} from 'nanoid';

function ProductTechInfo (props) {
  const {product} = props;
  const {techDetails} = product;

  return (
    <div className={styles['tech-details']}>
      <dl className={styles['tech-details__list']}>
        {
          techDetails.map(({name, value}) => (
            <div className={styles['tech-details__item']} key={nanoid()}>
              <dt className={styles['tech-details__name']}>
                {name}
              </dt>
              <dd className={styles['tech-details__value']}>
                {value}
              </dd>
            </div>
          ))
        }
      </dl>
    </div>
  );
}

ProductTechInfo.propTypes = {
  product: ProductProp,
};

export default ProductTechInfo;
