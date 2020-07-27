import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import kobe from './img/kobe-logo.png'
import espn from './img/nba-countdown.jpg'
import bryant from './img/bryant.jpg'
import espn1 from './img/espn-nba-logo.png'
import espn2 from './img/team_logo.jpg'


export class Slides extends Component {  

 render() {
         return (
         <div>
                 <div className='container-fluid'  >
                         <div className="row title" style={{marginBottom: "20px" }} >
                                 <div className="col-sm-12 btn btn-warning">Season Stats Get Ready for the NBA Season
                                 </div>
                                 </div></div>  

                  <div className='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >
                                  <div className="col-sm-12 btn btn-warning">Make Your Picks Data Below</div></div></div>  

                         <div className='container-fluid'  style={{ marginLeft:'180px'}}>     <Carousel   style={{'width':'550px'}}>  
                        <Carousel.Item style={{'height':"150px"}}   style={{'width':'550px'}}  >  <img style={{'height':"250px"}}  className="d-block w-100"  src={kobe}  />  

                           <Carousel.Caption> 
                                   <h3>NBA</h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"350px"}}>  

                                 <img style={{'height':"250px"}}  
                                       
                                   className="d-block w-100"  
                                    src={espn}    />  

                                       <Carousel.Caption>  
                                         <h3>OverTime</h3>  
                                             </Carousel.Caption>  

                                         </Carousel.Item>  
                                        
                                        <Carousel.Item style={{'height':"350px"}}>  
                                       <img style={{'height':"250px"}}  
                                        className="d-block w-100"  
                                         src={bryant}   />  

                                        <Carousel.Caption>  
                                          <h3>Champion</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  

                                           
                                         <Carousel.Item style={{'height':"350px"}}>  
                                       <img style={{'height':"250px"}}  
                                        className="d-block w-100"  
                                         src={espn2}   />  

                                        <Carousel.Caption>  
                                          <h3>Stat Central</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  

                                            
                                        <Carousel.Item style={{'height':"350px"}}>  
                                       <img style={{'height':"250px"}}  
                                        className="d-block w-100"  
                                         src={espn1}   />  

                                        <Carousel.Caption>  
                                          <h3>NBA Finals</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  




                                        </Carousel>  

                                </div>  

                        </div>  

                )  
        }  

}  

  

export default Slides 