import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AlertBlack from "../components/AlertBlack";
import SpinnerBubbles from "../components/SpinnerBubbles";
import {
  orderGetOpen,
  orderUpdateStatus,
  orderArchiveOne,
} from "../redux/orderSlice";

const AdminOpenOrders = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [savingId, setSavingId] = useState(null);
  const [archiveOrder, setArchiveOrder] = useState(null);

  const alertMsg = archiveOrder
    ? `Are you sure you want to archive order #${archiveOrder.orderNumber}?`
    : "Are you sure you want to archive this order?";
  const alertDescription = "Click to confirm";

  const statusArray = ["processing", "completed", "delivered"];
  // Grab open order
  useEffect(() => {
    dispatch(orderGetOpen());
    console.log("useEffect", orders);
  }, []);

  const handleStatusUpdate = (id) => {
    setSavingId(id);
    setLoading(true);
    // dispatch update of status
    dispatch(orderUpdateStatus({ id: id, status: newStatus }));
    setTimeout(() => {
      setSavingId(null);
    }, 1500);
  };

  // When Archive Order button is clicked
  const handleArchiveClick = (order) => {
    setArchiveOrder(order); // Store the order object
    setShowAlert(true);
  };

  const handleCancel = () => {
    console.log("Cancel Clicked");
    setShowAlert(false);
    setArchiveOrder(null); // Clear the archive order
  };

  // When user confirms in the alert
  const handleConfirm = async () => {
    if (archiveOrder) {
      await dispatch(orderArchiveOne(archiveOrder._id)).unwrap();
      await dispatch(orderGetOpen()).unwrap();
      setArchiveOrder(null);
    }
    setShowAlert(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      // year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <>
      <div className="ml-64 px-4">
        <h2 className="berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800">
          Open Orders
        </h2>
        <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700" />

        <div id="openOrdersTAble" className="overflow-x-auto shadow-2xl mb-20">
          <table
            className="w-full mt-64text-sm text-left rtl:text-right rounded-2xl
        text-gray-500"
          >
            <thead
              className="text-xs uppercase 
          bg-gray-400
          text-teal-950"
            >
              <tr>
                <th scope="col" className="text-center py-4">
                  {/* **Order ID** */}
                  Order Number
                </th>
                <th scope="col" className="text-center py-4">
                  {/* **Order Date** */}
                  Date/Time Order
                </th>
                <th scope="col" className="text-center py-4">
                  {/* **Items in Order (Product Name, Quantity)** */}
                  Order Details/Quantity
                </th>
                <th scope="col" className="text-center py-4">
                  {/* **Address (Shipping/Delivery Address)** */}
                  Destination
                </th>
                <th scope="col" className="text-center py-4">
                  {/* **Name (or User Email)** */}
                  Customer Name
                </th>
                <th scope="col" className="text-center py-4">
                  {/* **Total Price** */}
                  Total $
                </th>
                <th scope="col" className="text-center py-4">
                  Status
                </th>
                <th scope="col" className="text-center py-4">
                  Update Status
                </th>
                <th scope="col" className="text-center py-4">
                  Archive Order
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  order={order}
                  className=" border-b px-4 py-4
              odd:bg-stone-200
              even:bg-gray-300 
              border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-4 py-3
                font-medium 
                text-gray-900   "
                  >
                    <p className="">{order.orderNumber}</p>
                  </th>
                  <td className="px-2 py-2 whitespace-nowrap">
                    <p className=""> {formatDate(order.date)}</p>
                  </td>
                  <td className="px-2 py-2">
                    {/* Map over order details to show items in order */}
                    <ul>
                      {Array.isArray(order.orderDetails) ? (
                        order.orderDetails.map((item, idx) => (
                          <li key={idx}>
                            {item.pizzaName} - ${item.pizzaPrice} - QTY:{" "}
                            {item.quantity}
                          </li>
                        ))
                      ) : order.orderDetails ? (
                        <li>
                          {order.orderDetails.pizzaName} - $
                          {order.orderDetails.pizzaPrice} - QTY:{" "}
                          {order.orderDetails.quantity}
                        </li>
                      ) : (
                        <li>No items</li>
                      )}
                    </ul>
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {order.address.street}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    {" "}
                    {order.firstName} {order.lastName}
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap">
                    $ {order.orderTotal}
                  </td>
                  <td className="px-2 py-2 ">
                    {newStatus.id === order._id ? (
                      <select
                        value={newStatus.status}
                        onChange={(e) =>
                          setNewStatus({
                            id: order._id,
                            status: e.target.value,
                          })
                        }
                        className="dark:text-cyan-700 bg-slate-100 rounded-xl font-semibold px-2 py-2 w-full"
                      >
                        <option defaultValue={newStatus.status}>
                          {order.status}
                        </option>
                        {/* Only show types that are different from default */}
                        {order.status &&
                          [...statusArray]
                            .filter((status) => status !== order.status)
                            .map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                      </select>
                    ) : (
                      <select
                        value={order.status}
                        onChange={(e) =>
                          setNewStatus({
                            id: order._id,
                            status: e.target.value,
                          })
                        }
                        className="dark:text-cyan-700 bg-slate-100 rounded-xl font-semibold px-2 py-2 w-full"
                      >
                        <option defaultValue={order.status}>
                          {order.status}
                        </option>
                        {/* Only show types that are different from default */}
                        {order.status &&
                          [...statusArray]
                            .filter((status) => status !== order.status)
                            .map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                      </select>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative">
                      <button
                        onClick={() => handleStatusUpdate(order._id)}
                        type="button"
                        className="font-medium hover:underline disabled:cursor-not-allowed  w-full h-full cursor-pointer
                    text-blue-600 
                    disabled:hover:text-slate-400 "
                      >
                        Save Status
                      </button>
                      {/* Spinner  */}
                      <div className="w-full top-0 right-0 ml-5">
                        {savingId === order._id && (
                          <SpinnerBubbles loading={loading} />
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative">
                      <div className="w-full top-0 right-2 "></div>
                      <button
                        onClick={() => handleArchiveClick(order)}
                        type="submit"
                        className="font-medium text-red-700 w-full h-full border-3 rounded-xl hover:bg-red-700 hover:text-white hover:border-black cursor-pointer"
                      >
                        Archive Order
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showAlert && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-opacity-30">
          <div className="rounded-xl shadow-2xl max-w-md w-full">
            <AlertBlack
              alertMsg={alertMsg}
              alertDescription={alertDescription}
              handleCancel={handleCancel}
              handleConfirm={handleConfirm}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminOpenOrders;
