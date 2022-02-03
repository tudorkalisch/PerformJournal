import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "./reducers/selectUserReducer";
import { subcategoriesGradesReducer } from "./reducers/subcategoriesGradeReducer";


const reducer = combineReducers({
  selectedEmployee: userReducer,
  subcategoriesGrades: subcategoriesGradesReducer,
});

const middleware = [thunk];

const selectedEmployeeFromLocalStorage = localStorage.getItem("selectedEmployee")
  ? JSON.parse(localStorage.getItem("selectedEmployee"))
  : {};

const INITIAL_STATE = {
  selectedEmployee: selectedEmployeeFromLocalStorage,
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
