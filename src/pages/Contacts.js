import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { selectIsLoading } from 'redux/contacts/selectors';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { ContactsCounter } from 'components/ContactsCounter/ContactsCounter';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title>Your contacts</title>
      <h1>Your contacts book</h1>
      <ContactsCounter />
      {/* </Helmet> */}
      <div>{isLoading && 'Request in progress...'}</div>
      <FormAddContact />
      <Filter />
      <ContactList />
    </>
  );
}
