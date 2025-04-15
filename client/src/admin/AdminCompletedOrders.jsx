// TODO: capstone+ : add funtiion that deletes or archives orders older then 30 days

const AdminCompletedOrders = () => {
  return (
    <>
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Completed Orders Database
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 ' />

      <div id='openOrdersTAble' className='w-3/4 ml-[20rem] shadow-2xl'>
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
              <th scope='col' className='px-4 py-4'>
                {/* Is order completed && archived */}
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {orders.map((order, index) => ( */}
            <tr
              // key={index}
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
                <p className=''>0001</p>
              </th>
              <td className='px-4 py-4'>
                <p className='line-clamp-3 text-gray-900'>3/24/2025</p>
              </td>
              <td className='px-4 py-4'>
                <p className='line-clamp-3 text-gray-900'>Pizza 1 x1 Pizza 2 x4</p>
              </td>
              <td className='px-4 py-4 text-gray-900'>
                {/* {" "}
                  {task.users.length > 0 && (
                    <>
                      {task.users[0].firstName} {task.users[0].lastName}
                    </>
                  )} */}{" "}
                1234 Smith Drive
              </td>
              <td className='px-4 py-4 text-gray-900'> Sally Weston</td>
              <td className='px-4 py-4 text-gray-900'>25.00</td>
              <td className='px-4 py-4 text-gray-900'>Completed</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default AdminCompletedOrders
