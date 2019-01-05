import PropTypes from 'prop-types';

const blogsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default blogsShape;
