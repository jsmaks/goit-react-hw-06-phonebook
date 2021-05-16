import React, { Component } from "react";

import Form from "../components/FormContacts/Form";
import Contacts from "../components/Contacts/ContactsList";
import Filter from "../components/Filter/Filter";
import Container from "../components/Container/Container";

class Phonebook extends Component {
    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {this.setState({ contacts: parsedContacts });}
    //   }
    
    //   componentDidUpdate(prevProps, prevState) {
    //     if (this.state.contacts !== prevState.contacts) {
    //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    //   }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Container>
    );
  }
}

export default Phonebook;
