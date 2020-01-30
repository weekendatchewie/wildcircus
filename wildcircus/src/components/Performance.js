import React from 'react';
import './Performance.css';
import About from "./About";

class Performance extends React.Component {
  render(){
    return(
      <>
      <div className="performance">
        <h1 className="titlePerformance">Performances</h1>
        <iframe className="videoPerformance" width="940" height="500" src="https://www.youtube.com/embed/x-1-gLv3aWs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <div className="blocPerformance">
            <div className="subBloc">
              <h2>Laugh</h2>
              <p className="textPerformance">As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p>
          </div>
          <div className="subBloc">
              <h2>Dream</h2>
              <p className="textPerformance">Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</p>
          </div>
          <div className="subBloc">
              <h2>Marvel at</h2>
              <p className="textPerformance">Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.</p>
          </div>
        </div>
      </div>
    
      <About/>
      </>
    )
  }
}

export default Performance;