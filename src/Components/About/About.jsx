/* eslint-disable react/no-unescaped-entities */
import './About.css'
import about_img from '../../assets/about/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPalyState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img'  alt="" />
            <img src={play_icon} className='play-icon'
            onClick={()=>{setPalyState(true)}}  alt="" />
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Unlock Possibilities, Access Solutions</h2>
            <p>
                BG Sales & Supplies as your premier partner for all your IT needs since 2008. 
                With a legacy built on steadfast commitment to excellence and a proven track record of success, 
                we stand as the cornerstone of reliability in the dynamic landscape of information technology.
            </p>
            <p>
                We specialize in delivering bespoke solutions that propel your business into the digital age with confidence. 
                With over a decade of experience in the industry, our seasoned team possesses the knowledge and 
                skills necessary to provide top-notch services that consistently exceed your expectations.
            </p>
            <p>
                Our comprehensive range of services is tailored to meet your specific needs, 
                whether you're a small startup or a large enterprise. From cutting-edge hardware solutions, 
                we offer a holistic approach to address all your IT requirements.
            </p>
            <p>
                At BG Sales & Supplies, we don't just provide products and services – we deliver peace of mind. 
                Trust us to be your trusted partner on your journey towards digital transformation. 
            </p>
        </div>
    </div>
  )
}

export default About
