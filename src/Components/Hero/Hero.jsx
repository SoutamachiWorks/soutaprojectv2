import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg' // Assuming you have a profile image in this path

const Hero = () => {
  return (
    <div className='hero'>
        <h1 class="flex-title">
            <span>Hoshimachi</span>
            <span>Souta</span>
        </h1>      
        <div class="roles">
            <span>Graphic Designer</span>
            <span>Web Developer</span>
            <span>Photographer</span>
        </div>
        <img src={profile_img} alt="" />
    </div>
  )
}

export default Hero
