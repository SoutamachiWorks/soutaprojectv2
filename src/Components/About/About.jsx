import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.png'
import photoshop_icon from '../../assets/ps.svg'
import illustrator_icon from '../../assets/ilus.svg'
import figma_icon from '../../assets/figma.svg'
import canva_icon from '../../assets/canva.svg'
import python_icon from '../../assets/python.svg'
import javascript_icon from '../../assets/js.svg'
import react_icon from '../../assets/react_js.svg'
import html_icon from '../../assets/html.svg'
import css_icon from '../../assets/css.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-top">
          <div className="about-left">
              <img src={profile_img} alt=""/>
          </div>
          <div className="about-right">
              <div className="about-para">
                  <p>
                      Hi, I'm Hoshimachi Souta, i am grachic designer <br />
                      and web developer.
                  </p>
                  <p>
                      I have experience in making anime style design like digital poster,<br /> 
                      website designer, Etc and i alse have experience in developer <br />
                      web application using HTML, CSS, and React.js.
                  </p>
              </div>
          </div>
        </div>
        <div className="about-down">
            <div className="about-expertice">
                <div className="about-editing">
                    <h1>Expertice Editing</h1>
                    <div className="about-editing-logo">
                        <img src={photoshop_icon} alt="" />
                        <img src={illustrator_icon} alt="" />
                        <img src={figma_icon} alt="" />
                        <img src={canva_icon} alt="" />
                    </div>
                    <div className="about-editing-title">
                        <span >Photoshop</span>
                        <span class="indent">|</span>
                        <span class="indent">Ilustrator</span>
                        <span class="indent">|</span>
                        <span class="indent">Figma</span>
                        <span class="indent">|</span>
                        <span class="indent">Canva</span>
                    </div>
                </div>
                <div className="about-programming">
                    <h1>Expertice Programming</h1>
                    <div className="about-programming-logo">
                        <img src={python_icon} alt="" />
                        <img src={javascript_icon} alt="" />
                        <img src={react_icon} alt="" />
                        <img src={html_icon} alt="" />
                        <img src={css_icon} alt="" />
                    </div>
                    <div className="about-programming-title">
                        <span>Python</span>
                        <span class="indent">|</span>
                        <span class="indent">JavaScript</span>
                        <span class="indent">|</span>
                        <span class="indent">React.js</span>
                        <span class="indent">|</span>
                        <span class="indent">HTML</span>
                        <span class="indent">|</span>
                        <span class="indent">CSS</span>
                    </div>
                </div>
            </div>
            <div className="about-other">
                <h1>Other Expertice</h1>
                <div className="about-other-title">
                    <span>Video Editing</span>
                    <span class="indent">|</span>
                    <span class="indent">Photograph</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About