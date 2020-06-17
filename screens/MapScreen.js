import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import {getMap} from '../api/gmap';
import {gkey} from '../api/gkey'

const mapData = getMap();

function Map(){
  const [selectedSpeech, setSelectedSpeech] = useState(null);

  return(
    <GoogleMap
      defaultZoom={10} defaultCenter={{lat: 42.807091, lng: -86.018860}}
    >
      {mapData.results.map((speech) => (
        <Marker key={speech.place_id} position={{
          lat: speech.geometry.location.lat, 
          lng: speech.geometry.location.lng
        }}
        onPress={() => {
          setSelectedSpeech(speech);
        }}
        />
      ))}

      {selectedSpeech && (
        <InfoWindow position={{
          lat: selectedSpeech.geometry.location.lat, 
          lng: selectedSpeech.geometry.location.lng
        }}
        onCloseClick={() => {
          setSelectedSpeech(null);
        }}
        >
          <div> 
            <h2>
              {selectedSpeech.name}
            </h2>
            <h3>
              {selectedSpeech.rating}
            </h3>
            <p>
              {selectedSpeech.formatted_address}
            </p>
          </div> 
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapScreen = () => {
  return(
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${gkey}`}
        loadingElement = {<div style={{height: "100%"}}/>}
        containerElement = {<div style={{height: "100%"}}/>}
        mapElement = {<div style={{height: "100%"}}/>}
      />
    </div>
  )
}

export default MapScreen;