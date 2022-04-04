import ReactDOM from 'react-dom';
import React from 'react';
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
import LoginContainer from './containers/LoginContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';

const App = () => {
    return (
        //add in the links to different pathways... the login, the app, etc.
        <div>
            <Routes>
                <Route path="/" element={<LoginContainer/>} />
                <Route path="/main" element={<MainContainer/>} />
            </Routes>
        </div>
    )
}

export default App;