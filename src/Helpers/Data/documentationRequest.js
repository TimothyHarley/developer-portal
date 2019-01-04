import axios from 'axios';
import apiKeys from '../apiKeys';

const fireBase = apiKeys.firebaseConfig.databaseURL;

// ?orderBy="uid"&equalTo="${uid}"

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${fireBase}/documentations.json`)
    .then((res) => {
      const documentations = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          documentations.push(res.data[key]);
        });
      }
      resolve(documentations);
    })
    .catch(err => reject(err));
});

export default getRequest;
