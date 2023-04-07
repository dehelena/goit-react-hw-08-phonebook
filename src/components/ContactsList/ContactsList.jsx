import React from 'react';
import { ContactStyled } from './ContactsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredTerm } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterTerm = useSelector(selectFilteredTerm);
  // const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // const onEditContact = ({ newData, contactId}) => {
  //   dispatch(patchContact({ newData, contactId }))
  // };

  return (
    <ContactStyled>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className="contactItem">
            <span>{contact.name} </span>
            <span> {contact.number} </span>
            <button
              type="button"
              // onClick={() => {
              //   onEditContact({contact.name, contact.number, contact.id});
              // }}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactStyled>
  );
};
