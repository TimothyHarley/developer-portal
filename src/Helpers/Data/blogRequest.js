import axios from 'axios';
import apiKeys from '../apiKeys';

const fireBase = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${fireBase}/blogs.json`)
    .then((res) => {
      const blogs = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          blogs.push(res.data[key]);
        });
      }
      resolve(blogs);
    })
    .catch(err => reject(err));
});

export default getRequest;
