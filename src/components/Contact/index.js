import React from "react";
import './style.css';
import {
  Form,
  FormGroup,
  Button,
} from 'reactstrap'

function Contact() {
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
            <p className='title_content'>Or leave me message here: </p>
            <Form id="contact-form">
              <FormGroup>
                <label htmlFor="name">Name:</label> <br />
                <input type="text" name="name" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email address:</label> <br />
                <input type="email" name="email" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message:</label> <br />
                <textarea name="message" rows="5" />
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