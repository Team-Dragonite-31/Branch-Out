import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  useEffect(() => {
    if (window.localStorage.getItem("username"))
      props.setUsername(window.localStorage.getItem("username"));
  }, []);

  const button = [
    <Link key="4" to="/login">
      <button key="1" className="loginButton">
        Login
      </button>
    </Link>,
  ];

  useEffect(() => {
    window.localStorage.setItem("username", props.username);
    if (props.username !== "") {
      button.shift();
      button.push(
        <button key="2" className="loginButton">
          Hello {props.username}
        </button>
      );
    }
    // else button.push(<button key='2' className='loginButton'>Hello {props.username}</button>)
  }, [props.username]);

  return (
    <div>
      <button className="btn btn-primary" key={3}>
        Branch Out
      </button>
      {button}
    </div>
  );
}

export default Header;
