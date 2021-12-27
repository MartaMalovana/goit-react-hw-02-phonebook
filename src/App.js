import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };
  
  handleChange = event => {
    this.setState ({
     filter:  event.currentTarget.value,
    });
   };

  addContact = ({newName, newNumber}) => {
    this.setState(prev => {
      return {contacts: [...prev.contacts, {name: newName, number: newNumber, key: nanoid()}]};
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => 
      contact.name.toLowerCase()
      .includes(this.state.filter.toLowerCase())
    );
  }

  render () {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        
        <h2 id="title-phonebook">Phonebook</h2>
        <ContactForm formSubmit={this.addContact}></ContactForm>
        
        <h2 id='contacts-title'>Contacts</h2>
        <Filter onChange={this.handleChange} filter={this.state.filter}></Filter>
        <ContactsList data={filteredContacts}></ContactsList>

      </div>
    );
  };
};

