import axios from 'axios';
import moment from 'moment';
import apiKeys from '../apiKeys';

const clientId = apiKeys.githubApi.client_id;
const clientSecret = apiKeys.githubApi.client_secret;
// const githubUser = 'stuff goes here';

const getUserInfo = () => axios.get(`http://api.github.com/users/TimothyHarley?client_id=${clientId}&client_secret=${clientSecret}`);

const getUserEvents = () => new Promise((resolve, reject) => {
  axios.get('http://api.github.com/users/TimothyHarley/events/public')
    .then((result) => {
      let totalCommits = 0;
      const eventFilter = result.data.filter(
        event => event.type === 'PushEvent'
        && moment(event.created_at).isSameOrAfter(moment().subtract(5, 'days')),
      );
      eventFilter.forEach((event) => {
        totalCommits += event.payload.commits.length;
      });
      resolve(totalCommits);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getUserInfo, getUserEvents };
