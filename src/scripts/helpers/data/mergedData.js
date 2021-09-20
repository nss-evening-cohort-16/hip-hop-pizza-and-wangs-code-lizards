import { orderItems } from './itemsData';
import { getSingleOrder } from './ordersData';

// VIEW ORDER DETAILS
const viewOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const items = await orderItems(firebaseKey);
  return ({ items, ...order });
};

export default viewOrderDetails;
