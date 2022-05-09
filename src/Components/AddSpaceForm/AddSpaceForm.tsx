import React, { useEffect, useState } from "react";
import Select from 'react-select';
import Axios from "axios";
import "./AddSpaceForm.css";
import { Owner } from "../../Interface";
import { useNavigate } from 'react-router-dom';

function AddSpaceForm({ owner, setHeading }: { owner: Owner | undefined, setHeading: any }) {
    useEffect(() => {
        setHeading("Add Space")

    }, [])

    const [spaceName, setSpaceName] = useState("");
    const [spaceAddress, setSpaceAddress] = useState("");
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
    const [spacePrice, setSpacePrice] = useState("");
    const [spaceType, setSpaceType] = useState(1);
    const [spaceFacilities, setSpaceFacilities] = useState<any>([]);
    const [spacePerks, setSpacePerks] = useState<any>([]);
    const navigate = useNavigate();

    function handleFacilitiesChange(e: any) {
        var options = e
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            value.push(options[i].label);
        }
        setSpaceFacilities(value)
    }
    function handlePerksChange(e: any) {
        var options = e
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            value.push(options[i].label);
        }
        setSpacePerks(value)
    }


    function addSpaceHandler(e: any) {
        e.preventDefault();

        Axios.post("https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/spaces/create", {
            name: spaceName,
            type: spaceType,
            price: spacePrice,
            address: spaceAddress,
            start_time: openTime,
            end_time: closeTime,
            owner_id: owner?.id
        }).then((response) => {
            Axios.post("https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/perks/create", {
                space_id: response.data[0].lastSpaceId,
                wifi: spacePerks.includes("Wifi") ? 1 : 0,
                ac: spacePerks.includes("AC") ? 1 : 0,
                freeSnacks: spacePerks.includes("FreeSnacks") ? 1 : 0,
                canteen: spacePerks.includes("Canteen") ? 1 : 0,
                plugPoint: spacePerks.includes("Plug Point") ? 1 : 0,
                printer: spacePerks.includes("Printer") ? 1 : 0,
                powerBackup: spacePerks.includes("Power Backup") ? 1 : 0,
                projector: spacePerks.includes("Projector") ? 1 : 0,
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
            Axios.post("https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/facilities/create", {
                spaceId: response.data[0].lastSpaceId,
                washroom: spaceFacilities.includes("Washroom") ? 1 : 0,
                parking: spaceFacilities.includes("Parking") ? 1 : 0,
                lift: spaceFacilities.includes("Lift") ? 1 : 0,
                lockers: spaceFacilities.includes("Locker") ? 1 : 0,
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
            alert("Space Created");
            navigate("/owner/spacesOwned");
        }).catch((error) => {
            console.log(error);
        })

    }


    // Dropdown options
    const options = {
        facilties: [
            { value: 1, label: 'Washroom' },
            { value: 2, label: 'Parking' },
            { value: 3, label: 'Lift' },
            { value: 4, label: 'Locker' }
        ],
        perks: [
            { value: 1, label: 'Wifi' },
            { value: 2, label: 'AC' },
            { value: 3, label: 'FreeSnacks' },
            { value: 4, label: 'Canteen' },
            { value: 5, label: 'Plug Point' },
            { value: 6, label: 'Printer' },
            { value: 7, label: 'Power Backup' },
            { value: 8, label: 'Projector' },
        ],
        spacetype: [
            { value: 1, label: 'Cabin' },
            { value: 2, label: 'Large desk' },
            { value: 3, label: 'Hotseat' }
        ]
    }

    return (

        // Parent container (Flex)
        <div className="AddSpaceForm">

            {/* Form container  (Flex item - 1) */}
            <form className="AddSpaceFormContainer">

                {/* Form group for space name */}

                <div className="form-group-for-add-space">
                    <label className="form-label">Space Name</label>
                    <input type="text" className="form-control" id="exampleInputSpaceName" placeholder="Enter Space Name" autoFocus required onChange={(event) => { setSpaceName(event.target.value) }} />
                </div>

                {/* Form group for space type */}

                <div className="form-group-for-add-space">
                    <label className="form-label">Space Type</label>
                    <Select options={options.spacetype} onChange={(event) => {
                        setSpaceType((event == undefined) ? 1 : event.value)
                    }} />
                </div>

                {/* Form group for space address */}

                <div className="form-group-for-add-space">
                    <label className="form-label">Space Address</label>
                    <input type="text" className="form-control" id="exampleInputSpaceAddress" placeholder="Enter Space Address" required onChange={(event) => { setSpaceAddress(event.target.value) }} />
                </div>

                {/* Form group for open time */}

                <div className="form-group-for-add-space">
                    <label className="form-label">Open Time</label>
                    <input type="time" className="form-control" id="exampleOpenTime" placeholder="Enter Open Time" required onChange={(event) => { setOpenTime(event.target.value) }} />
                </div>

                {/* Form group for close time */}

                <div className="form-group-for-add-space">
                    <label className="form-label" >Close Time</label>
                    <input type="time" className="form-control" id="exampleCloseTime" placeholder="Enter Close Time" required onChange={(event) => { setCloseTime(event.target.value) }} />
                </div>

                {/* Form group for space price */}

                <div className="form-group-for-add-space">
                    <label className="form-label">Price of Space</label>
                    <input type="number" id="exampleSpacePrice" className="form-control" placeholder="Enter Space Price" required onChange={(event) => { setSpacePrice(event.target.value) }} />
                </div>

                {/* Form group for facilities dropdown */}

                <div className="form-group-for-add-space">
                    <label className="form-label" >Facilities</label>
                    <Select isMulti options={options.facilties} onChange={(e) => {
                        handleFacilitiesChange(e)
                    }} />
                </div>

                {/* Form group for perks dropdown */}

                <div className="form-group-for-add-space">
                    <label className="form-label" >Perks</label>
                    <Select isMulti options={options.perks} onChange={(e) => {
                        handlePerksChange(e)
                    }} />
                </div>

                {/* Add space button */}

                <button type="submit" className="btn btn-primary" onClick={(e) => addSpaceHandler(e)}
                    style={{
                        background: "#004A7C", width: "100%",
                        margin: "20px 0px"
                    }}>Add Space</button>
            </form>

            {/* Image container (Flex-item 2) */}

            <div className="space-image-container">
                <img className="my-img" src="/Images/spaceform.jpg" alt="Image" />
            </div>
        </div >
    );
}

export default AddSpaceForm
