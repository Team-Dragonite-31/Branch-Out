import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  useEffect(() => {
    if (window.localStorage.getItem("username"))
      props.setUsername(window.localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("username", props.username);

    // if (props.username !== "") {
    //   button.shift();
    //   button.push(
    //     <button key="2" className="loginButton">
    //       Hello {props.username}
    //     </button>
    //   );
    // }
    // else button.push(<button key='2' className='loginButton'>Hello {props.username}</button>)
  }, [props.username]);

  const button = [];

  //not logged in logic
  if (props.username === "") {
    button.push(
      <Link key='4' to='/login'>
        <button key='1' id='login' className='btn btn-light'>
          Login
        </button>
      </Link>
    );
  } else {
    button.push(
      <button key='2' id='name' className='btn btn-light'>
        Hello {props.username}
      </button>
    );
  }

  // const button = [
  //   <Link key="4" to="/login">
  //     <button key="1" className="loginButton">
  //         Login
  //     </button>
  //   </Link>
  // ];

  //if not logged in: 'Login' + link to login page
  //if logged in: 'Log Out' + logic to clear the username from local storage

  return (
    <nav
      className='navbar navbar-light navbar-expand-md bg-primary navbar-fixed-top'
      id='navBar'
    >
      <div className='navbar-brand ms-auto'>
        <Link to='/'>
          <img id='logo' src='https://i.ibb.co/Qd4h0g7/branchout.png' />
        </Link>
      </div>
      <div className='nav navbar-nav ml-auto w-100 justify-content-end'>
        {button}
      </div>
    </nav>
    // <div>
    //   <Link to="/">
    //     <button className="btn btn-primary" key={3}>
    //       Branch Out
    //     </button>
    //   </Link>
    //   {button}
    // </div>
  );
}

export default Header;
