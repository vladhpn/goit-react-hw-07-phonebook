import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
// import PhoneBook from './components/PhoneBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';

const App = () => (
  <>
    <Form />
    <Filter />
    <ContactList />
    {/* <PhoneBook /> */}
    <ToastContainer />
  </>
);

export default App;
