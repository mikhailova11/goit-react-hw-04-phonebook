import {useState} from "react";
import s from "./ContactForm.module.css";
// import PropTypes from "prop-types";
// import { editableInputTypes } from "@testing-library/user-event/dist/utils";


export default function ContactForm ({formSubmitHandler}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        const {value, name} = e.target

        switch (name) {
            case 'name':
                setName(value)
                break;

            case 'number':
                setNumber(value)
                break;
        
            default:
                return;
        }
    }
    const  reset = () => {
        setName('');
        setNumber('');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        formSubmitHandler(name, number);
        reset();
    }


    return (
        <form className={s.form} onSubmit = {handleSubmit}>
            <label className={s.label}>
                Name
                <input className={s.input}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
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
                onChange={handleChange}
                />
            </label>

            <button className={s.button} type="submit">Add contact</button>
        </form>
    )
}
