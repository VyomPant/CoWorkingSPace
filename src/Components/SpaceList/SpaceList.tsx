import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { Space } from '../../Interface';
import List from './List/List';
import "./List/List.css"

const SpaceList = () => {
    const paramType : string | undefined = useParams().type;  
    const [type, setType] = useState<string | undefined>(paramType);
    const [spaceList, setSpaceList] = useState<Space[]>([]);
    const [selectedRating, setSelectedRating] = useState<number>();
    const [selectedLocation, setSelectedLocation] = useState<string>("all");
    useEffect(() => {
    //    if(type === "all" || type === undefined){
    //        api.getAllSpaces()
    //        .then(fetched => {
    //            setSpaceList(fetched.data)
    //        })
    //    }else{
    //       api.getSpacesByType(type)
    //        .then(fetched => {
    //            setSpaceList(fetched.data);
    //        })
    //        .catch(err => {
    //            console.log(err);
    //        });
    //    }
           api.getAllSpaces()
           .then(fetched => {
               setSpaceList(fetched.data)
           })
    },[])
    const typeChange = (e:any) => {
        setType(e.target.value);
    }
    const locationChange = (e:any) => {
        setSelectedLocation(e.target.value);
    }
    return(
        <div className='container mt-4'>
            {type === undefined ? <h3>Explore Co-working spaces near you</h3> : 
            <h3 className='mb-3'>Spaces available with {type} type</h3> }
            <div className='filterBar'>
                <span><i className="bi bi-funnel-fill"></i> Filter</span>
                <select className='form-select' style={{width: "20rem", marginLeft: "20px"}} onChange={(e) => typeChange(e)}>
                    <option value="default" hidden >Types</option>
                    <option value={"all"}>All</option>
                    <option value={"hotseat"}>Hotseat</option>
                    <option value={"largedesk"}>Largedesk</option>
                    <option value={"cabin"}>Cabin</option>
                </select>
                <select className='form-select' style={{width: "20rem", marginLeft: "20px"}} onChange={(e) => locationChange(e)}>
                    <option value="default" hidden >Location</option>
                    <option value={"all"}>All</option>
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Noida"}>Noida</option>
                    <option value={"Gurugram"}>Gurugram</option>
                    <option value={"Pune"}>Pune</option>
                </select>
            </div>
            <List spaceList = {spaceList} selectedType={type} selectedLocation={selectedLocation} />
        </div>
    )

}

export default SpaceList;