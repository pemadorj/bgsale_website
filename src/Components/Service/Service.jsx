import './Service.css'
import white_arrow from '../../assets/white-arrow.png'
import network from '../../assets/service-section/network.png'
import repair from '../../assets/service-section/repair.png'
import datacenter from '../../assets/service-section/datacenter.png'
import hvac from '../../assets/service-section/hvac.jpg'

const Service = () => {
  return (
    <div>
      <div className='services'>
        <div className="service">
          <img src={network} alt="product image" />
          <div className="caption">
              <p>Network</p>
          </div>
        </div>
        <div className="service">
          <img src={repair} alt="product image" />
          <div className="caption">
              <p>Computer Repair</p>
          </div>
        </div>
        <div className="service">
          <img src={datacenter} alt="product image" />
          <div className="caption">
              <p>Data Center</p>
          </div>
        </div>
        <div className="service">
          <img src={hvac} alt="product image" />
          <div className="caption">
              <p>HVAC System</p>
          </div>
        </div>
      </div>
      <div className='service-btn'>
          <a href='/service' className='btn warning'>See more<img src={white_arrow} alt="" /></a>
      </div>
    </div>
  )
}

export default Service
