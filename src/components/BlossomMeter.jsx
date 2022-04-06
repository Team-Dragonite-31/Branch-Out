import React from 'react';

function BlossomMeter(props) {
    //use props to add the rating here
    let title;
    props.parkName ? title = props.parkName : title = 'Blossom Meter'
    return (
        <div className="blossomMeter">
            <h1>{ title }</h1>
            <h2>Overall: {props.rating}</h2>
        </div>
    )
}





export default BlossomMeter;