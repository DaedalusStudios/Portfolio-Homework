import React, { useState } from 'react';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectError('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    //Should I add this as a helper function?
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError('');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailValue) && emailValue.trim() !== '') {
      setEmailError('You must enter a valid email address');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  const handleBlur = (field) => {
    switch (field) {
      case 'subject':
        if (!subject.trim()) {
          setSubjectError('Subject is required');
        }
        break;
      case 'name':
        if (!name.trim()) {
          setNameError('Name is required');
        }
        break;
      case 'email':
        if (!email.trim()) {
          setEmailError('Email is required');
        }
        break;
      case 'message':
        if (!message.trim()) {
          setMessageError('Message is required');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Send off the email!
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 class="pageTitle">Contact Billy!</h3>
      <p class="pageTitle">I always want to hear from people.  Feel free to drop me a line if you want to talk about a project!</p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} onBlur={() => handleBlur('name')} />
        {nameError && <div className="text-danger">{nameError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} onBlur={() => handleBlur('email')} />
        {emailError && <div className="text-danger">{emailError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" className="form-control" id="subject" value={subject} onChange={handleSubjectChange} onBlur={() => handleBlur('subject')} />
        {subjectError && <div className="text-danger">{subjectError}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="3" value={message} onChange={handleMessageChange} onBlur={() => handleBlur('message')}></textarea>
        {messageError && <div className="text-danger">{messageError}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Contact;
