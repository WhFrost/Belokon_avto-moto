import React from 'react';
import PropTypes from 'prop-types';
import styles from './additional-product-info.module.scss';
import {nanoid} from 'nanoid';

function AdditionalProductInfo (props) {
  const {tabs} = props;

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
    </div>
  );
}

AdditionalProductInfo.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
};

export default AdditionalProductInfo;
