import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import results from './ContactList.module.css';

const ContactList = ({ filter }) => {
  const contacts = useSelector(getContacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  const initialContacts = [];
  const handleDelete = contactId => dispatch(deleteContact(contactId));
  localStorage.setItem('contacts', JSON.stringify(initialContacts));
  if (!contacts || contacts.length === 0) {
    return (
      <ul className={results.list}>
        <li className={results.empty}>There is no contacts yet</li>
      </ul>
    );
  }
  localStorage.setItem('contacts', JSON.stringify(contacts));
  return (
    <ul className={results.list}>
      {filteredContacts.map(contact => (
        <li className={results.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={results.button}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
