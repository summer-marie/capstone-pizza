import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  createIngredient,
  ingredientGetAll,
  ingredientUpdateOne,
  ingredientGetOne,
} from "../redux/ingredientSlice"
import AlertBlack from "../components/AlertBlack"
import SpinnerBubbles from "../components/SpinnerBubbles"

// Add new ingredient modal
const IngredientModal = ({ isOpen, onClose, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    itemType: "",
    price: 0,
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "price") {
      setFormData((prevState) => ({
        ...prevState,
        price: parseFloat(value),
        formattedPrice: `${parseFloat(value).toFixed(2)}`,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handle submit")
    const newIngredient = {
      name: formData.name,
      description: formData.description,
      itemType: formData.itemType,
      price: formData.price,
    }
    dispatch(createIngredient(newIngredient))
    /// Show sucess alert
    setShowModal(false)
  }

  if (!isOpen) return null

  return (
    <>
      <div className='min-h-[50%] p-2'>
        <div className='flex flex-col w-auto md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 rounded-2xl shadow-2xl shadow-cyan-800/80  bg-stone-300'>
          <div className='flex flex-row gap-3 pb-4 '>
            <h1 className='text-3xl font-bold text-[#4B5563] mx-auto my-auto capitalize text-center'>
              add ingredient to table
            </h1>
          </div>
          {/* shadow-lg shadow-cyan-800/80  */}

          <form onSubmit={handleSubmit} className='flex flex-col '>
            <div className='pb-2'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-[#111827]'
              >
                Item Name
              </label>
              <div className=' text-gray-400'>
                <input
                  type='text'
                  id='name'
                  // value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className='pl-5 mb-2 focus:border-transparent sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden  block w-full p-2.5 rounded-l-lg py-3 px-4
                  bg-gray-50 
                  text-gray-600 border 
                  border-gray-300 
                  focus:ring-gray-400'
                  required
                />
              </div>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-[#111827]'
              >
                Item Description
              </label>
              <div className=' text-gray-400'>
                <input
                  type='text'
                  id='discription'
                  // value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className='pl-5 mb-2 focus:border-transparent sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden  block w-full p-2.5 rounded-l-lg py-3 px-4
                  bg-gray-50 
                  text-gray-600 border 
                  border-gray-300 
                  focus:ring-gray-400'
                />
              </div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-[#111827]'
              >
                Item Type (Catagory)
              </label>
              <div className=' text-gray-400'>
                <select
                  // value={formData.itemType}
                  onChange={(e) =>
                    setFormData({ ...formData, itemType: e.target.value })
                  }
                  id='meat-type'
                  className='text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2 capitalize
                          text-white 
                          placeholder-gray-400 
                          border-cyan-950
                          bg-cyan-800 
                          focus:bg-cyan-950 
                          focus:ring-cyan-500
                          focus:border-cyan-500'
                >
                  <option defaultValue>Select type from list</option>
                  <option value='Base'>Base: Crust or Cheese</option>
                  <option value='Sauce'>Sauce</option>
                  <option value='Meat Topping'>Meat Topping</option>
                  <option value='Veggie Topping'>Veggie Topping</option>
                </select>
              </div>
            </div>
            <div className='pb-6'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-[#111827]'
              >
                Item Price $
              </label>
              <div className=' text-gray-400'>
                <input
                  type='text'
                  id='price'
                  name='price'
                  step='0.25'
                  // value={formData.price}
                  onChange={handleChange}
                  className='pl-5 mb-2 border focus:border-transparent sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden block w-full p-2.5 rounded-l-lg py-3 px-4
                    bg-gray-50 
                    text-gray-600 
                    border-gray-300 
                    focus:ring-gray-400'
                  required
                />
              </div>
            </div>
            <button
              type='submit'
              className='cursor-pointer w-full focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 
              text-[#FFFFFF] 
              bg-cyan-800 
              hover:bg-cyan-600 '
            >
              Add
            </button>
            <button
              onClick={onClose}
              name='close-button'
              type='button'
              className='cursor-pointer w-full focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 
              text-[#FFFFFF] 
              bg-black 
              hover:bg-slate-800'
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

const alertMsg = "Are you sure you want to delete?"
const alertDesription = "Ingredient will permenitly removed from data set"

const IngredientsTable = () => {
  const { ingredients } = useSelector((state) => state.ingredient)
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [editing, setEditing] = useState({})
  const [saveBubbles, setSaveBubbles] = useState(false)
  const [loading, setLoading] = useState(false)

  const itemTypesArray = ["Sauce", "Meat Topping", "Veggie Topping"]

  const dispatch = useDispatch()

  // Grab ingredients from database
  useEffect(() => {
    dispatch(ingredientGetAll())
  }, [])

  useEffect(() => {
    console.log(editing)
  }, [editing])

  // Add New ingredient Modal
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleUpdate = () => {
    console.log("handleUpdate", editing)
    setLoading(true)
    setSaveBubbles(true)
    // Dispatch service
    dispatch(ingredientUpdateOne(editing))
    // Reset editing ingredient data
    setEditing({})
    setTimeout(() => {
      setSaveBubbles(false)
    }, 2000)
  }

  // Alert functions
  const handleCancel = () => {
    setShowAlert(false)
  }
  const handleConfirm = () => {
    setShowAlert(false)
    // handle delete
    console.log("delete ingredient")
  }

  return (
    <>
      {/* Centers Button above table */}
      <div className='flex items-center justify-center w-full'>
        <button onClick={handleOpenModal} className='p-5'>
          <div
            className='cursor-pointer w-full focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg
                   shadow-cyan-800/80 
              text-[#FFFFFF] 
              bg-cyan-800 
              hover:bg-cyan-600 '
          >
            <p className='text-2xl text-gray-300'>Add Ingredient</p>
          </div>
        </button>
      </div>
      <IngredientModal
        isOpen={showModal}
        onClose={handleCloseModal}
        setShowModal={setShowModal}
      />

      {/*  Table container  */}
      <div className='mt-0'>
        <div name='ingredients-table' className='w-3/4 ml-[20rem] shadow-2xl'>
          <table
            className='w-full text-sm text-left rtl:text-right rounded-2xl
            text-gray-500 shadow-lg shadow-cyan-800/80 '
          >
            <thead
              className='text-xs uppercase 
              bg-gray-400
              text-teal-950'
            >
              <tr>
                <th scope='col' className='px-2 py-4'>
                  ID
                </th>
                <th scope='col' className='px-2 py-4'>
                  catagory
                </th>
                <th scope='col' className='px-2 py-4'>
                  name
                </th>
                <th scope='col' className='px-2 py-4'>
                  description
                </th>
                <th scope='col' className='px-2 py-4 text-center'>
                  $ price per serving
                </th>
                <th scope='col' className='px-2 py-4 text-center'>
                  Update
                </th>
                <th scope='col' className='px-2 py-4 text-center'>
                  delete
                </th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr
                  key={index}
                  ingredient={ingredient}
                  className=' border-b px-2 py-2
                  odd:bg-stone-200
                  even:bg-gray-300 
                  border-gray-700'
                >
                  <th
                    scope='row'
                    className='px-2 py-2 font-medium 
                    text-gray-900'
                  >
                    {/* {ingredient.id} */}
                  </th>
                  <td // itemType
                    className='px-2 py-2'
                  >
                    {editing.id === ingredient.id ? (
                      <select
                        className='bg-white rounded-2xl p-2 w-full'
                        value={editing.itemType}
                        onChange={(e) =>
                          setEditing({ ...editing, itemType: e.target.value })
                        }
                      >
                        <option defaultValue={ingredient.itemType}>
                          <strong className='text-black text-lg'>
                            {ingredient.itemType}
                          </strong>
                        </option>
                        {/* Only show types that are different from default */}
                        {ingredient.itemType &&
                          [...itemTypesArray]
                            .filter((type) => type !== ingredient.itemType)
                            .map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                      </select>
                    ) : (
                      ingredient.itemType
                    )}
                  </td>

                  <td // Name
                    className='px-2 py-2'
                  >
                    {editing.id === ingredient.id ? (
                      <input
                        className='bg-white rounded-2xl p-2 w-full'
                        value={editing.name}
                        onChange={(e) =>
                          setEditing({ ...editing, name: e.target.value })
                        }
                      />
                    ) : (
                      ingredient.name
                    )}
                  </td>
                  <td
                    // description
                    className='px-2 py-2'
                  >
                    {editing.id === ingredient.id ? (
                      <input
                        className='bg-white rounded-2xl p-2  w-full'
                        value={editing.description}
                        onChange={(e) =>
                          setEditing({
                            ...editing,
                            description: e.target.value,
                          })
                        }
                      />
                    ) : (
                      ingredient.description
                    )}
                    {/* Spinner  */}
                    <div className='flex justify-end top-0 right-0'>
                      {saveBubbles && editing.id === ingredient._id && (
                        <SpinnerBubbles loading={loading[ingredient._id]} />
                      )}
                    </div>
                  </td>
                  <td // Price
                    className='px-2 py-2 text-center'
                  >
                    $
                    {editing.id === ingredient.id ? (
                      <input
                        className='bg-white rounded-2xl p-2'
                        value={editing.price}
                        onChange={(e) =>
                          setEditing({ ...editing, price: e.target.value })
                        }
                      />
                    ) : (
                      ingredient.price
                    )}
                  </td>

                  <td className='px-2 py-2'>
                    {editing.id === ingredient.id ? (
                      <button
                        type='button'
                        className='font-medium hover:underline text-lg disabled:cursor-not-allowed  w-full h-full cursor-pointer
                        text-cyan-600'
                        onClick={(e) => handleUpdate()}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type='button'
                        className='font-medium hover:underline text-lg disabled:cursor-not-allowed  w-full h-full cursor-pointer
                        text-cyan-600'
                        onClick={(e) => setEditing({ ...ingredient })}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                  <td className='px-2 py-2'>
                    <button
                      onClick={() => {
                        setShowAlert(true)
                      }}
                      type='button'
                      className='font-medium  cursor-pointer
                      text-red-700 w-full h-full border-3 rounded-xl hover:bg-red-700 
                      hover:text-white 
                      hover:border-black'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAlert && (
        <div className='absolute top-[40%] left-[40%] z-30 min-w-sm'>
          <AlertBlack
            alertMsg={alertMsg}
            alertDesription={alertDesription}
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
          />
        </div>
      )}
    </>
  )
}

export default IngredientsTable

{
  /* <button
type='button'
className='font-medium hover:underline text-lg disabled:cursor-not-allowed  w-full h-full cursor-pointer
text-cyan-600'
onClick={() => saveChanges(index)}
>
Save
</button> */
}
