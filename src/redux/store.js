import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import routeReducer from "./reducers/routeReducer";
import { thunk } from "redux-thunk";

const middleware = [thunk];

export const store = createStore(
  routeReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
