import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router"
import AlertBlack from "../components/AlertBlack"
import SpinnerBubbles from "../components/SpinnerBubbles"
import {
  orderGetOne,
  orderGetOpen,
  orderUpdateStatus,
} from "../redux/orderSlice"

const alertMsg = "Are you sure you want to archive this order?"
const alertDesription = "Click to confirm"

const AdminOpenOrders = () => {
  const { orders } = useSelector((state) => state.order)
  const { order } = useSelector((state) => state.order)
  const dispatch = useDispatch()

  const [newStatus, setNewStatus] = useState({})
  const [saveBubbles, setSaveBubbles] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const statusArray = ["processing", "completed", "delivered"]

  // Grab open order
  useEffect(() => {
    dispatch(orderGetOpen())
    console.log("useEffect", orders)
  }, [])

  // useEffect(() => {
  //   dispatch(orderGetOne(id))
  //   console.log("useEffect", id)
  // }, [])

  const handleStatusUpdate = (id) => {
    console.log("id", id)
    console.log("shdjkshfjkhsd", newStatus)
    setLoading(true)
    setSaveBubbles(true)
    // dispatch update of status
    dispatch(orderUpdateStatus({ id: id, status: newStatus }))

    setTimeout(() => {
      setSaveBubbles(false)
    }, 1500)
  }

  const handleCancel = () => {
    setShowAlert(false)
  }

  const handleConfirm = (id) => {
    console.log("id", id)
    // console.log("shdjkshfjkhsd", newStatus)
    const value = "archived"
    // send pizza to archived
    dispatch(orderUpdateStatus({ id: id, status: value }))

    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }

  // TODO: need to have another map to map over order details?
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
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Open Orders
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700' />

      <div id='openOrdersTAble' className='w-3/4 ml-[20rem] shadow-2xl mb-20'>
        <table
          className='w-full mt-6 text-sm text-left rtl:text-right rounded-2xl
        text-gray-500'
        >
          <thead
            className='text-xs uppercase 
          bg-gray-400
          text-teal-950'
          >
            <tr>
              <th scope='col' className='px-4 py-4'>
                {/* **Order ID** */}
                Order Number
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Order Date** */}
                Date/Time Order
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Items in Order (Product Name, Quantity)** */}
                Order Details/Quantity
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Address (Shipping/Delivery Address)** */}
                Destination
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Name (or User Email)** */}
                Customer Name
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Total Price** */}
                Total $
              </th>
              <th scope='col' className='px-4 py-4 text-center'>
                Status
              </th>
              <th scope='col' className='px-4 py-4 text-center'>
                Update Status
              </th>
              <th scope='col' className='px-4 py-4 text-center'>
                Archive Order
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                order={order}
                className=' border-b px-4 py-4
              odd:bg-stone-200
              even:bg-gray-300 
              border-gray-700'
              >
                <th
                  scope='row'
                  className='px-4 py-3
                font-medium 
                text-gray-900   '
                >
                  <p className=''>{order.orderNumber}</p>
                </th>
                <td className='px-4 py-4'>

                  <p className='line-clamp-3'>     {formatDate(order.date)}</p>
                </td>
                <td className='px-4 py-4'>
                  {/* <p className='line-clamp-3'>Pizza 1 x1 Pizza 2 x4</p> */}
                  <ul>
                    <li>{order.orderDetails.pizzaName} </li>
                    <li>{order.orderDetails.pizzaPrice} </li>
                    <li>{order.orderDetails.quantity} </li>
                  </ul>
                </td>
                <td className='px-4 py-4'>
                  {/* {" "}
                  {task.users.length > 0 && (
                    <>
                      {task.users[0].firstName} {task.users[0].lastName}
                    </>
                  )} */}{" "}
                  {order.address.street}
                </td>
                <td className='px-4 py-4'>
                  {" "}
                  {order.firstName} {order.lastName}
                </td>
                <td className='px-4 py-4'>$ {order.orderTotal}</td>
                <td className='px-4 py-4 '>
                  {newStatus.id === order._id ? (
                    <select
                      value={newStatus.status}
                      onChange={(e) =>
                        setNewStatus({ id: order._id, status: e.target.value })
                      }
                      className='dark:text-cyan-700 bg-slate-100 rounded-xl font-semibold px-2 py-2 w-full'
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
                        setNewStatus({ id: order._id, status: e.target.value })
                      }
                      className='dark:text-cyan-700 bg-slate-100 rounded-xl font-semibold px-2 py-2 w-full'
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
                <td className='px-4 py-4'>
                  <div className='relative'>
                    <button
                      onClick={() => handleStatusUpdate(order._id)}
                      type='button'
                      className='font-medium hover:underline disabled:cursor-not-allowed  w-full h-full cursor-pointer
                    text-blue-600 
                    disabled:hover:text-slate-400 '
                    >
                      Save Status
                    </button>
                    {/* Spinner  */}
                    <div className='w-full top-0 right-0 ml-5'>
                      {saveBubbles && <SpinnerBubbles loading={loading} />}
                    </div>
                  </div>
                </td>
                <td className='px-4 py-4'>
                  <div className='relative'>
                    <div className='w-full top-0 right-2 '></div>
                    <button
                      // onClick={() => {
                      //   setShowAlert(true)
                      // }}
                      onClick={() => handleConfirm(order._id)}
                      type='submit'
                      className='font-medium text-red-700 w-full h-full border-3 rounded-xl hover:bg-red-700 hover:text-white hover:border-black cursor-pointer'
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
      {showAlert && (
        <div className='absolute top-[40%] left-[40%] z-30'>
          <AlertBlack
            alertMsg={alertMsg}
            alertDesription={alertDesription}
            handleCancel={handleCancel}
            handleConfirm={() => handleConfirm(order._id)}
          />
        </div>
      )}
    </>
  )
}

export default AdminOpenOrders
