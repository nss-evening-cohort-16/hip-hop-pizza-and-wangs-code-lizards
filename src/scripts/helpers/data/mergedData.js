import { deleteItem, getItems } from './itemsData';
import { deleteOrder, getSingleOrder } from './ordersData';

// VIEW ORDER DETAILS
const viewOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const items = await getItems(firebaseKey);
  return ({
    items,
    ...order
  });
};
const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  getItems(orderId).then((orderItemArr) => {
    const deleteItems = orderItemArr.map((item) => deleteItem(item.firebaseKey));
    Promise.all(deleteItems).then(() => resolve(deleteOrder(orderId)));
  }).catch(reject);
});

export { viewOrderDetails, deleteOrderItems };
