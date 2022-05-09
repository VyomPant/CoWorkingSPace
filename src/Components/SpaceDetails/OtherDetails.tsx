import React, { useEffect, useState } from "react";
import { Space } from "../../Interface";
import "./SpaceDetails.css"

const OtherDetails = ({space} : {space : Space | undefined}) => {
    return(
        <div className="mt-5">
            <h3 className="mb-3">Additional Details</h3>
            <p style={{fontSize: "18px"}}><i className="bi bi-clock"></i> Open Hours:  {space?.space_startTime} to {space?.space_endTime}, Monday to Saturday </p>
            {/* <p style={{fontSize: "18px"}}><i className="bi bi-list-ul"></i> No. of slots available: {space?.no}</p> */}
            <div className="perksAddDetails">
                <h3 className="my-4">Perks</h3>
                <div className="perksIconsAddDetails">
                    {space?.perk_wifi ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/wifi.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Wifi</span>
                        </div>
                    </div> : "" }
                    {space?.perk_ac ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/ac.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>AC</span>
                        </div>
                    </div> : "" }
                    {space?.perk_canteen ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/canteen.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Canteen</span>
                        </div>
                    </div> : "" }
                    {space?.perk_printer ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/printer.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Printer</span>
                        </div>
                    </div> : "" }
                    {space?.perk_projector ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/projector.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Projector</span>
                        </div>
                    </div> : "" }
                    {space?.perk_plugPoint ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/plug.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Plug Point</span>
                        </div>
                    </div> : "" }
                    {space?.perk_freeSnacks ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/snacks.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Free Snacks</span>
                        </div>
                    </div> : "" }
                    {space?.perk_powerBackup ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/power.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Power Backup</span>
                        </div>
                    </div> : "" }
                </div>
            </div>
            <div className="perksAddDetails">
                <h3 className="my-4">Facilities</h3>
                <div className="perksIconsAddDetails">
                    {space?.facilities_washroom ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/washroom.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Washroom</span>
                        </div>
                    </div> : "" }
                    {space?.facilities_parking ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/parking.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Parking</span>
                        </div>
                    </div> : "" }
                    {space?.facilities_lift ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/lift.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Lift</span>
                        </div>
                    </div> : "" }
                    {space?.facilities_locker ? 
                    <div style={{width: "50%", marginBottom: "20px"}}>
                        <div>
                            <img src="/Icons/lockers.png" style={{width: "50px"}} />
                            <span style={{fontSize: "18px", marginLeft: "20px"}}>Lockers</span>
                        </div>
                    </div> : "" }
                </div>
            </div>
        </div>
    )
}

export default OtherDetails;