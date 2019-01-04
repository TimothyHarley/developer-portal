import axios from 'axios';
import apiKeys from '../apiKeys';

const fireBase = apiKeys.firebaseConfig.databaseURL;

// ?orderBy="uid"&equalTo="${uid}"

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${fireBase}/podcasts.json`)
    .then((res) => {
      const podcasts = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          podcasts.push(res.data[key]);
        });
      }
      resolve(podcasts);
    })
    .catch(err => reject(err));
});

export default getRequest;
