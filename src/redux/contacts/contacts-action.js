import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  changeFilter,
};
