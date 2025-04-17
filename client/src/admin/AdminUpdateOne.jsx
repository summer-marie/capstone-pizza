import { useNavigate } from "react-router"
import { useState } from "react"
import AlertSuccess from "../components/AlertSuccess"

const successMsg = "Pizza was updated successfully"
const successDescription = "navigating you back to the admin menu...."

const AdminUpdateOne = () => {
  const navigate = useNavigate()

  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit")
    setShowSuccessAlert(true)
    setTimeout(() => {
      navigate("/admin-menu")
    }, 2000)

    // dispatch(createOrder(order))
    // setSubmitDisabled(true)
  }
  return (
    <>
      <div class='flex '></div>
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Update Pizza Page
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700' />
      <button
        onClick={() => navigate("/admin-menu")}
        type='button'
        className='absolute top-5 right-10 w-65 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-green-800/80 
                text-white 
                from-green-950
                via-green-500 
                to-green-600
                focus:ring-green-800'
      >
        <svg
          className='w-6 h-5 text-gray-800 inline-block left-0 absolute'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='26'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m15 19-7-7 7-7'
          />
        </svg>
        Back
      </button>
      <div className='h-screen'>
        <div className='flex flex-wrap flex-row-reverse justify-center mb-20'>
          <form onSubmit={handleSubmit} className='w-1/3 mb-10 min-h-screen'>
            <div className='border-4 border-green-700 mb-15'>
              <div className='border-4 border-white'>
                <div className='border-4 border-red-700 p-5'>
                  <div className='mb-5'>
                    <label
                      htmlFor='pizza-name'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Pizza Name
                    </label>
                    <input
                      // value={order.orderNumber}
                      // onChange={(e) =>
                      //   setOrder({ ...order, orderNumber: e.target.value })
                      // }
                      type='text'
                      id='pizza-name'
                      className='shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-200 
                        focus:bg-gray-100 focus:border-sky-700
          '
                      placeholder='Meat Lovers'
                      required
                    />
                  </div>
                  {/* Upload new Photo */}
                  <div id='imgUploader' className='max-w-lg mx-auto mb-5'>
                    <label
                      className='block mb-2 text-sm font-medium pl-2 text-gray-900 capitlize'
                      htmlFor='pizza_photo'
                    >
                      Upload New photo
                    </label>
                    <input
                      className='block w-full text-lg focus:outline-none p-2 text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 '
                      aria-describedby='pizza_photo_help'
                      id='pizza_photo'
                      type='file'
                    />
                    <div
                      className='mt-1 text-sm text-gray-500'
                      id='pizza_photo_help'
                    >
                      Add picture of desired pizza
                    </div>
                  </div>

                  <h1 className='block mb-2 text-lg font-medium text-gray-900 text-center'>
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
                        focus:bg-sky-200 focus:border-sky-700
          '
                      required
                    >
                      Brick Oven Crust
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
                        focus:bg-sky-200 focus:border-sky-700
          '
                      required
                    >
                      Italian Blend Cheese
                    </div>
                  </div>

                  <div className='mb-5'>
                    <label
                      htmlFor='veggie-topping'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Update Sauce Type
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
                    Meat Options
                  </h1>
                  <hr className='mb-5' />
                  <div id='nested-flex-container' className='nested-flex-meat'>
                    <div id='nested-col-1' className='px-2'>
                      <div className='mb-5'>
                        <label
                          htmlFor='meat-topping'
                          className='block mb-2 text-sm font-medium text-gray-900'
                        >
                          Update Meat #1
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
                          className='block mb-2 text-sm font-medium text-gray-900'
                        >
                          Update Meat #2
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
                          className='block mb-2 text-sm font-medium text-gray-900'
                        >
                          Update Meat #3
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
                  <h1 className='block mb-2 text-lg font-medium text-gray-900 text-center'>
                    Veggie Options
                  </h1>
                  <hr className='mb-5' />
                  <div
                    id='nested-flex-container'
                    className='nested-flex-veggie'
                  >
                    {/* Nested col 1 */}
                    <div id='nested-col-1' className='px-2'>
                      <div className='mb-5 '>
                        <label
                          htmlFor='veggie-topping'
                          className='block mb-2 text-sm font-medium text-gray-900'
                        >
                          Update Veggies #1
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
                          Update Veggies #2
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
                          Update Veggies #3
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
                          Update Veggies #4
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
                  <button
                    // disabled={submitDisabled}
                    onClick={showSuccessAlert}
                    type='submit'
                    className='flex justify-center mx-auto cursor-pointer disabled:cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:outline-nonehover:bg-gradient-to-br bg-gradient-to-r  focus:ring-4 focus:outline-none
                        shadow-green-800/80 
                        hover:text-black
                        text-white 
                        from-cyan-400 
                        via-blue-700 
                        to-cyan-600
                        focus:ring-blue-800'
                  >
                    Submit Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showSuccessAlert && (
        <div className='absolute top-[50%] left-[40%] z-30'>
          <AlertSuccess
            successMsg={successMsg}
            successDescription={successDescription}
          />
        </div>
      )}
    </>
  )
}

export default AdminUpdateOne
