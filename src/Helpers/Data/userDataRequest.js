import axios from 'axios';

const getUserInfo = () => axios.get('http://api.github.com/users/TimothyHarley');

const getUserEvents = () => axios.get('http://api.github.com/users/TimothyHarley/events/public');

export default { getUserInfo, getUserEvents };
