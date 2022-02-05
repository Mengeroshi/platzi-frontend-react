import React from "react";
import axios from "axios";
const useGoogleAddress = address =>{
    const [map, setMap] = React.useState({lat: 0, lng: 0});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=`+ process.env.GOOGLE_MAPS_KEY;


    React.useEffect( () =>{

        const handler = async () =>{
            const res = await axios(API);
            const data = await res.data.results[0].geometry.location;
            setMap(data)
        }
        handler();      
    },[])

    return map
}

export {useGoogleAddress}