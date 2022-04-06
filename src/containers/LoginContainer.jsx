import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginContainer = (props) => {
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [message, setMessage] = useState('');

  const login = (e) => {
    e.preventDefault();
    const body = {
      username: userInput,
      password: passInput,
    };
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      // .then((result) => console.log('result:', result))
      .then((name) => {
        props.setUserName(name);
        if (name) window.location.href = '/';
        else alert('Username or password invalid. Please try again.');
      })
      .catch((err) => {
        console.log('bad');
      });
  };

  const signup = (e) => {
    e.preventDefault();
    const body = {
      username: userInput,
      password: passInput,
    };
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      // .then((result) => console.log('result:', result))
      .then((name) => props.setUserName(name))
      .then((data) => {
        window.location.href = '/';
      })
      .catch((err) => {
        window.alert('Username is aready taken');
        window.location.href = '/login';
      });
  };

  const handleUserChange = (e) => {
    setUserInput(e.target.value);
  };
  const handlePassChange = (e) => {
    // console.log(e.target.value);
    setPassInput(e.target.value);
  };
  return (
    <div>
      <h1>Branch Out</h1>
      <h3>New York's home for foliage friends.</h3>
      <input
        className='form-control'
        placeholder='Enter username'
        value={userInput}
        onChange={handleUserChange}
      ></input>
      <br />
      <input
        type='password'
        className='form-control'
        placeholder='Enter password'
        value={passInput}
        onChange={handlePassChange}
      ></input>
      <br />
      <br />
      <button
        type='submit'
        id='loginButton'
        className='btn btn-light'
        onClick={login}
      >
        Log In
      </button>
      <button
        type='submit'
        id='signupButton'
        className='btn btn-light'
        onClick={signup}
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginContainer;
