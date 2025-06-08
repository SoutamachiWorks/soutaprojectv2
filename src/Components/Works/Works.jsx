import React from 'react'
import './Works.css'
import poster_1 from '../../assets/skadi.png'
import poster_2 from '../../assets/yelan.png'
import poster_3 from '../../assets/texas.png'
import poster_4 from '../../assets/bocchitherock.png'
import web_design_1 from '../../assets/web_suisei.png'


const Works = () => {
  return (
    <div className="works">
        <div className="works-poster">
            <h1>Poster Design</h1>
            <div className="works-poster-img">
                <img src={poster_1} alt="" />
                <img src={poster_2} alt="" />
                <img src={poster_3} alt="" />
                <img src={poster_4} alt="" />
            </div>
        </div>
        <div className="works-web-design">
            <h1>Web Design</h1>
            <div className="works-web-design-img">
                <img src={web_design_1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Works
