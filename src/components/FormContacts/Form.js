import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/phonebook/phonebook-actions";
import "./Form.css";
class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };


  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }),

  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addContact: data => dispatch(contactActions.addContact(data)),
})


export default connect(null, mapDispatchToProps)(Form);
