import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OwnerDashboard.css'

const Sidebar = () => {
  return (
    <div className="ownerSidebar">
      <h3 className="sideHeading">SpaceCorp</h3>
      <ul className="sideList">
        <li> <Link to="/owner" className="listItem">Dashboard</Link></li>
        <li> <Link to="/owner/createSpace" className="listItem">Add Space</Link></li>
        <li> <Link to="/owner/spacesOwned" className="listItem" >List of Spaces</Link></li>
        <li> <Link to="/owner/bookedSpaces" className="listItem">Booked Spaces</Link></li>
      </ul>
    </div>
  );
};
export default Sidebar;