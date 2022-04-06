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

const App = () => {
    const [username, setUsername] = useState('');
    const getUsername = function () {
        fetch(`http://localhost:3000/username`, {
          method: 'GET'
        })
          .then((data) => data.json())
          .then((data) => {
              // console.log(data)
              if (data !== 'user not logged in') setUsername(data)
          })
          .catch(err => {
            console.log(err);
          })
      }
      useEffect(() => {
        getUsername()
      }, []);
    return (
        //add in the links to different pathways... the login, the app, etc.
        //prospect park linking to the component but with different state linked for the park
        <div>
            <Header username={username}/>
            <Routes>
                <Route path="/" element={<MainContainer username={username}/>} />
                <Route path="/park/:parkName" element={<ParkContainer/>} />
                <Route path='/login' element={<LoginContainer setUserName={setUserName}/>}/>
            </Routes>
        </div>
    )
}

export default App;