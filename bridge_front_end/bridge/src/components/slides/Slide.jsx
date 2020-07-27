import React, { Component } from 'react'
import espn2 from './img/espn-nba-logo.png'
import espn3 from './img/nba-countdown.jpg'
//import kobe from './img/kobe-logo.png'
import ImageSlide from './ImageSlide.jsx'
import Arrow from './Arrow.jsx'

const imgUrls = ['http://loodibee.com/wp-content/uploads/nba-Eastern_Conference_logo.png', 'http://loodibee.com/wp-content/uploads/nba-Western_Conference_logo.png','http://pngimg.com/uploads/nba/nba_PNG10.png?resize=width:50,height:50', "http://pngimg.com/uploads/nba/nba_PNG21.png"

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

 