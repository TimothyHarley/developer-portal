import axios from 'axios';
import apiKeys from '../apiKeys';

const fireBase = apiKeys.firebaseConfig.databaseURL;

// ?orderBy="uid"&equalTo="${uid}"

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${fireBase}/tutorials.json`)
    .then((res) => {
      const tutorials = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          tutorials.push(res.data[key]);
        });
      }
      resolve(tutorials);
    })
    .catch(err => reject(err));
});

export default getRequest;
