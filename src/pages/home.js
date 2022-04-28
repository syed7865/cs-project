import React from 'react'
import "../App.css"



const Home = () => {
    return (
        <div className="main">
        <div>
        <div className = 'div1'>
        </div>
    
          <input className="Search"
            type="search"
            placeholder="Seach" width="500" height="500"
          />
        <div className="loading">Showing results for...</div>
        <div className="content">
    
        <div className="box1">
        </div>
        <div className="box2">
        </div>
       
        
       </div>
       </div>
       </div>
      );
    }

export default Home

