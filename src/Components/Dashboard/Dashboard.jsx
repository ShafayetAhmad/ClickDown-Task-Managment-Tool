import { useContext, useState } from "react";
import ListTasks from "./ListTasks/ListTasks";
import { axiosPublic } from "../../axiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [taskAdded, setTaskAdded] = useState(false); // New state to trigger rerender
  const userTypes = [
    "Developers",
    "Corporate Professionals",
    "Bankers",
    "Designers",
  ];

  const [taskData, setTaskData] = useState({
    taskName: "",
    status: "todo",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Task Data:", taskData);
    axiosPublic.post("/addTask", taskData).then((data) => {
      console.log(data);
      setTaskAdded(!taskAdded);
      Swal.fire("Success!", "Your task has been added.", "success");
    });
  };

  return (
    <div className="text-center">
      <div>
        <div className="w-full  flex justify-center">
          <img
            src={user.photoURL}
            className="w-32 h-32 rounded-full"
            alt="Profile"
          />
        </div>
        <p className="font-bold text-2xl my-4">Welcome, {user.displayName}</p>
      </div>

      <div className="shadow-xl mb-8 pb-4">
        <div className="w-full mx-auto mt-4 p-6 bg-white rounded-lg  flex flex-col lg:flex-row items-center">
          <div className="flex-grow mb-4 lg:mr-4 lg:mb-0">
            <label
              htmlFor="taskName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Task Name:
            </label>
            <input
              type="text"
              name="taskName"
              value={taskData.taskName}
              onChange={handleInputChange}
              className="w-full py-2 px-4 border focus:border-gray-300 rounded-md focus:outline-none border-blue-500"
            />
          </div>
          <div className="flex-grow mb-4 lg:ml-4 lg:mb-0">
            <label
              htmlFor="status"
              className="block text-gray-700 font-semibold mb-2"
            >
              Status:
            </label>
            <select
              name="status"
              value={taskData.status}
              onChange={handleInputChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="todo">To Do</option>
              <option value="ongoing">Ongoing</option>
              <option value="complete">Complete</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Task
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Targeted Audience</h2>
        <div className="flex flex-wrap justify-center">
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className="bg-gray-200 px-4 py-2 m-2 rounded-lg shadow-md text-gray-800"
            >
              {userType}
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-8">
        <ListTasks status={"todo"}></ListTasks>
        <ListTasks status={"ongoing"}></ListTasks>
        <ListTasks status={"complete"}></ListTasks>
      </div>
    </div>
  );
};

export default Dashboard;
