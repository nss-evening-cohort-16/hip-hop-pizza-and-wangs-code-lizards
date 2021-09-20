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

// UPDATE ITEMS
const updateItems = (itemsObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${itemsObj.firebaseKey}.json`, itemsObj)
    .then(() => getItems(itemsObj.uid).then(resolve))
    .catch(reject);
});

export { orderItems, updateItems };
