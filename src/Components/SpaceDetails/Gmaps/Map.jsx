import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const MapContainer = () => {
  const [ currentPosition, setCurrentPosition ] = useState({});
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
      <div>
     <LoadScript
       googleMapsApiKey='AIzaSyB1WFhzorNkOqK4NwS4H1NJ-f-RUzpW_5U'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}>
            {
              currentPosition.lat && (
              <Marker 
                position={currentPosition} 
                onDragEnd={(e) => onMarkerDragEnd(e)}
                draggable={true}
                null
              />
              )
            }
        </GoogleMap>
     </LoadScript>
     </div>
  )
}
export default MapContainer;