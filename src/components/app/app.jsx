import React from 'react';
import PropTypes from 'prop-types';
import styles from './app.module.scss';
import Header from '../header/header';
import Product from '../product/product';
import Footer from '../footer/footer';
import {HEADER_NAV_ITEMS} from '../../const';
import {product} from '../../mock/product';
import {FOOTER_NAV_ITEMS} from '../../const';
import {connect} from 'react-redux';
import {getPopupViewStatus} from '../../store/selectors';
import ReviewPopup from '../review-popup/review-popup';

function App(props) {
  const {viewStatus} = props;

  return (
    <>
      <Header headerNavItems = {HEADER_NAV_ITEMS}/>
      <main>
        <h1 className={styles['visually-hidden']}>Avto-Moto Марпех 11</h1>
        <Product product={product}/>
        {viewStatus && <ReviewPopup />}
      </main>
      <Footer footerNavItems = {FOOTER_NAV_ITEMS} />
    </>
  );
}

App.propTypes = {
  viewStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  viewStatus: getPopupViewStatus(state),
});

export default connect(mapStateToProps, null)(App);
