import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import app from './App.module.css';
import Filter from './Filter/Filter';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');
  return (
    <div className={app.position}>
      <div className={app.app}>
        <h1 className={app.headline}>Phonebook</h1>
        <AddContactForm />
        <h2 className={app.headline}>Contacts</h2>
        <Filter filter={filter} onFilterChange={setFilter} />
        <ContactList filter={filter} />
      </div>
    </div>
  );
};
