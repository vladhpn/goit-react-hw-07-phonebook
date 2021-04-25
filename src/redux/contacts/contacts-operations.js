import axios from 'axios';
import actions from './contacts-action';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contacts = { name, number };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export default { addContact };
