import { List, Item } from './ContactList.styled';
import { Button } from 'components/Phonebook/Phonebook.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const dispatch = useDispatch();
  return (
    <List>
      {filteredContacts.map(item => {
        return (
          <Item key={item.id}>
            <p>{item.name}: </p> <p>{item.number}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.array,
};
