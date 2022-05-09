import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import "./Booking.css";
import { Space, User } from '../../Interface';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import Axios from 'axios';

function Booking({ user }: { user: User | undefined }) {
    const spaceId = useParams().id;
    const [space, setSpace] = useState<Space>();
    const [totalHours, setTotalHours] = useState(0);
    const [organizationMail, setOrganizationMail] = useState("");
    const [bookStatus, setBookStatus] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const bookingHandler = (e: any) => {
        e.preventDefault();
        const url = "https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/booking"
        const data = {
            user_id: user?.id,
            space_id: space?.space_id,
            hour_duration: totalHours,
            price_per_hour: space?.space_price,
            email: user?.email,
            hours: space?.no_of_hours,
            org_email: user?.org_email,
            space_name: space?.space_name,
            space_address: space?.space_address,
            user_name: user?.name
        }
        Axios.post(url, data).then((response) => {
            console.log(response.data);
            if (response.data.status) {
                navigate(`/confirmBooking?space_name=${data.space_name}&hour_duration=${data.hour_duration}&total_price=${data.price_per_hour ? 1.18 * data.price_per_hour * data.hour_duration : 0}`)
            }
            else {
                setBookStatus(true);
            }
        })
    }

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

    return (
        <>
            <h2 className="MainHeading">Confirm your Booking</h2>
            <div className="Booking">
                <style>
                    {`
                    .btn-custom {
                        background-color: rgb(0, 86, 145);
                        color: white;
                    }

                    .btn-custom:hover {
                        color:white;
                    }
                `}
                </style>
                <div className="form-container">
                    <h4>Booking Form</h4>
                    <Form>
                        {bookStatus ? <p style={{ color: "red" }}>Invalid credentials</p> : ""}
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            {user ? <Form.Control type="text" disabled required value={user.username} /> : <Form.Control type="text" autoFocus placeholder="Username" required />}

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            {user ? <Form.Control type="text" disabled required value={user?.name} /> : <Form.Control type="text" autoFocus placeholder="Name" required />}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicContact">
                            <Form.Label>Contact</Form.Label>
                            {user ? <Form.Control type="text" disabled required value={user?.contact} /> : <Form.Control type="text" autoFocus placeholder="Contact" required />}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            {user ? <Form.Control type="text" disabled required value={user?.email} /> : <Form.Control type="text" autoFocus placeholder="Email" required />}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicHours">
                            <Form.Label> Booking hour(s)</Form.Label>
                            {space?.no_of_hours ? <Form.Control type="number" disabled required value={space.no_of_hours} /> : <Form.Control type="number" autoFocus placeholder="No. of hour(s)" required
                                onChange={(event) => {
                                    let x = parseInt(event.target.value);
                                    if (isNaN(x)) {
                                        x = 0;
                                    }
                                    setTotalHours(x)
                                }} />}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicOrganizationMail">
                            <Form.Label>Organization Mail</Form.Label>
                            {user?.org_email ? <Form.Control type="text" disabled required value={user?.org_email} /> : <Form.Control type="text" placeholder="Organization Mail" required onChange={(e) => { setOrganizationMail(e.target.value) }} />}
                        </Form.Group>


                    </Form>
                </div>
                <div className="space-details-container">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src="/Images/SpaceDefault.png" className="img" />
                        <Card.Body>
                            <Card.Title>{space?.space_name}</Card.Title>
                            <Card.Subtitle className="my-2 text-muted">
                                <strong style={{ fontSize: "18px" }}>&#8377;{space?.space_price}/Hr</strong></Card.Subtitle>
                            <Card.Subtitle className="my-2 text-muted">{space?.space_address}</Card.Subtitle>
                            <Card.Subtitle className="my-2 text-muted">
                                <strong style={{ fontSize: "18px" }}></strong>
                            </Card.Subtitle>
                            {space?.space_price ?
                                <div style={{ color: "#6c757d" }}>
                                    <h6>Total hour(s) : {totalHours}</h6>
                                    <h6>Total price : &#8377; {space.space_price * totalHours} ({totalHours} * {space.space_price})</h6>
                                    <h6>GST (18%): &#8377; {0.18 * space.space_price * totalHours}</h6>
                                    <hr />
                                    <h6>Grand Total : &#8377; {1.18 * space.space_price * totalHours}</h6>
                                </div>
                                :
                                <h6>Grand Total : &#8377; 0</h6>}
                            <div className="d-grid my-5 mx-2">
                                <Button variant="custom" type="submit" size="lg" onClick={(e) => { bookingHandler(e) }}>
                                    Confirm Booking
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </>
    )
}

export default Booking;
