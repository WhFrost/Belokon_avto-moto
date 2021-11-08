import React, {useState} from 'react';
import ProductProp from '../prop-validation/product.prop';
import styles from './additional-product-info.module.scss';
import {nanoid} from 'nanoid';
import TechInfo from '../product-tech-info/product-tech-info';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import {TabsName, CONTACTS} from '../../const';

function AdditionalProductInfo (props) {
  const {product} = props;
  const [activeTab, setActiveTab] = useState(TabsName.SPECIFICATIONS);
  const tabs = Object.values(TabsName);

  const getInfoByActiveTab = (tab) => {
    switch (tab) {
      case TabsName.SPECIFICATIONS:
        return (
          <TechInfo product={product} />
        );
      case TabsName.REVIEWS:
        return (
          <Reviews />
        );
      case TabsName.CONTACTS:
        return (
          <Contacts contacts={CONTACTS} />
        );
      default:
        return (
          <TechInfo product={product} />
        );
    }
  };

  return (
    <div className={styles['additional-info']}>
      <nav className={styles['additional-info__nav']}>
        <ul className={styles['additional-info__nav-list']}>
          {
            tabs.map((tab) => (
              <li className={styles['additional-info__nav-item']} key={nanoid()}>
                <a href="#"
                  className={
                    tab === activeTab
                      ? `${styles['additional-info__nav-link']} ${styles['additional-info__nav-link--active']}`
                      : styles['additional-info__nav-link']
                  }
                  data-additionalnav = {tab}
                  onClick={(evt) => setActiveTab(evt.target.dataset.additionalnav)}
                >
                  {tab}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      {getInfoByActiveTab(activeTab, product)}
    </div>
  );
}

AdditionalProductInfo.propTypes = {
  product: ProductProp,
};

export default AdditionalProductInfo;
