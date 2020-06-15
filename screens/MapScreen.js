import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import {gkey} from '../api/gkey'



const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapScreen = ({navigation}) =>{
    const {defaultAddress} = route.params;
   /* function Map(){
        return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 42.807091, lng: -86.018860}}/>
    }*/
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/geocode/json?address=${defaultAddress}&key=${gkey}`}
                loadingElement={<div style={{ height: `100%`}}/> }
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default MapScreen;