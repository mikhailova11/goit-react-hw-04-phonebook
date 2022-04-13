import React,{Component} from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      }
    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
    };

      handleChangeForm = (e) =>{
        const {name, value} = e.currentTarget;
        return this.setState ({[name]: value})
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        this.props.formSubmitHandler(this.state)
        this.reset();
    
      }
      reset =() => {
          this.setState ({name: '', number: ''})
      }

    savesNewContsct = () => {
        this.setState({
            name: this.props.name,
            number: this.props.number
        })

    }

    render() {
        const {name, number} = this.state
        return (
        <form className={s.form} onSubmit = {this.handleSubmit}>
            <label className={s.label}>
                Name
                <input className={s.input}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChangeForm}
                />
            </label>
            <label className={s.label}>
                Number
                <input className={s.input}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChangeForm}
                />
            </label>

            <button className={s.button} type="submit">Add contact</button>
        </form>
    )}
}

export default ContactForm;