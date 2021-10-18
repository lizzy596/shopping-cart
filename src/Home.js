import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div className="test">
     <div className="test-content">
      <h1>A World Class selection of rugs and carpets</h1>
      <h2>Excellent options to fit any budget</h2>
      <Link to="/products"><button class="btn">Shop Now</button></Link>
      
      </div>
      
    </div>
  )
}

export default Home

