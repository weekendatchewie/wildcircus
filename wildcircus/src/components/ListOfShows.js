import React from 'react';

class ListOfShows extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="listOfShows">
        <div>
    <p>{this.props.city}</p>
        </div>
      </div>
    )
  }
}


export default ListOfShows;