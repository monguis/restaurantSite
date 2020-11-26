import React from "react"
import {
    GoogleMap,
    Marker,
    useLoadScript
} from "@react-google-maps/api";

import mapStyle from "./mapStyle.js"
const libraries = ["places"];

const LocationMap = props => {

    console.log(useLoadScript)
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "nokeyfornow" ,
        libraries,
    });
    const position = { lat: 39.708794845449816, lng: -104.92424610104125 }

    if (loadError) return "no worked"
    if (!isLoaded) return "loading"

    return (
        <div className="LocationMap" style={{ height: "50rem" }}>
            <GoogleMap
                mapContainerStyle={{
                    height: '100%',
                    width: "100%"
                }}
                zoom={15}
                center={position}
                options={{
                    disableDefaultUI: true,
                    styles: mapStyle
                }}
            >
                {/* 5307 Leetsdale Dr Denver, CO 80246 */}

                <Marker
                    position={ position }
                >
                </Marker>
            </GoogleMap>
        </div>
    )
};

export default LocationMap;