import { useEffect, useState } from "react";
import { axiosPublic } from "../../../axiosPublic";

const CompleteTask = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/getTasks?status=complete`).then((data) => {
      setTasks(data.data);
    });
  }, []);
  console.log(tasks);
  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Complete Tasks</h2>
        <ul>
          <li className="flex justify-between items-center py-2 border-b border-gray-200">
            <p className="text-gray-800">Task 1</p>
            <p className="text-gray-600">Priority: High</p>
          </li>
          <li className="flex justify-between items-center py-2 border-b border-gray-200">
            <p className="text-gray-800">Task 2</p>
            <p className="text-gray-600">Priority: Medium</p>
          </li>
          <li className="flex justify-between items-center py-2 border-b border-gray-200">
            <p className="text-gray-800">Task 3</p>
            <p className="text-gray-600">Priority: Low</p>
          </li>
          <li className="flex justify-between items-center py-2 border-b border-gray-200">
            <p className="text-gray-800">Task 4</p>
            <p className="text-gray-600">Priority: High</p>
          </li>
          <li className="flex justify-between items-center py-2">
            <p className="text-gray-800">Task 5</p>
            <p className="text-gray-600">Priority: Medium</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompleteTask;
