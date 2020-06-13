import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const SettingsScreen = ({navigation}) =>{
        //create a screen with checkbox fields. One for the consonant-vowel field and the other for the alphabet.
        //Both of which will be using flatlists preferably side by side
        //A card will only be counted if it meets both values being marked true (category and alpha)
    return(
        <View>
            <Text>Settings</Text>
        </View>
        )

}

export default SettingsScreen;