import React from "react";
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

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      username: null,
      location: null,
      comments: []
    };
    this.getOverallData = this.getOverallData.bind(this);
  }

  getOverallData(){
    fetch(`http://localhost:3000/getOverallData`, {
      method: 'GET'
    })
      .then((result) => result.json())
      .then((data) => {
        console.log('got some data');
        return this.setState({
          rating: data
        })
      })
      .catch(err => {
        console.log('caught an error')
        return this.setState({
          rating: 1
        })
      })
  }
  
  componentDidMount(){
    this.getOverallData()
  }



render() {
  return (
    <div>
      <Header username={this.state.username} />
      <BlossomMeter rating={this.state.rating} />
      <ParkList username={this.state.username} parkNames={this.state.parkNames} />
    </div>

  )
}
};

export default MainContainer