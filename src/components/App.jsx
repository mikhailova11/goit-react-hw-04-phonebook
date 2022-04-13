import React, {Component} from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


class App extends Component {  
  state = {
    contacts: [
      {name: 'John Depp', id:'01',  number: '+3809999999' },
      {name: 'Lady Gaga', id:'02',  number: '+3809999998' },
      {name: 'George Clooney', id:'03', number: '+3809999997' }
    ],
    filter: ''
  }

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  deleteContact = (id) => {
    this.setState( prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  formSubmitHandler = ({name, number}) => {
    const {contacts} = this.state;

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

    this.setState((prevState)=>({
      contacts: [newContact,...prevState.contacts]
    }))
  }
  }

  changeFilter = (e) =>{
    this.setState({filter: e.currentTarget.value})    
  }

  getVizibleContact = ()=>{
    const {contacts, filter } = this.state;

    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalaizedFilter))
  
  }


    render() {
      const {contacts, filter } = this.state;

      const visibleName = this.getVizibleContact()
  
        return (
            <div className={s.container}>
                <h2 className={s.title}>Phonebook</h2>
                <ContactForm formSubmitHandler={this.formSubmitHandler} contacts={contacts} />

                <h2 className={s.title}>Contacts</h2>
                <Filter filter={filter} changeFilter={this.changeFilter} />

                {contacts.length > 0 &&
                <ContactList contacts={visibleName} deleteContact={this.deleteContact} />}

            </div>
            
        )
    }

}

export default App