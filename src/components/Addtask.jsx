import React from "react";
import { addTask, filterTask, updateTask } from "../redux/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Addtask = () => {
  const [task, setTask] = useState("");
  const current = useSelector((state) => state.taskReducer.current);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (!current) {
      const newTask = {
        id: Date.now(),
        description: task,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setTask("");
    } else {
      dispatch(
        updateTask({
          id: current.id,
          description: task,
          isDone: current.isDone,
        })
      );
    }
  };
  const handleRadioClick = (e) => {
    dispatch(filterTask(e.target.id));
  };
  useEffect(() => {
    if (current) {
      setTask(current.description);
    }
  }, [current]);

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleClick}> {!current ? "Add" : "Update"}</button>
      <label htmlFor="Complete">Complete</label>
      <input
        type="radio"
        name="done"
        id="completed"
        onClick={handleRadioClick}
      />
      <label htmlFor="incomplete">Incomplete</label>
      <input
        type="radio"
        name="done"
        id="incompleted"
        onClick={handleRadioClick}
      />
      <label htmlFor="all">all</label>
      <input type="radio" name="done" id="all" onClick={handleRadioClick} />
    </div>
  );
};

export default Addtask;
