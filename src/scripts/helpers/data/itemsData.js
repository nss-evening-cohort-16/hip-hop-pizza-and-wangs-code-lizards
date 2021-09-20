// API CALLS FOR ITEMS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import getOrders from './ordersData';

const dbUrl = firebaseConfig.databaseURL;

// GET ITEMS
const getItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="order_id"&equalTo="${orderId}"`)
    .then((response) => resolve(Object.values(response.data)))
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

const deleteItem = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getOrders(uid).then(resolve);
    }).catch(reject);
});

export {
  getItems,
  getSingleItem,
  addItem,
  deleteItem
};
