import { Link } from 'react-router-dom'
import './pageNav.css'

function PageNav({page}) {
  return (
    <div className='pageNav'>
        <section className='pageNav-main'>
            <span className='pn-link'><Link to='/'>HOME</Link></span>
          <span>/ {page}</span>
        </section>
        
    </div>
  )
}

export default PageNav