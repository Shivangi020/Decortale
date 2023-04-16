import React from 'react'
import Hero from './Hero'


function Header() {
  return (
      <Hero backImg='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550028/decortale-images/hero-background_cgmwnn.webp'>
            <h1 className='hero-heading'>Every home needs their own story</h1>
            <p className='hero-p'>Just a interior designers creating your home tale</p>
            <p className='hero-p'>Transforming spaces, enhancing lifestyles</p>
      </Hero>
  )
}

export default Header