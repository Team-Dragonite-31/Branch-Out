import React from 'react';

function BlossomMeter(props) {
    //use props to add the rating here
    return (
        <div>
            <h1>Blossom Meter</h1>
            <h2>Overall: {props.rating}</h2>
        </div>
    )
}





export default BlossomMeter;