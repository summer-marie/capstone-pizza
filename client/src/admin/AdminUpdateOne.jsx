import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import AlertSuccess from "../components/AlertSuccess";
import { pizzaGetOne, builderUpdateOne } from "../redux/builderSlice";

const successMsg = "Pizza was updated successfully";
const successDescription = "navigating you back to the admin menu....";

// Options for sauce, meat, and veggie toppings - dropdowns
const sauceOptions = [
  { name: "Signature Red Sauce", description: "Classic red sauce", price: 1.0 },
  {
    name: "Signature White Sauce",
    description: "Creamy white sauce",
    price: 1.0,
  },
];

const meatOptions = [
  { name: "Pepperoni", description: "Pepperoni", price: 1.0, itemType: "meat" },
  { name: "Sausage", description: "Sausage", price: 1.0, itemType: "meat" },
  { name: "Chicken", description: "Chicken", price: 1.0, itemType: "meat" },
  { name: "Bacon", description: "Bacon", price: 1.0, itemType: "meat" },
];

const veggieOptions = [
  {
    name: "Mushrooms",
    description: "Mushrooms",
    price: 0.75,
    itemType: "veggie",
  },
  {
    name: "Peppers",
    description: "Bell Peppers",
    price: 0.75,
    itemType: "veggie",
  },
  { name: "Onions", description: "Onions", price: 0.75, itemType: "veggie" },
  {
    name: "Pineapple",
    description: "Pineapple",
    price: 0.75,
    itemType: "veggie",
  },
];

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
];

const AdminUpdateOne = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const builder = useSelector((state) => state.builder.builder);
  const { id } = useParams();
  console.log("pizza", id);

  const [pizzaForm, setPizzaForm] = useState(null);

  // Initialize pizzaForm with builder data
  useEffect(() => {
    dispatch(pizzaGetOne(id));
  }, [dispatch, id]);

  // Update pizzaForm when builder data changes
  useEffect(() => {
    if (builder) {
      setPizzaForm({ ...builder });
    }
  }, [builder]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizzaForm({ ...pizzaForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(builderUpdateOne({ ...pizzaForm, id })).then(() => {
      setShowSuccessAlert(true);
      setTimeout(() => navigate("/admin-menu"), 2000);
    });
  };

  if (!pizzaForm) return <div>Loading...</div>;

  return (
    <>
      <div className="ml-64 px-4">
        <h2 className="berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800">
          Update Pizza Page
        </h2>
        <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700" />
        {/*  Back button */}
        <button
          onClick={() => navigate("/admin-menu")}
          type="button"
          className="absolute top-5 right-10 w-65 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-green-800/80 
                text-white 
                from-green-950
                via-green-500 
                to-green-600
                focus:ring-green-800"
        >
          <svg
            className="w-6 h-5 text-gray-800 inline-block left-0 absolute"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <div className="h-screen">
          <div className="flex flex-wrap flex-row-reverse justify-center mb-20">
            <form onSubmit={handleSubmit} className="w-5/8 mb-10 min-h-screen">
              <div className="border-4 border-green-700 mb-15">
                <div className="border-4 border-white">
                  <div className="border-4 border-red-700 p-5">
                    <div className="mb-5">
                      <label
                        htmlFor="pizza-name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Pizza Name
                      </label>
                      <input
                        value={pizzaForm.pizzaName}
                        onChange={handleChange}
                        type="text"
                        id="pizza-name"
                        className="shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-200 
                        focus:bg-gray-100 focus:border-sky-700
          "
                        placeholder="Meat Lovers"
                        required
                      />
                    </div>
                    {/* Upload new Photo */}
                    <div id="imgUploader" className="max-w-lg mx-auto mb-5">
                      <label
                        className="block mb-2 text-sm font-medium pl-2 text-gray-900 capitalize"
                        htmlFor="pizza_photo"
                      >
                        Upload New photo
                      </label>
                      <input
                        className="block w-full text-lg focus:outline-none p-2 text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                        aria-describedby="pizza_photo_help"
                        id="pizza_photo"
                        type="file"
                      />
                      <div
                        className="mt-1 text-sm text-gray-500"
                        id="pizza_photo_help"
                      >
                        Add picture of desired pizza
                      </div>
                    </div>

                    <h1 className="block mb-2 text-lg font-medium text-gray-900 text-center">
                      Pizza Base
                    </h1>
                    <hr className="mb-5" />
                    <div className="mb-5">
                      <label
                        htmlFor=""
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Crust and Cheese
                      </label>
                      <div
                        value={base[0].name}
                        type="text"
                        id="crust"
                        className="shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light cursor-not-allowed
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-400 
                        focus:bg-sky-200 focus:border-sky-700
          "
                        required
                      >
                        {/* checks crust info */}
                        {pizzaForm && pizzaForm.base && pizzaForm.base[0]
                          ? pizzaForm.base[0].name
                          : "No crust info"}{" "}
                      </div>
                      <div
                        value={base[1].name}
                        type="text"
                        id="cheese"
                        className="shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light cursor-not-allowed
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-400 
                        focus:bg-sky-200 focus:border-sky-700
          "
                        required
                      >
                        {/* checks cheese info */}
                        {pizzaForm && pizzaForm.base && pizzaForm.base[1]
                          ? pizzaForm.base[1].name
                          : "No cheese info"}
                      </div>
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="sauce"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Update Sauce Type
                      </label>
                      <select
                        value={pizzaForm.sauce}
                        onChange={(e) =>
                          setPizzaForm({
                            ...pizzaForm,
                            sauce: e.target.value,
                          })
                        }
                        id="sauce"
                        className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                      text-black 
                        placeholder-gray-500 
                        border-slate-500
                        bg-gray-200 
                        focus:bg-gray-300 
                        focus:ring-white
                        focus:border-sky-500"
                        required
                      >
                        <option value={pizzaForm.sauce} disabled>
                          {pizzaForm.sauce
                            ? `Current: ${pizzaForm.sauce}`
                            : "- - None - -"}
                        </option>
                        {sauceOptions
                          .filter((option) => option.name !== pizzaForm.sauce)
                          .map((option) => (
                            <option key={option.name} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <h1 className="block mb-2 text-lg font-medium text-gray-900 text-center">
                      Meat Options
                    </h1>
                    <hr className="mb-5" />
                    <div
                      id="nested-flex-container"
                      className="nested-flex-meat"
                    >
                      <div id="nested-col-1" className="px-2">
                        <div className="mb-5">
                          <label
                            htmlFor="meat-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Meat #1
                          </label>
                          <select
                            value={pizzaForm.meatTopping[0]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                meatTopping: [
                                  e.target.value,
                                  pizzaForm.meatTopping[1],
                                  pizzaForm.meatTopping[2],
                                ],
                              })
                            }
                            id="meat-type"
                            className="text-sm rounded-lg block w-full p-2.5 shadow-sm-light border-2
                            text-white 
                            placeholder-gray-400 
                            border-red-950
                            bg-red-800 
                            focus:bg-red-950 
                            focus:ring-red-500
                            focus:border-red-500"
                          >
                            <option value={pizzaForm.meatTopping[0]} disabled>
                              {pizzaForm.meatTopping[0]
                                ? `Current: ${pizzaForm.meatTopping[0]}`
                                : "- - None - -"}
                            </option>
                            {meatOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.meatTopping[0]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div id="nested-col-2" className="px-2">
                        <div className="mb-5">
                          <label
                            htmlFor="meat-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Meat #2
                          </label>
                          <select
                            value={pizzaForm.meatTopping[1]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                meatTopping: [
                                  pizzaForm.meatTopping[0],
                                  e.target.value,
                                  pizzaForm.meatTopping[2],
                                ],
                              })
                            }
                            id="meat-type"
                            className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                            text-white 
                            placeholder-gray-400 
                            border-red-950
                            bg-red-800 
                            focus:bg-red-950 
                            focus:ring-red-500
                            focus:border-red-500"
                          >
                            <option value={pizzaForm.meatTopping[1]} disabled>
                              {pizzaForm.meatTopping[1]
                                ? `Current: ${pizzaForm.meatTopping[1]}`
                                : "- - None - -"}
                            </option>
                            {meatOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.meatTopping[1]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div id="nested-col-3" className="px-2">
                        <div className="mb-5">
                          <label
                            htmlFor="meat-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Meat #3
                          </label>
                          <select
                            value={pizzaForm.meatTopping[2]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                meatTopping: [
                                  pizzaForm.meatTopping[0],
                                  pizzaForm.meatTopping[1],
                                  e.target.value,
                                ],
                              })
                            }
                            id="meat-type"
                            className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                                  text-white 
                                  placeholder-gray-400 
                                  border-red-950
                                  bg-red-800 
                                  focus:bg-red-950 
                                  focus:ring-red-500
                                  focus:border-red-500 "
                          >
                            <option value={pizzaForm.meatTopping[2]} disabled>
                              {pizzaForm.meatTopping[2]
                                ? `Current: ${pizzaForm.meatTopping[2]}`
                                : "- - None - -"}
                            </option>
                            {meatOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.meatTopping[2]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Nested flex with 2 cols */}
                    <h1 className="block mb-2 text-lg font-medium text-gray-900 text-center">
                      Veggie Options
                    </h1>
                    <hr className="mb-5" />
                    <div
                      id="nested-flex-container"
                      className="nested-flex-veggie"
                    >
                      {/* Nested col 1 */}
                      <div id="nested-col-1" className="px-2">
                        <div className="mb-5 ">
                          <label
                            htmlFor="veggie-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Veggies #1
                          </label>
                          <select
                            value={pizzaForm.veggieTopping[0]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                veggieTopping: [
                                  e.target.value,
                                  pizzaForm.veggieTopping[1],
                                  pizzaForm.veggieTopping[2],
                                  pizzaForm.veggieTopping[3],
                                ],
                              })
                            }
                            id="veggie-type"
                            className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                            text-white 
                            placeholder-gray-400 
                            border-green-800
                            bg-emerald-500
                            focus:bg-emerald-800
                            focus:ring-emerald-100
                            focus:border-emerald-200 "
                          >
                            <option value={pizzaForm.veggieTopping[0]} disabled>
                              {pizzaForm.veggieTopping[0]
                                ? `Current: ${pizzaForm.veggieTopping[0]}`
                                : "- - None - -"}
                            </option>
                            {veggieOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.veggieTopping[0]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>

                        <div className="mb-5">
                          <label
                            htmlFor="veggie-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Veggies #2
                          </label>
                          <select
                            value={pizzaForm.veggieTopping[1]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                veggieTopping: [
                                  pizzaForm.veggieTopping[0],
                                  e.target.value,
                                  pizzaForm.veggieTopping[2],
                                  pizzaForm.veggieTopping[3],
                                ],
                              })
                            }
                            id="veggie-type"
                            className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-green-800
                          bg-emerald-500
                          focus:bg-emerald-800
                          focus:ring-emerald-100
                          focus:border-emerald-200 "
                          >
                            <option value={pizzaForm.veggieTopping[1]} disabled>
                              {pizzaForm.veggieTopping[1]
                                ? `Current: ${pizzaForm.veggieTopping[1]}`
                                : "- - None - -"}
                            </option>
                            {veggieOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.veggieTopping[1]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      {/* Nested col 2 */}
                      <div id="nested-col-2" className="px-2">
                        <div className="mb-5">
                          <label
                            htmlFor="veggie-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Veggies #3
                          </label>
                          <select
                            value={pizzaForm.veggieTopping[2]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                veggieTopping: [
                                  pizzaForm.veggieTopping[0],
                                  pizzaForm.veggieTopping[1],
                                  e.target.value,
                                  pizzaForm.veggieTopping[3],
                                ],
                              })
                            }
                            id="veggie-type"
                            className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2
                          text-white 
                          placeholder-gray-400 
                          border-green-800
                          bg-emerald-500
                          focus:bg-emerald-800
                          focus:ring-emerald-100
                          focus:border-emerald-200 "
                          >
                            <option value={pizzaForm.veggieTopping[2]} disabled>
                              {pizzaForm.veggieTopping[2]
                                ? `Current: ${pizzaForm.veggieTopping[2]}`
                                : "- - None - -"}
                            </option>
                            {veggieOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.veggieTopping[2]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>

                        <div className="mb-5">
                          <label
                            htmlFor="veggie-topping"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Update Veggies #4
                          </label>
                          <select
                            value={pizzaForm.veggieTopping[3]}
                            onChange={(e) =>
                              setPizzaForm({
                                ...pizzaForm,
                                veggieTopping: [
                                  pizzaForm.veggieTopping[0],
                                  pizzaForm.veggieTopping[1],
                                  pizzaForm.veggieTopping[2],
                                  e.target.value,
                                ],
                              })
                            }
                            id="veggie-type"
                            className="text-sm rounded-lg block w-full p-2.5  shadow-sm-light border-2 
                            text-white 
                            placeholder-gray-400 
                            border-green-800
                            bg-emerald-500
                            focus:bg-emerald-800
                            focus:ring-emerald-100
                            focus:border-emerald-200 "
                          >
                            <option value={pizzaForm.veggieTopping[3]} disabled>
                              {pizzaForm.veggieTopping[3]
                                ? `Current: ${pizzaForm.veggieTopping[3]}`
                                : "- - None - -"}
                            </option>
                            {veggieOptions
                              .filter(
                                (option) =>
                                  option.name !== pizzaForm.veggieTopping[3]
                              )
                              .map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                                  <div className="mb-5 w-[95%] mx-auto">
                    <label
                      htmlFor="pizzaPrice"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Declare Pizza Price $
                    </label>
                    <input
                      value={newPizza.pizzaPrice}
                      // onChange={(e) =>
                      //   setNewPizza({ ...newPizza, pizzaPrice: e.target.value })
                      // }
                      type="text"
                      inputMode="decimal" // mobile keyboards
                      pattern="[0-9]*(\.[0-9]{0,2})?" // Basic HTML5 pattern
                      placeholder="00.00"
                      onChange={handlePriceChange}
                      id="pizzaPrice"
                      className="shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light
                      text-black 
                      placeholder-gray-500 
                      border-slate-500
                      bg-gray-200 
                      focus:bg-gray-100 
                      focus:border-sky-700
              "
                      required
                    />
                  </div>
                    </div>
                    <button
                      // disabled={submitDisabled}
                      onClick={handleSubmit}
                      type="submit"
                      className="flex justify-center mx-auto cursor-pointer disabled:cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:outline-none hover:bg-gradient-to-br bg-gradient-to-r  focus:ring-4 
                        shadow-green-800/80 
                        hover:text-black
                        text-white 
                        from-cyan-400 
                        via-blue-700 
                        to-cyan-600
                        focus:ring-blue-800"
                    >
                      Submit Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccessAlert && (
        <div
          className="fixed bottom-52 left-1/2
      -translate-x-1/2 
      bg-green-500 
      text-white  
      p-4          
      rounded-lg  
      shadow-lg   
      z-50        
      text-center 
      text-lg     
      animate-fade-in-up"
        >
          <AlertSuccess
            successMsg={successMsg}
            successDescription={successDescription}
          />
        </div>
      )}
    </>
  );
};

export default AdminUpdateOne;
