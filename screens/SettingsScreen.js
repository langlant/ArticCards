import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card, CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const cardType = [
    {cType: 'CV', addType: true},
    {cType: 'VC', addType: true},
    {cType: 'VV', addType: true},
    {cType: 'VCV', addType: true},
    {cType: 'CVCV', addType: true},
    {cType: 'C1V1C1V2', addType: true},
    {cType: 'C1V1C2V2', addType: true},
];

const SettingsScreen = ({navigation}) =>{
        //create a screen with checkbox fields. One for the consonant-vowel field and the other for the alphabet.
        //Both of which will be using flatlists preferably side by side
        //A card will only be counted if it meets both values being marked true (category and alpha)
    const [card, setCard] = ([]);

    
    const renderCardType = ({index, item}) =>{
        return(
            <CheckBox
                title={item.cType}
                checked={item.addType}
                onPress={() => {
                    let newArr = [...cardType];
                    newArr[index] = {...item, addType: !item.addType}
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
                data={cardType}
                renderItem={renderCardType}
                />
        </View>
        )

}

export default SettingsScreen;