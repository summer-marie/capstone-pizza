export default function generateOrderNumber() {
  let orderId = ""

  // generate order number periodically
  const interval = setInterval(() => {
    if (!orderId) {
      const base36Timestamp = Date.now().toString(36)
      const order_id = `PN${base36Timestamp.substring(0, 10)}`
      orderId = order_id
      // Clear the interval after generating
      clearInterval(interval)
    }
  }, 1000) // Generate order number every second

  return orderId
}
