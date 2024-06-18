import React from "react";
import { toggleCompletedTask, editTask } from "../redux/actions/taskAction";
import { useDispatch } from "react-redux";

const Task = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const onEditTask = () => dispatch(editTask(todo));
  return (
    <li>
      {todo.description}
      <button onClick={onEditTask}>edit</button>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.isDone}
        onClick={() => dispatch(toggleCompletedTask(todo.id))}
      />
    </li>
  );
};

export default Task;
