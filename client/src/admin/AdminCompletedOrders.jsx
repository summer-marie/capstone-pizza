// TODO: capstone+ : add funtiion that deletes or archives orders older then 30 days

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { orderGetArchived } from "../redux/orderSlice"

const AdminCompletedOrders = () => {
  const { orders } = useSelector((state) => state.order)
  const dispatch = useDispatch()

  // Grab order
  useEffect(() => {
    dispatch(orderGetArchived())
    console.log("useEffect", orders)
  }, [])

 
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  // TODO: need to have another map to map over order details?

  return (
    <>
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Completed Orders Database
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 ' />

      <div
        id='openOrdersTAble'
        className='w-3/4 ml-[20rem] shadow-2xl overflow-x:auto'
      >
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
              <th scope='col' className='px-4 py-4'>
                {/* Is order completed && archived */}
                Status
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Order Date** */}
                Date/Time Order
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className=' border-b px-4 py-4
              odd:bg-stone-200
              even:bg-gray-300 
              border-gray-500'
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
                  <ul>
                    {/* {order.orderDetails.length > 0 && (
                      <li>{orderDetails.pizzaName}</li>
                    )} */}
                    <li>
                      {order.orderDetails.pizzaName}, : QTY{" "}
                      {order.orderDetails.quantity}{" "}
                    </li>
                  </ul>
                </td>
                <td className='px-4 py-4 text-gray-900'>
                  {order.address.street}
                </td>
                <td className='px-4 py-4 text-gray-900'>
                  {" "}
                  {order.firstName} {order.lastName}
                </td>
                <td className='px-4 py-4 text-gray-900'>
                  $ {order.orderTotal}
                </td>
                <td className='px-4 py-4 text-gray-900 uppercase'>
                  {order.status}
                </td>
                <td className='px-4 py-4'>
                  <p className='line-clamp-3 text-gray-900'>
         
                    {formatDate(order.date)}
                    </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminCompletedOrders
