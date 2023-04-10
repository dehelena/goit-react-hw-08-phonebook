import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';

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

export default function UpdateContact({ contactId }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const allContacts = useSelector(selectContacts);

  const handleUpdate = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };
    dispatch(updateContact({ contact, contactId }));
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
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Update contact</b>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="span"
          >
            <form onSubmit={handleUpdate}>
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
              <button type="submit">Update</button>
              <button type="submit" onClick={handleClose}>
                Cancel
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
