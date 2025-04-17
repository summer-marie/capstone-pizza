import Jumbotron from "../components/Jumbotron"

const gardenImg = (
  <img
    className='object-cover w-full rounded-lg h-full'
    src={new URL("../assets/gardenTomato.jpg", import.meta.url).href}
    alt=''
  />
)
const doughImg = (
  <img
    className='object-cover w-full rounded-lg h-full'
    src={new URL("../assets/dough.jpg", import.meta.url).href}
    alt=''
  />
)

const herbsImg = (
  <img
    className='object-cover w-full rounded-lg h-full'
    src={new URL("../assets/herbs.jpg", import.meta.url).href}
    alt=''
  />
)
const peppersImg = (
  <img
    className='object-cover w-full h-100 rounded-lg'
    src={new URL("../assets/peppers.jpg", import.meta.url).href}
    alt=''
  />
)
const sauceImg = (
  <img
    className='object-cover w-full rounded-lg h-100'
    src={new URL("../assets/sauce.jpg", import.meta.url).href}
    alt=''
  />
)

const ourIngredients = (
  <div className='text-2xl cursiveFont text-black  text-center p-3'>
    <h1 className='text-2xl font-bold text-slate-800 m-2 text-shadow-gray-700 text-shadow-sm'>
      From Hearth to Table: Exquisite Ingredients Crafted with Local Flavor
    </h1>
    <hr className='p-1 border-gray-700 ' />
    <p className='p-2'>
      We pride ourselves on using only the freshest, highest quality ingredients
      in every creation. We believe that great-tasting pizza starts with
      sourcing top-notch ingredients.
    </p>
    <p className='p-2'>
      Our tomatoes, come from sun-ripened vine-grown varieties that provide the
      ideal balance of sweetness, acidity, and flavor for an exceptional pizza
      sauce.
    </p>
    <p className='p-2'>
      We source our cheeses from artisanal dairies that adhere to traditional
      methods, ensuring a rich, creamy texture and robust flavor in every slice.
      Our meats are carefully selected and prepared, with lean cuts and bold
      flavors to create mouthwatering combinations.
    </p>
    <p className='p-2'>
      From the freshest vegetables to our carefully crafted dough, we go the
      extra mile to bring you a pizza experience that's unparalleled in taste
      and quality. When you choose our pizzas, you can beconfident that you're
      enjoying a meal made with passion, skill, and the finest ingredients
      available.
    </p>
  </div>
)

const ourPurpose = (
  <div className='text-2xl cursiveFont font-medium text-black text-center p-3'>
    <h1 className='text-2xl font-bold text-black m-2 p-2  text-shadow-gray-600 text-shadow-sm'>
      Our Purpose
    </h1>
    <hr className='p-1 border-black mb-1' />
    <p className='p-2'>
      Welcome to OverTheWall! Our purpose is rooted in creating delicious,
      comforting, and uniquely crafted pizzas that bring people together. We
      started this small business from our backyard because we believe in the
      power of simple, hearty food to connect families, friends, and neighbors.
    </p>
    <p className='p-2'>
      {" "}
      At OverTheWall, we focus on using high-quality ingredients with care,
      inspired by Boston-style pizza traditions, to deliver an experience that
      feels like homemade but is made fresh just for you. We take pride in
      creating a family-friendly space where everyone can gather, savor, and
      enjoy something truly special.{" "}
    </p>
    <p className='p-2'>
      {" "}
      Thank you for supporting our mission to bring quality, flavor, and warmth
      into your community!
    </p>
  </div>
)

const ourMissionStatement = (
  <div className='text-2xl cursiveFont text-black text-center p-3 '>
    <h1 className='text-3xl font-bold text-black m-2 p-2  text-shadow-gray-800 text-shadow-sm'>
      Boston-Bred Classics: Savoring Neighbors Close by
    </h1>
    <hr className='border-black mb-1 p-1' />
    <p className='p-2'>
      Our mission, we believe in the power of home-cooked meals to bring people
      together. We love our neighbors deeply, and we think it's only right that
      we return the favor by sharing recipes that comfort and connect us all.
      Every bite is more than just food—it's a moment to share, a connection to
      something greater than ourselves.
    </p>
    <p className='p-2'>
      Cooking with care and love from our kitchen (and a few rolling pin
      muscles), we create pizzas and dishes that reflect the heart of Boston
      style—classic flavors with unexpected twists, all made with quality
      ingredients you'll treasure.
    </p>
    <p className='p-2'>
      Let's raise a slice together, celebrate life's good moments, and enjoy a
      meal that feels as much at home on your plate as it does in our heart."
    </p>
  </div>
)

const Home = () => {
  return (
    <>
      <div>
        <Jumbotron />
      </div>
      <div className='grid grid-cols-3 xl:grid-cols-3 gap-5 px-4 py-4 mb-15 ms-5'>
        <div className='w-full bg-red-900 rounded-xl shadow-2xl shadow-black'>
          {gardenImg}{" "}
        </div>
        <div className='w-full bg-green-200 rounded-xl col-span-2 shadow-2xl shadow-green-900'>
          {ourIngredients}{" "}
        </div>

        <div className='w-full bg-white shadow-black rounded-xl col-span-2 shadow-2xl'>
          {ourPurpose}
        </div>
        <div className='w-full bg-red-900 rounded-xl shadow-2xl shadow-black'>
          {doughImg}{" "}
        </div>

        <div className='w-full bg-red-900 rounded-xl shadow-2xl shadow-black'>
          {herbsImg}{" "}
        </div>
        <div className='w-full bg-red-900 rounded-xl col-span-2  shadow-2xl shadow-red-600'>
          {ourMissionStatement}
        </div>
      </div>
    </>
  )
}

export default Home
