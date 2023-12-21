import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, like sending an email
        console.log(formData);
        alert('Form submitted!'); // Placeholder for demonstration
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <p>Email: rcvatcher@gmail.com</p>
                <p>Phone: 709-693-4734</p>
                <p>Website: <a href="http://robsportfolio.com" target="_blank" rel="noopener noreferrer">robsportfolio.com</a></p>
                <p>LinkedIn: <a href="www.linkedin.com/in/rob-vatcher-8b87b1241" target="_blank" rel="noopener noreferrer">Rob Vatcher</a></p>
                <p>GitHub: <a href="https://github.com/RobV34" target="_blank" rel="noopener noreferrer">My Projects</a></p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;


