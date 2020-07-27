import React, { useState, useEffect, } from 'react';
import Slide from './components/slides/Slide.jsx'
import axios from "axios";
import ReactDOM from 'react-dom'
import teamlogo from './img/team_logo.jpg'
import allen from './img/aibutton.jpg'
import bryant from './img/bryant.jpg'
import fantasy from './img/fantasy.jpg'
import jordan from './img/jordam.jpeg'
import { Link } from 'react-router-dom';






export default function Last(){
  let [scores, setScores] = useState([]);
  let highlight= {
    data:['/highlightgame1','/highlightgame2','/highlightgame3',
    '/highlightgame4',
    '/highlightgame5',
    '/highlightgame6',
    '/highlightgame7'
  ]
  
  }

  let base_URL = `http://localhost:3003/api/v1/updates`;
  //let handleChange = (event)=>{
  //  setScores(event.target.value)
  //}




  
  useEffect(() => {

       
    axios.get(base_URL)
    .then(({ data }) => {
      setScores(data);
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })

}, [])

 

 



  return (
    <>
      
      <main>
      <br />
      <div className="container">
     
      
          <div className="col-md-12">
              <div className="card card-cascade wider reverse">
            
                  <div className="card-body card-body-cascade text-center">

                    <h4 id= 'logobball'className="card-title"><img src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=85&h=48&transparent=true' alt="basket" />{""}<strong></strong></h4>
                    <br/><br/>
                  <div className='carouselDiv'>
                  <Slide />
                 
                  </div>

             <form >
                  <input type="text" id="allensub" placeholder="NBA Team" width='200'
                      value={scores.home_team}
                   
                       />
                  <input width='70' height= '30' id='allenSubmitButton' type="submit"/> 
            </form> 
                      <br/><br/>
                   <h4  className="card-title"><img src={teamlogo}      width='500' height= '200'  alt="basket" />{""}<strong></strong></h4>
            {//setScores  ? 

                    
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                        <thead>
                          <tr>
                            <th className="th-sm">Date</th>
                            <th className="th-sm">Home Team
                            </th>
                            <th className="th-sm">Home team score
                            </th>
                            <th className="th-sm">Visitors Team
                            </th>
                            <th className="th-sm">Visitors Team Score
                            </th>
                            <th>Status
                            </th>
                            <th>Season
                            </th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                              scores.map((score, index) => (
                                <tr key={index}>
                                  <td>{score.date.replace(/T/, ' ').replace(/\..+/, '').slice(0,10)}</td>
                                  <td>{score.home_team}</td>
                                  <td>{score.home_team_score}</td>
                                  <td>{score.visitor_team}</td>
                                  <td>{score.visitor_team_score}</td>
                                  <td>{score.status}</td>
                                  <td>{score.season}</td>
                                  <td> 
                                {{index} == 0 ?
                                     <a 
                                  
                                  href='highlightgame1'><button                       id= 'allenSubmitButton'></button></a> : {index} == 1 ?
                                    <a 
                                  
                                    href='highlightgame2'><button                       id= 'allenSubmitButton'></button></a> :{index} == 2 ?<a href='highlightgame3'><button                       id= 'allenSubmitButton'></button></a>: <a href='highlightgame4'><button                       id= 'allenSubmitButton'></button></a>

                                  }
                  

                                    
                                  </td>
                                </tr>
                              ))
                              }

                                
                            
                                      
                        </tbody>
                
                      </table>
                   // : ''
                  }
              
                  </div>
                </div>
          </div>
      </div>
    

      </main>
    </>
  );
}

