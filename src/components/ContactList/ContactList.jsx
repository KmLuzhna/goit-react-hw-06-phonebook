import { ButtonDelete, ContactEl, NewContactsList } from './ContactList.styled';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, removeContact } from '../../redux/contactsSlice';
// import { getFilter } from '../../redux/filterSlice';
import { getFilter, getContacts } from '../../redux/selector';
import { deleteTask } from "redux/contactsSlice";

export default function ContactList(task) {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const contactsToRender = getFilteredContacts()

    const handleDelete = () => dispatch(deleteTask(task.id));
    
    return (
        <NewContactsList>
            {contactsToRender.map(item =>(
                <ContactEl key={item.id}>
                    <p>
                        {item.name}: {item.number}
                    </p>
                    <ButtonDelete
                        type="button"
                        onClick={handleDelete}
                    >Delete
                    </ButtonDelete>
                </ContactEl>
            ))}
        </NewContactsList>
    );
}
