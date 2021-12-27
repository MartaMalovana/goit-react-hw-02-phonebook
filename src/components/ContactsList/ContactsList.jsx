import React, {Component} from "react";
import {Contact, Container} from './ContactsList.styled';

export default class ContactsList extends Component {
    
    render () {
        console.log(this.props.data);
        return (
            <Container>
                {this.props.data
                .map(contact =><Contact key={contact.key}>{contact.name}: {contact.number}</Contact>)
                }
            </Container>
        );
    };
};