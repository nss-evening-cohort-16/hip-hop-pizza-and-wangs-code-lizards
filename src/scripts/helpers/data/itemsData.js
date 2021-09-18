// API CALLS FOR ORDERS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// ADD ITEM
const addItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then
})