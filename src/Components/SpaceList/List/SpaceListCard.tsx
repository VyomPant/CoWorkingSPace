import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../../api';
import { Space } from '../../../Interface';
import "./List.css"

const SpaceListCard = ({space} : {space: Space}) => {
  const [avgRating, setAvgRating] = useState<number>(0);
  useEffect(() => {
   api.getAvgRatingBySpaceID(space.space_id)
    .then(fetched => {
      if(fetched.data.length > 0){
        setAvgRating(fetched.data[0].AverageRating)
      }
    })
    .catch(err => {
      console.log(err);
    })

  },[])
    return (
        <div style={{marginTop : '30px'}}>
            <Card >
                <div className="cardBS">
                <div className='cardSection'>
                    <Card.Img src="/Images/SpaceDefault.png" className="spaceImg" />
                </div>
                <div className='cardSection'>
                <Card.Body>
                    <div className="titleRatings">
                        <Card.Title>{space.space_name}</Card.Title>
                        <h5><i className="bi bi-star-fill" style={{"color": "#FFD700"}}></i> {avgRating ? avgRating : "None"}</h5>
                    </div>
                  <Card.Text>
                    {space.space_address ? space.space_address : "Delhi"}
                  </Card.Text>
                    <div>
                      <span style={{fontWeight : "bold"}}>Active Hours</span>
                      <strong style={{float: "right"}}>{space.spaceType_name}</strong>
                    </div>
                    <span style={{padding : 0}}>{space.space_startTime} to {space.space_endTime}</span>
                </Card.Body>
                <Card.Body style={{fontSize: "18px"}}>
                  <strong>&#8377; {space.space_price}/Hr</strong>
                  <br/>
                  <Link to={`/spacedetails/${space.space_id}`}>Book Now <i className="bi bi-arrow-right"></i></Link>
                </Card.Body>

                </div>
                </div>
            </Card>
        </div>
    )
}

export default SpaceListCard;