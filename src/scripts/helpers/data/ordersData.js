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

// DELETE ORDER
const deleteOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders(uid).then(resolve);
    }).catch(reject);
});

// UPDATE ORDER
const updateOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders(orderObj.uid).then(resolve))
    .catch(reject);
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

// CLOSES ORDER
// const closeOrder = () => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/orders/${firebaseKey}.json`)
//    .then((response) => )
// })

export {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder
};
