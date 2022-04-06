import React from 'react';
import ParkButton from '../components/ParkButton.jsx';

function ParkList (props){
    //use props to add the rating here
    const parkNames = ['Central Park', 'Prospect Park', 'McCarren Park', 'Roosevelt Island', 'Highland Park', 'Corona Park']

        const buttonsArr = [];
        for (let i = 0; i < parkNames.length; i++){
            buttonsArr.push(
                <ParkButton key={`park${i}`} parkName={parkNames[i]} username={props.username}/>
            )
        }
        return (
            <div>
                { buttonsArr }
            </div>
        )
}







export default ParkList;