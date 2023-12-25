import { useEffect, useState } from "react";
import CreateTask from "./CreateTask/CreateTask";
import ListTasks from "./ListTasks/ListTasks";
import { axiosPublic } from "../../axiosPublic";

const Dashboard = () => {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/getAllTasks`).then((data) => {
      setAllTasks(data.data);
    });
  }, []);

  const toDoTasksList = allTasks.filter((task) => task.status == "todo");
  const ongoingTasksList = allTasks.filter((task) => task.status == "ongoing");
  const completeTasksList = allTasks.filter(
    (task) => task.status == "complete"
  );
  console.log(toDoTasksList);
  console.log(ongoingTasksList);
  console.log(completeTasksList);
  const userTypes = [
    "Developers",
    "Corporate Professionals",
    "Bankers",
    "Designers",
  ];

  return (
    <div className="text-center">
      <CreateTask></CreateTask>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Who Can Benefit?</h2>
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
