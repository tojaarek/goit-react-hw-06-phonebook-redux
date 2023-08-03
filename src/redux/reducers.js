import { combineReducers } from 'redux';

const contactsInStorage = localStorage.getItem('contacts');
const parsedContactsInStorage = JSON.parse(contactsInStorage);

const contactsInitial = parsedContactsInStorage;

const contactsReducer = (state = contactsInitial, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      return [...state, action.payload];
    case 'contacts/DELETE':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitial = {
  filter: '',
};

const filtersReducer = (state = filtersInitial, action) => {
  switch (action.type) {
    case 'filters/SET':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
