import React from 'react'
import pp from '../../assets/imgs/profilepic.jpg'
import { Link } from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About';
import Work from '../Work/Work';
import Skills from '../Skills/Skills'; 
import Experience from '../Experience/Experience';

export default function Sidebar() {
  let componentDetails ={
    name: 'Jakson Ford',
    details : 'IN PHILIPPIENS'
  };
  return (
    <div className='x text-center pt-5'>
      <img src={pp} alt=""/>
      <h3>{componentDetails.name}</h3>
      <p className='fs-6'><span>UI/UX Designer </span>{componentDetails.details}</p>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to='Home' className="nav-link active">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to='About' className="nav-link">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to='Skills' className="nav-link">SKILLS</Link>
        </li>
        <li className="nav-item">
          <Link to='Experience' className="nav-link">EXPERIENCE</Link>
        </li>
        <li className="nav-item">
          <Link to='Work' className="nav-link">WORK</Link>
        </li>
      </ul>
    </div>
  )
}
