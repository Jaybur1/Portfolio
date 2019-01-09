import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-page">
                <h1 style={{ fontWeight: 'bold' }}>Contact me</h1>
                <hr />
                <div className="contacts">
                    <i class="fas fa-phone-square"><span className="contact-content"> +1(343)-204-5511</span></i>
                    <i class="fas fa-envelope-square"><a href="mailto:jayburbyga@gmail.com" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}><span className="contacts-content"> jayburbyga@gmail.com</span></a></i>
                    <i class="fab fa-skype"><span className="contacts-content" style={{ fontWeight: 'bold' }}> jekaburbyga</span></i>
                    <i class="fab fa-facebook-messenger"><span className="contacts-content" style={{ fontWeight: 'bold' }}>Jay Burbyga</span></i>
                </div>
            </div>
        )
    }
}

export default Contact;