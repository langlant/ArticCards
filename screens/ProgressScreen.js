import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const articType = [
    {arType: 'CV'},
    {arType: 'VC'},
    {arType: 'VV'},
    {arType: 'VCV'},
    {arType: 'CVCV'},
    {arType: 'C1V1C1V2'},
    {arType: 'C1V1C2V2'},
];

const ProgressScreen = ({navigation}) =>{
    //display mastered cards, possibly in the future add category mastery
    // each category is marked numerator/denominator and converted to percentage rounded to xx.x%
    //this gets adjusted when new cards get added.
    
    function Item({ title }) {
        return (
          <View>
            <Text>{title}</Text>
          </View>
        );
      }

    return(
        <View>
            <Text style={styles.textmenu}>Progress</Text>
            <FlatList  
                keyExtractor={(item) => item.arType}
                data={articType}
                renderItem={({ item }) => <Item title={item.arType} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#E8EAF6',
      flex: 1,
    },
    textmenu: {
      textAlign: 'center',
      fontSize: 20
    },
    textsubmenu:{
      textAlign: 'center',
      fontSize: 5
    },
})
  
export default ProgressScreen;