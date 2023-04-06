import React from 'react'
import './newsletter.css'


function Newsletter() {
  return (
<div className="nl-main">
    <section className='nl'>
    <div className="nl-wrapper">
        <h4 className='nl-heading'>Get a free consultation.</h4>
        <h4 className='nl-p'>Just leave a request below</h4>
        <form className='nl-form'>
            <input placeholder='Email / Phone No.' id='nl-input'></input>
            <button type='submit' className='nl-btn'>CallBack</button>
        </form>
    </div>
    <div className='nl-img-div'>
        <img className ="nl-img" src='https://res.cloudinary.com/drgtvwy3q/image/upload/v1680550016/decortale-images/acessories-design_ndrfvk.jpg' alt='newsletter'></img>
    </div>
    </section>

</div>
    )
}

export default Newsletter

// <span className='nl-line'><hr/></span>