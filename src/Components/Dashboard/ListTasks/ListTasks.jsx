/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { axiosPublic } from "../../../axiosPublic";
import Swal from "sweetalert2";

const ListTasks = ({ status }) => {
  const [tasks, setTasks] = useState([]);
  const [dropTarget, setDropTarget] = useState("");

  const handleDeleteTask = (id) => {
    axiosPublic.delete(`/deleteTask?id=${id}`).then((data) => {
      console.log(data.data);
      Swal.fire("Deleted!", "Your task has been deleted.", "success");
    });

    const newTasks = tasks.filter((task) => task._id != id);
    setTasks(newTasks);
  };

  useEffect(() => {
    axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
      setTasks(data.data);
    });
  }, [status]);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
    axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
      setTasks(data.data);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
      setTasks(data.data);
    });
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
      setTasks(data.data);
    });
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
    axiosPublic.get(`/getTasks?status=${status}`).then((data) => {
      setTasks(data.data);
    });
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
            <div key={id} className="flex justify-between my-3">
              <li
                className="flex justify-between items-center py-2 border-b border-gray-200"
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
                onDragEnd={handleDragEnd}
              >
                <p className="text-gray-800">{task.taskName}</p>
              </li>
              <button
                onClick={() => handleDeleteTask(task._id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListTasks;
