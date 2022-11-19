// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import ContactForm from './ContactForm/ContactForm ';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Wrapper } from './ContactForm/Base.styled';

export const App = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ] );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
       setContacts([contact, ...contacts])
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = (id) => {
    const nemContactsList = contacts.filter(contact => contact.id !== id);
    setContacts([...nemContactsList])
  };

  const onFilterChange  = (event) => {
    setFilter(event.currentTarget.value)
  };


     useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

   const visibleContacts = getVisibleContacts();
 return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFilterChange} />

         {contacts.length ? (
          <ContactList
            contacts={visibleContacts}
            deleteContact={deleteContact} />
      ) : (
        <p>No contacts yet </p>
      )}
      </Wrapper>
    );


};