import {
  ADD_TASK,
  TOGGLE_COMPLETED_TASK,
  FILTER_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "./types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const toggleCompletedTask = (payload) => {
  return {
    type: TOGGLE_COMPLETED_TASK,
    payload,
  };
};
export const filterTask = (payload) => {
  return {
    type: FILTER_TASK,
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};
