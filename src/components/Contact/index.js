import React, { useState } from "react";
import './style.css';
import {
  Form,
  FormGroup,
  Button,
} from 'reactstrap';
import { validateEmail, capitalizeFirstLetter } from '../../assets/utils/helpers';


function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
      if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);

          if (!isValid) {
              setErrorMessage('Enter a valid email address.');
          } else {
              setErrorMessage('');
          }
      } else {
          if (!e.target.value.length) {
              setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
          } else {
              setErrorMessage('');
          }
      }

      if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
      }

      console.log(formState.name);
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
  }

  return(
    <div>
      <section className='alt-section row'>
        <div className='col-8'>
          <div className='title'>
            <h2 className='title_text'>Contact Me</h2>
            <p className='title_content'>
              <a href='mailto:michael.heinhold@gmail.com' className='contact-text'>michael.heinhold@gmail</a>
              <br />
              <a href='https://www.facebook.com/michael.heinhold/' className='contact-text'>Facebook Messenger</a>
            </p>
          </div>
        </div>
        <div className='col-4'>
          <section className='form-area'>
            <p className='contact-text'>Or leave me message here: </p>
              { errorMessage && (
                <div className='error-message'>
                  <p>{errorMessage}</p>
                </div>
              )}
            <Form id="contact-form">
              <FormGroup>
                <label htmlFor="name">Name:</label> <br />
                <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email address:</label> <br />
                <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message:</label> <br />
                <textarea name="message" rows="5"onBlur={handleChange}  defaultValue={message} />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Contact;