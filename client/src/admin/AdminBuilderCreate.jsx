import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import AlertSuccess from "../components/AlertSuccess"
import { builderCreate } from "../redux/builderSlice"

const successMsg = "Pizza was created successfully!!"
const successDescription = "navigating you to the admin menu...."

const base = [
  {
    name: "Italian Blend Cheese",
    description: "Italian Blend Cheese",
    itemType: "base",
    price: "2.00",
  },
  {
    name: "Brick Oven Crust",
    description: "Brick Oven Crust",
    itemType: "base",
    price: "2.00",
  },
]

const AdminBuilderCreate = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [newPizza, setNewPizza] = useState([
  //   { key: "pizzaName", value: "" },
  //   { key: "base", value: [...base] },
  //   { key: "sauce", value: "" },
  //   { key: "meatTopping", value: [] },
  //   { key: "veggieTopping", value: [] },
  // ])

  const [newPizza, setNewPizza] = useState({
    pizzaName: "",
    pizzaPrice: "",
    base: [...base],
    sauce: "",
    meatTopping: [],
    veggieTopping: [],
    image: [],
  })


  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  // const { builders } = useSelector((state) => state.builder)

  // const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(builderGetMany())
    // dispatch(builderCreate())
  }, [])

  // useEffect(() => {
  //   console.log("builders", builders);
  // }, [builders]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit")
    setShowSuccessAlert(true)

    dispatch(createIngredient(newPizza))




    setTimeout(() => {
      navigate("/admin-menu")
    }, 2000)
  }

  return (
    <>
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Pizza Builder for Menu
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 ' />
      <div className='h-screen'>
        <div className='flex flex-wrap flex-row-reverse justify-center'>
          <form onSubmit={handleSubmit} className='w-1/3 mb-10 min-h-screen'>
            <div className='border-4 border-green-700 mb-20'>
              <div className='border-4 border-white'>
                <div className='border-4 border-red-700 p-5'>
                  <div className='mb-5'>
                    <label
                      htmlFor='pizza-name'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Create Pizza Name
                    </label>
                    <input
                      value={newPizza.pizzaName}
                      onChange={(e) =>
                        setOrder({ ...newPizza, pizzaName: e.target.value })
                      }
                      type='text'
                      id='pizza-name'
                      className='shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light
                      text-black 
                      placeholder-gray-500 
                      border-slate-500
                      bg-gray-200 
                      focus:bg-gray-100 
                      focus:border-sky-700
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
                      Upload photo
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
                      focus:bg-sky-200 
                      focus:border-sky-700
              '
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
                        focus:bg-sky-200 
                        focus:border-sky-700
              '
                    >
                      Italian Blend Cheese
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
                       value={newPizza.sauce}
                       onChange={(e) =>
                         setOrder({ ...newPizza, sauce: e.target.value })
                       }
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
                      <option value='Signature Red Sauce'>Signature Red Sauce</option>
                      <option value='Signature White Suace'>White Sauce</option>
                    </select>
                  </div>
                  <h1 className='block text-lg font-medium text-gray-900 text-center'></h1>
                  <p className='tex-md mb-2 p-1 text-center'>
                    *Each topping has base value of quantity 1, if you want
                    extra just select it twice
                  </p>
                  <hr className='mb-5' />
                  <h1 className='block mb-5 text-lg font-medium text-gray-900 text-left'>
                    Meat Options:
                  </h1>

                  <div id='nested-flex-container' className='nested-flex-meat'>
                    <div id='nested-col-1' className='px-2'>
                      <div className='mb-5'>
                        <label
                          htmlFor='meat-topping'
                          className='block mb-2 text-sm font-medium text-gray-900'
                        >
                          Select Meat #1
                        </label>
                        <select
                           value={newPizza.meatTopping}
                           onChange={(e) =>
                             setOrder({ ...newPizza, meatTopping: e.target.value })
                           }
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
                          Select Meat #2
                        </label>
                        <select
                      value={newPizza.meatTopping}
                      onChange={(e) =>
                        setOrder({ ...newPizza, meatTopping: e.target.value })
                      }
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
                          Select Meat #3
                        </label>
                        <select
                        value={newPizza.meatTopping}
                        onChange={(e) =>
                          setOrder({ ...newPizza, meatTopping: e.target.value })
                        }
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
                  <h1 className='block mb-5 text-lg font-medium text-gray-900 text-left'>
                    Veggie Options:
                  </h1>

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
                          Select Veggies #1
                        </label>
                        <select
                        value={newPizza.veggieTopping}
                        onChange={(e) =>
                          setOrder({ ...newPizza, veggieTopping: e.target.value })
                        }
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
                          Select Veggies #2
                        </label>
                        <select
                             value={newPizza.veggieTopping}
                             onChange={(e) =>
                               setOrder({ ...newPizza, veggieTopping: e.target.value })
                             }
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
                          Select Veggies #3
                        </label>
                        <select
                             value={newPizza.veggieTopping}
                             onChange={(e) =>
                               setOrder({ ...newPizza, veggieTopping: e.target.value })
                             }
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
                          Select Veggies #4
                        </label>
                        <select
                          value={newPizza.veggieTopping}
                          onChange={(e) =>
                            setOrder({ ...newPizza, veggieTopping: e.target.value })
                          }
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
                    // onClick={handleSubmit}
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
                    Submit New Pizza
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

export default AdminBuilderCreate
