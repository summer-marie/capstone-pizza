import React from "react"

const AdminMenu = () => {
  return (
    <>
      <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='berkshireSwashFont text-center mb-2 text-2xl font-bold text-slate-800 '>
          Current Pizzas on Menu
        </h2>
        <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 ' />

        <div className='mt-4 drop-shadow-lg grid  grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4'>
          {/* This is where the map would start to run through pizzas to display dynamically */}
          <div className='max-w-2xl col-1-3 rounded-lg shadow bg-zinc-300 border border-gray-200'>
            <div className='relative'>
              <img
                className='object-cover w-full rounded-t-lg h-auto rounded-s-lg'
                src={new URL("../assets/basePizza.jpg", import.meta.url).href}
                alt=''
              />
              <button
                type='button'
                className='absolute mt-2 top-0 right-0 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-r  focus:ring-4 focus:outline-none
                shadow-green-800/80 
                text-white 
                from-green-400 
                via-green-500 
                to-green-600
                focus:ring-green-800'
              >
                Update Pizza
              </button>
            </div>
            <div className='p-3'>
              <p className='text-gray-900'>
                <strong>pizza.pizzaName</strong>
              </p>
              <p className='text-gray-900'>pizza.toppings</p>
              <h2 className='font-bold text-lg text-gray-900'>
                {/* {home.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })} */}
                Price: $10.00 pizza.price
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminMenu
