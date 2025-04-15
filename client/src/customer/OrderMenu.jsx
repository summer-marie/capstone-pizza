// 11. **Payment Method**: Accept payments through popular payment gateways like PayPal, Stripe, or Square. Offer the option to pay at pickup as well.
// Build pizza. one crust, sixe, cheese
// 2 sauces
// meats
// veggies
// Special intructions text area for users
// total $$

const Order = () => {
  return (
    <>
      {/* Header */}
      <h2 className='berkshireSwashFont mt-5 text-center text-3xl font-bold text-slate-800'>
        Our Menu
      </h2>
      <h3 className='amitaFont mt-5 text-center text-2xl font-bold text-slate-800'>
        Flavor is just one click away
      </h3>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 w-[80%]' />
      {/* Flex container */}
      <div className='mx-auto max-w-[120rem]'>
        <div className='flex flex-wrap justify-center items-start flex-row sm:flex-col sm:items-center md:flex-row lg:flex-col xl:flex-row m-[3rem]'>
          {/* Card  */}
          <div
            className='max-w-sm rounded-lg shadow-2xl w-1/4 m-4 sm:w-full
          bg-white border 
          border-gray-200 '
          >
            <img
              className='object-cover w-full rounded-t-lg h-auto rounded-s-lg p-2'
              src={new URL("../assets/basePizza.jpg", import.meta.url).href}
              alt='yummy pizza picture'
            />

            <div className='px-5 pb-5'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 '>
                Meat Lovers
              </h5>
              <p>
                pizza ingredients Brick oven crust, special cheese blend,
                pepperoni, peppers, red signature sauce
              </p>

              {/* <div className='flex items-center mt-2.5 mb-5'></div> */}

              <div className='flex items-center justify-between'>
                <span className='text-3xl font-bold text-gray-900'>
                  $20.00 pizza.price
                </span>

                <button
                  type='button'
                  className='font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 top-0 right-0 shadow-lg   me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-green-800/80 hover:text-black
                text-white 
                from-green-950
                via-green-500 
                to-green-600
                focus:ring-green-800'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* End of CARD  */}

          {/* Build your own pizza card  **LEAVE OUTSIDE OF MAP*/}
          <div
            className='max-w-sm rounded-lg shadow-2xl w-1/4 m-4 sm:w-full
          bg-white border 
          border-gray-200'
          >
            <div className='relative h-0 aspect-ratio'>
              <img
                className='object-cover absolute inset-0 w-full h-full rounded-t-lg rounded-s-lg p-2'
                src={new URL("../assets/greenplus.png", import.meta.url).href}
                alt='yummy pizza picture'
              />
            </div>

            <div className='px-5 pb-5'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 '>
                Build Your Pizza
              </h5>
              <p className="mt-2 mb-2">
                Every pizza starts with a base of Brick Oven Crust and Special Blend Italian cheese. Toppings are.50 ea with a limit of 5 toppings per pie.
              </p>

              {/* <div className='flex items-center mt-2.5 mb-5'></div> */}

              <div className='flex items-center justify-between'>
                <span className='text-3xl font-bold text-gray-900'>
                  $6.00+
                </span>

                <button
                  type='button'
                  className='font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 top-0 right-0 shadow-lg   me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-cyan-800/80 hover:text-black
                text-white 
                from-cyan-950
                via-cyan-500 
                to-cyan-600
                focus:ring-cyan-800'
                >
                  Build Your Own
                </button>
              </div>
            </div>
          </div>
          {/* End of CARD  */}
        </div>
      </div>
    </>
  )
}

export default Order
