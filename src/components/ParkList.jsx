import React from 'react';
import ParkButton from '../components/ParkButton.jsx';

class ParkList extends React.Component {
    //use props to add the rating here
    constructor(props){
        super(props);
        this.state = {
            parkNames: ['Central Park', 'Prospect Park', 'McCarren Park', 'Roosevelt Island', 'Highland Park', 'Corona Park'],
        };

    }
    render(){
        const buttonsArr = [];
        for (let i = 0; i < this.state.parkNames.length; i++){
            buttonsArr.push(
                <ParkButton parkName={this.state.parkNames[i]} username={this.props.username}/>
            )
        }
        return (
            <div>
                { buttonsArr }
            </div>
        )
    }
}







export default ParkList;