import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-action';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = actions;

const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  deleteContactError,
  [addContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
