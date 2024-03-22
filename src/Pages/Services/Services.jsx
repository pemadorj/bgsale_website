import './Services.css'
import Navigation from "../Navigation/NaviGeneral"
import service_banner from '../../assets/services/service_banner.png'
import white_arrow from '../../assets/white-arrow.png'
import LeftServices from '../PageComponents/LeftServices'
import MiddleService from '../PageComponents/MiddleService'
import RightServices from '../PageComponents/RightServices'
import Interactive from '../PageComponents/Interactive'
import Tele from '../PageComponents/Tele'
import Power from './Power'
import FacebookMsg from '../PageComponents/FacebookMsg'

const Services = () => {
  return (
    <div>
        <Navigation title="Our Services"/>
      <div className='services-banner-container'>
        <div className="service-text-content">
            <h2>Your Ultimate Business Solution Destination</h2>
            <p>
                <b>BG Sales & Supplies:</b> Your Trusted IT Partner Since 2008. 
                Elevate Your Business with Tailored Solutions for the Digital Era. 
                Experience Excellence, Achieve Success.
            </p>
            <button className='btn warning'>Contact Us <img src={white_arrow} alt="" /></button>
        </div>
        <div className="service-banner-image">
            <img src={service_banner} alt="" />
        </div>
      </div>
      <LeftServices/>
      <MiddleService/>
      <RightServices/>
      <Interactive/>
      <Tele/>
      <Power/>
      <FacebookMsg/>
    </div>
  )
}

export default Services
