import React from 'react'
import 'bulma/css/bulma.css';
import '../index.css';

    const Contacts = ({ contacts }) => {
      return (
        <div className="padd">
          <center><span className="titulo">Contact List</span></center>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <b class="card-title">{contact.name}</b>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">"{contact.company.catchPhrase}"</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;