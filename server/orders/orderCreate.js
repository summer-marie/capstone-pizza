import orderModel from "./orderModel.js"


const orderCreate = async (req, res) => {
  const generateOrderNumber = async () => {
    const orderNumberDoc = await orderNumber.findOneAndUpdate(
      {},
      { $inc: { currentOrderNumber: 1 } },
      { new: true, upsert: true }
    );
    return orderNumberDoc.currentOrderNumber;
  };

  let {
    orderNumber,
    date,
    orderDetails,
    address,
    phone,
    firstName,
    lastName,
    orderTotal,
    status,
    isArchived,
  } = req.body

    // Generate order number if not provided
  if (!orderNumber) {
    orderNumber = await generateOrderNumber();
  }

  // Validation
  if (
    !orderNumber ||
    orderNumber == "" ||
    !orderDetails ||
    orderDetails == "" ||
    !address ||
    address == "" ||
    !firstName ||
    firstName == "" ||
    !orderTotal ||
    orderTotal.length === 0
  ) {
    res.status(500).json({ message: "ERR: Invalid order information" })
  } else {
    const newOrder = await orderModel.create({
      orderNumber,
      date,
      orderDetails,
      address,
      phone,
      firstName,
      lastName,
      orderTotal,
      status,
    })
    // Format the date before logging and sending the response
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(new Date(newOrder.date));

    // Format the date before logging and sending the response
    const formattedOrder = {
      ...newOrder.toObject(),
      date: formattedDate,
    };

    console.log("newOrder", formattedOrder)

    res
      .status(200)
      .json({
        success: true,
        message: "Order created!!",
        order: formattedOrder,
      })
  }
}

export default orderCreate
