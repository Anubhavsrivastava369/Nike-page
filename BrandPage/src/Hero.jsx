import React from 'react'
import shoe_image from './assets/shoe_image.png'
import amazon from './assets/amazon.png'
import flipkart from './assets/flipkart.png'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-content">
        <h1>
        YOUR FEET DESERVE THE BEST
        </h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
            <button className='p'>Shop Now</button>
            <button className='s'>Category</button>
        </div>
        <div className="lower">
                <p className='lower-p'>Also Available on</p>
                <div className="image">
                    <img src={amazon} alt="amazon_logo"/>
                    <img src={flipkart} alt="flipkart_logo"/>
                </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe_image} alt="shoes_image"/>
      </div>
      
    </div>
  )
}

export default Hero
