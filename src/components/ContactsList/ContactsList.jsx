import React, {Component} from "react";
import {ContactsTitle, Contact, Container} from './ContactsList.styled';
import { nanoid } from 'nanoid';

export default class ContactsList extends Component {
    render () {
        return (
            <Container>
                <ContactsTitle>Contacts</ContactsTitle>
                {this.props.contacts.map(contact => ({name: contact, id: nanoid()})).map(el => <Contact key={el.id}>{el.name}</Contact>)}
            </Container>
        );
    };
};