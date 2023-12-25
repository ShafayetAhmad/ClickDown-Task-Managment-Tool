/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { axiosPublic } from "../../../axiosPublic";

const ListTasks = ({ status }) => {
  const [tasks, setTasks] = useState([]);
  const [dropTarget, setDropTarget] = useState("");

  useEffect(() => {
    axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
      setTasks(data.data);
    });
  }, [status]);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDropTarget(status);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTask = JSON.parse(e.dataTransfer.getData("text/plain"));
    console.log("Dropped Task:", droppedTask);
    console.log("Dropped in:", dropTarget);

    const updatedTasks = tasks.filter((task) => task._id !== droppedTask._id);
    setTasks(updatedTasks);

    axiosPublic.post("/moveTask", { droppedTask, dropTarget }).then((data) => {
      console.log(data.data);
      axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
        setTasks(data.data);
      });
    });

    setDropTarget("");
  };

  const handleDragEnd = () => {
    setDropTarget("");
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md mb-4"
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
    >
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">
          {status.charAt(0).toUpperCase() + status.slice(1)} Tasks
        </h2>
        <ul>
          {tasks.map((task, id) => (
            <li
              key={id}
              className="flex justify-between items-center py-2 border-b border-gray-200"
              draggable
              onDragStart={(e) => handleDragStart(e, task)}
              onDragEnd={handleDragEnd}
            >
              <p className="text-gray-800">{task.taskName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListTasks;
