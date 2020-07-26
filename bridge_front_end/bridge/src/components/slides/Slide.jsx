import React, { Component } from 'react'
import espn2 from './img/espn-nba-logo.png'
import espn3 from './img/nba-countdown.jpg'
import kobe from './img/kobe-logo.png'
import ImageSlide from './ImageSlide.jsx'
import Arrow from './Arrow.jsx'

const imgUrls = ["https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900", "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328"

]

export default class Slide extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
      }

      previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () { 
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
      
    
        this.setState({
          currentImageIndex: index
        });

        let loop= setTimeout(()=>{
            this.nextSlide()
        }, 3000)
        
      }
    render () {
      return (
        <div className="carousel">
              <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" /> 
             <ImageSlide url={ imgUrls[this.state.currentImageIndex] } /> 
             <Arrow direction="right" clickFunction={ this.previousSlide } glyph="&#9654;" /> 

        </div>
      );
    }
  }

 