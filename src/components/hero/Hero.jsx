import React from 'react'
import './hero.css'
function Hero({children ,backImg}) {
  return (
    <div className='hero-main'>
        <section className="hero-wrapper" style={{backgroundImage:`url(${backImg})`}}>
            <div className='hero-contents'>
              {children}
            </div>
        </section>
    </div>
  )
}

export default Hero