import React from 'react';
import { Link } from "react-router-dom";

function ParkButton(props) {
    //{this.props.parkName}
    return (
        <div>
            <Link to={'/' + props.parkName.split(' ').join('')}>
                <button>
                    {props.parkName}
                </button>
            </Link>
        </div>
    )
}

export default ParkButton;