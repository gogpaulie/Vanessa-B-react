import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const showLabel = (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (e.target.name === 'user_name') {
      name.classList.add('focus');
    }
    if (e.target.name === 'user_email') {
      email.classList.add('focus');
    }
    if (e.target.name === 'message') {
      message.classList.add('focus');
    }
  };
  const hideLabel = () => {
    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
      label.classList.remove('focus');
    });
  };

  function sendEmail(e) {
    if (recaptchaChecked) {
      e.preventDefault();
      setMessageSent(true);

      emailjs
        .sendForm(
          'service_tev9jzv',
          'template_4kl84vq',
          e.target,
          'user_BaAAqPGltN6DwLfEHQAP1'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    } else {
      alert("Please prove you're not a robot");
    }
  }

  function onChange(value) {
    console.log('Captcha value:', value);
    setRecaptchaChecked(true);
  }

  // !messageSent ? (
  return (
    <div className='form-container' id='contact'>
      <h1 className='form-container__title'>Contact Me</h1>
      <p className='form-container__subtitle'>
        Do you want to collaborate? Message me below and I'll get back to you
        ASAP!
      </p>
      <form
        action='?'
        method='POST'
        className='contact-form'
        onSubmit={sendEmail}
      >
        <div className='contact-form__group'>
          <label className='contact-form__label' id='name'>
            Name
          </label>
          <input
            className='contact-form__control'
            placeholder='Jane Doe'
            type='text'
            onFocus={showLabel}
            onBlur={hideLabel}
            name='user_name'
            required
          />
        </div>
        <div className='contact-form__group'>
          <label className='contact-form__label' id='email'>
            Email
          </label>
          <input
            className='contact-form__control'
            placeholder='jane@doe.com'
            type='email'
            name='user_email'
            onFocus={showLabel}
            onBlur={hideLabel}
            required
          />
        </div>
        <div className='contact-form__group'>
          <label className='contact-form__label' id='message'>
            Message
          </label>
          <textarea
            className='contact-form__control'
            rows='5'
            cols='50'
            placeholder='Enter Message...'
            name='message'
            onFocus={showLabel}
            onBlur={hideLabel}
            required
          />
        </div>
        {/* <div
          class='g-recaptcha'
          data-sitekey='6LfJ0UQaAAAAAEPE0zG07N_Xe5aEBd5E_WCoyneh'
          data-theme='dark'
          data-expired-callback
        ></div> */}
        <ReCAPTCHA
          className='g-recaptcha'
          sitekey='6LfJ0UQaAAAAAEPE0zG07N_Xe5aEBd5E_WCoyneh'
          onChange={onChange}
        />
        <button className='contact-form__btn' id='sendBtn' type='submit'>
          {!messageSent ? 'send' : 'message sent! :)'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
