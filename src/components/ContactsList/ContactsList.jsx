import React, {Component} from "react";
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';

export default class ContactsList extends Component {
    
    clickOnDelete = event => {
        this.props.delete(event.target.name);
    }

    render () {
        console.log(this.props.data);
        return (
            <Container>
                {this.props.data
                .map(contact => {
                    return (
                        <ContactContainer key={contact.key}>
                        <Contact >{contact.name}: {contact.number}</Contact>
                        <Button type="button" name={contact.name} onClick={this.clickOnDelete}>Delete</Button>
                        </ContactContainer>
                    );
                })
                }
            </Container>
        );
    };
};