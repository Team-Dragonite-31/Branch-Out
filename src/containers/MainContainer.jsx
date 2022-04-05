import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header.jsx'
import BlossomMeter from '../components/BlossomMeter.jsx'
import ParkList from '../components/ParkList.jsx'
import bootstrap from 'bootstrap';

//onLoad => send a GET request to back-end
//header div => branch out button => back to this page, 'hello user' or button to login if user is undefined
//blossom meter div => header + a meter that uses data from the get request
//bloom map => empty div for the time being; Google maps eventually
//park list => contains each park div and a button to direct to parkContainer w/ state conditional on which park they clicked

//table 

/*
useEffect(() => {
  //Runs only on the first render
}, []);
*/


function MainContainer(props) {
  const [rating, setRating] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComments] = useState([]);


  const getOverallData = function () {
    fetch(`http://localhost:3000/getOverallData`, {
      method: 'GET'
    })
      .then((result) => result.json())
      .then((data) => {
        setRating(data)
      })
      .catch(err => {
        setRating('0.0');
      })
  }

  useEffect(() => getOverallData(), []);

  return (
    <div>
      <Header username={username} />
      <BlossomMeter rating={rating} />
      <ParkList username={username} />
    </div>

  )

};

export default MainContainer