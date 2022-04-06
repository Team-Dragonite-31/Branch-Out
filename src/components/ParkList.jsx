import React from 'react';
import ParkButton from '../components/ParkButton.jsx';

import prospect from '../assets/prospect.jpeg';

function ParkList(props) {
  //use props to add the rating here
  // const parkImages = []
  const parkNames = [
    'Central Park',
    'Prospect Park',
    'McCarren Park',
    'Roosevelt Island',
    'Highland Park',
    'Corona Park',
  ];

  const buttonsArr = [];
  for (let i = 0; i < parkNames.length; i++) {
    buttonsArr.push(
      <ParkButton
        key={`park${i}`}
        parkName={parkNames[i]}
        username={props.username}
      />
    );
  }
  return <div>{buttonsArr}</div>;
}

export default ParkList;
