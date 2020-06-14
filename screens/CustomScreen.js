import React, { useState, useRef,   useEffect } from "react";
import { StyleSheet, Text, Keyboard, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Card } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { Dropdown } from "react-native-material-dropdown";
import { FlatList } from "react-native-gesture-handler";

const articType = [
    {cType: 'CV'},
    {cType: 'VC'},
    {cType: 'VV'},
    {cType: 'VCV'},
    {cType: 'CVCV'},
    {cType: 'C1V1C1V2'},
    {cType: 'C1V1C2V2'},
];

const CustomScreen = ({navigation}) =>{
    //create a screen with the ability to add a picture with text to the deck of artic cards
    //add check box solution for selection of word type (maybe bubbles, ask about this)
    
    const [selectArticType, setArticType] = useState('');

    return(
        <View>
            <Text>Please enter the information of your custom card!</Text>
            <Input
                //style={styles.input}
                placeholder="Enter valid image url"
                //value={state.lon2}
                autoCorrect={false}
                //errorStyle={styles.inputError}
                //errorMessage={validate(state.lon2)}
                //onChangeText={(val) => updateStateObject({ lon2: val })}
            />        
            <Input
                //style={styles.input}
                placeholder="Enter word or phrase"
                //value={state.lon2}
                autoCorrect={false}
                //errorStyle={styles.inputError}
                //errorMessage={validate(state.lon2)}
                //onChangeText={(val) => updateStateObject({ lon2: val })}
            />
            <Dropdown
                value={selectArticType}
                onChangeText={(text) => setArticType(text)}
                label="Artic Type"
                data={articType}
            />
            <Button
                title="Save"
                //style={styles.padding}
                //onPress={() => } this will save the cards to the database look at doCalculations for storage
            />
        </View>
    )
}

  
export default CustomScreen;