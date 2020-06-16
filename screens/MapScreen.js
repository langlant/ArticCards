import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import {getMap} from '../api/gmap';

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

//const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapScreen = ({navigation, route}) =>{
/*
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap 
                googleMapURL={getMap()}
                loadingElement={<div style={{ height: `100%`}}/> }
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
    */
}

export default MapScreen;