import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";


const ProgressScreen = ({navigation}) =>{
    //display mastered cards, possibly in the future add category mastery
    // each category is marked numerator/denominator and converted to percentage rounded to xx.x%
    //this gets adjusted when new cards get added.
    return(
        <View>
            <Text>Progress</Text>
        </View>
    )
}

export default ProgressScreen;