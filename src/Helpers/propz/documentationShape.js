import PropTypes from 'prop-types';

const documentationsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default documentationsShape;
