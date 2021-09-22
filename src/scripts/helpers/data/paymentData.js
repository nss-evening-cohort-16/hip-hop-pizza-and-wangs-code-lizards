// API CALLS FOR ORDERS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const createPayment = (paymentObj) => new Promise((resolve, reject) => {
    axios
      .post(`${dbUrl}/payments.json`, paymentObj)
      .then((response) => {
        const body = { firebaseKey = response.data.name };
        axios
            .patch(`${dbUrl}/payments/${response.data.name}.json`, body)
      })
      .catch(reject);
});

export default createPayment;
