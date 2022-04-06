import React from 'react';
import { Link } from 'react-router-dom';

// const prospect = park;
function ParkButton(props) {
  return (
    <div
      style={{
        border: '1px solid rgba(0, 0, 0, 0.13)',
        borderRadius: '5px',
        marginTop: '5px',
      }}
    >
      <Link to={'/park/' + props.parkName.split(' ').join('-')}>
        {/* <img src={prospect} alt='prospect' /> */}
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          {props.parkName}
        </h3>
      </Link>
    </div>
  );
}

export default ParkButton;
