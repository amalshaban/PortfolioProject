import React from 'react'
import { Link } from 'react-router-dom'
import  img1 from '../../assets/imgs/gallery/img1.jpg'
import  img2 from '../../assets/imgs/gallery/img2.jpg'
import  img3 from '../../assets/imgs/gallery/img3.jpg'
import  img4 from '../../assets/imgs/gallery/img4.jpg'

export default function Work() {
  return (
    <div className="container-fluid main-content">
   <h5>MY WORK</h5>
   <h2>RECENT WORK</h2>
   <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page">Graphic Design</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Apps</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Software</Link>
        </li>
      </ul>
    </div>
</nav>

<div className="container gallery">
  <div className="row row-cols-2">
  <div className="col">
  <img src={img1} alt=""/>
     <div className="card">
    <Link className="card-title">Work 01</Link>
    <p className="card-text">Animation.</p>
    <div className='icons'>
      <i className="fa-solid fa-share-nodes"> 20</i>
      <i className="fa-solid fa-eye"> 100</i>
      <i className="fa-solid fa-heart"> 49</i>
    </div>
    </div> 
</div>
    
    <div className="col"><img src={img2} alt=""/></div>
  


    <div className="col"><img src={img3} alt=""/></div>
    <div className="col"><img src={img4} alt=""/></div>
  </div>
</div>

<button  type="button" className='btn btn-primary'>Show More</button>
</div>
  )
}