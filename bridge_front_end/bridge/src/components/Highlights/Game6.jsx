import React, { useState, useEffect, } from 'react';
import Slide from '../slides/Slide.jsx'
import axios from "axios";
import ReactDOM from 'react-dom'



export default function Last(){
  let [scores, setScores] = useState([]);
 

  let base_URL = `http://localhost:3003/api/v1/updates`;
 


  
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
           <h4 id= 'logobball'className="card-title"><img src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=85&h=48&transparent=true' alt="basket" />{""}<strong></strong></h4>
                    <br/><br/>
            <div className='carouselDiv'>
                  <Slide />
                  
            </div>
                 <h4> Detroit Pistons (121) vs. Washington Wizards (112)</h4>
                    
            <div>
            <iframe width="460" height="215" src="https://www.youtube.com/embed/ZnpxYke0C5c?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>    
            
             <a href='/highlight'><button id= 'allenSubmitButton'></button></a>     




                
                   
          

            
      </main>
    </>
  );
}

