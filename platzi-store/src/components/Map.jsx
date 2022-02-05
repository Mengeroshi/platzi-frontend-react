import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({data}) =>{
    console.log(data)
    const mapStyles ={
        height: '58vh',
        with:'100%',
    }

    const defaultCenter ={
        lat: data.lat,
        lng: data.lng,
    }

    return(
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={20}
                center={defaultCenter}
            >
            <Marker
                position={defaultCenter}
            />
            </GoogleMap>
        </LoadScript>
    )
}

export {Map}