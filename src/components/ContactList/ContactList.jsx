import { List, Item } from './ContactList.styled';
import { Button } from 'components/Phonebook/Phonebook.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilterContacts } from 'redux/selectors';
const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(item => {
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
