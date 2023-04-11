import React from 'react';
import { BoxStyled, ContactStyled } from './ContactsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredTerm } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateContact from 'components/UpdateContact/UpdateContact';

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

  return (
    <ContactStyled>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className="contactItem">
            <BoxStyled component="div">
              <span>{contact.name} </span>
              <span> {contact.number} </span>
            </BoxStyled>
            <BoxStyled component="div">
              <UpdateContact id={contact.id} />
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </BoxStyled>
          </li>
        );
      })}
    </ContactStyled>
  );
};
