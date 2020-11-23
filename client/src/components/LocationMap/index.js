import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


const LocationMap = props => {

    return <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 39.708794845449816, lng: -104.92424610104125 }}
    />
}

const WrappedMap = withScriptjs(withGoogleMap(LocationMap));

export default () => {
    return <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3&key=`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />} >
            <LocationMap />
        </WrappedMap>
    </div>
};

