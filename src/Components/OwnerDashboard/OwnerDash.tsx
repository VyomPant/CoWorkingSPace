import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Owner } from "../../Interface";
import "./OwnerDashboard.css"

const OwnerDash = ({owner,setHeading} : {owner: Owner | undefined, setHeading: any}) => {
    const [totalAvailableSpaces, setTotalAvailableSpaces] = useState(0);
    const [bookingData, setBookingData] = useState<any>([]);
    const [totalEarnings, setTotalEarnings] = useState(0);
    useEffect(() => {
        setHeading("Dashboard")
        getTotalSpaces();
        getAllBookings();

    },[]);
    function getTotalSpaces(){
        Axios.get("https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/owner/getSpaceDetails?id=" + owner?.id).then((response) => {
            setTotalAvailableSpaces(response.data.results.length)
        }).catch((error) => {
            console.log(error.data)
        })
    }
    function getAllBookings(){
        Axios.get("https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/owner/getBookingDetails?id=" + owner?.id).then((response) => {
            setBookingData(response.data.results);
            let totalPrice = 0;
            response.data.results.forEach((item:any) => {
                totalPrice += parseInt(item.booking_totalPrice);
            });
            setTotalEarnings(totalPrice);
        }).catch((error) => {
            console.log(error.data)
        })
    }
    return(
        <div>
            <Container className="ownerDashContainer">
            <Link to="/owner/bookedSpaces" style={{textDecoration: "none", color: "black"}}>
            <Card  className="earningCard" style={{width: "15rem"}}>
                <Card.Header>Total Earnings  <i className="bi bi-graph-up-arrow" style={{float: "right"}}></i>  </Card.Header>
                <Card.Body>
                  <Card.Title>&#8377; {totalEarnings} </Card.Title>
                  <Card.Text>From all the booked spaces</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="/owner/bookedSpaces" style={{textDecoration: "none", color: "black"}}>
            <Card className="bookedCard" style={{width: "15rem"}}>
                <Card.Header>Spaces Booked  <i className="bi bi-building" style={{float: "right"}}></i>  </Card.Header>
                <Card.Body>
                  <Card.Title>{bookingData.length} Spaces Booked </Card.Title>
                  <Card.Text>Click to view details</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="/owner/createSpace" style={{textDecoration: "none", color: "black"}}>
            <Card className="totalSpacesCard" style={{width: "15rem"}}>
                <Card.Header>Total Spaces  <i className="bi bi-plus-circle-fill" style={{float: "right"}}></i>  </Card.Header>
                <Card.Body>
                  <Card.Title>{totalAvailableSpaces} Listed Spaces </Card.Title>
                  <Card.Text>Click to list new space</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="/owner/bookedSpaces" style={{textDecoration: "none", color: "black"}}>
            <Card className="lastSpaceCard" style={{width: "15rem"}}>
                <Card.Header>Last space booked  <i className="bi bi-heart-fill" style={{float: "right"}}></i>  </Card.Header>
                <Card.Body>
                  <Card.Title>{bookingData.length > 0 ? bookingData[0].space_name : "None"}</Card.Title>
                  <Card.Text>&#8377; {bookingData.length > 0 ? bookingData[0].booking_totalPrice : "None"} </Card.Text>
                </Card.Body>
            </Card>
            </Link>

            </Container>
            <Container>
            <Card border="light" className="m-5" >
                <div className="ownerInfoCard">
                <div className='ownerCardSection'>
                    <Card.Img src="/Images/owner.png" className="ownerImg" />
                </div>
                <div className='ownerCardSection'>
                <Card.Body>
                  <Card.Title style={{marginTop: '20px', marginBottom: "40px"}}>{owner?.name}</Card.Title>
                  <Card.Text><i className="bi bi-text-paragraph"></i> {owner?.bio}</Card.Text>
                  <Card.Text><i className="bi bi-telephone-fill"></i> {owner?.contact}</Card.Text>
                  <Card.Text><i className="bi bi-envelope-fill"></i>  {owner?.email}</Card.Text>
                </Card.Body>

                </div>
                </div>
            </Card>

            </Container>
        </div>
    )

}
export default OwnerDash;
