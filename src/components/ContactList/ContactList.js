import React from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({contacts, deleteContact}) => {
        return ( 
        <form>
        <ul className={s.list}>
            {contacts.map(({name, id, number}) => ( 
                <li key={id} className={s.item}>
                    <span>{name}</span>
                    <span>{number}</span>
                    
                    <div className={s.btn}>
                        <button className={s.button} type="submit" onClick={()=>deleteContact(id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
        </form>
   )
}

export default ContactList

ContactList.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
  };