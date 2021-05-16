import React, { Component } from "react";

import Form from "../components/FormContacts/Form";
import Contacts from "../components/Contacts/ContactsList";
import Filter from "../components/Filter/Filter";
import Container from "../components/Container/Container";

class Phonebook extends Component {
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
