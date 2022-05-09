import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddSpaceForm from "../../components/AddSpaceForm/AddSpaceForm";
import SpacesBooked from "../../components/SpacesBooked/SpacesBooked";
import SpacesOwned from "../../components/SpacesOwned/SpacesOwned";
import { Owner } from "../../Interface";
import OwnerDash from "./OwnerDash";
import OnwerNavbar from "./OwnerNavbar";
import Sidebar from "./OwnerSidebar";

const OwnerDashboard = ({ owner }: { owner: Owner | undefined }) => {
    const [heading, setHeading] = useState<string>("Dashboard")
    return (
        <div>
            <OnwerNavbar owner={owner} heading={heading} />
            <Sidebar />
            <Routes>
                <Route path="/" element={<OwnerDash owner={owner} setHeading={setHeading} />} />
                <Route path="/createSpace" element={<AddSpaceForm owner={owner} setHeading={setHeading} />} />
                <Route path="/spacesOwned" element={<SpacesOwned owner={owner} setHeading={setHeading} />} />
                <Route path="/bookedSpaces" element={<SpacesBooked owner={owner} setHeading={setHeading} />} />
            </Routes>
        </div>
    )
}

export default OwnerDashboard;