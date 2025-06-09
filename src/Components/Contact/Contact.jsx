import React from 'react'
import './Contact.css'
import logo_contact from '../../assets/logo_contact.svg' // Assuming you have a logo image in this path

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-logo">
                <img src={logo_contact} alt="Logo" />
            </div>
            <div className="contact-section">
                <div className="contact-top">
                    <div className="contact-findme">
                        <h3>Find me</h3>
                        <ul className="contact-findme-links">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>X</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="contact-affiliation">
                        <h3>Affiliation</h3>
                        <div className="oxure">
                            <h2>Oxure Studio</h2>
                            <span>Graphic Designer</span>
                            <span className="indent">Since 2022</span>
                        </div>
                        <div className="nskg">
                            <h2>NSKG Team</h2>
                            <span>Graphic Designer</span>
                            <span className="indent">Since 2024</span>
                        </div>
                    </div>
                </div>
                <div className="contact-down">
                    <div className="contact-email-phone">
                        <div className="contact-email">
                            <h3>Email me</h3>
                            <span>akirakazu.id@gmail.com</span>
                        </div>
                        <div className="contact-phone">
                            <h3>Phone</h3>
                            <span>+62 859-1065-16047</span>
                        </div>
                    </div>
                </div>
                <div className="contact-cred">
                    <p>@2025 Soutamachiworks - All Right Reserved</p>
                    <p>Beta Version</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
