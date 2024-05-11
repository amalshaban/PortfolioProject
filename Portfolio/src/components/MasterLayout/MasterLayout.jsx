import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


export default function MasterLayout() {
  return (
  
  
    <div className="container-fluid">
  <div className="row">
    <div className="col-2 p-0">
    <Sidebar />
    </div>
    <div className="col-10 p-0">
    <Outlet></Outlet>
    </div>
  </div>
  </div>
    
  );
}


