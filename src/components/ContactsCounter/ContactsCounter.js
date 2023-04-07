import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsCounter = () => {
  const contacts = useSelector(selectContacts);

  const count = contacts.reduce(acc => {
    return (acc += 1);
  }, 0);

  return (
    <div>
      <p>You have {count} contacts</p>
    </div>
  );
};
