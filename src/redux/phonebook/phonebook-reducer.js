import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [actions.changeFilter]: (_state, action) => action.payload,
});
//
export default combineReducers({
  items: items,
  filter: filterReducer,
});
//------------------------------------------------------------------------
// [actions.addContact]: (state, { payload }) =>
//   state.find(({ name }) => name.toLowerCase() === payload.name.toLowerCase())
//     ? alert(`${payload.name} is alredy in contacts`) && state
//     : [...state, payload],
//------------------------------------------------------------------------
// const itemsReducer = (state = [], { type, payload }) => {
//   if (type === actionTypes.ADD) {
//     const checkOnDuplicate = state.find(
//       ({ name }) => name.toLowerCase() === payload.name.toLowerCase()
//     );
//     if (checkOnDuplicate) {
//       alert(`${payload.name} is alredy in contacts`);
//       return state;
//     }
//     return [...state, payload];
//   }
//   switch (type) {
//     // case actionTypes.ADD:
//     //   return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case 'contacts/changeFilter':
//       return payload;

//     default:
//       return state;
//   }
// };
