import PropTypes from 'prop-types';

export default PropTypes.shape({
  author: PropTypes.string,
  advantages: PropTypes.string,
  disadvantages: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
});
