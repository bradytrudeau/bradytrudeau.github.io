import React, { Component } from 'react';
import './Contact.css';
import { GiSmartphone, GiMailbox } from 'react-icons/gi';

class Contact extends Component {
  render() {
    return (
        <div id="contact" className="contact">
            <h2 className="contactH2">Contact</h2>
            <div class="contactCards">
                <div className="left-half">
                    <h3 className="contactH3"><GiSmartphone size="50px" className="phone"/></h3>
                    <h3 className="contactH3">Phone</h3>
                    <hr width="50%"></hr>
                    <p>(612) 518-5889</p>
                </div>
                <div className="right-half">
                    <h3 className="contactH3"><GiMailbox size="50px" className="email"/></h3>
                    <h3 className="contactH3">Email</h3>
                    <hr width="50%"></hr>
                    <p>bradytrudeau@gmail.com</p>
                </div>
            </div>
         </div>
    );
  }
}

export default Contact;