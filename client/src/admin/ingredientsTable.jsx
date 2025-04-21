import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createIngredient } from "../redux/ingredientSlice"
import axios from "axios"

const IngredientsTable = () => {
  const [ingredients, setIngredients] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    itemType: "",
    price: 0.0,
  })
  const dispatch = useDispatch()

  useEffect(() => {
    // Make an API request to fetch the ingredients data
    axios
      .get("/")
      .then((res) => setIngredients(res.data))
      .catch((err) => console.error(err))
  }, [])

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
  }

  return (
    <>
      <div className='borderShadow min-h-[50%] p-20'>
        <div className='flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 rounded-2xl shadow-2xl bg-stone-300'>
          <div className='flex flex-row gap-3 pb-4'>
            <h1 className='text-3xl font-bold text-[#4B5563]  my-auto capitalize text-center'>
              add ingredient to table
            </h1>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col'>
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
                  <option value='base'>Base: Crust or Cheese</option>
                  <option value='sauce'>Sauce</option>
                  <option value='meatTopping'>Meat Topping</option>
                  <option value='veggieTopping'>Veggie Topping</option>
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
                  step="0.25" 
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
              className='w-full focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 text-[#FFFFFF] bg-cyan-800 '
            >
              Add
            </button>
          </form>
        </div>
      </div>

      {/* <table id='myTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ingredient Name</th>
            <th>Ingredient Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={ingredient._id}>
              <td>{ingredient._id}</td>
              <td>{ingredient.name}</td>
              <td>{ingredient.price}</td>
              <td>
                <button
                // onClick={() => deleteIngredient(ingredient._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  )
}

export default IngredientsTable
