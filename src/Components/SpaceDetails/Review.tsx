import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import { ReviewInterface } from "../../Interface";
import "./SpaceDetails.css"

const Review = ({review} : {review : ReviewInterface}) => {
    return(
        <div className="mt-4">
            <Card>
              <Card.Header>
                  <div className="reviewHeader">
                      <div>
                        <Image src="/Icons/user.png" className="userImg"/>
                        {review.name}
                      </div>
                    <h5><i className="bi bi-star-fill" style={{"color": "#FFD700"}}></i> {review.rating ? review.rating : "None"}</h5>
                  </div>
                  </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{review.description}</p>
                </blockquote>
              </Card.Body>
            </Card>
        </div>
    )
}

export default Review;