import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import OrderNumberGenerator from "../components/generateOrderNumber"
const BuildYourOwn = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit")

    // dispatch(createOrder());

    // dispatch(createOrder(order))
    // setShowModal(true)
    // setSubmitDisabled(true)
  }

  return (
    <>
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800 capitalize'>
        Build Your own pizza
      </h2>
      <hr className='mb-6 sm:mx-auto lg:my-8 border-gray-700 ' />
      {/* Flex container */}
      <div className='flex flex-wrap flex-row-reverse justify-center min-h-screen mb-20'>
        <form onSubmit={handleSubmit} className='w-1/3 bg-gray-100'>
          {/* Custom border */}
          <div className='border-4 border-green-700'>
            <div className='border-4 border-white'>
              <div className='border-4 border-red-700 p-5'>
                {/* Beginning form fields */}
                <p className='benthamFont mb-2 text-center text-2xl font-bold text-slate-800'>
                  Pick up to 5 toppings
                </p>
                <h1 className='block mb-2 text-lg font-medium text-gray-900 text-left'>
                  Pizza Base
                </h1>
                <hr className='mb-5' />
                <div className='mb-5'>
                  <label
                    htmlFor='pizza-name'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Crust and Cheese
                  </label>
                  <div
                    // value={order.orderNumber}
                    // onChange={(e) =>
                    //   setOrder({ ...order, orderNumber: e.target.value })
                    // }
                    type='text'
                    id='crust'
                    className='shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light cursor-not-allowed 
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-400 
                        focus:bg-sky-200 
                        focus:border-sky-700'
                  >
                    Brick Oven Crust
                    <div className='relative flex justify-end items-center'>
                      <svg
                        className='w-6 h-6 text-green-300 absolute mb-3'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 11.917 9.724 16.5 19 7.5'
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    // value={cheese}
                    // onChange={(e) =>
                    //   setOrder({ ...order, orderNumber: e.target.value })
                    // }
                    type='text'
                    id='cheese'
                    className='shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light cursor-not-allowed
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-400 
                        focus:bg-sky-200 
                        focus:border-sky-700'
                  >
                    Italian Blend Cheese
                    <div className='relative flex justify-end items-center'>
                      <svg
                        className='w-6 h-6 text-green-300 absolute mb-3'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 11.917 9.724 16.5 19 7.5'
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='veggie-topping'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Select Sauce Type
                  </label>
                  <select
                    // value={order.orderStatus}
                    // onChange={(e) =>
                    //   setOrder({ ...order, orderStatus: e.target.value })
                    // }
                    id='suace'
                    className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-200 
                        focus:bg-gray-300 
                        focus:ring-white
                        focus:border-sky-500'
                    required
                  >
                    <option value='Red'>Signature Red Sauce</option>
                    <option value='White'>White Sauce</option>
                  </select>
                </div>

                <h1 className='block mb-2 text-lg font-medium text-gray-900 text-center'>
                  Topping Options
                </h1>

                <h1 className='block mb-2 text-lg font-medium text-gray-900 text-left'>
                  Meat
                </h1>
                <hr className='mb-5' />
                <div id='nested-flex-container' className='nested-flex-meat'>
                  <div id='nested-col-1' className='px-2'>
                    <div className='mb-5'>
                      <label
                        htmlFor='meat-topping'
                        className='block mb-2 text-sm font-medium text-gray-900 text-center'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='meat-type'
                        className='text-sm rounded-lg block w-full p-2.5 shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-red-950
                          bg-red-800 
                          focus:bg-red-950 
                          focus:ring-red-500
                          focus:border-red-500'
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Sausage'>Sausage</option>
                        <option value='Chicken'>Chicken</option>
                        <option value='Bacon'>Bacon</option>
                      </select>
                    </div>
                  </div>

                  <div id='nested-col-2' className='px-2'>
                    <div className='mb-5'>
                      <label
                        htmlFor='meat-topping'
                        className='block mb-2 text-sm font-medium text-gray-900 text-center'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='meat-type'
                        className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-red-950
                          bg-red-800 
                          focus:bg-red-950 
                          focus:ring-red-500
                          focus:border-red-500'
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Sausage'>Sausage</option>
                        <option value='Chicken'>Chicken</option>
                        <option value='Bacon'>Bacon</option>
                      </select>
                    </div>
                  </div>

                  <div id='nested-col-3' className='px-2'>
                    <div className='mb-5'>
                      <label
                        htmlFor='meat-topping'
                        className='block mb-2 text-sm font-medium text-gray-900 text-center'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='meat-type'
                        className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-red-950
                          bg-red-800 
                          focus:bg-red-950 
                          focus:ring-red-500
                          focus:border-red-500 '
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Sausage'>Sausage</option>
                        <option value='Chicken'>Chicken</option>
                        <option value='Bacon'>Bacon</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Nested flex with 2 cols */}
                <h1 className='block mb-2 text-lg font-medium text-gray-900 text-left'>
                  Veggie
                </h1>
                <hr className='mb-5' />
                <div id='nested-flex-container' className='nested-flex-veggie'>
                  {/* Nested col 1 */}
                  <div id='nested-col-1' className='px-2'>
                    <div className='mb-5 '>
                      <label
                        htmlFor='veggie-topping'
                        className='block mb-2 text-sm font-medium text-gray-900'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='veggie-type'
                        className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-green-800
                          bg-emerald-500
                          focus:bg-emerald-800
                          focus:ring-emerald-100
                          focus:border-emerald-200 '
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Mushrooms'>Mushrooms</option>
                        <option value='Peppers'>Bell Peppers</option>
                        <option value='Onions'>Onions</option>
                        <option value='Pineapple'>Pineapple</option>
                      </select>
                    </div>

                    <div className='mb-5'>
                      <label
                        htmlFor='veggie-topping'
                        className='block mb-2 text-sm font-medium text-gray-900'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='veggie-type'
                        className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-green-800
                          bg-emerald-500
                          focus:bg-emerald-800
                          focus:ring-emerald-100
                          focus:border-emerald-200 '
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Mushrooms'>Mushrooms</option>
                        <option value='Peppers'>Bell Peppers</option>
                        <option value='Onions'>Onions</option>
                        <option value='Pineapple'>Pineapple</option>
                      </select>
                    </div>
                  </div>
                  {/* Nested col 2 */}
                  <div id='nested-col-2' className='px-2'>
                    <div className='mb-5'>
                      <label
                        htmlFor='veggie-topping'
                        className='block mb-2 text-sm font-medium text-gray-900'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='veggie-type'
                        className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-green-800
                          bg-emerald-500
                          focus:bg-emerald-800
                          focus:ring-emerald-100
                          focus:border-emerald-200 '
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Mushrooms'>Mushrooms</option>
                        <option value='Peppers'>Bell Peppers</option>
                        <option value='Onions'>Onions</option>
                        <option value='Pineapple'>Pineapple</option>
                      </select>
                    </div>

                    <div className='mb-5'>
                      <label
                        htmlFor='veggie-topping'
                        className='block mb-2 text-sm font-medium text-gray-900'
                      >
                        Select One
                      </label>
                      <select
                        // value={order.orderStatus}
                        // onChange={(e) =>
                        //   setOrder({ ...order, orderStatus: e.target.value })
                        // }
                        id='veggie-type'
                        className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2 
                          text-white 
                          placeholder-gray-400 
                          border-green-800
                          bg-emerald-500
                          focus:bg-emerald-800
                          focus:ring-emerald-100
                          focus:border-emerald-200 '
                      >
                        <option defaultValue>- - None - - </option>
                        <option value='Mushrooms'>Mushrooms</option>
                        <option value='Peppers'>Bell Peppers</option>
                        <option value='Onions'>Onions</option>
                        <option value='Pineapple'>Pineapple</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h1 className='block mb-2 text-lg font-medium text-gray-900  capitalize text-center'>
                  Special request's
                </h1>

                <div className='mb-5 m-2'>
                  <textarea
                    // value={order.orderNumber}
                    // onChange={(e) =>
                    //   setOrder({ ...order, orderNumber: e.target.value })
                    // }
                    type='text'
                    id='special-request'
                    className='shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light mb-5 ring-1
                       text-black 
                       placeholder-gray-500 
                       border-cyan-500
                       bg-gray-200 
                       focus:bg-gray-100 
                       focus:ring-cyan-300
                    '
                    placeholder='Light sauce'
                  />
                </div>
                <div className='flex justify-center space-x-4'>
                  <button
                    // disabled={submitDisabled}
                    type='submit'
                    className='cursor-pointer disabled:cursor-not-allowed font-medium rounded-lg text-sm w-[200px]
                    px-5 py-2.5 text-center bg-gradient-to-r  focus:ring-4 focus:outline-nonefocus:outline-nonehover:bg-gradient-to-br 
                      shadow-green-800/80 
                      hover:text-black
                      text-white 
                      from-cyan-400 
                      via-blue-700 
                      to-cyan-600
                      focus:ring-blue-800'
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate("/order-menu")}
                    type='button'
                    className='w-[200px] font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                    shadow-red-800/80 
                    text-white 
                    from-red-600
                    via-red-500 
                    to-red-800
                    focus:ring-red-800'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BuildYourOwn
