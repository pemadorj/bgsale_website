import './Card.css'
import { useState, useEffect, useRef } from 'react';

const Card = ({ img, title, prevPrice, newPrice, desc, stock }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const modalRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation(); // Stop event propagation to prevent multiple calls
    setIsCardOpen(true);
  };
  

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!modalRef.current || !modalRef.current.contains(event.target)) {
        setIsCardOpen(false);
      }
    };
  
    if (isCardOpen) {
      document.addEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isCardOpen]);

  return (
    <>
      <section className="card" onClick={handleClick}>
        <img src={img} alt="" className='card-img' />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-price">
          <del className='del-main-price'>Nu. {prevPrice}</del> Nu. {newPrice}
        </div>
        {stock !== 0 ? (
          <div className="card-price">
            <p className='item-av'>Currently Available</p>
          </div>
        ) : (
            <div className="card-price">
              <p className='item-nav'>Currently Not Available</p>
            </div>
          )}
      </section>
      {isCardOpen && (
        <div className="card-modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseCard}>&times;</span>
            <img src={img} alt={title} />
            <div className='desc'>
              <h2>{title}</h2>
              <p>{desc}</p>
              <p><b>Price:</b> <del className='del-price'>Nu. {prevPrice}</del> <b>Nu. {newPrice}</b></p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card;
