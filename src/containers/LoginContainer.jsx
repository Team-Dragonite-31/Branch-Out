import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginContainer = (props) => {
  const [userInput, setUserInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [message, setMessage] = useState('')

  const login = (e) => {
    e.preventDefault();
      const body = {
        username: userInput,
        password: passInput
      }
      // const metaData = {
      //   method: 'POST',
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify(body)
      // }
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
      })
      .then((data) => data.json())
      //.then((result) => console.log('result:', result))
      .then((name) => props.setUserName(name))
      .catch((err) => console.log('no user in system'))
      // .then(data => console.log(message))
        // .then(data => data.json())
        // .then(data => setMessage(data)

  }

  // const signup = (e) => {
  //   e.preventDefault();
  //   try{
  //     const body = {
  //       username: username,
  //       password: password
  //     }
  //     const metaData = {
  //       method: 'POST',
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(body)
  //     }
  //     fetch('/login', metaData)
  //       .then(data => data.json())
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  const handleUserChange = (e) => {
    setUserInput(e.target.value);
  }
  const handlePassChange = (e) => {
    // console.log(e.target.value);
    setPassInput(e.target.value);
  }
  return(
    <div>
      <h1>"Hellooooo!"</h1>
          <input className='form-control' placeholder="Enter email" value={userInput} onChange={handleUserChange}></input>
          <input className='form-control' placeholder="Enter password" value={passInput}onChange={handlePassChange}></input>
          <button type="submit" className="btn btn-primary" onClick={login}>Submit</button> 
    </div> 
  )
};


export default LoginContainer