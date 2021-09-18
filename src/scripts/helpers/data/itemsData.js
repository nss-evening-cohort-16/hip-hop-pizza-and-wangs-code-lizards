// API CALLS FOR BOOKS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ITEMS BY ORDER
const orderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="order_id"&equalTo="${orderId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteItem = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      orderItems(uid).then(resolve);
    }).catch(reject);
});

export default { orderItems, deleteItem };
