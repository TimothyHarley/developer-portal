import PropTypes from 'prop-types';

const profileShape = PropTypes.shape({
  config: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired,
  request: PropTypes.object.isRequired,
  status: PropTypes.number.isRequired,
  statusText: PropTypes.string.isRequired,
});

export default profileShape;
