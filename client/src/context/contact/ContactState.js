import React, { useReducer } from "react"
import uuid from 'uuid';
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
    
    ]


    };
    const [state, dispatch ] = useReducer(contactReducer, initalState);


    // add contact 

    // delete contact 

    // set current contact

    // clear current contact 

    // update contact 

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}>
           
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState

