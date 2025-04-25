// TODO: Confirmation modal for Delete
// Update button = go to details page of pizza where you can edit the ingredients
import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react"
import { builderGetMany } from "../redux/builderSlice"
import { useSelector, useDispatch } from "react-redux"
import AlertBlack from "../components/AlertBlack"

const alertMsg = "Are you sure you want to delete?"
const alertDesription = "Click to confirm"

const AdminMenu = () => {
  const [showAlert, setShowAlert] = useState(false)
  const { builders } = useSelector((state) => state.builder)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(builderGetMany())
    console.log("useEffect", builders)
  }, [])

  const handleCancel = () => {
    setShowAlert(false)
  }
  const handleConfirm = () => {
    setShowAlert(false)
    // handle delete of pizza
    console.log("delete pizza")
  }

  const handleClick = (id) => {
    // Navigate to the EditPizza page with the selected pizza ID
    navigate(`/admin-update-one/${id}`)
  }


  return (
    <>
      {/* Header  */}
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Current Customer Menu
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 ' />
      {/* Grid container Responsive */}
      <div className='mb-10 mx-auto ml-[20rem] w-full px-6 py-2 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='drop-shadow-lg grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 mb-10'>
          {/* Cards */}
          {builders.map((builder, index) => (
            <div
              key={builder.id}
              className='max-w-2xl col-1-4 rounded-lg shadow-2xl bg-zinc-300 border border-gray-200 shadow-green-600'
            >
              <div className='relative'>
                <img
                  className='object-cover w-full rounded-t-lg h-auto rounded-s-lg'
                  src={new URL("../assets/basePizza.jpg", import.meta.url).href}
                  alt=''
                />
                <button
                  // onClick={() => navigate(`/admin-update-one/${id}`)}
                  onClick={() => handleClick(builder.id)}
                  type='button'
                  className='absolute mt-2 top-0 right-0 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-green-800/80 
                text-white 
                from-green-950
                via-green-500 
                to-green-600
                focus:ring-green-800'
                >
                  Update Pizza
                </button>
                <button
                  onClick={() => setShowAlert(true)}
                  type='button'
                  className='absolute mt-2 top-0 left-2 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-red-800/80 
                text-white 
                from-black
                via-red-500 
                to-red-600
                focus:ring-red-800'
                >
                  Delete Pizza
                </button>
              </div>
              <div className='p-3'>
                <p className='text-gray-900'>
                  <strong>Name: {builder.pizzaName}</strong>
                </p>
                <ol className='flex flex-wrap gap-x-2 '>
                  <strong className='mt-1'>Pizza Base: </strong>
                  {builder.base &&
                    builder.base.map((base, baseIndex) => (
                      <li
                        className='mt-1'
                        key={`meat-topping-${index}-${baseIndex}`}
                      >
                        {base.name}
                      </li>
                    ))}
                  <strong className='mt-1'>Meats: </strong>{" "}
                  {builder.meatTopping &&
                    builder.meatTopping.map((meatTopping, meatToppingIndex) => (
                      <li
                        className='mt-1'
                        key={`meat-topping-${index}-${meatToppingIndex}`}
                      >
                        {meatTopping.name}
                      </li>
                    ))}
                  <strong className='mt-1'>Veggies: </strong>
                  {builder.veggieTopping &&
                    builder.veggieTopping.map(
                      (veggieTopping, veggieToppingIndex) => (
                        <li
                          className='mt-1'
                          key={`meat-topping-${index}-${veggieToppingIndex}`}
                        >
                          {veggieTopping.name}
                        </li>
                      )
                    )}
                </ol>
                <h2 className='font-bold text-lg text-gray-900'>
                  {/* {home.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })} */}
                  Price $ {builder.pizzaPrice}
                </h2>
              </div>
            </div>
          ))}
          {/* End of card */}
        </div>
      </div>

      {showAlert && (
        <div className='absolute top-[40%] left-[40%] z-30'>
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

export default AdminMenu
