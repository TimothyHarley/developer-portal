import axios from 'axios';

const getUserInfo = () => axios.get('http://api.github.com/users/TimothyHarley');

export default getUserInfo;
