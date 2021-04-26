import { Component } from "react";
import {connect} from 'react-redux'; 
import ContactList from '../ContactList'
import operations from '../../redux/contacts/contacts-operations';


class PhoneBook extends Component {

    componentDidMount(){
        this.props.fetchContacts();
    } 

    render(){
        return(
        <ContactList />
        )
    }
}

const mapDispatchToProps = dispacth => ({
    fetchContacts: () => dispacth(operations.fetchContacts())
});

export default connect(null, mapDispatchToProps)(PhoneBook);