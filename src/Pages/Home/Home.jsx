import { useState } from 'react'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Gallery from '../../Components/Gallery/Gallery'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Partner from '../../Components/Partner/Partner'
import Product from '../../Components/Product/Product'
import Service from '../../Components/Service/Service'
import Title from '../../Components/Title/Title'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

const Home = () => {
    const [playState, setPalyState] = useState(false);
  return (
    <div>
        <div className="container-nav">
            <Navbar/>
        </div>
        <Hero/>
        <div className="container">
            <Title subTitle = 'Our Product' title = 'Seamless Network Solution'/>
            <Product/>

            <Title subTitle = 'Our Service' title = 'What we offer'/>
            <Service/>

            <About setPalyState={setPalyState}/>

            <Title subTitle = 'Gallery' title = 'Explore Our Portfolio'/>
            <Gallery/>

            <Title subTitle = 'Contact Us' title = 'Connect with Us Today'/>
            <Contact/>

            <Title subTitle = 'Partners' title = 'Our Trusted Network of Partners'/>
            <Partner/>

            <Footer/>
            <VideoPlayer playState= {playState} setPalyState={setPalyState}/>
        </div>
    </div>
  )
}

export default Home
