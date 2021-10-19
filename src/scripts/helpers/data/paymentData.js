// API CALLS FOR ORDERS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPayments = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/payments.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createPayment = (paymentObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/payments.json`, paymentObj)
    .then((response) => {
      const body = { id: response.data.name };
      axios
        .patch(`${dbUrl}/payments/${response.data.name}.json`, body)
        .then(resolve);
    })
    .catch(reject);
});

export { getPayments, createPayment };
