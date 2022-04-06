import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Header(props){
    useEffect(() => {
        props.setUsername((window.localStorage.getItem('username')));
      }, []);

      useEffect(() => {
        window.localStorage.setItem('username', props.username);
      }, [props.username]);
      
    const button = []
    if (props.username === '') button.push(<Link key={4} to='/login'><button key={1} className='loginButton'>Login</button></Link>)
    else button.push(<button key={1} className="btn btn-primary">Hello {props.username}</button>)
    return(
        <div className="headerStyling">
            <button className="btn btn-primary" key={3}>Branch Out</button>
            {button}
        </div>
    )
}

export default Header;