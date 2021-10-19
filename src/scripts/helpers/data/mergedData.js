import { deleteItem, getItems } from './itemsData';
import { deleteOrder, getSingleOrder } from './ordersData';
import { getPayments } from './paymentData';

// VIEW ORDER DETAILS
const viewOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const items = await getItems(firebaseKey);
  return ({
    items,
    ...order
  });
};

const viewOrderRevenue = async (firebaseKey) => {
  const payments = await getPayments(firebaseKey);
  return ({
    payments
  });
};

const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  getItems(orderId).then((orderItemArr) => {
    const deleteItems = orderItemArr.map((item) => deleteItem(item.firebaseKey));
    Promise.all(deleteItems).then(() => resolve(deleteOrder(orderId)));
  }).catch(reject);
});

export { viewOrderDetails, deleteOrderItems, viewOrderRevenue };
