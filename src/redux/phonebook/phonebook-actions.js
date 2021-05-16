/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from "uuid";
import {createAction} from '@reduxjs/toolkit'

const addContact = createAction('contacts/Add', ({ name, number })=> {
  return {
    payload: {
      id: uuidv4(),
      name: name,
      number: number,
    },
  }
} )

const deleteContact = createAction('contacts/Delete')
const changeFilter = createAction('contacts/changeFilter')

export default { addContact, deleteContact, changeFilter };
//-----------------------------------------------------------
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   },
// });