import React from 'react';
import axios from "axios";
import ListOfShows from './ListOfShows';


class Date extends React.Component {
  constructor(props){
    super(props)
    this.state={
      listShows: null
    }
  }

  getShows = () => {
    axios
    .get("http://localhost:8000/shows")
    .then(res => res.data)
    .then(data =>
      this.setState({
        listShows: data
      })
      )
  };

  componentDidMount = () => {
    this.getShows()
  };


  render() {
    this.state.listShows && console.log(this.state.listShows)
    return(
      
      <div className="date">
        <div>
        {this.state.listShows && this.state.listShows.map(index => (
              
                 <ListOfShows city={index.city}/>
              
        ))}       
        </div>

      </div>
    )
  }
}


export default Date;