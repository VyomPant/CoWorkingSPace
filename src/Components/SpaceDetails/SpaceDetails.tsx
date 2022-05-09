import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainDetails from "./MainDetails";
import api from "../../api";
import { ReviewInterface, Space, User } from "../../Interface";
import OtherDetails from "./OtherDetails";
import Review from "./Review";
import MapContainer from "./Gmaps/Map";
import { Button, Form } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import "./SpaceDetails.css"
import  Axios  from "axios";

const SpaceDetails = ({ user }: { user: User | undefined }) => {
    const spaceId = useParams().id;
    const [space, setSpace] = useState<Space>();
    const [reviews, setReviews] = useState<ReviewInterface[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        api.getSpaceById(spaceId).then((fetched) => {
            if (fetched.data[0]) {
                setSpace(fetched.data[0])
            }
        })
            .catch(err => {
                console.log(err);
            })
    }, [spaceId])
    useEffect(() => {
        getReviewsBySpaceId();
    }, [spaceId])
    const getReviewsBySpaceId = () => {
        api.getReviewsBySpaceId(spaceId).then(fetched => {
            if (fetched.data) {
                setReviews(fetched.data.data);
            }
        })
            .catch(err => {
                console.log(err)
            });

    }
    const handleAddReview = (e:any) => {
        e.preventDefault();
        Axios.post('https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/reviews/create', {
          space_id: spaceId,
          rating: rating,
          description: reviewDesc,
          user_id: user?.id
        }).then((response) => {
          getReviewsBySpaceId();
          setShowAddReview(false);
        })
    }
    const handleReviewDesc = (e:any) => {
        setReviewDesc(e.target.value);
    }
    const handleRating = (e:any) => {
        setRating(e);
    }
    const showAddReviewHandle = () => {
        if(user === undefined){
            navigate("/login");
        }
        setShowAddReview(true);
    }
    const [reviewDesc,setReviewDesc] = useState("");
    const [rating, setRating] = useState(2);
    const [showAddReview, setShowAddReview] = useState(false);
    return (
        <div className="container">
            <MainDetails space={space} user={user} />
            <OtherDetails space={space} />
            {/* <MapContainer /> */}
            <div className="mt-4">
                <h3>Customer Reviews</h3>
                {!showAddReview ? 
                <Button variant="primary" onClick={showAddReviewHandle}>Add review</Button> :
                <div className="my-4">
                <Form >
                    <div className="ratingsDiv">
                        <span style={{marginRight: "30px"}}>Rating</span>
                        <div style={{fontSize: "24px"}}>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={5}
                                value={rating}
                                onStarClick={(e) => handleRating(e)}
                            />
                        </div>

                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{fontSize:"18px"}}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control value={reviewDesc} as="textarea" rows={3} onChange={(e) => handleReviewDesc(e)} />
                    </Form.Group>
                    <Button variant="primary" onClick={(e) => handleAddReview(e)} >Submit</Button>
                    <Button variant="danger" onClick={()=>setShowAddReview(false)} style={{marginLeft: "30px"}} >Cancel</Button>
                </Form>
                </div> }
                {reviews ? reviews.map(review => (
                    <Review review={review} key={review.review_id} />
                )) : ""}
            </div>
        </div>
    )
}
export default SpaceDetails;
