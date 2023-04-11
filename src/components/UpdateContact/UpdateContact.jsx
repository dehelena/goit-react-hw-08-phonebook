import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import {
  BtnWrapperStyled,
  FormStyled,
  TypographyStyled,
} from './UpdateContact.styled';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateContact({ id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    const { name, number } = contacts.find(el => el.id === id);
    setName(name);
    setNumber(number);
  }, [contacts, id]);

  const handleUpdate = e => {
    e.preventDefault();

    const updatedContact = {
      name,
      number,
      id,
    };
    dispatch(updateContact(updatedContact));
    handleClose();
  };

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //         case 'name':
  //             setName(value);
  //             break;
  //         case 'number':
  //             setNumber(value);
  //             break;
  //       default:
  //         break;
  //     }
  //   };

  return (
    <div>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TypographyStyled id="modal-modal-title" variant="h6" component="h2">
            Update contact
          </TypographyStyled>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="span"
          >
            <form onSubmit={handleUpdate}>
              <FormStyled>
                <label className="label">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
                <label className="label">
                  <span>Number</span>
                  <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    required
                  />
                </label>
              </FormStyled>
              <BtnWrapperStyled>
                <button
                  type="submit"
                  size="md"
                  variant={'soft'}
                  color="success"
                >
                  Update
                </button>
                <button
                  type="submit"
                  size="md"
                  variant={'soft'}
                  color="success"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </BtnWrapperStyled>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
