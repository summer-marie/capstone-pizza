import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router"
// import {
//   orderGetOne,
//   orderTaskUpdate,
//   orderTaskDelete,
// } from "../redux/orderSlice";
// import DeleteModal from "../components/DeleteModal";
// import Spinner from "../components/Spinner";

const AdminOpenOrders = () => {
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const { order } = useSelector((state) => state.order);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { id } = useParams();

  // const initialTask = {
  //   taskIndex: 0,
  //   taskName: "",
  //   status: "",
  //   roles: [],
  //   users: [{ firstName: "", lastName: "" }],
  // };

  // const [taskForm, setTaskForm] = useState([initialTask]);

  // const [taskToDelete, setTaskToDelete] = useState(initialTask);

  const [saveBubbles, setSaveBubbles] = useState(false)
  const [loading, setLoading] = useState(false)

  // Grab order
  // useEffect(() => {
  //   console.log("TASKS: useEffect id", id);
  //   dispatch(orderGetOne(id));
  //   console.log("TASKS: order", order);
  // }, []);

  // useEffect(() => {
  //   console.log("OrderTasks useEffect order", order);
  //   console.log("OrderTasks useEffect order.tasks", order.tasks);
  //   // // console.log("order.tasks.find", order.tasks.find(task => task.users[0].firstName === ""))
  //   if (order.orderNumber !== "") {
  //     setTaskForm(order.tasks);
  //   }
  // }, [order]);

  // useEffect(() => {
  //   console.log("useEffect taskForm", taskForm);
  // }, [taskForm]);

  // const handleSave = (task) => {
  //   console.log("orderId:", id, "task:", task);
  //   setLoading(true);
  //   setSaveBubbles(true);
  //   dispatch(orderTaskUpdate({ id, task }));
  //   setTimeout(() => {
  //     setSaveBubbles(false);
  //   }, 2000);
  //   // setTaskForm(taskForm.filter((t) => t._id !== task._id))
  // };

  // const handleDelete = (task) => {
  //   console.log("handle delete", task);
  //   dispatch(orderTaskDelete({ id, taskId: task._id }));
  //   setTaskForm(taskForm.filter((t) => t._id !== task._id));
  //   // dispatch(orderTaskUpdate({id, task}));
  //   setShowDeleteModal(false);
  // };

  return (
    <>
      <h2 className='berkshireSwashFont mt-5 text-center text-2xl font-bold text-slate-800 '>
        Open Orders
      </h2>
      <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700 ' />
      <div id='openOrdersTAble' className='w-3/4 ml-[20rem]  shadow-md '>
        <table
          className='w-full mt-6 text-sm text-left rtl:text-right rounded-2xl
        text-gray-500'
        >
          <thead
            className='text-xs uppercase 
          bg-gray-400
          text-teal-950'
          >
            <tr>
              <th scope='col' className='px-4 py-4'>
                {/* **Order ID** */}
                Order Number
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Order Date** */}
                Date/Time Order
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Items in Order (Product Name, Quantity)** */}
                Order Details/Quantity
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Address (Shipping/Delivery Address)** */}
                Destination
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Name (or User Email)** */}
                Customer Name
              </th>
              <th scope='col' className='px-4 py-4'>
                {/* **Total Price** */}
                Total $
              </th>
              <th scope='col' className='px-4 py-4 text-center'>
                Status
              </th>
              <th scope='col' className='px-4 py-4 text-center'>
                Update Status
              </th>
              <th scope='col' className='px-4 py-4 text-center'>
                Archive Order
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {taskForm.map((task, index) => ( */}
            <tr
              // key={index}
              className=' border-b px-4 py-4
              odd:bg-stone-200
              even:bg-gray-300 
              border-gray-700'
            >
              <th
                scope='row'
                className='px-4 py-3
                font-medium 
                text-gray-900   '
              >
                <p className=''>0001</p>
              </th>
              <td className='px-4 py-4'>
                <p className='line-clamp-3'>3/24/2025</p>
              </td>
              <td className='px-4 py-4'>
                <p className='line-clamp-3'>Pizza 1 x1 Pizza 2 x4</p>
              </td>
              <td className='px-4 py-4'>
                {/* {" "}
                  {task.users.length > 0 && (
                    <>
                      {task.users[0].firstName} {task.users[0].lastName}
                    </>
                  )} */}{" "}
                1234 Smith Drive
              </td>
              <td className='px-4 py-4'> Sally Weston</td>
              <td className='px-4 py-4'>25.00</td>
              <td className='px-4 py-4 '>
                <select
                  // onChange={(e) =>
                  //   setTaskForm(
                  //     taskForm.map((t) =>
                  //       t._id === task._id
                  //         ? {
                  //             ...t,
                  //             submitEnabled: true,
                  //             status: e.target.value,
                  //           }
                  //         : t
                  //     )
                  //   )
                  // }
                  className='dark:text-cyan-700 bg-slate-300 rounded-xl font-semibold px-2 py-2 w-full'
                >
                  {/* <option className="text-sm">{ task.status || ("Choose a status")}</option> */}
                  <option className='text-sm'>my status</option>
                  <option
                    className='text-cyan-900 hover:text-semibold'
                    value='Pending'
                  >
                    In Progress
                  </option>
                  <option
                    className='text-cyan-900 hover:text-semibold'
                    value='Started'
                  >
                    Completed
                  </option>
                  <option
                    className='text-cyan-900 hover:text-semibold'
                    value='In Progress'
                  >
                    Delivered
                  </option>
                </select>
              </td>
              <td className='px-4 py-4'>
                <div className='group relative'>
                  {/* Spinner  */}
                  <div className='me-2 p-2 w-full absolute top-0 right-2 '>
                    {/* {saveBubbles && <Spinner loading={loading} />} */}
                  </div>
                  <button
                    // onClick={() => handleSave(task)}
                    //   onClick={handleSave}
                    // disabled={!task.submitEnabled}
                    //   disabled={false}
                    type='button'
                    className='font-medium hover:underline disabled:cursor-not-allowed  w-full h-full
                    text-blue-600 
                          disabled:hover:text-slate-400 '
                  >
                    Save Status
                  </button>
                </div>{" "}
              </td>
              <td className='px-4 py-4'>
                <div className='group relative'>
                  {/* Spinner  */}
                  <div className='me-2 p-2 w-full absolute top-0 right-2 '>
                    {/* {saveBubbles && <Spinner loading={loading} />} */}
                  </div>
                  <button
                    // onClick={() => {
                    //   setTaskToDelete(task);
                    //   setShowDeleteModal(true);
                    //   // setSaveBubbles(true)
                    // }}
                    type='button'
                    className='font-medium text-red-700 hover:underline w-full h-full'
                  >
                    Archive Order
                  </button>
                </div>{" "}
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
        {/* <DeleteModal /> */}
      </div>
      {/* {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          handleDelete={handleDelete}
          taskToDelete={taskToDelete}
        />
      )} */}
    </>
  )
}

export default AdminOpenOrders
