import React from 'react'
import { Link } from 'react-router-dom'
export default function Experience() {
  return (
    <div className="container-fluid main-content">
    <h5>EXPERIENCE</h5>
    <h2>WORK EXPERIENCE</h2>
    <div className="container exp">
  <div className="row">
    <div className="col-2">
    <i className="fa-solid fa-pencil bg-info"></i>
    </div>
    <div className="col-10 exp-p">
    <Link to="">Full stack developer</Link><span> 2017-2018</span>
      <p>Tolerably earnestly middleton extremely distrusts she boy now not. 
        Add and offered prepare how cordial two promise. Greatly who affixed 
        suppose but enquire compact prepare all put. Added forth chief 
        trees but rooms think may.</p>
    </div>
  </div>
</div>
<div className="container exp">
  <div className="row">
    <div className="col-2">
    <i className="fa-solid fa-pencil bg-warning"></i>
    </div>
    <div className="col-10 exp-p">
    <Link to="">Full stack developer</Link><span> 2017-2018</span>
      <p>Tolerably earnestly middleton extremely distrusts she boy now not. 
        Add and offered prepare how cordial two promise. Greatly who affixed 
        suppose but enquire compact prepare all put. Added forth chief 
        trees but rooms think may.</p>
    </div>
  </div>
</div>
<div className="container exp">
  <div className="row">
    <div className="col-2">
    <i className="fa-solid fa-pencil bg-danger"></i>
    </div>
    <div className="col-10 exp-p">
    <Link to="">Full stack developer</Link><span> 2017-2018</span>
      <p>Tolerably earnestly middleton extremely distrusts she boy now not. 
        Add and offered prepare how cordial two promise. Greatly who affixed 
        suppose but enquire compact prepare all put. Added forth chief 
        trees but rooms think may.</p>
    </div>
  </div>
</div>

    </div>
        
  )
}
