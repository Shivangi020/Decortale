import React from 'react'
import './newsletter.css'
import nlImage from '../../images/acessories-design.jpg'

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
        <img  className ="nl-img" src={nlImage}></img>
    </div>
    </section>

</div>
    )
}

export default Newsletter

// <span className='nl-line'><hr/></span>