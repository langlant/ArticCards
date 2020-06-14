import React, { useState, usKeyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, useEffect } from "react";
import { StyleSheet, Text, Keyboard, CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { route, navigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { storeArtic, setupArticListener, initArticDB } from '../helpers/fb-settings';

const articType = [
    {arType: 'CV', addCV: true},
    {arType: 'VC', addCV: true},
    {arType: 'VV', addCV: true},
    {arType: 'VCV', addCV: true},
    {arType: 'CVCV', addCV: true},
    {arType: 'C1V1C1V2', addCV: true},
    {arType: 'C1V1C2V2', addCV: true},
];

const alphaType = [
    {alType: 'A', addAlpha: true},
    {alType: 'B', addAlpha: true},
    {alType: 'C', addAlpha: true},
    {alType: 'D', addAlpha: true},
    {alType: 'E', addAlpha: true},
    {alType: 'F', addAlpha: true},
    {alType: 'G', addAlpha: true},
    {alType: 'H', addAlpha: true},
    {alType: 'I', addAlpha: true},
    {alType: 'J', addAlpha: true},
    {alType: 'K', addAlpha: true},
    {alType: 'L', addAlpha: true},
    {alType: 'M', addAlpha: true},
    {alType: 'N', addAlpha: true},
    {alType: 'O', addAlpha: true},
    {alType: 'P', addAlpha: true},
    {alType: 'Q', addAlpha: true},
    {alType: 'R', addAlpha: true},
    {alType: 'S', addAlpha: true},
    {alType: 'T', addAlpha: true},
    {alType: 'U', addAlpha: true},
    {alType: 'V', addAlpha: true},
    {alType: 'W', addAlpha: true},
    {alType: 'X', addAlpha: true},
    {alType: 'Y', addAlpha: true},
    {alType: 'Z', addAlpha: true}
];

const SettingsScreen = ({route, navigation}) =>{
        //create a screen with checkbox fields. One for the consonant-vowel field and the other for the alphabet.
        //Both of which will be using flatlists preferably side by side
        //A card will only be counted if it meets both values being marked true (category and alpha)

    
    const renderCVType = ({index, item}) =>{
        
        return(
            <CheckBox
                title={item.cType}
                checked={item.addCV}
                onPress={() => {
                    let newArr = [...articType];
                    newArr[index] = {...item, addCV: !item.addCV}
                }}
            />
        )
    }

    const renderAlphaType = ({index, item}) =>{
        
        return(
            <CheckBox
                title={item.aType}
                checked={item.addAlpha}
                onPress={() => {
                    let newArr = [...articType];
                    newArr[index] = {...item, addCV: !item.addCV}
                }}
            />
        )
    }

    /*
    function buildDeck() {
        if a card's  (aType == alType && cType == arType) && (addCV == true && addAlpha == true)
        var deck = [];

       for ( var i = 0; i < firebase.length; i++){
            if( (firebase[i].aType == alType && firebase[i].cType == arType) && (addCV == true && addAlpha == true)){
                deck.push(firebase[i]);
            }
            return deck;
       }
    }*/
    return(
        <View>
            <Text>Settings</Text>
            <FlatList  
                keyExtractor={(item) => item.alType}
                data={articType}
                renderItem={renderCVType}
            />
            <FlatList  
                keyExtractor={(item) => item.alType}
                data={alphaType}
                renderItem={renderAlphaType}
            />
        </View>
    )

}

export default SettingsScreen;