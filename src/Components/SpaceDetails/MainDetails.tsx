import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom";
import apis from "../../api";
import { Space, User } from "../../Interface";
import "./SpaceDetails.css"

const MainDetails = ({ space, user }: { space: Space | undefined, user: User | undefined }) => {
    const [AverageRating, setAverageRating] = useState();
    useEffect(() => {
        {
            space ?
                apis.getAvgRatingBySpaceID(space.space_id).then(fetched => {
                    setAverageRating(fetched.data[0].AverageRating)

                }) : console.log("Loading")
        }
    }, [space])
    return (
        <div className="mainDetails">
            <Image src="/Images/bigspace.jpg" className="mainImg" />
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <div className="mainDetailsHeading">
                            <h4>{space?.space_name}</h4>
                            <h6><i className="bi bi-star-fill" style={{ "color": "#FFD700" }}></i> {AverageRating ? AverageRating : "None"}</h6>
                        </div>
                        <Card.Subtitle className="mb-4 text-muted">{space?.space_address}</Card.Subtitle>
                        <div>
                            <h6>Active Hours</h6>
                            <p>{space?.space_startTime} to {space?.space_endTime}</p>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <h5>Owner Details</h5>
                            <div>
                                <p>Listed By {space?.owner_name} <br /> {space?.owner_bio}</p>
                            </div>
                            <div>
                                <h6>Contact owner</h6>
                                <p>{space?.owner_email} <br /> {space?.owner_contact}</p>
                            </div>
                        </div>
                        <div>
                            <strong style={{ fontSize: "18px" }}>&#8377;{space?.space_price}/Hr</strong>
                        </div>
                        <Link to={user ? `/booking/${space?.space_id}` : "/login"}><Button className="px-5 py-2 m-3" style={{ backgroundColor: "#005691" }}>Continue with Booking</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default MainDetails;