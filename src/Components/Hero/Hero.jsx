import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Simplifying your hardware infrastructure management</h1>
        <p>Are you struggling to maintain accurate documentation 
            for your computer and hardware networking infrastructure? 
            Let us take the hassle out of network documentation 
            with our comprehensive services tailored to your needs.
        </p>
        <button className='btn warning'>Explore more <img src={white_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
