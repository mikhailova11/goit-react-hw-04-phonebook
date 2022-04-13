import  {useState} from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";
import { nanoid } from "nanoid";
// import PropTypes from 'prop-types';

export default function App() {
  const [contacts, setContacts] = useState([{name: 'Nata', id:'01',  number: '0999999999' }])
  const [filter, setFilter] = useState('')


  const deleteContact = (id) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id))
  }

  const formSubmitHandler = (name, number) => {
  const generateId = nanoid();

    const newContact = {
      name, 
      id: generateId,
      number,
    }

    const repeatContact = contacts.find((contact) =>{
      return contact.name.toLowerCase() === newContact.name.toLowerCase()
    })

    if(repeatContact){
      alert(` ${name} is already in contacts`) 
    } else {
      setContacts(prevState=>[newContact,...prevState])
    }
  }

  const changeFilter = (e) =>{
    setFilter(e.currentTarget.value)    
  }

  const getVizibleContact = ()=>{
    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalaizedFilter))
  
  }

  return (
    <div className={s.container}>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm formSubmitHandler={formSubmitHandler} />

        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} changeFilter={changeFilter} />

        {contacts.length > 0 &&
        <ContactList contacts={getVizibleContact()} deleteContact={deleteContact} />}

    </div>
    
)

  
 }