import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // Here, you can also send the form data to a server or an email API
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    
    <div className='contact' style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto',color:'white' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Your Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem',borderRadius:'20px',border:'none' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Your Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem',borderRadius:'20px',border:'none'  }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Your Message</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', height: '100px',borderRadius:'20px',border:'none'  }}
          />
        </div>
        <div style={{textAlign:'center'}}>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;