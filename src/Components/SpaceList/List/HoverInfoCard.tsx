import React from "react";
import { Card } from "react-bootstrap";
import { Space } from "../../../Interface";
import "./List.css"

const HoverInfoCard = ({space} : {space : Space | undefined}) => {
    return(
        <div>
             <Card>
              <Card.Img variant="top" src="/Images/SpaceDefault.png" />
              <Card.Body>
                <Card.Title>{space?.space_name}</Card.Title>
                <Card.Text>
                    Listed By {space?.owner_name}
                </Card.Text>
                <div>
                  <h1 className="headingPerks">Perks</h1>
                  <div className="perks">
                    {space?.perk_ac ? 
                    <img src="/Icons/ac.png" className="perksIcon" />
                    : "" }
                    {space?.perk_wifi ?
                    <img src="/Icons/wifi.png" className="perksIcon" />
                    : "" }
                    {space?.perk_printer ?
                    <img src="/Icons/printer.png" className="perksIcon" />
                    : "" }
                    {space?.perk_canteen ?
                    <img src="/Icons/canteen.png" className="perksIcon" />
                    : "" }
                    {space?.perk_projector ?
                    <img src="/Icons/projector.png" className="perksIcon" />
                    : "" }
                  </div>
                </div>
                <div>
                  <h1 className="headingPerks">Facilities</h1>
                  <div className="perks">
                    {space?.facilities_washroom ? 
                    <img src="/Icons/washroom.png" className="perksIcon" />
                    : "" }
                    {space?.facilities_lift ?
                    <img src="/Icons/lift.png" className="perksIcon" />
                    : "" }
                    {space?.facilities_locker ?
                    <img src="/Icons/lockers.png" className="perksIcon" />
                    : "" }
                    {space?.facilities_parking ?
                    <img src="/Icons/parking.png" className="perksIcon" />
                    : "" }
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">For more details go to booking page</small>
              </Card.Footer>
            </Card>
        </div>
    )
}
export default HoverInfoCard;