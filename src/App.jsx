import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
import LoginContainer from './containers/LoginContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import ParkContainer from './containers/ParkContainer.jsx';
import Header from './components/Header.jsx'
import './styling/styles.scss'

const App = () => {
  const [username, setUsername] = useState('');
  return (
    //add in the links to different pathways... the login, the app, etc.
    //prospect park linking to the component but with different state linked for the park
    <div>
      <Header username={username} setUsername={setUsername} />
      <Routes>
        <Route path="/" element={<MainContainer username={username} />} />
        <Route path="/park/:parkName" element={<ParkContainer username={username}/>} />
        <Route
          path="/login"
          element={<LoginContainer username={username} setUserName={setUsername} />}
        />
      </Routes>
    </div>
  );
};

export default App;





// const getUsername = function () {
//     fetch(`http://localhost:3000/username`, {
//       method: 'GET'
//     })
//       .then((data) => data.json())
//       .then((data) => {
//           // console.log(data)
//           if (data !== 'user not logged in') setUsername(data)
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
//   useEffect(() => {
//     getUsername()
//   }, []);
// useEffect(() => {
//     window.localStorage.setItem('username', username);
//   }, [username]);
