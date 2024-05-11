import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="true" data-bs-interval="1000">
    <div className='container-fluid home1'>
    <h1>Hi! <br />
      Iam Jackson
    </h1>
    <p>100% html5 bootstrap templates made <br />by <Link>Colorlib.com</Link></p>
    <button>Download CV</button>
  </div>  
    </div>
    <div className="carousel-item" data-interval="true"  data-bs-interval="1000">
    <div className='container-fluid home2'>
    <h1>Iam<br />
       Designer
    </h1>
    <p>100% html5 bootstrap templates made <br />by <Link>Colorlib.com</Link></p>
    <button>View Portfolio</button>
  </div>  
    </div>
    
  </div>
 
</div>










  )
}
