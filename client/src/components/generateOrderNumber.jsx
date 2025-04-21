import { useState, useEffect } from 'react';

function OrderNumberGenerator() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const generateOrderNumber = () => {
      const timestamp = new Date().getTime();
      const order_id = `P${timestamp.toString(36).substring(0, 10)}`;
      setOrderId(order_id);
    };

    if (!orderId) {
      generateOrderNumber();
    }
  }, []);

  return <div>{orderId}</div>;
}

export default OrderNumberGenerator;