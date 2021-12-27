import React, {Component} from "react";

export default class ContactForm extends Component {

    state = {
      name: '',
    number: ''
    };

    handleChange = event => {
      this.setState ({
       [event.currentTarget.name]:  event.currentTarget.value,
      });
    };
     
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.formSubmit({newName: this.state.name, newNumber: this.state.number});
      this.setState({name: "", number: ""});
    }
    render () {
        return (<form onSubmit={this.handleSubmit}>
            <label> 
              <h3 id="title-name">Name</h3>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Sherlock Holmes"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.name}
              >
              </input>
            </label>
            <label>
              <h3 id="title-tel">Phone number</h3>
              <input
                type="tel"
                name="number"
                id="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="095-555-55-55"
                required
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.number}
              />
            </label>
            <button id="add-name" type="submit">Add contact</button>
          </form>
        );
    }
}
