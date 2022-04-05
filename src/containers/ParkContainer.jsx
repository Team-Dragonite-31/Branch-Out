import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import BlossomMeter from '../components/BlossomMeter.jsx';
import Comments from '../components/Comments.jsx';

//ACTIONS
//access the park name (was in the props and is now in the URI)
//send a get request for the park data
//rating will change depending on the result
//the comments data will be populated depending on result
//send a post request with a new review

//
//Same Header component
//Same Blossom meter, but pass it parkName in props
//Might also add a Bloom Map for specific park but can ignore for now
//Component for submit and comments
//Comment component (username, date, comment content, rating)

function ParkContainer(props) {
  const [rating, setRating] = useState('');
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const [parkName, setParkName] = useState(useParams().parkName);

  const getParkData = function () {
    fetch(`http://localhost:3000/getParkData/${parkName}`, {
      method: 'GET'
    })
    .then((result) => result.json())
    .then((data) => {
      setRating(data.rating);
      setPosts(data.posts)
    })
    .catch(err => {
      setRating = "0.0";
      console.log(err);
    })
  } 
  
  useEffect(() => getParkData(), []);
  
  
  return (
    <div>
      <Header />
      <BlossomMeter rating={rating} parkName={parkName.split('-').join(' ')} />
      <Comments posts={posts}/>
      <h1>"In the park now!!"</h1>
    </div>
  )
}

export default ParkContainer