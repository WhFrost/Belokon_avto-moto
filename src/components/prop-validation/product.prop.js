import PropTypes from 'prop-types';

export default PropTypes.shape({
  productName: PropTypes.string,
  newPrice: PropTypes.string,
  oldPrice: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    srcSlide: PropTypes.string,
    srcSlideRetina: PropTypes.string,
    srcPreviewSlide: PropTypes.string,
    srcPreviewSlideRetina: PropTypes.string,
    alt: PropTypes.string,
  })),
  mainFeatures: PropTypes.arrayOf(PropTypes.shape({
    featureType: PropTypes.string,
    value: PropTypes.string,
  })),
});
