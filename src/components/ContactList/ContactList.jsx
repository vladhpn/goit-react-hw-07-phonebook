import { connect } from 'react-redux'
import { operations, selectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'


const ContactList = ({contacts, onDeleteContact }) =>{return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={()=> onDeleteContact(id)}>Delete</button>
        </li>)}
        </ul> </>);
    } 

    ContactList.propTypes = {
     onDeleteContact: PropTypes.func.isRequired
    }

      const mapStateToProps = state => ({
        contacts: selectors.getVisibleContacts(state)
    })
    const mapDispatchToProps = dispatch => ({
        onDeleteContact: (id) => dispatch(operations.deleteContact(id)),
    })
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
