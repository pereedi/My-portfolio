import { useState } from 'react'
import NavBar from '../NavBar'
import FooterComponent from '../FooterComponent'
import emailjs from 'emailjs-com'
import './ContactPages.css'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log('Form submitted:', formData);
    emailjs
      .send(
      'service_rmvxw29',
      'template_88a3dt9',
    {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'LJjUobERSAieWhzPr'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (Error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div>
      <NavBar />
      <div className='pagename'>
        Contact
      </div>
      <div className='card'>
        <div className='text-intro'>
          Let’s Get In touch
        </div>
        <form className='input-name' onSubmit={handleSubmit}>
          <label htmlFor="Name">Name:</label>
          <input type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />

          <div className='line'></div>

          <label htmlFor="mail">Email:</label>
          <input type="email" name='email' value={formData.email} placeholder='E-mail' onChange={handleChange} required />

          <div className='line'></div>

          <textarea name="message"
            id="message"
            placeholder="Message"
            className="message-area"
            value={formData.message}
            onChange={handleChange}
            required>
          </textarea>

          <button type='submit'>Submit message </button>
        </form>
        <p>{status}</p> 
      </div>
      <div>

        <FooterComponent />
      </div>
    </div>
  )
}
export default ContactPage