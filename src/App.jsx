import { Container } from './App.styled';
import PhoneBook from 'components/Phonebook/Phonebook';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
const App = () => {
  return (
    <Container>
      <h2>PhoneBook</h2>
      <PhoneBook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
