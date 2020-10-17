import React from 'react';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';

const Map = ({ isMarkerShown, position, google }) => {

    return (
        <GoogleMap
            google={google} zoom={9.2}
            initialCenter={{
                lat: 13.695,
                lng: -88.950
            }}
            onClick={() => console.log('Cerrando')}
            className='mapaComp'
        >
            {/* <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
        </GoogleMap>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyByGZOo09v4DtgdVsEwudHzF_O_6QtC4LY'
})(Map)
