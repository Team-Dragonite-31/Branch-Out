import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";

const LoginContainer = () => (
    <div>
      <h1>"Hellooooo!"</h1>
      <Link to='/main'>
          <button>
              Main Container
          </button>
      </Link>
    </div>
  );


export default LoginContainer