export default function generateOrderNumber() {

  const timestamp = new Date().getTime();
  let orderId = '';

  // Use setInterval to generate order number periodically
  const interval = setInterval(() => {
    if (!orderId) {
      const base36Timestamp = Date.now().toString(36);
      const order_id = `P${base36Timestamp.substring(0, 10)}`;
      orderId = order_id;
      clearInterval(interval); // Clear the interval after generating
    }
  }, 1000); // Generate order number every second

  return orderId;
}




// You can use this function like this:

// ```javascript
//  const orderId = generateOrderNumber();
// console.log(orderId); 
// Outputs the generated P000000001 or similar
// ```