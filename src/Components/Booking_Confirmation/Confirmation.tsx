import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import './Confirmation.css';

export default function Confirmation() {
    const [searchParams] = useSearchParams();
    const spaceName = searchParams.get('space_name');
    const hourDuration = searchParams.get('hour_duration');
    const totalPrice = searchParams.get('total_price');

    return (

        <div className='booking'>
            <div className="Confirmation">
                <h1>
                    <img src="/Icons/done-sm.png" alt="Green-Tick-Image" id="done-img" />
                    Booking Confirmed
                </h1>
                <h3>Billing details have been forwarded to the specified organisation mail id for reimbursement</h3>
                <span>&#128591;</span>
            </div>
            <div className="space-detail-container">
                <div className="image-container">
                    <img src="/Images/SpaceDefault.png" alt="Space-Default-Img" id="space-img" />
                </div>
                <div className="details">
                    <label >Space Name : {spaceName}</label><br />
                    <label >No. of hours : {hourDuration}</label><br />
                    <label >Total price : {totalPrice}</label>
                </div>
                <Link to="/" style={{ fontSize: "22px", marginTop: "10%", textDecoration: "none", color: "rgb(0, 86, 145)" }}>Go to Home Page</Link>
            </div>
        </div>
    )
}
