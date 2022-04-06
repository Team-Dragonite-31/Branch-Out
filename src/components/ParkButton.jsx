import React from 'react';
import { Link } from 'react-router-dom';

function ParkButton(props) {
  //{this.props.parkName}
  return (
    <div
      style={{
        border: '1px solid rgba(0, 0, 0, 0.13)',
        borderRadius: '5px',
        marginTop: '5px',
      }}
    >
      <Link to={'/park/' + props.parkName.split(' ').join('-')}>
        <h3>{props.parkName}</h3>
      </Link>
    </div>
  );
}

export default ParkButton;
