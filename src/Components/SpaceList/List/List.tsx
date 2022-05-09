import React, {useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../../api';
import { Space } from '../../../Interface';
import SpaceListCard from './SpaceListCard';
import "./List.css";
import HoverInfoCard from './HoverInfoCard';

const List = ({spaceList,selectedType, selectedLocation} : {spaceList : Space[], selectedType : string | undefined, selectedLocation : string | undefined}) => {
    const [showHoverDetails, setShowHoverDetails] = useState(false);
    const [hoveredSpace, setHoveredSpace] = useState<Space>();
    const handleMouseEnter = (space : Space) => {
        setShowHoverDetails(true);
        setHoveredSpace(space);
    }
    const filterFunc = (space : Space) => {
        let arr = spaceList;
        if((selectedType === "all" || selectedType === undefined) && (selectedLocation === "all" || selectedLocation === undefined)){
            return true;
        }else if(selectedType === space.spaceType_name && (selectedLocation === "all" || selectedLocation === undefined)){
            return true;
        }else if(selectedLocation === space.space_address && (selectedType === "all" || selectedType === undefined)){
            return true;
        }
        else{
            return(
                selectedType === space.spaceType_name && selectedLocation === space.space_address
            )
        }
    }
    return(
        <div className='spaceList' >
            <div className="leftList">
                {spaceList.length ? spaceList.filter((space) => filterFunc(space)).map(space => (
                        <div key={space.space_id}>
                            <div onMouseEnter={() => handleMouseEnter(space)}>
                                <SpaceListCard key={space.space_id} space={space}/>
                            </div>
                        </div> 
                )) : <h3 style={{margin: "100px"}}>No Records Found</h3>}
            </div>
            <div className="hoverSpaceDiv">
                {showHoverDetails ? 
                <HoverInfoCard space={hoveredSpace} />
                :
                ""}
            </div>
        </div>
    )
}

export default List;