// API CALLS FOR ORDERS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ITEMS
const getItems = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values.apply(response.data)))
    .catch(reject);
});

// GET A SINGLE ITEM
const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// ADD ITEM
const addItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, body)
        .then(() => {
          getItems(itemObj.uid).then(resolve);
        });
    }).catch(reject);
});

export { getItems, getSingleItem, addItem };
