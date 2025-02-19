'use client';

import './forms.css';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        'service_scog29q',
        'template_wr7r5hh',
        templateParams,
        'k6fNu668XWG5IyQWU',
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          console.log('ERRO: ', err);
        },
      );
  }

  return (
    <div className='bodyForms'>
      <div className='spaceForm'>
        <form className='form' onSubmit={sendEmail}>
          <h4>
            Preencha o formulário com seus dados e seu interesse em contato
          </h4>
          <input
            type='text'
            placeholder='Nome'
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <input
            type='email'
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <textarea
            className='textarea'
            placeholder='Digite sua mensagem'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          ></textarea>
          <input className='button' type='submit' placeholder='Enviar' />
        </form>
      </div>
    </div>
  );
}
