import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import {getMap} from '../api/gmap';

function Map(){
    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 25, lng: 25}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapScreen = ({navigation, route}) =>{

    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap 
                googleMapURL={'https://maps.googleapis.com/maps/api/place/textsearch/json?query=speech+pathologists&key=AIzaSyBDFsX8IckSELVW9V3FbelxibXEyRATyPY'}
                loadingElement={<div style={{ height: `100%`}}/> }
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default MapScreen;