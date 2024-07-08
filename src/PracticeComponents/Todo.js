import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [btnName, setBtnName] = useState("Add");
  const [editTask, setEditTask] = useState(null);
  const [inputVal, setInputVal] = useState([]);
  const AddTask = () => {
    if (editTask != null) {
      const updateTaks = [...inputVal];
      updateTaks[editTask] = task;
      setInputVal(updateTaks);
      setTask("");
      setEditTask(null);
      setBtnName("Add");
    } else {
      setInputVal([...inputVal, task]);
      setTask("");
    }
  };
  const handleEditTask = (id) => {
    setEditTask(id);
    setTask([inputVal], id);
    setBtnName("Edit")
  };
  const handleDeleteTask = (id) => {
    const deleteTask = [...inputVal];
    deleteTask.splice(id, 1);
    setInputVal(deleteTask);
  };
  return (
    <div>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={AddTask}>{btnName}</button>
      <div>
        {inputVal.map((ele, id) => (
          <ul key={id}>
            <li>
              {ele}
              <button onClick={() => handleDeleteTask(id)}>Delete</button>
              <button onClick={() => handleEditTask(id)}>Edit</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todo;
