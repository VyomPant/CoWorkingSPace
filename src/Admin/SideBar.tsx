import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
  return (
    <div>
      <div className='servces1'>
        <div className='cs1'>
          <h1 className='dash-board'>Space Corp</h1>
          <div className='all-list'>
            <ul className="list">
              <li> <Link to="/adminDashboard" className="dashboard">Dash Board</Link></li>
              <li> <Link to="/addspace" className="addspace">Add Space</Link></li>
              <li> <Link to="/listofspace" className="item2" >List Of Space</Link></li>
              <li> <Link to="/bookedlist" className="item3">Booked Space</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar