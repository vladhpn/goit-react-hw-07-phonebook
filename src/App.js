import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { ToastContainer } from 'react-toastify';
import { operations, selectors } from './redux/contacts';
import Spinner from './components/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <Form />
        <Filter />
        {this.props.isLoadingContacts ? <Spinner /> : <ContactList />}
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: selectors.getIsLoading(state),
});

const mapDispatchToProps = dispacth => ({
  fetchContacts: () => dispacth(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
