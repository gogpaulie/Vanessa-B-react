import React, { useState } from 'react';

const AdminLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('login attempt');
  };
  return (
    <div className='login-screen'>
      <form className='login-form' onSubmit={submitHandler}>
        <h2>Admin Login</h2>
        <div className='login-form__group'>
          <label className='login-form__label'>Email</label>
          <input
            className='login-form__control'
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='login-form__group'>
          <label className='login-form__label'>Password</label>
          <input
            className='login-form__control'
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='login-form__btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginScreen;
