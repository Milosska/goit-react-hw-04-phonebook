import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'modern-normalize';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    let newContact = values;

    const check = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      resetForm({
        name: '',
        number: '',
      });
    }
  };

  handleFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleDelete = evtId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== evtId),
    });
  };

  makeFiltredContacts = () => {
    if (!this.state.filter) {
      return;
    }

    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);

    savedContacts !== null
      ? this.setState({
          contacts: JSON.parse(savedContacts),
        })
      : this.setState({
          contacts: [],
        });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filteredContacts={this.makeFiltredContacts()}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
