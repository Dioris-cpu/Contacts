import React, { useReducer } from "react"
import {v4 as uuidv4} from "uuid"; 
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'
// import { text } from "express";

const ContactState = props => {
    const initalState = {
        contacts : [{
            id: 1,
            name: 'Ted Mosby',
            email: 'tdog@gmail.com',
            phone: '212-391-5970',
            type: 'personal'
        },
        {
            id: 2,
            name: 'Marshall Eriksen',
            email: 'judgeriksen@gmail.com',
            phone: '212-618-4085',
            type: 'personal'

        },

        {
            id: 3,
            name: 'Robin Scherbatsky',
            email: 'sparkles@gmail.com',
            phone: '212-111-4820',
            type: 'personal'

        }
    
    ],

    current: null,
    // filtered: null


    };
    const [state, dispatch ] = useReducer(contactReducer, initalState);


    // add contact 
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact })

    };

    // delete contact 
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })

    };

    // set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })

    };

    // clear current contact 
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })

    };

    // update contact 
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })

    };

    // filter contacts
    // const filterContacts = text => {
    //     dispatch({ type: FILTER_CONTACTS, payload: text })

    // };

    // clear filter
    // const clearFilter = () => {
    //     dispatch({ type: CLEAR_FILTER })

    // };



    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        
        }}>
           
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState;


