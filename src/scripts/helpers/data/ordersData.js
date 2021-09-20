// API CALLS FOR ORDERS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ORDERS
const getOrders = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE ORDER
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders(uid).then(resolve);
    }).catch(reject);
});

// CREATE NEW ORDER
const createOrder = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, cardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          getOrders(cardObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

export {
  getOrders,
  getSingleOrder,
  createOrder,
  deleteOrder
};
