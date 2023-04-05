import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {/* <Helmet> */}
      <title>Your contacts</title>
      {/* </Helmet> */}
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}
