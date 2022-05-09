import React from "react";
import { Link } from "react-router-dom";
import { Space } from "../../Interface";

const PopularCard = ({space} : {space: Space}) => {
    return (
        <div className="m-3">
            <div className='card'>
                <img src='Images/SpaceDefault.png' className='float-left' alt='image' />
                <div className='card-body'>
                <div className="spaceNameRatings">
                <h6>{space.name}</h6>
                <h6><i className="bi bi-star-fill" style={{"color": "#FFD700"}}></i> {space.AverageRating ? space.AverageRating : "None"}</h6>
                </div>
                <p>{space.address ? space.address : "Delhi"}</p>
                <div className="bookNow">
                    <p>&#8377; {space.price}/Hr</p>
                    <Link to={`spacedetails/${space.id}`} ><p className="bookNowLink">Book Now <i className="bi bi-arrow-right"></i></p></Link>
                </div>
                </div>
                
            </div>

        </div> 
    );

}

export default PopularCard;