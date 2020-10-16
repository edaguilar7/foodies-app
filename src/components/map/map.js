import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"

const Map = ({ isMarkerShown, position }) => {

    const { lat = -34.397, lng = 150.644  } = position || { };
    return (
        <GoogleMap
            key={'AIzaSyByGZOo09v4DtgdVsEwudHzF_O_6QtC4LY'}
            defaultZoom={8}
            defaultCenter={{ lat, lng }}
        >
            {isMarkerShown && <Marker position={{ lat, lng }} />}
        </GoogleMap>
    )
}

export default withGoogleMap(Map)
// key: 'AIzaSyByGZOo09v4DtgdVsEwudHzF_O_6QtC4LY'
