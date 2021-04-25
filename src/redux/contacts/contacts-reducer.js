import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-action';

const { addContactRequest, addContactSuccess, addContactError } = actions;

const contacts = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
