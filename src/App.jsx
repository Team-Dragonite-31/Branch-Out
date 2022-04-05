import ReactDOM from 'react-dom';
import React from 'react';
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
import LoginContainer from './containers/LoginContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import ParkContainer from './containers/ParkContainer.jsx';

const App = () => {
    return (
        //add in the links to different pathways... the login, the app, etc.
        //prospect park linking to the component but with different state linked for the park
        <div>
            <Routes>
                <Route path="/" element={<MainContainer/>} />
                <Route path="/park/:parkName" element={<ParkContainer/>} />
            </Routes>
        </div>
    )
}

export default App;