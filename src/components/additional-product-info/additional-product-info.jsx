import React from 'react';
import PropTypes from 'prop-types';
import ProductProp from '../prop-validation/product.prop';
import styles from './additional-product-info.module.scss';
import {nanoid} from 'nanoid';
import TechInfo from '../product-tech-info/product-tech-info';

function AdditionalProductInfo (props) {
  const {tabs, product} = props;

  return (
    <div className={styles['additional-info']}>
      <nav className={styles['additional-info__nav']}>
        <ul className={styles['additional-info__nav-list']}>
          {
            tabs.map((tab) => (
              <li className={styles['additional-info__nav-item']} key={nanoid()}>
                <a href="#" className={styles['additional-info__nav-link']}>
                  {tab}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      <TechInfo product={product} />
    </div>
  );
}

AdditionalProductInfo.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  product: ProductProp,
};

export default AdditionalProductInfo;
