import React from "react";
import Contacts from "./Contacts";
import PropTypes from 'prop-types'

const ContactItems = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        {""}{" "}
        <span style={{float:'right'}}
          className={
            "badge" +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
            {/* takes the first letter in the property called type. Makes it upper case */}
          {type.charAt(0).toUpperCase()+ type.slice(1)}
        </span>
      </h3>
      <ul className="list">
          {email && (<li>
              <i className="fas fa-envelope-open"></i> {email}
          </li>)}
          {phone && (<li>
              <i className="fas fa-phone"></i> {phone}
          </li>)}
      </ul>
      <button className="btn btn-dark btn-sm">Edit</button>
      <button className="btn btn-danger btn-sm">Delete</button>

    </div>
  );
};

ContactItems.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItems;