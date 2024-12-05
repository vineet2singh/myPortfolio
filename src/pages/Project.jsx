import React from 'react'
// import "./GraphBackground.css"; // CSS file for styling
import MobileNav from '../components/MobileNav'


function Project() {
  return (
    <div className="graph-container">
    <div className="line-chart  max-sm:hidden">
      <svg className="graph-lines">
        <polyline
          // points="0,200 50,150 100,180 150,120 200,100 250,150 300,90 350,110"
          stroke="#8884d8"
          fill="none"
          strokeWidth="2"
        />
      </svg>
    </div>
    {/* <RecipeReviewCard/>  */}

    <div className=' sticky bottom-4 '>
      <MobileNav/>

      </div>
  </div>
  )
}

export default Project