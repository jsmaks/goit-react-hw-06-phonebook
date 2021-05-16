import { combineReducers } from "redux";
import actionTypes from "./phonebook-types";

const itemsReducer = (state = [], { type, payload }) => {
  if (type === actionTypes.ADD) {
    const checkOnDuplicate = state.find(
      ({ name }) => name.toLowerCase() === payload.name.toLowerCase()
    );
    if (checkOnDuplicate) {
      alert(`${payload.name} is alredy in contacts`);
      return state;
    }
    return [...state, payload];
  }
  switch (type) {
    // case actionTypes.ADD:
    //   return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
