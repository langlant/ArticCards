import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import * as speechData from "../data/speechData.json";
import { gkey } from '../api/gkey';
import { getMap } from '../api/gmap';

function Map(){
  const [selectedSpeech, setSelectedSpeech] = useState(null);
  const [mapData, setSMapData] = useState(null);

  useEffect(() => {
    // setSMapData will be called with results.data updating mapData
    getMap(setSMapData)
  }, [])

  return(
    
    <GoogleMap
      defaultZoom={10} defaultCenter={{lat: 42.9634, lng: -85.6681}}
    >
      {mapData && mapData.results.map((speech) => (
        
        <Marker key={speech.place_id} position={{
          lat: speech.geometry.location.lat, 
          lng: speech.geometry.location.lng
        }}
        onPress={() => {
          setSelectedSpeech(speech);
        }}
        onCloseClick={() => {
          setSelectedSpeech(speech);
        }}
        />
      ))}

      {selectedSpeech && (
        <InfoWindow position={{
          lat: selectedSpeech.geometry.location.lat, 
          lng: selectedSpeech.geometry.location.lng
          }}
          onPress={() => {
            setSelectedSpeech(null);
          }}
          onCloseClick={() => {
            setSelectedSpeech(null);
          }}
        >
          <View>
            <Text>Name: {selectedSpeech.name}</Text>
            <Text>Rating: {selectedSpeech.rating} out of 5</Text>
            <Text>{selectedSpeech.formatted_address}</Text>
          </View>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapScreen = () => {
  return(
    <View style={{width: '100vw', height: '100vh'}}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${gkey}`}
        loadingElement = {<div style={{height: "100%"}}/>}
        containerElement = {<div style={{height: "100%"}}/>}
        mapElement = {<div style={{height: "100%"}}/>}
      />
    </View>
  )
}

export default MapScreen;