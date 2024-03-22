import './Product.css'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import white_arrow from '../../assets/white-arrow.png'

import laptop from '../../assets/product-section/laptop.png'
import desktop from '../../assets/product-section/desktop.png'
import printer from '../../assets/product-section/printer.png'
import cctv from '../../assets/product-section/cctv.png'

const Product = () => {
  return (
    <div id='product'>
        <div className='products' >
            <div className='product'>
                <img src={laptop} alt="product image" />
                <div className="caption">
                    <img src={program_icon_1} alt="icon" />
                    <p>Laptops</p>
                </div>
            </div>
            <div className='product'>
                <img src={desktop} alt="product image" />
                <div className="caption">
                    <img src={program_icon_3} alt="icon" />
                    <p>Desktop</p>
                </div>
            </div>
            <div className='product'>
                <img src={printer} alt="product image" />
                <div className="caption">
                    <img src={program_icon_2} alt="icon" />
                    <p>Printers</p>
                </div>
            </div>
            <div className='product'>
                <img src={cctv} alt="product image" />
                <div className="caption">
                    <img src={program_icon_1} alt="icon" />
                    <p>CCTV</p>
                </div>
            </div>
        </div>
        <div className='product-btn'>
            <a href='/product' className='btn primary'>See more<img src={white_arrow} alt="" /></a>
        </div>
    </div>
    
  )
}

export default Product
