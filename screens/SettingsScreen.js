import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card, CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const articType = [
    {cType: 'CV', addCV: true},
    {cType: 'VC', addCV: true},
    {cType: 'VV', addCV: true},
    {cType: 'VCV', addCV: true},
    {cType: 'CVCV', addCV: true},
    {cType: 'C1V1C1V2', addCV: true},
    {cType: 'C1V1C2V2', addCV: true},
];

const alphaType = [
    {aType: 'A', addAlpha: true},
    {aType: 'B', addAlpha: true},
    {aType: 'C', addAlpha: true},
    {aType: 'D', addAlpha: true},
    {aType: 'E', addAlpha: true},
    {aType: 'F', addAlpha: true},
    {aType: 'G', addAlpha: true},
    {aType: 'H', addAlpha: true},
    {aType: 'I', addAlpha: true},
    {aType: 'J', addAlpha: true},
    {aType: 'K', addAlpha: true},
    {aType: 'L', addAlpha: true},
    {aType: 'M', addAlpha: true},
    {aType: 'N', addAlpha: true},
    {aType: 'O', addAlpha: true},
    {aType: 'P', addAlpha: true},
    {aType: 'Q', addAlpha: true},
    {aType: 'R', addAlpha: true},
    {aType: 'S', addAlpha: true},
    {aType: 'T', addAlpha: true},
    {aType: 'U', addAlpha: true},
    {aType: 'V', addAlpha: true},
    {aType: 'W', addAlpha: true},
    {aType: 'X', addAlpha: true},
    {aType: 'Y', addAlpha: true},
    {aType: 'Z', addAlpha: true}
]

const SettingsScreen = ({navigation}) =>{
        //create a screen with checkbox fields. One for the consonant-vowel field and the other for the alphabet.
        //Both of which will be using flatlists preferably side by side
        //A card will only be counted if it meets both values being marked true (category and alpha)
    const [card, setCard] = ([]);

    
    const renderCVType = ({index, item}) =>{
        return(
            <CheckBox
                title={item.cType}
                checked={item.addCV}
                onPress={() => {
                    let newArr = [...articType];
                    newArr[index] = {...item, addCV: !item.addCV}
                    setCard(newArr);
                }}
            />
        )
    }

    const renderAlphaType = ({index, item}) =>{
        return(
            <CheckBox
                title={item.cType}
                checked={item.addCV}
                onPress={() => {
                    let newArr = [...articType];
                    newArr[index] = {...item, addCV: !item.addCV}
                    setCard(newArr);
                }}
            />
        )
    }
    return(
        <View>
            <Text>Settings</Text>
            <FlatList  
                keyExtractor={(item) => item.cType}
                data={articType}
                renderItem={renderCVType}
                />
                <FlatList  
                keyExtractor={(item) => item.aType}
                data={alphaType}
                renderItem={renderAlphaType}
                />
        </View>
        )

}

export default SettingsScreen;