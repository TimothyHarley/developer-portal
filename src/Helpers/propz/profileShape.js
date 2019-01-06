import PropTypes from 'prop-types';

const profileShape = PropTypes.shape({
  avatar_url: PropTypes.string,
  bio: PropTypes.string,
  blog: PropTypes.string,
  company: PropTypes.string,
  created_at: PropTypes.string,
  email: PropTypes.string,
  events_url: PropTypes.string,
  followers: PropTypes.number,
  followers_url: PropTypes.string,
  following: PropTypes.number,
  following_url: PropTypes.string,
  gists_url: PropTypes.string,
  gravatar_id: PropTypes.string,
  hireable: PropTypes.bool,
  login: PropTypes.string,
  name: PropTypes.string,
  node_id: PropTypes.string,
  orginization_url: PropTypes.string,
  public_gists: PropTypes.number,
  public_repos: PropTypes.number,
  received_events_url: PropTypes.string,
  repos_url: PropTypes.string,
  site_admin: PropTypes.bool,
  starred_url: PropTypes.string,
  subscriptions_url: PropTypes.string,
  type: PropTypes.string,
  updated_at: PropTypes.string,
  url: PropTypes.string,
});

export default profileShape;
