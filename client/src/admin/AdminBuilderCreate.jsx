/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AlertSuccess from "../components/AlertSuccess";
import { builderCreate } from "../redux/builderSlice";

const successMsg = "Pizza was created successfully!!";
const successDescription = "navigating you to the admin menu....";

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

const AdminBuilderCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newPizza, setNewPizza] = useState({
    pizzaName: "",
    pizzaPrice: "",
    base: [...base],
    sauce: "Signature Red Sauce",
    meatTopping: ["", "", ""], // 3 meat slots
    veggieTopping: ["", "", "", ""], // 4 veggie slots
    image: [],
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessAlert(true);

    // Find the selected sauce object
    const sauceObj = sauceOptions.find((s) => s.name === newPizza.sauce);

    // Build meatTopping array of objects, filter out empty selections
    const meatToppingObjs = newPizza.meatTopping
      .filter((m) => m)
      .map((meat) => {
        const found = meatOptions.find((opt) => opt.name === meat);
        return found ? { ...found, amount: 1 } : null;
      })
      .filter(Boolean);

    // Build veggieTopping array of objects, filter out empty selections
    const veggieToppingObjs = newPizza.veggieTopping
      .filter((v) => v)
      .map((veggie) => {
        const found = veggieOptions.find((opt) => opt.name === veggie);
        return found ? { ...found, amount: 1 } : null;
      })
      .filter(Boolean);

    // Convert pizzaPrice to number
    const pizzaPriceNum = parseFloat(newPizza.pizzaPrice);
    if (isNaN(pizzaPriceNum)) {
      alert("Please enter a valid price.");
      return;
    }

    const pizzaData = {
      pizzaName: newPizza.pizzaName,
      pizzaPrice: pizzaPriceNum,
      base: newPizza.base, // already correct
      sauce: sauceObj,
      meatTopping: meatToppingObjs,
      veggieTopping: veggieToppingObjs,
    };

    dispatch(builderCreate(pizzaData));

    setTimeout(() => {
      navigate("/admin-menu");
    }, 2000);
  };

  // Handler for the pizzaPrice input
  const handlePriceChange = (e) => {
    let inputValue = e.target.value;
    // Remove non-numeric characters (except for the first decimal point)
    inputValue = inputValue.replace(/[^0-9.]/g, "");
    // Handle multiple decimal points
    const parts = inputValue.split(".");
    if (parts.length > 2) {
      inputValue = parts[0] + "." + parts.slice(1).join("");
    }
    // Restrict to two decimal places
    const regex = /^\d*(\.\d{0,2})?$/;

    if (regex.test(inputValue) || inputValue === "" || inputValue === ".") {
      setNewPizza((prevPizza) => ({
        ...prevPizza,
        pizzaPrice: inputValue,
      }));
    }
  };

  return (
    <>
      <h2 className="berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800">
        Pizza Builder for Menu
      </h2>
      <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700 " />
      <div className="h-screen">
        <div className="flex flex-wrap flex-row-reverse justify-center">
          <form onSubmit={handleSubmit} className="w-1/3 mb-10 min-h-screen">
            <div className="border-4 border-green-700 mb-20">
              <div className="border-4 border-white">
                <div className="border-4 border-red-700 p-5">
                  <div className="mb-5">
                    <label
                      htmlFor="pizza-name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Create Pizza Name
                    </label>
                    <input
                      value={newPizza.pizzaName}
                      onChange={(e) =>
                        setNewPizza({
                          ...newPizza,
                          pizzaName: e.target.value,
                        })
                      }
                      type="text"
                      id="pizza-name"
                      className="shadow-sm border-2 text-sm rounded-lg block w-full p-2.5 shadow-sm-light
                      text-black 
                      placeholder-gray-500 
                      border-slate-500
                      bg-gray-200 
                      focus:bg-gray-100 
                      focus:border-sky-700
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
                      Upload photo
                    </label>
                    <input
                      className="block w-full text-lg focus:outline-none p-2 text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                      id="pizza_photo"
                      type="file"
                      accept="image/*"
                    />
                    <div
                      className="mt-1 text-sm text-gray-500"
                      id="pizza_photo_help"
                    >
                      Add image of desired pizza
                    </div>
                  </div>
                  <h1 className="block mb-2 text-lg font-medium text-gray-900 text-center">
                    Pizza Base
                  </h1>
                  <hr className="mb-5" />
                  <div className="mb-5">
                    <label
                      htmlFor="pizza-name"
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
                      focus:bg-sky-200 
                      focus:border-sky-700
              "
                    >
                      Brick Oven Crust
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
                        focus:bg-sky-200 
                        focus:border-sky-700
              "
                    >
                      Italian Blend Cheese
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="veggie-topping"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Select Sauce Type
                    </label>
                    <select
                      value={newPizza.sauce}
                      onChange={(e) =>
                        setNewPizza({ ...newPizza, sauce: e.target.value })
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
                      <option value="Signature Red Sauce">
                        Signature Red Sauce
                      </option>
                      <option value="Signature White Sauce">White Sauce</option>
                    </select>
                  </div>
                  <h1 className="block text-lg font-medium text-gray-900 text-center"></h1>
                  <p className="tex-md mb-2 p-1 text-center">
                    *Each topping has base value of quantity 1, if you want
                    extra just select it twice
                  </p>
                  <hr className="mb-5" />
                  <h1 className="block mb-5 text-lg font-medium text-gray-900 text-left">
                    Meat Options:
                  </h1>

                  <div id="nested-flex-container" className="nested-flex-meat">
                    <div id="nested-col-1" className="px-2">
                      <div className="mb-5">
                        <label
                          htmlFor="meat-topping"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Select Meat #1
                        </label>
                        <select
                          value={newPizza.meatTopping[0]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              meatTopping: [
                                e.target.value,
                                newPizza.meatTopping[1],
                                newPizza.meatTopping[2],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Pepperoni">Pepperoni</option>
                          <option value="Sausage">Sausage</option>
                          <option value="Chicken">Chicken</option>
                          <option value="Bacon">Bacon</option>
                        </select>
                      </div>
                    </div>

                    <div id="nested-col-2" className="px-2">
                      <div className="mb-5">
                        <label
                          htmlFor="meat-topping"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Select Meat #2
                        </label>
                        <select
                          value={newPizza.meatTopping[1]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              meatTopping: [
                                newPizza.meatTopping[0],
                                e.target.value,
                                newPizza.meatTopping[2],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Pepperoni">Pepperoni</option>
                          <option value="Sausage">Sausage</option>
                          <option value="Chicken">Chicken</option>
                          <option value="Bacon">Bacon</option>
                        </select>
                      </div>
                    </div>

                    <div id="nested-col-3" className="px-2">
                      <div className="mb-5">
                        <label
                          htmlFor="meat-topping"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Select Meat #3
                        </label>
                        <select
                          value={newPizza.meatTopping[2]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              meatTopping: [
                                newPizza.meatTopping[0],
                                newPizza.meatTopping[1],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Pepperoni">Pepperoni</option>
                          <option value="Sausage">Sausage</option>
                          <option value="Chicken">Chicken</option>
                          <option value="Bacon">Bacon</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Nested flex with 2 cols */}
                  <h1 className="block mb-5 text-lg font-medium text-gray-900 text-left">
                    Veggie Options:
                  </h1>

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
                          Select Veggies #1
                        </label>
                        <select
                          value={newPizza.veggieTopping[0]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              veggieTopping: [
                                e.target.value,
                                newPizza.veggieTopping[1],
                                newPizza.veggieTopping[2],
                                newPizza.veggieTopping[3],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Mushrooms">Mushrooms</option>
                          <option value="Peppers">Bell Peppers</option>
                          <option value="Onions">Onions</option>
                          <option value="Pineapple">Pineapple</option>
                        </select>
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="veggie-topping"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Select Veggies #2
                        </label>
                        <select
                          value={newPizza.veggieTopping[1]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              veggieTopping: [
                                newPizza.veggieTopping[0],
                                e.target.value,
                                newPizza.veggieTopping[2],
                                newPizza.veggieTopping[3],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Mushrooms">Mushrooms</option>
                          <option value="Peppers">Bell Peppers</option>
                          <option value="Onions">Onions</option>
                          <option value="Pineapple">Pineapple</option>
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
                          Select Veggies #3
                        </label>
                        <select
                          value={newPizza.veggieTopping[2]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              veggieTopping: [
                                newPizza.veggieTopping[0],
                                newPizza.veggieTopping[1],
                                e.target.value,
                                newPizza.veggieTopping[3],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Mushrooms">Mushrooms</option>
                          <option value="Peppers">Bell Peppers</option>
                          <option value="Onions">Onions</option>
                          <option value="Pineapple">Pineapple</option>
                        </select>
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="veggie-topping"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Select Veggies #4
                        </label>
                        <select
                          value={newPizza.veggieTopping[3]}
                          onChange={(e) =>
                            setNewPizza({
                              ...newPizza,
                              veggieTopping: [
                                newPizza.veggieTopping[0],
                                newPizza.veggieTopping[1],
                                newPizza.veggieTopping[2],
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
                          <option defaultValue>- - None - - </option>
                          <option value="Mushrooms">Mushrooms</option>
                          <option value="Peppers">Bell Peppers</option>
                          <option value="Onions">Onions</option>
                          <option value="Pineapple">Pineapple</option>
                        </select>
                      </div>
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
                  <button
                    // disabled={submitDisabled}
                    // onClick={handleSubmit}
                    type="submit"
                    className="flex justify-center mx-auto cursor-pointer disabled:cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:outline-nonehover:bg-gradient-to-br bg-gradient-to-r  focus:ring-4 focus:outline-none
                      shadow-green-800/80 
                      hover:text-black
                      text-white 
                      from-cyan-400 
                      via-blue-700 
                      to-cyan-600
                      focus:ring-blue-800"
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
        animate-fade-in-up    
        "
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

export default AdminBuilderCreate;
