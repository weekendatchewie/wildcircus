import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <div className="cardHome">
          <img className="imgHome" src="https://images.pexels.com/photos/2337777/pexels-photo-2337777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image circus" />
          <h1 className="titleHome">Welcome to The Wild Circus</h1>
        </div>
        <button className="buttonHome">Come & See</button>
      </div>
    )
  }
}

export default Home;