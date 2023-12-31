import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import results from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';

const getFiltersContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case 'favorite':
      return contacts.filter(contact => contact.favorite);
    default:
      return contacts;
  }
};

const ContactList = ({ filter }) => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(state => state.filters.status);
  const filterContacts = getFiltersContacts(contacts, statusFilter);

  if (!contacts || contacts.length === 0) {
    return (
      <ul className={results.list}>
        <li className={results.empty}>There is no contacts yet</li>
      </ul>
    );
  }

  const filteredContacts = filterContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  localStorage.setItem('contacts', JSON.stringify(contacts));

  return (
    <ul className={results.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactList;
