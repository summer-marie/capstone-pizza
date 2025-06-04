import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { builderGetMany, builderDeleteOneAlt } from "../redux/builderSlice";
import { useSelector, useDispatch } from "react-redux";
import AlertBlack from "../components/AlertBlack";

const alertMsg = "Are you sure you want to delete?";
const alertDescription = "Click to confirm";

const AdminMenu = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { builders } = useSelector((state) => state.builder);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(builderGetMany());
  }, [dispatch]);

  // Use a ref to store the ID of the pizza to be deleted
  const deleteIdRef = useRef(null);

  const handleDeleteClick = (id) => {
    deleteIdRef.current = id;
    setShowAlert(true);
  };

  const handleConfirm = async () => {
    setShowAlert(false);
    const id = deleteIdRef.current;
    dispatch(builderDeleteOneAlt(id));
    deleteIdRef.current = null;
    console.log("Pizza deleted with ID:", id);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  const handleClick = (id) => {
    // Navigate to the EditPizza page with the selected pizza ID
    navigate(`/admin-update-one/${id}`);
  };

  return (
    <>
      <div className="ml-64 px-4">
        {/* Header  */}
        <h2 className="berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800">
          Current Customer Menu
        </h2>
        <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700 " />
        {/* Grid container Responsive */}
        <div className="mb-10 mx-auto w-full px-6 py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="drop-shadow-lg grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 mb-10">
            {/* Cards */}
            {builders.length === 0 ? (
              <p>No pizzas found.</p>
            ) : (
              builders.map((builder, index) => (
                // Card
                <div
                  key={builder.id || index}
                  // onClick={() => navigate(`/admin-update-one/${id}`)}
                  className="max-w-2xl col-1-4 rounded-lg shadow-2xl bg-zinc-300 border border-gray-200 shadow-green-600"
                >
                  <div className="relative">
                    <img
                      className="object-cover w-full rounded-t-lg h-auto rounded-s-lg"
                      src={
                        new URL("../assets/basePizza.jpg", import.meta.url).href
                      }
                      alt=""
                    />
                    <button
                      onClick={() => handleClick(builder.id)}
                      type="button"
                      className="absolute mt-2 top-0 right-0 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-green-800/80 
                text-white 
                from-green-950
                via-green-500 
                to-green-600
                focus:ring-green-800"
                    >
                      Update Pizza
                    </button>
                    <button
                      key={builder.id}
                      onClick={() => handleDeleteClick(builder.id)}
                      type="button"
                      className="absolute mt-2 top-0 left-2 font-medium rounded-lg shadow-lg  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-gradient-to-br bg-gradient-to-t  focus:ring-4 focus:outline-none cursor-pointer
                shadow-red-800/80 
                text-white 
                from-black
                via-red-500 
                to-red-600
                focus:ring-red-800"
                    >
                      Delete Pizza
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-gray-900">
                      <strong>Name: {builder.pizzaName}</strong>
                    </p>
                    <ol className="flex flex-wrap gap-x-2 ">
                      <strong className="mt-1">Pizza Base: </strong>
                      {builder.base &&
                        builder.base.map((base, baseIndex) => (
                          <li
                            className="mt-1"
                            key={`base-${index}-${baseIndex}`}
                          >
                            {base.name}
                          </li>
                        ))}
                      <strong className="mt-1">Meats: </strong>{" "}
                      {builder.meatTopping &&
                        builder.meatTopping.map(
                          (meatTopping, meatToppingIndex) => (
                            <li
                              className="mt-1"
                              key={`meat-${index}-${meatToppingIndex}`}
                            >
                              {meatTopping.name}
                            </li>
                          )
                        )}
                      <strong className="mt-1">Veggies: </strong>
                      {builder.veggieTopping &&
                        builder.veggieTopping.map(
                          (veggieTopping, veggieToppingIndex) => (
                            <li
                              className="mt-1"
                              key={`veggie-${index}-${veggieToppingIndex}`}
                            >
                              {veggieTopping.name}
                            </li>
                          )
                        )}
                    </ol>
                    <h2 className="font-bold text-lg text-gray-900">
                      {/* {home.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })} */}
                      Price $ {builder.pizzaPrice}
                    </h2>
                  </div>
                </div>
              ))
            )}
            {/* End of card */}
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="absolute top-[40%] left-[40%] z-30">
          <AlertBlack
            alertMsg={alertMsg}
            alertDescription={alertDescription}
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
          />
        </div>
      )}
    </>
  );
};

export default AdminMenu;
