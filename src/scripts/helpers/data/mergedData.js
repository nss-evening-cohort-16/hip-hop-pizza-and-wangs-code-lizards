import { getItems } from './itemsData';
import { getOrderPrice, getSingleOrder } from './ordersData';

// VIEW ORDER DETAILS
const viewOrderDetails = async (firebaseKey) => {
  const order = await getSingleOrder(firebaseKey);
  const items = await getItems(firebaseKey);
  const price = await getOrderPrice(firebaseKey);
  console.warn({ items, ...order, ...price });
  return ({ items, ...order, ...price });
};

export default viewOrderDetails;
