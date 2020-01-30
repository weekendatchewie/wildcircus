import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './About.css';

class About extends React.Component {
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return(
      <div className="about">
        <h1 className="titleAbout">About us</h1>
        
        <div className="blocAbout">

        <h2> 
          
          One circus to entertain them all, one circus to find them, one circus to bring them all and in the happiness bind them in the Wild Circus where the light lie.     
  
        </h2>
  
        <p>
          
          Created by two formers members of the famous "Cirque du Soleil" the Wild Circus is composed of many artists from different countries. Acrobats moving like birds in the sky, clowns who are the worthy heirs of Charlie Chaplin, fire breathers like real dragons and many others. <br/>
          We propose our show in the whole World, and want to give happiness. Come with your children, your parents, your friends, your boss, or even your baker.
  
        </p>
  
        <p>
          
          We're waiting for you, everywhere, everytime. <br/>
          <strong>The show must go on !</strong>
  
        </p>

        </div>

        <Slider {...settings}>
              <div>
                <img
                  className="sliderImage"
                  src="https://images.freeimages.com/images/large-previews/30e/fire-jugglers-1623963.jpg"
                  
                  alt="artist circus"
                />
              </div>
              <div>
                <img
                  className="sliderImage"
                  src="https://evenement.eklabul.com/wp-content/uploads/2017/02/Cerceau-Aerien-12-Eklabul-Evenements--1024x683.jpg"

                  
                  alt="artist circus"
                />
              </div>
              <div>
                <img
                  className="sliderImage"
                  src="https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/5j9qeAa2aY4LpWZ52cph4N/3e94e828-cb59-4465-a33f-61ce21baa3a4.jpg/r2_214_4186_2578_w1200_h678_fmax.jpg"

                  alt="artist circus"
                />
              </div>
            </Slider>
  
      </div>
    )
  }
}

export default About;
