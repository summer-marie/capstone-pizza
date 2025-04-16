//TODO: put into a modal???

const Checkout = () => {
  return (
    <>
      {/* Needs to have a dynamic grid that populates with all the items they selected. Should be on the left side of the screen */}
      {/* need to map over items dynamically */}
      {/* <div className='grid grid-cols-1 xl:grid-cols-1 gap-9 px-4 py-2.5 ml-[10%] mt-5 mb-20'>
        <div className='w-150 h-80 bg-gray-400 rounded-xl'></div>
        <div className='w-150 h-80 bg-gray-400 rounded-xl'></div>
        <div className='w-150 h-80 bg-gray-400 rounded-xl'></div>
        <div className='w-150 h-80 bg-gray-400 rounded-xl'></div>
      </div> */}

      {/* Right side of the screen will have the total information in a modale or a card off the side */}
      <form className='mt-10'>
        <div className='min-h-screen mx-auto w-full'>
          <div className='flex flex-col sm:flex-row items-start justify-center mx-auto space-y-6 sm:space-y-0 sm:space-x-6 w-1/2 bg-gray-100'>
            <ul
              role='list'
              className='divide-y w-full border-2 rounded-xl p-5
              divide-gray-200
              border-red-700 '
            >
              {" "}
              <div className="text-center rounded-t-xl">
                
              <h1 className='font-medium mx-auto capitalize'>
                Order information 
              </h1>
 
              </div>
    
              {/* {orders.map((order) => ( */}
              <li
                // key={order.id}
                className='px-2'
              >
                <div className='flex justify-between space-x-6 w-full'>
                  <div className='space-y-1 w-3/4 relative'>
                    {/* {order.items.map((item, index) => ( */}
                    <div
                      // key={item.id}
                      className='flex items-center space-x-4 mt-1'
                    >
                      <dt className='text-xl font-medium text-gray-900 capitalize'>
                        {/* {index + 1}. {item.name} */}
                        pizza name or type
                      </dt>
                      <dd className='text-lg text-gray-500 ml-auto'>
                        {/* ${item.price} */}
                        item price $ (5.00)
                      </dd>
                    </div>
         

                    {/* ))} */}

                    <li className='bottom-0 absolute w-full'>
                      <hr className='w-full mt-3'></hr>
                      <div className='flex items-center justify-between mt-4'>
                        <dt className='text-xl font-medium text-gray-900'>
                          Total
                        </dt>
                        <dd className='text-lg text-gray-500'>
                          {/* ${order.total} */}
                          $100.00
                        </dd>
                      </div>
                    </li>
                  </div>

                  <div className='space-y-2 w-1/2 mb-5 mr-5'>
                    <label
                      htmlFor='deliveryAddress'
                      className='block text-md font-medium text-gray-900'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      id='deliveryAddress'
                      className='shadow-sm mt-1 block w-full sm:text-sm rounded-md border-2 p-1
                      focus:ring-indigo-500
                      focus:border-indigo-500 
                      border-red-700  '
                      placeholder='Sally'
                    />
                    <label
                      htmlFor='deliveryAddress'
                      className='block text-md font-medium text-gray-900'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='deliveryAddress'
                      className='shadow-sm mt-1 block w-full sm:text-sm rounded-md border-2 p-1
                      focus:ring-indigo-500
                      focus:border-indigo-500 
                      border-red-700 '
                      placeholder='Smith'
                    />
                    <label
                      htmlFor='deliveryAddress'
                      className='block text-md font-medium text-gray-900'
                    >
                      Delivery address
                    </label>
                    <input
                      type='text'
                      id='deliveryAddress'
                      className='shadow-sm mt-1 block w-full sm:text-sm rounded-md border-2 p-1 
                      focus:ring-indigo-500
                      focus:border-indigo-500 
                      border-red-700 '
                      placeholder='Enter delivery address'
                    />
                  </div>
                </div>
              </li>
              {/* ))} */}
              <button
                  // disabled={submitDisabled}
                  type='submit'
                  className='capitalize m-2 w-1/3 flex justify-center mx-auto cursor-pointer disabled:cursor-not-allowed font-medium rounded-lg text-sm 
                    px-5 py-2.5 text-center bg-gradient-to-r  focus:ring-4 focus:outline-nonefocus:outline-nonehover:bg-gradient-to-br 
                      shadow-green-800/80 
                      hover:text-black
                      text-white 
                      from-cyan-400 
                      via-blue-700 
                      to-cyan-600
                      focus:ring-blue-800'
                >
                  Submit order(paypal)
                </button>
            </ul>
          </div>
        </div>
      </form>
    </>
  )
}

export default Checkout

